lexer grammar DSLLexer;

tokens {
	INDENT,
	DEDENT
}

// KEYWORDS

ELEMENT: 'element';
TEMPLATE_ELEMENT: 'template-element';

HAS: 'has';
WITH: 'with';

IS: 'is';
LIKE: 'like';

FUNCTION: 'function';
NEEDS: 'needs';

LET: 'let';
BE: 'be';
GIVE: 'give';

IF: 'if';
ELSE: 'else';

FOR_EVERY: 'for-every';
GO_THROUGH: 'go-through';
IN: 'in';
TO: 'to';

SKIP_ITERATION: 'skip-iteration';
STOP_LOOPING: 'stop-looping';
DO_NOTHING: 'do-nothing';

INTERACTION: 'interaction';

// BOOLEAN OPERATORS

NOT: 'not';
EQUALS: 'equals';
LESS_THAN: 'less-than';
GREATER_THAN: 'greater-than';
AND: 'and';
OR: 'or';

// TYPES

NUMBER_TYPE: 'Number';
BOOLEAN_TYPE: 'Boolean';
COLOR_TYPE: 'Color';
ELEMENT_TYPE: 'Element';
ELEMENT_TYPE_TYPE: 'ElementType';
NULL_TYPE: 'Null';
TYPE_TYPE: 'Type';

// LITERALS

BOOLEAN: 'true' | 'false';

NULL: 'null';

COLOR: 'Color' LPAREN HEX_COLOR RPAREN;

NUMBER: DIGIT+ ('.' DIGIT+)?;

// IDENTIFIERS

PASCAL_IDENTIFIER: UPPERCASE (LETTER_OR_DIGIT)*;

IDENTIFIER:
	LOWERCASE (LOWERCASE | DIGIT)* (
		UNDERSCORE LOWERCASE (LOWERCASE | DIGIT)*
	)*;

// OPERATORS
PLUS: '+';
MINUS: '-';
MULTIPLY: '*';
DIVIDE: '/';

// PUNCTUATION

DOT: '.';
COMMA: ',';

LPAREN: '(';
RPAREN: ')';

COLON: ':';

// NEWLINES

NEWLINE: '\r'? '\n';

// COMMENTS

COMMENT: '#' ~[\r\n]* -> skip;

// WHITESPACE

SPACE: [ ]+ -> skip;

TAB: '\t';

// FRAGMENTS

fragment DIGIT: [0-9];

fragment HEX_DIGIT: [0-9a-fA-F];

fragment LOWERCASE: [a-z];

fragment UPPERCASE: [A-Z];

fragment LETTER_OR_DIGIT: [a-zA-Z0-9];

fragment UNDERSCORE: '_';

fragment HEX_COLOR:
	'#' HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT;