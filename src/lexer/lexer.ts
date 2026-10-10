import {
    CharStream,
    CommonToken,
    Token,
} from 'antlr4ng';
import { DSLLexer } from '../generated/DSLLexer';
import type { TokenSource } from 'antlr4ng';

export class Lexer implements TokenSource {
    private readonly lexer: DSLLexer;
    private readonly pendingTokens: Token[] = [];
    private readonly indentationStack: number[] = [0];

    private atBeginningOfLine = true;
    private reachedEOF = false;

    constructor(input: string) {
        const chars = CharStream.fromString(input);
        this.lexer = new DSLLexer(chars);
    }

    nextToken(): Token {
        if (this.pendingTokens.length > 0) {
            return this.pendingTokens.shift()!;
        }

        let token = this.lexer.nextToken();

        if (token.type === Token.EOF) {
            this.handleEOF(token);

            if (this.pendingTokens.length > 0) {
                return this.pendingTokens.shift()!;
            }

            return token;
        }

        if (this.atBeginningOfLine) {
            let indentation = 0;

            while (token.type === DSLLexer.TAB) {
                indentation++;
                token = this.lexer.nextToken();

                if (token.type === Token.EOF) {
                    this.handleEOF(token);

                    if (this.pendingTokens.length > 0) {
                        return this.pendingTokens.shift()!;
                    }

                    return token;
                }
            }

            if (token.type === DSLLexer.SPACE) {
                throw new Error(
                    `Spaces cannot be used for indentation on line ${token.line}.`,
                );
            }

            if (token.type === DSLLexer.NEWLINE) {
                return this.nextToken();
            }

            const currentIndentation =
                this.indentationStack[this.indentationStack.length - 1];

            if (indentation > currentIndentation) {
                this.indentationStack.push(indentation);
                this.pendingTokens.push(
                    this.createIndentToken(token),
                );
            } else if (indentation < currentIndentation) {
                while (
                    this.indentationStack.length > 1 &&
                    indentation <
                    this.indentationStack[
                    this.indentationStack.length - 1
                    ]
                ) {
                    this.indentationStack.pop();
                    this.pendingTokens.push(
                        this.createDedentToken(token),
                    );
                }

                const expectedIndentation =
                    this.indentationStack[
                    this.indentationStack.length - 1
                    ];

                if (indentation !== expectedIndentation) {
                    throw new Error(
                        `Invalid indentation on line ${token.line}. ` +
                        `Expected indentation level ` +
                        `${expectedIndentation}, ` +
                        `but found ${indentation}.`,
                    );
                }
            }

            this.atBeginningOfLine = false;

            if (this.pendingTokens.length > 0) {
                this.pendingTokens.push(token);
                return this.pendingTokens.shift()!;
            }

            return token;
        }

        if (token.type === DSLLexer.SPACE) {
            return this.nextToken();
        }

        if (token.type === DSLLexer.NEWLINE) {
            this.atBeginningOfLine = true;
        }

        return token;
    }

    private handleEOF(eofToken: Token): void {
        if (this.reachedEOF) {
            return;
        }

        this.reachedEOF = true;

        while (this.indentationStack.length > 1) {
            this.indentationStack.pop();

            this.pendingTokens.push(
                this.createDedentToken(eofToken),
            );
        }

        this.pendingTokens.push(eofToken);
    }

    private createIndentToken(referenceToken: Token): Token {
        const token = CommonToken.fromType(
            DSLLexer.INDENT,
            '<INDENT>',
        );

        token.line = referenceToken.line;
        token.column = referenceToken.column;

        return token;
    }

    private createDedentToken(referenceToken: Token): Token {
        const token = CommonToken.fromType(
            DSLLexer.DEDENT,
            '<DEDENT>',
        );

        token.line = referenceToken.line;
        token.column = referenceToken.column;

        return token;
    }

    get line(): number {
        return this.lexer.line;
    }

    get column(): number {
        return this.lexer.column;
    }

    get inputStream(): CharStream {
        return this.lexer.inputStream;
    }

    get sourceName(): string {
        return this.lexer.sourceName;
    }

    get tokenFactory() {
        return this.lexer.tokenFactory;
    }

    set tokenFactory(factory) {
        this.lexer.tokenFactory = factory;
    }
}