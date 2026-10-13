import { describe, expect, test } from 'bun:test';

import { CommonTokenStream } from 'antlr4ng';

import { Lexer } from '../src/lexer/lexer';
import { DSLParser } from '../src/generated/DSLParser';
import { ASTBuilder } from '../src/ast/astBuilder';

function buildAST(source: string) {
    const lexer = new Lexer(source);
    const tokens = new CommonTokenStream(lexer);
    const parser = new DSLParser(tokens);
    const tree = parser.program();

    return new ASTBuilder().build(tree);

}

describe('ASTBuilder', () => {
    test('builds an arithmetic expression with correct operator precedence', () => {
        const source = `element Calculator:
\thas value with 1 + 2 * 3
`;

        const ast = buildAST(source);

        expect(ast.elementDefs[0].varDefs[0].value).toEqual({
            type: 'ArithmeticExpression',
            operation: 'Add',
            value1: {
                type: 'NumberLiteral',
                value: 1,
            },
            value2: {
                type: 'ArithmeticExpression',
                operation: 'Multiply',
                value1: {
                    type: 'NumberLiteral',
                    value: 2,
                },
                value2: {
                    type: 'NumberLiteral',
                    value: 3,
                },
            },
        });
    });

    test('builds member access and function calls', () => {
        const source = `element Calculator:

\thas function calculate:
\t\tlet result be widget.get_value(1)
`;

        const ast = buildAST(source);
        const statements = ast.elementDefs[0].funcDefs[0].statements;

        expect(statements[0]).toEqual({
            type: 'VarAssignment',
            varName: {
                type: 'Identifier',
                value: 'result',
            },
            value: {
                type: 'FunctionCall',
                callee: {
                    type: 'MemberAccess',
                    source: {
                        type: 'Identifier',
                        value: 'widget',
                    },
                    member: {
                        type: 'Identifier',
                        value: 'get_value',
                    },
                },
                args: [
                    {
                        type: 'NumberLiteral',
                        value: 1,
                    },
                ],
            },
        });
    });

    test('builds element definitions, inheritance, and variable definitions', () => {
        const source = `element Water:

\thas color with Color(#123456)
\thas weight with 10
template_element Fire is like Water:
\thas temperature with 100
`;

        const ast = buildAST(source);

        expect(ast.elementDefs).toEqual([
            {
                type: 'ElementDef',
                name: {
                    type: 'Identifier',
                    value: 'Water',
                },
                abstract: false,
                parent: null,
                varDefs: [
                    {
                        type: 'ElementVarDef',
                        varName: {
                            type: 'Identifier',
                            value: 'color',
                        },
                        value: {
                            type: 'Color',
                            value: '#123456',
                        },
                    },
                    {
                        type: 'ElementVarDef',
                        varName: {
                            type: 'Identifier',
                            value: 'weight',
                        },
                        value: {
                            type: 'NumberLiteral',
                            value: 10,
                        },
                    },
                ],
                funcDefs: [],
            },
            {
                type: 'ElementDef',
                name: {
                    type: 'Identifier',
                    value: 'Fire',
                },
                abstract: true,
                parent: {
                    type: 'Identifier',
                    value: 'Water',
                },
                varDefs: [
                    {
                        type: 'ElementVarDef',
                        varName: {
                            type: 'Identifier',
                            value: 'temperature',
                        },
                        value: {
                            type: 'NumberLiteral',
                            value: 100,
                        },
                    },
                ],
                funcDefs: [],
            },
        ]);
    });

    test('builds conditionals with else-if and else branches', () => {
        const source = `element Calculator:

\thas function calculate:
\t\tif x equals 1:
\t\t\tlet result be 2
\t\telse if x less_than 1:
\t\t\tlet result be 3
\t\telse:
\t\t\tdo_nothing
`;

        const ast = buildAST(source);
        const statements = ast.elementDefs[0].funcDefs[0].statements;

        expect(statements).toHaveLength(1);
        expect(statements[0]).toEqual({
            type: 'Conditional',
            ifCase: {
                type: 'ConditionBodyPair',
                condition: {
                    type: 'TwoValueBooleanExpression',
                    operation: 'Equals',
                    value1: {
                        type: 'Identifier',
                        value: 'x',
                    },
                    value2: {
                        type: 'NumberLiteral',
                        value: 1,
                    },
                },
                body: [
                    {
                        type: 'VarAssignment',
                        varName: {
                            type: 'Identifier',
                            value: 'result',
                        },
                        value: {
                            type: 'NumberLiteral',
                            value: 2,
                        },
                    },
                ],
            },
            elseIfCases: [
                {
                    type: 'ConditionBodyPair',
                    condition: {
                        type: 'TwoValueBooleanExpression',
                        operation: 'Less Than',
                        value1: {
                            type: 'Identifier',
                            value: 'x',
                        },
                        value2: {
                            type: 'NumberLiteral',
                            value: 1,
                        },
                    },
                    body: [
                        {
                            type: 'VarAssignment',
                            varName: {
                                type: 'Identifier',
                                value: 'result',
                            },
                            value: {
                                type: 'NumberLiteral',
                                value: 3,
                            },
                        },
                    ],
                },
            ],
            elseCase: [
                {
                    type: 'DoNothing',
                },
            ],
        });
    });

    test('builds collection-based and range-based loops', () => {
        const source = `element Calculator:

\thas function calculate:
\t\tfor_every item in items:
\t\t\tlet result be item.value
\t\tgo_through 1 to 3 with i:
\t\t\tlet result be i
`;

        const ast = buildAST(source);
        const statements = ast.elementDefs[0].funcDefs[0].statements;

        expect(statements).toEqual([
            {
                type: 'CollectionBasedLoop',
                iteratorVar: {
                    type: 'Identifier',
                    value: 'item',
                },
                collection: {
                    type: 'Identifier',
                    value: 'items',
                },
                statements: [
                    {
                        type: 'VarAssignment',
                        varName: {
                            type: 'Identifier',
                            value: 'result',
                        },
                        value: {
                            type: 'MemberAccess',
                            source: {
                                type: 'Identifier',
                                value: 'item',
                            },
                            member: {
                                type: 'Identifier',
                                value: 'value',
                            },
                        },
                    },
                ],
            },
            {
                type: 'RangeBasedLoop',
                iteratorVar: {
                    type: 'Identifier',
                    value: 'i',
                },
                start: {
                    type: 'NumberLiteral',
                    value: 1,
                },
                end: {
                    type: 'NumberLiteral',
                    value: 3,
                },
                statements: [
                    {
                        type: 'VarAssignment',
                        varName: {
                            type: 'Identifier',
                            value: 'result',
                        },
                        value: {
                            type: 'Identifier',
                            value: 'i',
                        },
                    },
                ],
            },
        ]);
    });

    test('builds unary, boolean, and type-check expressions', () => {
        const source = `element Calculator:

\thas negative with -5
\thas enabled with not false
\thas valid with x equals 1 and y greater_than 2
\thas is_number with x is Number
`;

        const ast = buildAST(source);
        const variables = ast.elementDefs[0].varDefs;

        expect(variables[0].value).toEqual({
            type: 'UnaryMinusExpression',
            value: {
                type: 'NumberLiteral',
                value: 5,
            },
        });

        expect(variables[1].value).toEqual({
            type: 'NotExpression',
            value: {
                type: 'BooleanLiteral',
                value: false,
            },
        });

        expect(variables[2].value).toEqual({
            type: 'TwoValueBooleanExpression',
            operation: 'And',
            value1: {
                type: 'TwoValueBooleanExpression',
                operation: 'Equals',
                value1: {
                    type: 'Identifier',
                    value: 'x',
                },
                value2: {
                    type: 'NumberLiteral',
                    value: 1,
                },
            },
            value2: {
                type: 'TwoValueBooleanExpression',
                operation: 'Greater Than',
                value1: {
                    type: 'Identifier',
                    value: 'y',
                },
                value2: {
                    type: 'NumberLiteral',
                    value: 2,
                },
            },
        });

        expect(variables[3].value).toEqual({
            type: 'TypeCheckExpression',
            value: {
                type: 'Identifier',
                value: 'x',
            },
            checkedType: {
                type: 'Type',
                value: 'Number',
            },
        });
    });

    test('builds a function definition with typed parameters and statements', () => {
        const source = `element Calculator:

\thas function add needs x Number y Number:
\t\tgive x + y
`;

        const ast = buildAST(source);

        expect(ast.elementDefs[0].funcDefs[0]).toEqual({
            type: 'ElementFuncDef',
            hasBody: true,
            name: {
                type: 'Identifier',
                value: 'add',
            },
            args: [
                {
                    type: 'Parameter',
                    name: {
                        type: 'Identifier',
                        value: 'x',
                    },
                    declaredType: {
                        type: 'Type',
                        value: 'Number',
                    },
                },
                {
                    type: 'Parameter',
                    name: {
                        type: 'Identifier',
                        value: 'y',
                    },
                    declaredType: {
                        type: 'Type',
                        value: 'Number',
                    },
                },
            ],
            statements: [
                {
                    type: 'Give',
                    value: {
                        type: 'ArithmeticExpression',
                        operation: 'Add',
                        value1: {
                            type: 'Identifier',
                            value: 'x',
                        },
                        value2: {
                            type: 'Identifier',
                            value: 'y',
                        },
                    },
                },
            ],
        });
    });


    test('builds interaction definitions', () => {
        const source = `interaction Water water with Fire fire:

\t\tlet result be water.temperature + fire.temperature
`;

        const ast = buildAST(source);

        expect(ast.interactionDefs).toEqual([
            {
                type: 'InteractionDef',
                element1: { type: 'Identifier', value: 'Water' },
                element2: { type: 'Identifier', value: 'Fire' },
                element1Binding: { type: 'Identifier', value: 'water' },
                element2Binding: { type: 'Identifier', value: 'fire' },
                statements: [
                    {
                        type: 'VarAssignment',
                        varName: { type: 'Identifier', value: 'result' },
                        value: {
                            type: 'ArithmeticExpression',
                            operation: 'Add',
                            value1: {
                                type: 'MemberAccess',
                                source: { type: 'Identifier', value: 'water' },
                                member: { type: 'Identifier', value: 'temperature' },
                            },
                            value2: {
                                type: 'MemberAccess',
                                source: { type: 'Identifier', value: 'fire' },
                                member: { type: 'Identifier', value: 'temperature' },
                            },
                        },
                    },
                ],
            },
        ]);
    });

    test('builds null literals and element type references', () => {
        const source = `element Container:

\thas empty_value with null
\thas item with Water
`;

        const ast = buildAST(source);
        const variables = ast.elementDefs[0].varDefs;

        expect(variables[0].value).toEqual({
            type: 'Null',
        });

        expect(variables[1].value).toEqual({
            type: 'ElementTypeLiteral',
            name: { type: 'Identifier', value: 'Water' },
        });
    });

    test('builds boolean OR expressions', () => {
        const source = `element Calculator:

\thas result with x equals 1 or y equals 2
`;

        const ast = buildAST(source);

        expect(ast.elementDefs[0].varDefs[0].value).toEqual({
            type: 'TwoValueBooleanExpression',
            operation: 'Or',
            value1: {
                type: 'TwoValueBooleanExpression',
                operation: 'Equals',
                value1: { type: 'Identifier', value: 'x' },
                value2: { type: 'NumberLiteral', value: 1 },
            },
            value2: {
                type: 'TwoValueBooleanExpression',
                operation: 'Equals',
                value1: { type: 'Identifier', value: 'y' },
                value2: { type: 'NumberLiteral', value: 2 },
            },
        });
    });

    test('builds subtraction and division expressions', () => {
        const source = `element Calculator:

\thas difference with 10 - 4
\thas quotient with 12 / 3
`;

        const ast = buildAST(source);
        const variables = ast.elementDefs[0].varDefs;

        expect(variables[0].value).toEqual({
            type: 'ArithmeticExpression',
            operation: 'Subtract',
            value1: { type: 'NumberLiteral', value: 10 },
            value2: { type: 'NumberLiteral', value: 4 },
        });

        expect(variables[1].value).toEqual({
            type: 'ArithmeticExpression',
            operation: 'Divide',
            value1: { type: 'NumberLiteral', value: 12 },
            value2: { type: 'NumberLiteral', value: 3 },
        });
    });

    test('builds chained member access', () => {
        const source = `element Calculator:

\thas function calculate:
\t\tlet result be world.player.health
`;

        const ast = buildAST(source);
        const value = ast.elementDefs[0].funcDefs[0].statements[0];

        expect(value).toEqual({
            type: 'VarAssignment',
            varName: { type: 'Identifier', value: 'result' },
            value: {
                type: 'MemberAccess',
                source: {
                    type: 'MemberAccess',
                    source: { type: 'Identifier', value: 'world' },
                    member: { type: 'Identifier', value: 'player' },
                },
                member: { type: 'Identifier', value: 'health' },
            },
        });
    });

    test('builds function calls with multiple arguments', () => {
        const source = `element Calculator:

\thas function calculate:
\t\tlet result be add(1, 2, 3)
`;

        const ast = buildAST(source);
        const statement = ast.elementDefs[0].funcDefs[0].statements[0];

        expect(statement).toEqual({
            type: 'VarAssignment',
            varName: { type: 'Identifier', value: 'result' },
            value: {
                type: 'FunctionCall',
                callee: { type: 'Identifier', value: 'add' },
                args: [
                    { type: 'NumberLiteral', value: 1 },
                    { type: 'NumberLiteral', value: 2 },
                    { type: 'NumberLiteral', value: 3 },
                ],
            },
        });
    });

    test('builds a function call as an expression statement', () => {
        const source = `element Calculator:

\thas function calculate:
\t\tlog(1)
`;

        const ast = buildAST(source);

        expect(ast.elementDefs[0].funcDefs[0].statements).toEqual([
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'FunctionCall',
                    callee: { type: 'Identifier', value: 'log' },
                    args: [{ type: 'NumberLiteral', value: 1 }],
                },
            },
        ]);
    });

    test('builds skip_iteration, stop_looping, and do_nothing statements', () => {
        const source = `element Calculator:

\thas function calculate:
\t\tskip_iteration
\t\tstop_looping
\t\tdo_nothing
`;

        const ast = buildAST(source);

        expect(ast.elementDefs[0].funcDefs[0].statements).toEqual([
            { type: 'SkipIteration' },
            { type: 'StopLooping' },
            { type: 'DoNothing' },
        ]);
    });

    test('builds nested conditionals', () => {
        const source = `element Calculator:

\thas function calculate:
\t\tif x equals 1:
\t\t\tif y equals 2:
\t\t\t\tdo_nothing
\t\t\telse:
\t\t\t\tskip_iteration
\t\telse:
\t\t\tstop_looping
`;

        const ast = buildAST(source);
        const statements = ast.elementDefs[0].funcDefs[0].statements;

        expect(statements).toHaveLength(1);
        expect(statements[0].type).toBe('Conditional');

        if (statements[0].type !== 'Conditional') {
            throw new Error('Expected a conditional statement');
        }

        expect(statements[0].ifCase.body).toEqual([
            {
                type: 'Conditional',
                ifCase: {
                    type: 'ConditionBodyPair',
                    condition: {
                        type: 'TwoValueBooleanExpression',
                        operation: 'Equals',
                        value1: { type: 'Identifier', value: 'y' },
                        value2: { type: 'NumberLiteral', value: 2 },
                    },
                    body: [{ type: 'DoNothing' }],
                },
                elseIfCases: [],
                elseCase: [{ type: 'SkipIteration' }],
            },
        ]);

        expect(statements[0].elseCase).toEqual([
            { type: 'StopLooping' },
        ]);
    });

    test('builds range loops with expression bounds', () => {
        const source = `element Calculator:

\thas function calculate:
\t\tgo_through start + 1 to finish * 2 with i:
\t\t\tdo_nothing
`;

        const ast = buildAST(source);
        const statement = ast.elementDefs[0].funcDefs[0].statements[0];

        expect(statement).toEqual({
            type: 'RangeBasedLoop',
            iteratorVar: { type: 'Identifier', value: 'i' },
            start: {
                type: 'ArithmeticExpression',
                operation: 'Add',
                value1: { type: 'Identifier', value: 'start' },
                value2: { type: 'NumberLiteral', value: 1 },
            },
            end: {
                type: 'ArithmeticExpression',
                operation: 'Multiply',
                value1: { type: 'Identifier', value: 'finish' },
                value2: { type: 'NumberLiteral', value: 2 },
            },
            statements: [{ type: 'DoNothing' }],
        });
    });

    test('builds typed parameters using an element type', () => {
        const source = `element Container:

\thas function set_item needs item Water:
\t\tgive item
`;

        const ast = buildAST(source);

        expect(ast.elementDefs[0].funcDefs[0].args).toEqual([
            {
                type: 'Parameter',
                name: { type: 'Identifier', value: 'item' },
                declaredType: {
                    type: 'ElementTypeLiteral',
                    name: { type: 'Identifier', value: 'Water' },
                },
            },
        ]);
    });

    test('builds a parent declared using the Element type keyword', () => {
        const source = `element Container is like Element:

\thas value
`;

        const ast = buildAST(source);

        expect(ast.elementDefs[0].parent).toEqual({
            type: 'Identifier',
            value: 'Element',
        });
    });

    test('builds a variable definition without an initial value', () => {
        const source = `element Container:

\thas value
`;

        const ast = buildAST(source);

        expect(ast.elementDefs[0].varDefs[0]).toEqual({
            type: 'ElementVarDef',
            varName: { type: 'Identifier', value: 'value' },
            value: null,
        });
    });

    test('builds a parenthesized expression', () => {
        const source = `element Calculator:

\thas value with (1 + 2) * 3
`;

        const ast = buildAST(source);

        expect(ast.elementDefs[0].varDefs[0].value).toEqual({
            type: 'ArithmeticExpression',
            operation: 'Multiply',
            value1: {
                type: 'ArithmeticExpression',
                operation: 'Add',
                value1: { type: 'NumberLiteral', value: 1 },
                value2: { type: 'NumberLiteral', value: 2 },
            },
            value2: { type: 'NumberLiteral', value: 3 },
        });
    });
});