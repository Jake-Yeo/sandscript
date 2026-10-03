import { describe, expect, test } from 'bun:test';

import { Parser } from '../src/parser/parser';

describe('Parser', () => {
    test('parses a simple element definition', () => {
        const source = `element Water:
	has color with Color(#123456)
`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
    });

    test('parses template elements and inheritance', () => {
        const source = `template-element Solid is like Element:
	has color
`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
    });

    test('parses a function with parameters and a give statement', () => {
        const source = `element Water:
	has function flow needs liquid:
		give liquid
`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
    });

    test('parses variable assignments and arithmetic expressions', () => {
        const source = `element Water:
	has function tick:
		let x be 10
		let y be x - 2
`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
    });

    test('parses conditionals', () => {
        const source = `element Water:
	has function tick:
		if health equals 0:
			disappear()
		else if health less-than 10:
			do-nothing
		else:
			skip-iteration
`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
    });

    test('parses member access and function calls', () => {
        const source = `interaction Ice i with Fire f:
	i.convert-to(Water)
	let x be i.health
`;

        const parser = new Parser(source);
        const tree = parser.parse();

        expect(tree).toBeDefined();
    });
});