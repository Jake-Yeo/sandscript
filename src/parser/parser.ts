import { CommonTokenStream } from 'antlr4ng';

import { DSLParser } from '../generated/DSLParser';
import { Lexer } from '../lexer/lexer';

export class Parser {
    private readonly parser: DSLParser;

    constructor(input: string) {
        const lexer = new Lexer(input);
        const tokenStream = new CommonTokenStream(lexer);

        this.parser = new DSLParser(tokenStream);
    }

    parse() {
        return this.parser.program();
    }
}