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
    private readonly errors?: string[];

    private atBeginningOfLine = true;
    private reachedEOF = false;
    private lastRawToken: Token | null = null;

    constructor(input: string, errors?: string[]) {
        this.errors = errors;
        const chars = CharStream.fromString(input);
        this.lexer = new DSLLexer(chars);

        this.lexer.removeErrorListeners();

        this.lexer.addErrorListener({
            syntaxError: (
                _recognizer,
                _offendingSymbol,
                line,
                column,
                message,
                _e,
            ) => {
                const error = `line ${line}:${column} ${message}`;

                if (errors) {
                    errors.push(error);
                }

                this.reportError(`Lexing failed: ${error}`);
            },
            reportAmbiguity: () => { },
            reportAttemptingFullContext: () => { },
            reportContextSensitivity: () => { },
        });
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
        } else {
            this.lastRawToken = token;
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
                } else {
                    this.lastRawToken = token;
                }
            }

            if (token.type === DSLLexer.SPACE) {
                this.reportError(
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
                    this.reportError(
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

        if (
            this.lastRawToken !== null &&
            this.lastRawToken.type !== DSLLexer.NEWLINE
        ) {
            const newline = CommonToken.fromType(
                DSLLexer.NEWLINE,
                '\n',
            );

            newline.line = this.lastRawToken.line;
            newline.column =
                this.lastRawToken.column +
                (this.lastRawToken.text?.length ?? 0);

            this.pendingTokens.push(newline);
        }

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

    private reportError(message: string): never {
        this.errors?.push(message);
        throw new Error(message);
    }
}