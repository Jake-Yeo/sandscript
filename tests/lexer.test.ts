import { describe, expect, test } from 'bun:test';

import { Lexer } from '../src/lexer/lexer';

import { Token } from 'antlr4ng';

describe('Lexer', () => {

    test('tokenizes a simple element definition', () => {

        const source = `element Water:

\thas color with Color(#123456)

`;

        const lexer = new Lexer(source);

        const tokens = [];

        let token = lexer.nextToken();

        while (token.type !== Token.EOF) {

            tokens.push(token);

            token = lexer.nextToken();

        }

        expect(tokens.map(token => token.text)).toEqual([
            'element',
            'Water',
            ':',
            '\n',
            '<INDENT>',
            'has',
            'color',
            'with',
            'Color(#123456)',
            '\n',
            '<DEDENT>',
        ]);

    });


    test('tokenizes keywords', () => {

        const source = `element template_element has with is like function needs let be give if else for_every go_through in skip_iteration stop_looping do_nothing interaction not equals less_than greater_than and or`;

        const lexer = new Lexer(source);

        const tokens = [];

        let token = lexer.nextToken();

        while (token.type !== Token.EOF) {

            tokens.push(token);

            token = lexer.nextToken();

        }

        expect(tokens.map(token => token.text)).toEqual([
            'element',
            'template_element',
            'has',
            'with',
            'is',
            'like',
            'function',
            'needs',
            'let',
            'be',
            'give',
            'if',
            'else',
            'for_every',
            'go_through',
            'in',
            'skip_iteration',
            'stop_looping',
            'do_nothing',
            'interaction',
            'not',
            'equals',
            'less_than',
            'greater_than',
            'and',
            'or',
            '\n',
        ]);

    });


    test('tokenizes built-in types', () => {

        const source = `Number Boolean Color Element ElementType Null Type`;

        const lexer = new Lexer(source);

        const tokens = [];

        let token = lexer.nextToken();

        while (token.type !== Token.EOF) {

            tokens.push(token);

            token = lexer.nextToken();

        }

        expect(tokens.map(token => token.text)).toEqual([
            'Number',
            'Boolean',
            'Color',
            'Element',
            'ElementType',
            'Null',
            'Type',
            '\n',
        ]);

    });


    test('tokenizes boolean and null literals', () => {

        const source = `true false null`;

        const lexer = new Lexer(source);

        const tokens = [];

        let token = lexer.nextToken();

        while (token.type !== Token.EOF) {

            tokens.push(token);

            token = lexer.nextToken();

        }

        expect(tokens.map(token => token.text)).toEqual([
            'true',
            'false',
            'null',
            '\n',
        ]);

    });


    test('tokenizes numbers', () => {

        const source = `0 1 10 123 999`;

        const lexer = new Lexer(source);

        const tokens = [];

        let token = lexer.nextToken();

        while (token.type !== Token.EOF) {

            tokens.push(token);

            token = lexer.nextToken();

        }

        expect(tokens.map(token => token.text)).toEqual([
            '0',
            '1',
            '10',
            '123',
            '999',
            '\n',
        ]);

    });


    test('tokenizes PascalCase identifiers', () => {

        const source = `Water Fire Solid HeavySolid Element123`;

        const lexer = new Lexer(source);

        const tokens = [];

        let token = lexer.nextToken();

        while (token.type !== Token.EOF) {

            tokens.push(token);

            token = lexer.nextToken();

        }

        expect(tokens.map(token => token.text)).toEqual([
            'Water',
            'Fire',
            'Solid',
            'HeavySolid',
            'Element123',
            '\n',
        ]);

    });


    test('tokenizes snake_case identifiers', () => {

        const source = `x health max_health element_type convert_to get_all_elements`;

        const lexer = new Lexer(source);

        const tokens = [];

        let token = lexer.nextToken();

        while (token.type !== Token.EOF) {

            tokens.push(token);

            token = lexer.nextToken();

        }

        expect(tokens.map(token => token.text)).toEqual([
            'x',
            'health',
            'max_health',
            'element_type',
            'convert_to',
            'get_all_elements',
            '\n',
        ]);

    });


    test('tokenizes arithmetic operators and punctuation', () => {

        const source = `+ - * / . , ( ) :`;

        const lexer = new Lexer(source);

        const tokens = [];

        let token = lexer.nextToken();

        while (token.type !== Token.EOF) {

            tokens.push(token);

            token = lexer.nextToken();

        }

        expect(tokens.map(token => token.text)).toEqual([
            '+',
            '-',
            '*',
            '/',
            '.',
            ',',
            '(',
            ')',
            ':',
            '\n',
        ]);

    });


    test('tokenizes color literals', () => {

        const source = `Color(#123456) Color(#ABCDEF) Color(#000000)`;

        const lexer = new Lexer(source);

        const tokens = [];

        let token = lexer.nextToken();

        while (token.type !== Token.EOF) {

            tokens.push(token);

            token = lexer.nextToken();

        }

        expect(tokens.map(token => token.text)).toEqual([
            'Color(#123456)',
            'Color(#ABCDEF)',
            'Color(#000000)',
            '\n',
        ]);

    });


    test('tokenizes newlines', () => {

        const source = `element Water:

\thas color

\thas weight

`;

        const lexer = new Lexer(source);

        const tokens = [];

        let token = lexer.nextToken();

        while (token.type !== Token.EOF) {

            tokens.push(token);

            token = lexer.nextToken();

        }

        expect(tokens.map(token => token.text)).toEqual([
            'element',
            'Water',
            ':',
            '\n',
            '<INDENT>',
            'has',
            'color',
            '\n',
            'has',
            'weight',
            '\n',
            '<DEDENT>',
        ]);

    });


    test('handles nested indentation', () => {

        const source = `element Water:

\thas function tick:

\t\tdo_nothing

`;

        const lexer = new Lexer(source);

        const tokens = [];

        let token = lexer.nextToken();

        while (token.type !== Token.EOF) {

            tokens.push(token);

            token = lexer.nextToken();

        }

        expect(tokens.map(token => token.text)).toEqual([
            'element',
            'Water',
            ':',
            '\n',
            '<INDENT>',
            'has',
            'function',
            'tick',
            ':',
            '\n',
            '<INDENT>',
            'do_nothing',
            '\n',
            '<DEDENT>',
            '<DEDENT>',
        ]);

    });


    test('handles dedentation', () => {

        const source = `element Water:

\thas function tick:

\t\tdo_nothing

\thas color

`;

        const lexer = new Lexer(source);

        const tokens = [];

        let token = lexer.nextToken();

        while (token.type !== Token.EOF) {

            tokens.push(token);

            token = lexer.nextToken();

        }

        expect(tokens.map(token => token.text)).toEqual([
            'element',
            'Water',
            ':',
            '\n',
            '<INDENT>',
            'has',
            'function',
            'tick',
            ':',
            '\n',
            '<INDENT>',
            'do_nothing',
            '\n',
            '<DEDENT>',
            'has',
            'color',
            '\n',
            '<DEDENT>',
        ]);

    });


    test('ignores blank lines', () => {

        const source = `element Water:



\thas color



\thas weight

`;

        const lexer = new Lexer(source);

        const tokens = [];

        let token = lexer.nextToken();

        while (token.type !== Token.EOF) {

            tokens.push(token);

            token = lexer.nextToken();

        }

        expect(tokens.map(token => token.text)).toEqual([
            'element',
            'Water',
            ':',
            '\n',
            '<INDENT>',
            'has',
            'color',
            '\n',
            'has',
            'weight',
            '\n',
            '<DEDENT>',
        ]);

    });


    test('ignores comment-only lines', () => {

        const source = `# top-level comment

element Water:

\t# member comment

\thas color

`;

        const lexer = new Lexer(source);

        const tokens = [];

        let token = lexer.nextToken();

        while (token.type !== Token.EOF) {

            tokens.push(token);

            token = lexer.nextToken();

        }

        expect(tokens.map(token => token.text)).toEqual([
            'element',
            'Water',
            ':',
            '\n',
            '<INDENT>',
            'has',
            'color',
            '\n',
            '<DEDENT>',
        ]);

    });


    test('ignores inline comments', () => {

        const source = `element Water: # comment

\thas color # another comment

`;

        const lexer = new Lexer(source);

        const tokens = [];

        let token = lexer.nextToken();

        while (token.type !== Token.EOF) {

            tokens.push(token);

            token = lexer.nextToken();

        }

        expect(tokens.map(token => token.text)).toEqual([
            'element',
            'Water',
            ':',
            '\n',
            '<INDENT>',
            'has',
            'color',
            '\n',
            '<DEDENT>',
        ]);

    });


    test('emits dedents at EOF', () => {

        const source = `element Water:

\thas function tick:

\t\tdo_nothing`;

        const lexer = new Lexer(source);

        const tokens = [];

        let token = lexer.nextToken();

        while (token.type !== Token.EOF) {

            tokens.push(token);

            token = lexer.nextToken();

        }

        expect(tokens.map(token => token.text)).toEqual([
            'element',
            'Water',
            ':',
            '\n',
            '<INDENT>',
            'has',
            'function',
            'tick',
            ':',
            '\n',
            '<INDENT>',
            'do_nothing',
            '\n',
            '<DEDENT>',
            '<DEDENT>',
        ]);

    });


    test('rejects spaces used for indentation', () => {
        const source = `element Water:

  has color

`;

        expect(() => {
            const lexer = new Lexer(source);

            let token = lexer.nextToken();
            while (token.type !== Token.EOF) {
                token = lexer.nextToken();
            }
        }).toThrow('Spaces cannot be used for indentation');
    });

    // test('accepts a final statement inside a nested conditional', () => {
    //     const source =
    //         'element Water:\n' +
    //         '\thas color';

    //     const lexer = new Lexer(source);
    //     const tokens = [];
    //     let token = lexer.nextToken();

    //     while (token.type !== Token.EOF) {
    //         tokens.push(token);
    //         token = lexer.nextToken();
    //     }

    //     expect(tokens.map(token => token.text)).toEqual([
    //         'element',
    //         'Water',
    //         ':',
    //         '\n',
    //         '<INDENT>',
    //         'has',
    //         'color',
    //         '\n',
    //         '<DEDENT>',
    //     ]);
    // });
});