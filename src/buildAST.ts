import { Parser } from './parser/parser';
import { ASTBuilder } from './ast/astBuilder';
import { validateAST } from './ast/astValidator';
import type { Program } from './ast/ast';

export function buildAST(source: string): Program {
    const parser = new Parser(source);
    const parseTree = parser.parse();

    const ast = new ASTBuilder().build(parseTree);
    validateAST(ast);

    return ast;
}
