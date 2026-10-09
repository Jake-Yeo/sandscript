parser grammar DSLParser;

options {
	tokenVocab = DSLLexer;
}

// PROGRAM

program: NEWLINE* topLevelStatement* EOF;

topLevelStatement: elementDefinition | interactionDefinition;

// ELEMENT DEFINITIONS

elementDefinition:
	elementKeyword pascalIdentifier elementParent? COLON NEWLINE INDENT elementMember* DEDENT;

elementKeyword: ELEMENT | TEMPLATE_ELEMENT;

elementParent: IS LIKE (ELEMENT_TYPE | pascalIdentifier);

elementMember:
	elementVariableDefinition
	| elementFunctionDefinition;

elementVariableDefinition:
	HAS identifier elementInitialValue? NEWLINE;

elementInitialValue: WITH expression;

elementFunctionDefinition:
	HAS FUNCTION identifier functionParameters? COLON NEWLINE INDENT statement* DEDENT;

functionParameters: NEEDS parameter+;

parameter: identifier typeReference?;

// INTERACTIONS

interactionDefinition:
	INTERACTION pascalIdentifier identifier WITH pascalIdentifier identifier COLON NEWLINE INDENT
		statement* DEDENT;

// STATEMENTS

statement:
	variableAssignment
	| giveStatement
	| conditional
	| collectionBasedLoop
	| rangeBasedLoop
	| skipIteration
	| stopLooping
	| doNothing
	| expressionStatement;

variableAssignment: LET generalIdentifier BE expression NEWLINE;

giveStatement: GIVE expression NEWLINE;

expressionStatement: functionCall NEWLINE;

// CONDITIONALS

conditional:
	IF expression COLON NEWLINE INDENT statement* DEDENT elseIfClause* elseClause?;

elseIfClause:
	ELSE IF expression COLON NEWLINE INDENT statement* DEDENT;

elseClause: ELSE COLON NEWLINE INDENT statement* DEDENT;

// LOOPS

collectionBasedLoop:
	FOR_EVERY identifier IN expression COLON NEWLINE INDENT statement* DEDENT;

rangeBasedLoop:
	GO_THROUGH expression TO expression WITH identifier COLON NEWLINE INDENT statement* DEDENT;

// SIMPLE CONTROL STATEMENTS

skipIteration: SKIP_ITERATION NEWLINE;

stopLooping: STOP_LOOPING NEWLINE;

doNothing: DO_NOTHING NEWLINE;

// EXPRESSIONS

expression: booleanOrExpression;

booleanOrExpression:
	booleanAndExpression (OR booleanAndExpression)*;

booleanAndExpression:
	booleanComparison (AND booleanComparison)*;

booleanComparison:
	arithmeticExpression comparisonOperator arithmeticExpression
	| arithmeticExpression IS typeReference
	| arithmeticExpression;

comparisonOperator: EQUALS | LESS_THAN | GREATER_THAN;

arithmeticExpression:
	multiplicationExpression (
		(PLUS | MINUS) multiplicationExpression
	)*;

multiplicationExpression:
	unaryExpression ((MULTIPLY | DIVIDE) unaryExpression)*;

unaryExpression:
	NOT unaryExpression
	| MINUS unaryExpression
	| primaryExpression;

primaryExpression:
	literal
	| functionCall
	| generalIdentifier
	| elementTypeReference
	| LPAREN expression RPAREN;

// FUNCTION CALLS

functionCall: generalIdentifier LPAREN argumentList? RPAREN;

argumentList: expression (COMMA expression)*;

// IDENTIFIERS

generalIdentifier: identifier memberAccess*;

memberAccess: DOT identifier;

identifier: IDENTIFIER;

pascalIdentifier: PASCAL_IDENTIFIER;

// LITERALS

literal: NUMBER | BOOLEAN | COLOR | NULL;

typeLiteral:
	NUMBER_TYPE
	| BOOLEAN_TYPE
	| COLOR_TYPE
	| ELEMENT_TYPE
	| ELEMENT_TYPE_TYPE
	| NULL_TYPE
	| TYPE_TYPE;

elementTypeReference: pascalIdentifier;

typeReference: typeLiteral | elementTypeReference;