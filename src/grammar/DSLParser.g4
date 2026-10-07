parser grammar DSLParser;

options {
	tokenVocab = DSLLexer;
}

// PROGRAM

program: NEWLINE* topLevelStatment* EOF;

topLevelStatment: elementDefinition | interactionDefinition;

// ELEMENT DEFINITIONS

elementDefinition:
	elementKeyword identifier elementParent? COLON NEWLINE INDENT elementMember* DEDENT;

elementKeyword: ELEMENT | TEMPLATE_ELEMENT;

elementParent: IS LIKE typeOrIdentifier;

elementMember:
	elementVariableDefinition
	| elementFunctionDefinition;

elementVariableDefinition:
	HAS identifier elementInitialValue? NEWLINE;

elementInitialValue: WITH expression;

elementFunctionDefinition:
	HAS FUNCTION identifier functionParameters? COLON NEWLINE INDENT statement* DEDENT;

functionParameters: NEEDS parameter+;

parameter: identifier declaredType?;

declaredType: typeLiteral | elementTypeLiteral;

// INTERACTIONS

interactionDefinition:
	INTERACTION identifier identifier WITH identifier identifier COLON NEWLINE INDENT statement*
		DEDENT;

// STATEMENTS

statement:
	variableAssignment
	| giveStatement
	| conditional
	| collectionBasedLoop
	| rangeBasedLoop
	| nextTicksLoop
	| skipIteration
	| stopLooping
	| doNothing
	| expressionStatement;

variableAssignment: LET generalIdentifier BE expression NEWLINE;

giveStatement: GIVE expression NEWLINE;

expressionStatement: expression NEWLINE;

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

nextTicksLoop:
	FOR NEXT expression TICKS COLON NEWLINE INDENT statement* DEDENT;

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
	| arithmeticExpression;

comparisonOperator: EQUALS | LESS_THAN | GREATER_THAN;

arithmeticExpression:
	multiplicationExpression (
		(PLUS | MINUS) multiplicationExpression
	)*;

multiplicationExpression:
	unaryExpression ((MULTIPLY | DIVIDE) unaryExpression)*;

unaryExpression: NOT unaryExpression | primaryExpression;

primaryExpression:
	literal
	| functionCall
	| generalIdentifier
	| LPAREN expression RPAREN;

// FUNCTION CALLS

functionCall: generalIdentifier LPAREN argumentList? RPAREN;

argumentList: expression (COMMA expression)*;

// IDENTIFIERS

generalIdentifier: identifier memberAccess*;

memberAccess: DOT identifier;

identifier: IDENTIFIER;

typeOrIdentifier: identifier | typeLiteral;

// LITERALS

literal:
	NUMBER
	| BOOLEAN
	| COLOR
	| NULL
	| typeLiteral
	| elementTypeLiteral;

typeLiteral:
	NUMBER_TYPE
	| BOOLEAN_TYPE
	| COLOR_TYPE
	| ELEMENT_TYPE
	| ELEMENT_TYPE_TYPE
	| NULL_TYPE
	| TYPE_TYPE;

elementTypeLiteral: identifier;