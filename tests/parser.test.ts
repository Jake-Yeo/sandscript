import { describe, expect, test } from 'bun:test';

import { Parser } from '../src/parser/parser';

describe('Parser', () => {

    test('parses a simple element definition', () => {
        const source = `element Water:

\thas color with Color(#123456)

`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
        expect(parser.getErrors()).toHaveLength(0);
    });

    test('parses template elements and inheritance', () => {
        const source = `template-element Solid is like Element:

\thas color

`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
        expect(parser.getErrors()).toHaveLength(0);
    });

    test('parses nested inheritance', () => {
        const source = `template-element Solid is like Element:

\thas color

template-element HeavySolid is like Solid:

\thas weight

`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
        expect(parser.getErrors()).toHaveLength(0);
    });

    test('parses a function with parameters and a give statement', () => {
        const source = `element Water:

\thas function flow needs liquid:

\t\tgive liquid

`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
        expect(parser.getErrors()).toHaveLength(0);
    });

    test('parses multiple function parameters', () => {
        const source = `element Water:

\thas function flow needs x y z:

\t\tgive x

`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
        expect(parser.getErrors()).toHaveLength(0);
    });

    test('parses typed parameters', () => {
        const source = `element Water:

\thas function flow needs speed Number active Boolean:

\t\tgive speed

`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
        expect(parser.getErrors()).toHaveLength(0);
    });

    test('parses variable assignments and arithmetic expressions', () => {
        const source = `element Water:

\thas function tick:

\t\tlet x be 10

\t\tlet y be x - 2

`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
        expect(parser.getErrors()).toHaveLength(0);
    });

    test('parses negative numbers', () => {
        const source = `element Water:

\thas function tick:

\t\tlet x be -10

\t\tlet y be 5 * -2

\t\tlet z be -(x + 1)

`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
        expect(parser.getErrors()).toHaveLength(0);
    });

    test('parses boolean expressions', () => {
        const source = `element Water:

\thas function tick:

\t\tif health greater-than 0 and not frozen:

\t\t\tdo-nothing

`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
        expect(parser.getErrors()).toHaveLength(0);
    });

    test('parses type checking with is', () => {
        const source = `element Water:

\thas function tick:

\t\tif element_type is Fire:

\t\t\tdo-nothing

`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
        expect(parser.getErrors()).toHaveLength(0);
    });

    test('parses parentheses for expression priority', () => {
        const source = `element Water:

\thas function tick:

\t\tlet x be (10 + 5) * 2

`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
        expect(parser.getErrors()).toHaveLength(0);
    });

    test('parses conditionals', () => {
        const source = `element Water:

\thas function tick:

\t\tif health equals 0:

\t\t\tdisappear()

\t\telse if health less-than 10:

\t\t\tdo-nothing

\t\telse:

\t\t\tskip-iteration

`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
        expect(parser.getErrors()).toHaveLength(0);
    });

    test('parses collection loops', () => {
        const source = `element Water:

\thas function tick:

\t\tfor-every apple in apples:

\t\t\tdo-nothing

`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
        expect(parser.getErrors()).toHaveLength(0);
    });

    test('parses range loops', () => {
        const source = `element Water:

\thas function tick:

\t\tgo-through 1 to 10 with i:

\t\t\tdo-nothing

`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
        expect(parser.getErrors()).toHaveLength(0);
    });

    test('parses control-flow keywords', () => {
        const source = `element Water:

\thas function tick:

\t\tdo-nothing

\t\tskip-iteration

\t\tstop-looping

`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
        expect(parser.getErrors()).toHaveLength(0);
    });

    test('parses member access and function calls', () => {
        const source = `interaction Ice i with Fire f:

\ti.convert_to(Water)

\tlet x be i.health

`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
        expect(parser.getErrors()).toHaveLength(0);
    });

    test('parses ElementType references', () => {
        const source = `element Water:

\thas function tick:

\t\tlet element_type be Fire

\t\tif element_type is Fire:

\t\t\tdo-nothing

`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
        expect(parser.getErrors()).toHaveLength(0);
    });

    test('parses blank lines and comments', () => {
        const source = `# top-level comment

element Water:

\t# member comment

\thas color with Color(#123456)

\thas function tick:

\t\t# statement comment

\t\tdo-nothing

`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
        expect(parser.getErrors()).toHaveLength(0);
    });


    test('rejects missing indentation', () => {
        const source = `element Water:

has color

`;

        const parser = new Parser(source);
        expect(() => parser.parse()).toThrow();
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });

    test('rejects missing colon after element definition', () => {
        const source = `element Water

\thas color

`;

        const parser = new Parser(source);
        expect(() => parser.parse()).toThrow();
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });

    test('rejects missing colon after function definition', () => {
        const source = `element Water:

\thas function tick

\t\tdo-nothing

`;

        const parser = new Parser(source);
        expect(() => parser.parse()).toThrow();
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });

    test('rejects missing colon after conditional', () => {
        const source = `element Water:

\thas function tick:

\t\tif health equals 0

\t\t\tdo-nothing

`;

        const parser = new Parser(source);
        expect(() => parser.parse()).toThrow();
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });

    test('rejects missing expression in assignment', () => {
        const source = `element Water:

\thas function tick:

\t\tlet x be

`;

        const parser = new Parser(source);

        expect(() => parser.parse()).toThrow();
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });

    test('rejects missing expression in give statement', () => {
        const source = `element Water:

\thas function tick:

\t\tgive

`;

        const parser = new Parser(source);

        expect(() => parser.parse()).toThrow();
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });

    test('rejects invalid assignment syntax', () => {
        const source = `element Water:

\thas function tick:

\t\tlet x = 10

`;

        const parser = new Parser(source);

        expect(() => parser.parse()).toThrow();
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });

    test('rejects invalid comparison operator', () => {
        const source = `element Water:

\thas function tick:

\t\tif health > 0:

\t\t\tdo-nothing

`;

        const parser = new Parser(source);

        expect(() => parser.parse()).toThrow();
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });

    test('rejects invalid boolean operator', () => {
        const source = `element Water:

\thas function tick:

\t\tif health equals 0 && frozen:

\t\t\tdo-nothing

`;

        const parser = new Parser(source);

        expect(() => parser.parse()).toThrow();
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });

    test('rejects missing closing parenthesis', () => {
        const source = `element Water:

\thas function tick:

\t\tlet x be (10 + 5

`;

        const parser = new Parser(source);

        expect(() => parser.parse()).toThrow();
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });

    test('rejects missing function call parentheses', () => {
        const source = `element Water:

\thas function tick:

\t\tdisappear

`;

        const parser = new Parser(source);

        expect(() => parser.parse()).toThrow();
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });

    test('rejects invalid collection loop syntax', () => {
        const source = `element Water:

\thas function tick:

\t\tfor-every apple apples:

\t\t\tdo-nothing

`;

        const parser = new Parser(source);

        expect(() => parser.parse()).toThrow();
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });

    test('rejects invalid range loop syntax', () => {
        const source = `element Water:

\thas function tick:

\t\tgo-through 1 10 with i:

\t\t\tdo-nothing

`;

        const parser = new Parser(source);

        expect(() => parser.parse()).toThrow();
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });

    test('rejects missing give expression', () => {
        const source = `element Water:

\thas function tick:

\t\tgive

`;

        const parser = new Parser(source);

        expect(() => parser.parse()).toThrow();
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });

    test('rejects invalid inheritance syntax', () => {
        const source = `element Water inherits Element:

\thas color

`;

        const parser = new Parser(source);

        expect(() => parser.parse()).toThrow();
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });

    test('rejects invalid function parameter syntax', () => {
        const source = `element Water:

\thas function flow needs:

\t\tgive liquid

`;

        const parser = new Parser(source);

        expect(() => parser.parse()).toThrow();
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });

    test('rejects invalid element name', () => {
        const source = `element water:

\thas color

`;

        const parser = new Parser(source);

        expect(() => parser.parse()).toThrow();
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });

    test('rejects invalid variable name', () => {
        const source = `element Water:

\thas function tick:

\t\tlet WaterValue be 10

`;

        const parser = new Parser(source);

        expect(() => parser.parse()).toThrow();
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });

    test('rejects invalid function name', () => {
        const source = `element Water:

\thas function Tick:

\t\tdo-nothing

`;

        const parser = new Parser(source);

        expect(() => parser.parse()).toThrow();
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });


    test('rejects old range loop syntax', () => {
        const source = `element Water:

\thas function tick:

\t\tfor next 50 ticks:

\t\t\tdo-nothing

`;

        const parser = new Parser(source);

        expect(() => parser.parse()).toThrow();
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });

    test('parses element inheritance', () => {
        const source = `element Water is like Element:

\thas color

`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
        expect(parser.getErrors()).toHaveLength(0);
    });

    test('parses element member with initial value', () => {
        const source = `element Water:

\thas color with Color(#123456)

\thas temperature with 10

`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
        expect(parser.getErrors()).toHaveLength(0);
    });

    test('parses function calls with multiple arguments', () => {
        const source = `element Water:

\thas function tick:

\t\tsome_function(1, 2, 3)

`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
        expect(parser.getErrors()).toHaveLength(0);
    });

    test('parses all built-in types', () => {
        const source = `element Water:

\thas function test needs a Color b Null c Element d ElementType:

\t\tdo-nothing

`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
        expect(parser.getErrors()).toHaveLength(0);
    });


    test('rejects collection loop without in', () => {
        const source = `element Water:

\thas function tick:

\t\tfor-every apple apples:

\t\t\tdo-nothing

`;

        const parser = new Parser(source);
        expect(() => parser.parse()).toThrow();
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });


    test('rejects missing closing function call parenthesis', () => {
        const source = `element Water:

\thas function tick:

\t\tdisappear(

`;

        const parser = new Parser(source);
        expect(() => parser.parse()).toThrow();
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });

    test('rejects trailing comma in function call', () => {
        const source = `element Water:

\thas function tick:

\t\tsome_function(1,)

`;

        const parser = new Parser(source);
        expect(() => parser.parse()).toThrow();
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });

    test('accepts a valid program', () => {
        const parser = new Parser(
            'element Water:\n\thas color with Color(#123456)\n',
        );

        expect(() => parser.parse()).not.toThrow();
        expect(parser.getErrors()).toEqual([]);
    });

    test('rejects an invalid element definition', () => {
        const parser = new Parser(
            'element Water\n',
        );

        expect(() => parser.parse()).toThrow(
            'Parsing failed:',
        );
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });

    test('rejects an invalid expression', () => {
        const parser = new Parser(
            'element Water:\n\thas function tick:\n\t\tlet speed be 1 +\n',
        );

        expect(() => parser.parse()).toThrow(
            'Parsing failed:',
        );
        expect(parser.getErrors().length).toBeGreaterThan(0);
    });
});