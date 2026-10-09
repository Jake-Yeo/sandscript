import { CommonTokenStream, type ANTLRErrorListener } from 'antlr4ng';

import { DSLParser } from '../generated/DSLParser';
import { Lexer } from '../lexer/lexer';

export class Parser {
    private readonly parser: DSLParser;
    private readonly errors: string[] = [];

    constructor(input: string) {
        const lexer = new Lexer(input);
        const tokenStream = new CommonTokenStream(lexer);

        this.parser = new DSLParser(tokenStream);
        this.parser.removeErrorListeners();

        const errorListener: ANTLRErrorListener = {
            syntaxError: (
                _recognizer,
                _offendingSymbol,
                line,
                column,
                message,
                _e,
            ) => {
                this.errors.push(
                    `line ${line}:${column} ${message}`,
                );
            },

            reportAmbiguity: () => { },
            reportAttemptingFullContext: () => { },
            reportContextSensitivity: () => { },
        };

        this.parser.addErrorListener(errorListener);
    }

    parse() {
        return this.parser.program();
    }

    getErrors(): string[] {
        return this.errors;
    }
}