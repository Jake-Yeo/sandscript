
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { DSLParserListener } from "./DSLParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class DSLParser extends antlr.Parser {
    public static readonly INDENT = 1;
    public static readonly DEDENT = 2;
    public static readonly ELEMENT = 3;
    public static readonly TEMPLATE_ELEMENT = 4;
    public static readonly HAS = 5;
    public static readonly WITH = 6;
    public static readonly IS = 7;
    public static readonly LIKE = 8;
    public static readonly FUNCTION = 9;
    public static readonly NEEDS = 10;
    public static readonly LET = 11;
    public static readonly BE = 12;
    public static readonly GIVE = 13;
    public static readonly IF = 14;
    public static readonly ELSE = 15;
    public static readonly FOR_EVERY = 16;
    public static readonly GO_THROUGH = 17;
    public static readonly IN = 18;
    public static readonly TO = 19;
    public static readonly SKIP_ITERATION = 20;
    public static readonly STOP_LOOPING = 21;
    public static readonly DO_NOTHING = 22;
    public static readonly INTERACTION = 23;
    public static readonly NOT = 24;
    public static readonly EQUALS = 25;
    public static readonly LESS_THAN = 26;
    public static readonly GREATER_THAN = 27;
    public static readonly AND = 28;
    public static readonly OR = 29;
    public static readonly NUMBER_TYPE = 30;
    public static readonly BOOLEAN_TYPE = 31;
    public static readonly COLOR_TYPE = 32;
    public static readonly ELEMENT_TYPE = 33;
    public static readonly ELEMENT_TYPE_TYPE = 34;
    public static readonly NULL_TYPE = 35;
    public static readonly TYPE_TYPE = 36;
    public static readonly BOOLEAN = 37;
    public static readonly NULL = 38;
    public static readonly COLOR = 39;
    public static readonly NUMBER = 40;
    public static readonly PASCAL_IDENTIFIER = 41;
    public static readonly IDENTIFIER = 42;
    public static readonly PLUS = 43;
    public static readonly MINUS = 44;
    public static readonly MULTIPLY = 45;
    public static readonly DIVIDE = 46;
    public static readonly DOT = 47;
    public static readonly COMMA = 48;
    public static readonly LPAREN = 49;
    public static readonly RPAREN = 50;
    public static readonly COLON = 51;
    public static readonly NEWLINE = 52;
    public static readonly COMMENT = 53;
    public static readonly SPACE = 54;
    public static readonly TAB = 55;
    public static readonly RULE_program = 0;
    public static readonly RULE_topLevelStatement = 1;
    public static readonly RULE_elementDefinition = 2;
    public static readonly RULE_elementKeyword = 3;
    public static readonly RULE_elementParent = 4;
    public static readonly RULE_elementMember = 5;
    public static readonly RULE_elementVariableDefinition = 6;
    public static readonly RULE_elementInitialValue = 7;
    public static readonly RULE_elementFunctionDefinition = 8;
    public static readonly RULE_functionParameters = 9;
    public static readonly RULE_parameter = 10;
    public static readonly RULE_interactionDefinition = 11;
    public static readonly RULE_statement = 12;
    public static readonly RULE_variableAssignment = 13;
    public static readonly RULE_giveStatement = 14;
    public static readonly RULE_expressionStatement = 15;
    public static readonly RULE_conditional = 16;
    public static readonly RULE_elseIfClause = 17;
    public static readonly RULE_elseClause = 18;
    public static readonly RULE_collectionBasedLoop = 19;
    public static readonly RULE_rangeBasedLoop = 20;
    public static readonly RULE_skipIteration = 21;
    public static readonly RULE_stopLooping = 22;
    public static readonly RULE_doNothing = 23;
    public static readonly RULE_expression = 24;
    public static readonly RULE_booleanOrExpression = 25;
    public static readonly RULE_booleanAndExpression = 26;
    public static readonly RULE_booleanComparison = 27;
    public static readonly RULE_comparisonOperator = 28;
    public static readonly RULE_arithmeticExpression = 29;
    public static readonly RULE_multiplicationExpression = 30;
    public static readonly RULE_unaryExpression = 31;
    public static readonly RULE_primaryExpression = 32;
    public static readonly RULE_functionCall = 33;
    public static readonly RULE_argumentList = 34;
    public static readonly RULE_generalIdentifier = 35;
    public static readonly RULE_memberAccess = 36;
    public static readonly RULE_identifier = 37;
    public static readonly RULE_pascalIdentifier = 38;
    public static readonly RULE_literal = 39;
    public static readonly RULE_typeLiteral = 40;
    public static readonly RULE_elementTypeReference = 41;
    public static readonly RULE_typeReference = 42;

    public static readonly literalNames = [
        null, null, null, "'element'", "'template-element'", "'has'", "'with'", 
        "'is'", "'like'", "'function'", "'needs'", "'let'", "'be'", "'give'", 
        "'if'", "'else'", "'for-every'", "'go-through'", "'in'", "'to'", 
        "'skip-iteration'", "'stop-looping'", "'do-nothing'", "'interaction'", 
        "'not'", "'equals'", "'less-than'", "'greater-than'", "'and'", "'or'", 
        "'Number'", "'Boolean'", "'Color'", "'Element'", "'ElementType'", 
        "'Null'", "'Type'", null, "'null'", null, null, null, null, "'+'", 
        "'-'", "'*'", "'/'", "'.'", "','", "'('", "')'", "':'", null, null, 
        null, "'\\t'"
    ];

    public static readonly symbolicNames = [
        null, "INDENT", "DEDENT", "ELEMENT", "TEMPLATE_ELEMENT", "HAS", 
        "WITH", "IS", "LIKE", "FUNCTION", "NEEDS", "LET", "BE", "GIVE", 
        "IF", "ELSE", "FOR_EVERY", "GO_THROUGH", "IN", "TO", "SKIP_ITERATION", 
        "STOP_LOOPING", "DO_NOTHING", "INTERACTION", "NOT", "EQUALS", "LESS_THAN", 
        "GREATER_THAN", "AND", "OR", "NUMBER_TYPE", "BOOLEAN_TYPE", "COLOR_TYPE", 
        "ELEMENT_TYPE", "ELEMENT_TYPE_TYPE", "NULL_TYPE", "TYPE_TYPE", "BOOLEAN", 
        "NULL", "COLOR", "NUMBER", "PASCAL_IDENTIFIER", "IDENTIFIER", "PLUS", 
        "MINUS", "MULTIPLY", "DIVIDE", "DOT", "COMMA", "LPAREN", "RPAREN", 
        "COLON", "NEWLINE", "COMMENT", "SPACE", "TAB"
    ];
    public static readonly ruleNames = [
        "program", "topLevelStatement", "elementDefinition", "elementKeyword", 
        "elementParent", "elementMember", "elementVariableDefinition", "elementInitialValue", 
        "elementFunctionDefinition", "functionParameters", "parameter", 
        "interactionDefinition", "statement", "variableAssignment", "giveStatement", 
        "expressionStatement", "conditional", "elseIfClause", "elseClause", 
        "collectionBasedLoop", "rangeBasedLoop", "skipIteration", "stopLooping", 
        "doNothing", "expression", "booleanOrExpression", "booleanAndExpression", 
        "booleanComparison", "comparisonOperator", "arithmeticExpression", 
        "multiplicationExpression", "unaryExpression", "primaryExpression", 
        "functionCall", "argumentList", "generalIdentifier", "memberAccess", 
        "identifier", "pascalIdentifier", "literal", "typeLiteral", "elementTypeReference", 
        "typeReference",
    ];

    public get grammarFileName(): string { return "DSLParser.g4"; }
    public get literalNames(): (string | null)[] { return DSLParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return DSLParser.symbolicNames; }
    public get ruleNames(): string[] { return DSLParser.ruleNames; }
    public get serializedATN(): number[] { return DSLParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, DSLParser._ATN, DSLParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, DSLParser.RULE_program);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 89;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 86;
                this.match(DSLParser.NEWLINE);
                }
                }
                this.state = 91;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 95;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 8388632) !== 0)) {
                {
                {
                this.state = 92;
                this.topLevelStatement();
                }
                }
                this.state = 97;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 98;
            this.match(DSLParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public topLevelStatement(): TopLevelStatementContext {
        let localContext = new TopLevelStatementContext(this.context, this.state);
        this.enterRule(localContext, 2, DSLParser.RULE_topLevelStatement);
        try {
            this.state = 102;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DSLParser.ELEMENT:
            case DSLParser.TEMPLATE_ELEMENT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 100;
                this.elementDefinition();
                }
                break;
            case DSLParser.INTERACTION:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 101;
                this.interactionDefinition();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public elementDefinition(): ElementDefinitionContext {
        let localContext = new ElementDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 4, DSLParser.RULE_elementDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 104;
            this.elementKeyword();
            this.state = 105;
            this.pascalIdentifier();
            this.state = 107;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 7) {
                {
                this.state = 106;
                this.elementParent();
                }
            }

            this.state = 109;
            this.match(DSLParser.COLON);
            this.state = 110;
            this.match(DSLParser.NEWLINE);
            this.state = 111;
            this.match(DSLParser.INDENT);
            this.state = 115;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 112;
                this.elementMember();
                }
                }
                this.state = 117;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 118;
            this.match(DSLParser.DEDENT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public elementKeyword(): ElementKeywordContext {
        let localContext = new ElementKeywordContext(this.context, this.state);
        this.enterRule(localContext, 6, DSLParser.RULE_elementKeyword);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 120;
            _la = this.tokenStream.LA(1);
            if(!(_la === 3 || _la === 4)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public elementParent(): ElementParentContext {
        let localContext = new ElementParentContext(this.context, this.state);
        this.enterRule(localContext, 8, DSLParser.RULE_elementParent);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 122;
            this.match(DSLParser.IS);
            this.state = 123;
            this.match(DSLParser.LIKE);
            this.state = 124;
            this.typeReference();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public elementMember(): ElementMemberContext {
        let localContext = new ElementMemberContext(this.context, this.state);
        this.enterRule(localContext, 10, DSLParser.RULE_elementMember);
        try {
            this.state = 128;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 126;
                this.elementVariableDefinition();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 127;
                this.elementFunctionDefinition();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public elementVariableDefinition(): ElementVariableDefinitionContext {
        let localContext = new ElementVariableDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 12, DSLParser.RULE_elementVariableDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 130;
            this.match(DSLParser.HAS);
            this.state = 131;
            this.identifier();
            this.state = 133;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 132;
                this.elementInitialValue();
                }
            }

            this.state = 135;
            this.match(DSLParser.NEWLINE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public elementInitialValue(): ElementInitialValueContext {
        let localContext = new ElementInitialValueContext(this.context, this.state);
        this.enterRule(localContext, 14, DSLParser.RULE_elementInitialValue);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 137;
            this.match(DSLParser.WITH);
            this.state = 138;
            this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public elementFunctionDefinition(): ElementFunctionDefinitionContext {
        let localContext = new ElementFunctionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 16, DSLParser.RULE_elementFunctionDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 140;
            this.match(DSLParser.HAS);
            this.state = 141;
            this.match(DSLParser.FUNCTION);
            this.state = 142;
            this.identifier();
            this.state = 144;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10) {
                {
                this.state = 143;
                this.functionParameters();
                }
            }

            this.state = 146;
            this.match(DSLParser.COLON);
            this.state = 147;
            this.match(DSLParser.NEWLINE);
            this.state = 148;
            this.match(DSLParser.INDENT);
            this.state = 152;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 2147487341) !== 0)) {
                {
                {
                this.state = 149;
                this.statement();
                }
                }
                this.state = 154;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 155;
            this.match(DSLParser.DEDENT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionParameters(): FunctionParametersContext {
        let localContext = new FunctionParametersContext(this.context, this.state);
        this.enterRule(localContext, 18, DSLParser.RULE_functionParameters);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 157;
            this.match(DSLParser.NEEDS);
            this.state = 159;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 158;
                this.parameter();
                }
                }
                this.state = 161;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 42);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parameter(): ParameterContext {
        let localContext = new ParameterContext(this.context, this.state);
        this.enterRule(localContext, 20, DSLParser.RULE_parameter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 163;
            this.identifier();
            this.state = 165;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 2175) !== 0)) {
                {
                this.state = 164;
                this.typeReference();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interactionDefinition(): InteractionDefinitionContext {
        let localContext = new InteractionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 22, DSLParser.RULE_interactionDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 167;
            this.match(DSLParser.INTERACTION);
            this.state = 168;
            this.pascalIdentifier();
            this.state = 169;
            this.identifier();
            this.state = 170;
            this.match(DSLParser.WITH);
            this.state = 171;
            this.pascalIdentifier();
            this.state = 172;
            this.identifier();
            this.state = 173;
            this.match(DSLParser.COLON);
            this.state = 174;
            this.match(DSLParser.NEWLINE);
            this.state = 175;
            this.match(DSLParser.INDENT);
            this.state = 179;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 2147487341) !== 0)) {
                {
                {
                this.state = 176;
                this.statement();
                }
                }
                this.state = 181;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 182;
            this.match(DSLParser.DEDENT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 24, DSLParser.RULE_statement);
        try {
            this.state = 193;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DSLParser.LET:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 184;
                this.variableAssignment();
                }
                break;
            case DSLParser.GIVE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 185;
                this.giveStatement();
                }
                break;
            case DSLParser.IF:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 186;
                this.conditional();
                }
                break;
            case DSLParser.FOR_EVERY:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 187;
                this.collectionBasedLoop();
                }
                break;
            case DSLParser.GO_THROUGH:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 188;
                this.rangeBasedLoop();
                }
                break;
            case DSLParser.SKIP_ITERATION:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 189;
                this.skipIteration();
                }
                break;
            case DSLParser.STOP_LOOPING:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 190;
                this.stopLooping();
                }
                break;
            case DSLParser.DO_NOTHING:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 191;
                this.doNothing();
                }
                break;
            case DSLParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 192;
                this.expressionStatement();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableAssignment(): VariableAssignmentContext {
        let localContext = new VariableAssignmentContext(this.context, this.state);
        this.enterRule(localContext, 26, DSLParser.RULE_variableAssignment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 195;
            this.match(DSLParser.LET);
            this.state = 196;
            this.generalIdentifier();
            this.state = 197;
            this.match(DSLParser.BE);
            this.state = 198;
            this.expression();
            this.state = 199;
            this.match(DSLParser.NEWLINE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public giveStatement(): GiveStatementContext {
        let localContext = new GiveStatementContext(this.context, this.state);
        this.enterRule(localContext, 28, DSLParser.RULE_giveStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 201;
            this.match(DSLParser.GIVE);
            this.state = 202;
            this.expression();
            this.state = 203;
            this.match(DSLParser.NEWLINE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expressionStatement(): ExpressionStatementContext {
        let localContext = new ExpressionStatementContext(this.context, this.state);
        this.enterRule(localContext, 30, DSLParser.RULE_expressionStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 205;
            this.functionCall();
            this.state = 206;
            this.match(DSLParser.NEWLINE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public conditional(): ConditionalContext {
        let localContext = new ConditionalContext(this.context, this.state);
        this.enterRule(localContext, 32, DSLParser.RULE_conditional);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 208;
            this.match(DSLParser.IF);
            this.state = 209;
            this.expression();
            this.state = 210;
            this.match(DSLParser.COLON);
            this.state = 211;
            this.match(DSLParser.NEWLINE);
            this.state = 212;
            this.match(DSLParser.INDENT);
            this.state = 216;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 2147487341) !== 0)) {
                {
                {
                this.state = 213;
                this.statement();
                }
                }
                this.state = 218;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 219;
            this.match(DSLParser.DEDENT);
            this.state = 223;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 14, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 220;
                    this.elseIfClause();
                    }
                    }
                }
                this.state = 225;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 14, this.context);
            }
            this.state = 227;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 15) {
                {
                this.state = 226;
                this.elseClause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public elseIfClause(): ElseIfClauseContext {
        let localContext = new ElseIfClauseContext(this.context, this.state);
        this.enterRule(localContext, 34, DSLParser.RULE_elseIfClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 229;
            this.match(DSLParser.ELSE);
            this.state = 230;
            this.match(DSLParser.IF);
            this.state = 231;
            this.expression();
            this.state = 232;
            this.match(DSLParser.COLON);
            this.state = 233;
            this.match(DSLParser.NEWLINE);
            this.state = 234;
            this.match(DSLParser.INDENT);
            this.state = 238;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 2147487341) !== 0)) {
                {
                {
                this.state = 235;
                this.statement();
                }
                }
                this.state = 240;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 241;
            this.match(DSLParser.DEDENT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public elseClause(): ElseClauseContext {
        let localContext = new ElseClauseContext(this.context, this.state);
        this.enterRule(localContext, 36, DSLParser.RULE_elseClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 243;
            this.match(DSLParser.ELSE);
            this.state = 244;
            this.match(DSLParser.COLON);
            this.state = 245;
            this.match(DSLParser.NEWLINE);
            this.state = 246;
            this.match(DSLParser.INDENT);
            this.state = 250;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 2147487341) !== 0)) {
                {
                {
                this.state = 247;
                this.statement();
                }
                }
                this.state = 252;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 253;
            this.match(DSLParser.DEDENT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public collectionBasedLoop(): CollectionBasedLoopContext {
        let localContext = new CollectionBasedLoopContext(this.context, this.state);
        this.enterRule(localContext, 38, DSLParser.RULE_collectionBasedLoop);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 255;
            this.match(DSLParser.FOR_EVERY);
            this.state = 256;
            this.identifier();
            this.state = 257;
            this.match(DSLParser.IN);
            this.state = 258;
            this.expression();
            this.state = 259;
            this.match(DSLParser.COLON);
            this.state = 260;
            this.match(DSLParser.NEWLINE);
            this.state = 261;
            this.match(DSLParser.INDENT);
            this.state = 265;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 2147487341) !== 0)) {
                {
                {
                this.state = 262;
                this.statement();
                }
                }
                this.state = 267;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 268;
            this.match(DSLParser.DEDENT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rangeBasedLoop(): RangeBasedLoopContext {
        let localContext = new RangeBasedLoopContext(this.context, this.state);
        this.enterRule(localContext, 40, DSLParser.RULE_rangeBasedLoop);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 270;
            this.match(DSLParser.GO_THROUGH);
            this.state = 271;
            this.expression();
            this.state = 272;
            this.match(DSLParser.TO);
            this.state = 273;
            this.expression();
            this.state = 274;
            this.match(DSLParser.WITH);
            this.state = 275;
            this.identifier();
            this.state = 276;
            this.match(DSLParser.COLON);
            this.state = 277;
            this.match(DSLParser.NEWLINE);
            this.state = 278;
            this.match(DSLParser.INDENT);
            this.state = 282;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 2147487341) !== 0)) {
                {
                {
                this.state = 279;
                this.statement();
                }
                }
                this.state = 284;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 285;
            this.match(DSLParser.DEDENT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public skipIteration(): SkipIterationContext {
        let localContext = new SkipIterationContext(this.context, this.state);
        this.enterRule(localContext, 42, DSLParser.RULE_skipIteration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 287;
            this.match(DSLParser.SKIP_ITERATION);
            this.state = 288;
            this.match(DSLParser.NEWLINE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stopLooping(): StopLoopingContext {
        let localContext = new StopLoopingContext(this.context, this.state);
        this.enterRule(localContext, 44, DSLParser.RULE_stopLooping);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 290;
            this.match(DSLParser.STOP_LOOPING);
            this.state = 291;
            this.match(DSLParser.NEWLINE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public doNothing(): DoNothingContext {
        let localContext = new DoNothingContext(this.context, this.state);
        this.enterRule(localContext, 46, DSLParser.RULE_doNothing);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 293;
            this.match(DSLParser.DO_NOTHING);
            this.state = 294;
            this.match(DSLParser.NEWLINE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expression(): ExpressionContext {
        let localContext = new ExpressionContext(this.context, this.state);
        this.enterRule(localContext, 48, DSLParser.RULE_expression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 296;
            this.booleanOrExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public booleanOrExpression(): BooleanOrExpressionContext {
        let localContext = new BooleanOrExpressionContext(this.context, this.state);
        this.enterRule(localContext, 50, DSLParser.RULE_booleanOrExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 298;
            this.booleanAndExpression();
            this.state = 303;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 29) {
                {
                {
                this.state = 299;
                this.match(DSLParser.OR);
                this.state = 300;
                this.booleanAndExpression();
                }
                }
                this.state = 305;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public booleanAndExpression(): BooleanAndExpressionContext {
        let localContext = new BooleanAndExpressionContext(this.context, this.state);
        this.enterRule(localContext, 52, DSLParser.RULE_booleanAndExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 306;
            this.booleanComparison();
            this.state = 311;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 28) {
                {
                {
                this.state = 307;
                this.match(DSLParser.AND);
                this.state = 308;
                this.booleanComparison();
                }
                }
                this.state = 313;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public booleanComparison(): BooleanComparisonContext {
        let localContext = new BooleanComparisonContext(this.context, this.state);
        this.enterRule(localContext, 54, DSLParser.RULE_booleanComparison);
        try {
            this.state = 323;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 22, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 314;
                this.arithmeticExpression();
                this.state = 315;
                this.comparisonOperator();
                this.state = 316;
                this.arithmeticExpression();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 318;
                this.arithmeticExpression();
                this.state = 319;
                this.match(DSLParser.IS);
                this.state = 320;
                this.typeReference();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 322;
                this.arithmeticExpression();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public comparisonOperator(): ComparisonOperatorContext {
        let localContext = new ComparisonOperatorContext(this.context, this.state);
        this.enterRule(localContext, 56, DSLParser.RULE_comparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 325;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 234881024) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arithmeticExpression(): ArithmeticExpressionContext {
        let localContext = new ArithmeticExpressionContext(this.context, this.state);
        this.enterRule(localContext, 58, DSLParser.RULE_arithmeticExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 327;
            this.multiplicationExpression();
            this.state = 332;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 43 || _la === 44) {
                {
                {
                this.state = 328;
                _la = this.tokenStream.LA(1);
                if(!(_la === 43 || _la === 44)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 329;
                this.multiplicationExpression();
                }
                }
                this.state = 334;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public multiplicationExpression(): MultiplicationExpressionContext {
        let localContext = new MultiplicationExpressionContext(this.context, this.state);
        this.enterRule(localContext, 60, DSLParser.RULE_multiplicationExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 335;
            this.unaryExpression();
            this.state = 340;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 45 || _la === 46) {
                {
                {
                this.state = 336;
                _la = this.tokenStream.LA(1);
                if(!(_la === 45 || _la === 46)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 337;
                this.unaryExpression();
                }
                }
                this.state = 342;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unaryExpression(): UnaryExpressionContext {
        let localContext = new UnaryExpressionContext(this.context, this.state);
        this.enterRule(localContext, 62, DSLParser.RULE_unaryExpression);
        try {
            this.state = 348;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DSLParser.NOT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 343;
                this.match(DSLParser.NOT);
                this.state = 344;
                this.unaryExpression();
                }
                break;
            case DSLParser.MINUS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 345;
                this.match(DSLParser.MINUS);
                this.state = 346;
                this.unaryExpression();
                }
                break;
            case DSLParser.BOOLEAN:
            case DSLParser.NULL:
            case DSLParser.COLOR:
            case DSLParser.NUMBER:
            case DSLParser.PASCAL_IDENTIFIER:
            case DSLParser.IDENTIFIER:
            case DSLParser.LPAREN:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 347;
                this.primaryExpression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public primaryExpression(): PrimaryExpressionContext {
        let localContext = new PrimaryExpressionContext(this.context, this.state);
        this.enterRule(localContext, 64, DSLParser.RULE_primaryExpression);
        try {
            this.state = 358;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 350;
                this.literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 351;
                this.functionCall();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 352;
                this.generalIdentifier();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 353;
                this.elementTypeReference();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 354;
                this.match(DSLParser.LPAREN);
                this.state = 355;
                this.expression();
                this.state = 356;
                this.match(DSLParser.RPAREN);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionCall(): FunctionCallContext {
        let localContext = new FunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 66, DSLParser.RULE_functionCall);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 360;
            this.generalIdentifier();
            this.state = 361;
            this.match(DSLParser.LPAREN);
            this.state = 363;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & 35119105) !== 0)) {
                {
                this.state = 362;
                this.argumentList();
                }
            }

            this.state = 365;
            this.match(DSLParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public argumentList(): ArgumentListContext {
        let localContext = new ArgumentListContext(this.context, this.state);
        this.enterRule(localContext, 68, DSLParser.RULE_argumentList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 367;
            this.expression();
            this.state = 372;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 48) {
                {
                {
                this.state = 368;
                this.match(DSLParser.COMMA);
                this.state = 369;
                this.expression();
                }
                }
                this.state = 374;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public generalIdentifier(): GeneralIdentifierContext {
        let localContext = new GeneralIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 70, DSLParser.RULE_generalIdentifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 375;
            this.identifier();
            this.state = 379;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 47) {
                {
                {
                this.state = 376;
                this.memberAccess();
                }
                }
                this.state = 381;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public memberAccess(): MemberAccessContext {
        let localContext = new MemberAccessContext(this.context, this.state);
        this.enterRule(localContext, 72, DSLParser.RULE_memberAccess);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 382;
            this.match(DSLParser.DOT);
            this.state = 383;
            this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 74, DSLParser.RULE_identifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 385;
            this.match(DSLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pascalIdentifier(): PascalIdentifierContext {
        let localContext = new PascalIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 76, DSLParser.RULE_pascalIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 387;
            this.match(DSLParser.PASCAL_IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 78, DSLParser.RULE_literal);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 389;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 15) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeLiteral(): TypeLiteralContext {
        let localContext = new TypeLiteralContext(this.context, this.state);
        this.enterRule(localContext, 80, DSLParser.RULE_typeLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 391;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 127) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public elementTypeReference(): ElementTypeReferenceContext {
        let localContext = new ElementTypeReferenceContext(this.context, this.state);
        this.enterRule(localContext, 82, DSLParser.RULE_elementTypeReference);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 393;
            this.pascalIdentifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeReference(): TypeReferenceContext {
        let localContext = new TypeReferenceContext(this.context, this.state);
        this.enterRule(localContext, 84, DSLParser.RULE_typeReference);
        try {
            this.state = 397;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DSLParser.NUMBER_TYPE:
            case DSLParser.BOOLEAN_TYPE:
            case DSLParser.COLOR_TYPE:
            case DSLParser.ELEMENT_TYPE:
            case DSLParser.ELEMENT_TYPE_TYPE:
            case DSLParser.NULL_TYPE:
            case DSLParser.TYPE_TYPE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 395;
                this.typeLiteral();
                }
                break;
            case DSLParser.PASCAL_IDENTIFIER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 396;
                this.elementTypeReference();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,55,400,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,
        2,40,7,40,2,41,7,41,2,42,7,42,1,0,5,0,88,8,0,10,0,12,0,91,9,0,1,
        0,5,0,94,8,0,10,0,12,0,97,9,0,1,0,1,0,1,1,1,1,3,1,103,8,1,1,2,1,
        2,1,2,3,2,108,8,2,1,2,1,2,1,2,1,2,5,2,114,8,2,10,2,12,2,117,9,2,
        1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,3,5,129,8,5,1,6,1,6,1,6,
        3,6,134,8,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,3,8,145,8,8,1,8,
        1,8,1,8,1,8,5,8,151,8,8,10,8,12,8,154,9,8,1,8,1,8,1,9,1,9,4,9,160,
        8,9,11,9,12,9,161,1,10,1,10,3,10,166,8,10,1,11,1,11,1,11,1,11,1,
        11,1,11,1,11,1,11,1,11,1,11,5,11,178,8,11,10,11,12,11,181,9,11,1,
        11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,194,8,
        12,1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,15,1,
        15,1,16,1,16,1,16,1,16,1,16,1,16,5,16,215,8,16,10,16,12,16,218,9,
        16,1,16,1,16,5,16,222,8,16,10,16,12,16,225,9,16,1,16,3,16,228,8,
        16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,5,17,237,8,17,10,17,12,17,
        240,9,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,5,18,249,8,18,10,18,
        12,18,252,9,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
        5,19,264,8,19,10,19,12,19,267,9,19,1,19,1,19,1,20,1,20,1,20,1,20,
        1,20,1,20,1,20,1,20,1,20,1,20,5,20,281,8,20,10,20,12,20,284,9,20,
        1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,1,23,1,23,1,23,1,24,1,24,
        1,25,1,25,1,25,5,25,302,8,25,10,25,12,25,305,9,25,1,26,1,26,1,26,
        5,26,310,8,26,10,26,12,26,313,9,26,1,27,1,27,1,27,1,27,1,27,1,27,
        1,27,1,27,1,27,3,27,324,8,27,1,28,1,28,1,29,1,29,1,29,5,29,331,8,
        29,10,29,12,29,334,9,29,1,30,1,30,1,30,5,30,339,8,30,10,30,12,30,
        342,9,30,1,31,1,31,1,31,1,31,1,31,3,31,349,8,31,1,32,1,32,1,32,1,
        32,1,32,1,32,1,32,1,32,3,32,359,8,32,1,33,1,33,1,33,3,33,364,8,33,
        1,33,1,33,1,34,1,34,1,34,5,34,371,8,34,10,34,12,34,374,9,34,1,35,
        1,35,5,35,378,8,35,10,35,12,35,381,9,35,1,36,1,36,1,36,1,37,1,37,
        1,38,1,38,1,39,1,39,1,40,1,40,1,41,1,41,1,42,1,42,3,42,398,8,42,
        1,42,0,0,43,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
        38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,
        82,84,0,6,1,0,3,4,1,0,25,27,1,0,43,44,1,0,45,46,1,0,37,40,1,0,30,
        36,399,0,89,1,0,0,0,2,102,1,0,0,0,4,104,1,0,0,0,6,120,1,0,0,0,8,
        122,1,0,0,0,10,128,1,0,0,0,12,130,1,0,0,0,14,137,1,0,0,0,16,140,
        1,0,0,0,18,157,1,0,0,0,20,163,1,0,0,0,22,167,1,0,0,0,24,193,1,0,
        0,0,26,195,1,0,0,0,28,201,1,0,0,0,30,205,1,0,0,0,32,208,1,0,0,0,
        34,229,1,0,0,0,36,243,1,0,0,0,38,255,1,0,0,0,40,270,1,0,0,0,42,287,
        1,0,0,0,44,290,1,0,0,0,46,293,1,0,0,0,48,296,1,0,0,0,50,298,1,0,
        0,0,52,306,1,0,0,0,54,323,1,0,0,0,56,325,1,0,0,0,58,327,1,0,0,0,
        60,335,1,0,0,0,62,348,1,0,0,0,64,358,1,0,0,0,66,360,1,0,0,0,68,367,
        1,0,0,0,70,375,1,0,0,0,72,382,1,0,0,0,74,385,1,0,0,0,76,387,1,0,
        0,0,78,389,1,0,0,0,80,391,1,0,0,0,82,393,1,0,0,0,84,397,1,0,0,0,
        86,88,5,52,0,0,87,86,1,0,0,0,88,91,1,0,0,0,89,87,1,0,0,0,89,90,1,
        0,0,0,90,95,1,0,0,0,91,89,1,0,0,0,92,94,3,2,1,0,93,92,1,0,0,0,94,
        97,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,98,1,0,0,0,97,95,1,0,0,
        0,98,99,5,0,0,1,99,1,1,0,0,0,100,103,3,4,2,0,101,103,3,22,11,0,102,
        100,1,0,0,0,102,101,1,0,0,0,103,3,1,0,0,0,104,105,3,6,3,0,105,107,
        3,76,38,0,106,108,3,8,4,0,107,106,1,0,0,0,107,108,1,0,0,0,108,109,
        1,0,0,0,109,110,5,51,0,0,110,111,5,52,0,0,111,115,5,1,0,0,112,114,
        3,10,5,0,113,112,1,0,0,0,114,117,1,0,0,0,115,113,1,0,0,0,115,116,
        1,0,0,0,116,118,1,0,0,0,117,115,1,0,0,0,118,119,5,2,0,0,119,5,1,
        0,0,0,120,121,7,0,0,0,121,7,1,0,0,0,122,123,5,7,0,0,123,124,5,8,
        0,0,124,125,3,84,42,0,125,9,1,0,0,0,126,129,3,12,6,0,127,129,3,16,
        8,0,128,126,1,0,0,0,128,127,1,0,0,0,129,11,1,0,0,0,130,131,5,5,0,
        0,131,133,3,74,37,0,132,134,3,14,7,0,133,132,1,0,0,0,133,134,1,0,
        0,0,134,135,1,0,0,0,135,136,5,52,0,0,136,13,1,0,0,0,137,138,5,6,
        0,0,138,139,3,48,24,0,139,15,1,0,0,0,140,141,5,5,0,0,141,142,5,9,
        0,0,142,144,3,74,37,0,143,145,3,18,9,0,144,143,1,0,0,0,144,145,1,
        0,0,0,145,146,1,0,0,0,146,147,5,51,0,0,147,148,5,52,0,0,148,152,
        5,1,0,0,149,151,3,24,12,0,150,149,1,0,0,0,151,154,1,0,0,0,152,150,
        1,0,0,0,152,153,1,0,0,0,153,155,1,0,0,0,154,152,1,0,0,0,155,156,
        5,2,0,0,156,17,1,0,0,0,157,159,5,10,0,0,158,160,3,20,10,0,159,158,
        1,0,0,0,160,161,1,0,0,0,161,159,1,0,0,0,161,162,1,0,0,0,162,19,1,
        0,0,0,163,165,3,74,37,0,164,166,3,84,42,0,165,164,1,0,0,0,165,166,
        1,0,0,0,166,21,1,0,0,0,167,168,5,23,0,0,168,169,3,76,38,0,169,170,
        3,74,37,0,170,171,5,6,0,0,171,172,3,76,38,0,172,173,3,74,37,0,173,
        174,5,51,0,0,174,175,5,52,0,0,175,179,5,1,0,0,176,178,3,24,12,0,
        177,176,1,0,0,0,178,181,1,0,0,0,179,177,1,0,0,0,179,180,1,0,0,0,
        180,182,1,0,0,0,181,179,1,0,0,0,182,183,5,2,0,0,183,23,1,0,0,0,184,
        194,3,26,13,0,185,194,3,28,14,0,186,194,3,32,16,0,187,194,3,38,19,
        0,188,194,3,40,20,0,189,194,3,42,21,0,190,194,3,44,22,0,191,194,
        3,46,23,0,192,194,3,30,15,0,193,184,1,0,0,0,193,185,1,0,0,0,193,
        186,1,0,0,0,193,187,1,0,0,0,193,188,1,0,0,0,193,189,1,0,0,0,193,
        190,1,0,0,0,193,191,1,0,0,0,193,192,1,0,0,0,194,25,1,0,0,0,195,196,
        5,11,0,0,196,197,3,70,35,0,197,198,5,12,0,0,198,199,3,48,24,0,199,
        200,5,52,0,0,200,27,1,0,0,0,201,202,5,13,0,0,202,203,3,48,24,0,203,
        204,5,52,0,0,204,29,1,0,0,0,205,206,3,66,33,0,206,207,5,52,0,0,207,
        31,1,0,0,0,208,209,5,14,0,0,209,210,3,48,24,0,210,211,5,51,0,0,211,
        212,5,52,0,0,212,216,5,1,0,0,213,215,3,24,12,0,214,213,1,0,0,0,215,
        218,1,0,0,0,216,214,1,0,0,0,216,217,1,0,0,0,217,219,1,0,0,0,218,
        216,1,0,0,0,219,223,5,2,0,0,220,222,3,34,17,0,221,220,1,0,0,0,222,
        225,1,0,0,0,223,221,1,0,0,0,223,224,1,0,0,0,224,227,1,0,0,0,225,
        223,1,0,0,0,226,228,3,36,18,0,227,226,1,0,0,0,227,228,1,0,0,0,228,
        33,1,0,0,0,229,230,5,15,0,0,230,231,5,14,0,0,231,232,3,48,24,0,232,
        233,5,51,0,0,233,234,5,52,0,0,234,238,5,1,0,0,235,237,3,24,12,0,
        236,235,1,0,0,0,237,240,1,0,0,0,238,236,1,0,0,0,238,239,1,0,0,0,
        239,241,1,0,0,0,240,238,1,0,0,0,241,242,5,2,0,0,242,35,1,0,0,0,243,
        244,5,15,0,0,244,245,5,51,0,0,245,246,5,52,0,0,246,250,5,1,0,0,247,
        249,3,24,12,0,248,247,1,0,0,0,249,252,1,0,0,0,250,248,1,0,0,0,250,
        251,1,0,0,0,251,253,1,0,0,0,252,250,1,0,0,0,253,254,5,2,0,0,254,
        37,1,0,0,0,255,256,5,16,0,0,256,257,3,74,37,0,257,258,5,18,0,0,258,
        259,3,48,24,0,259,260,5,51,0,0,260,261,5,52,0,0,261,265,5,1,0,0,
        262,264,3,24,12,0,263,262,1,0,0,0,264,267,1,0,0,0,265,263,1,0,0,
        0,265,266,1,0,0,0,266,268,1,0,0,0,267,265,1,0,0,0,268,269,5,2,0,
        0,269,39,1,0,0,0,270,271,5,17,0,0,271,272,3,48,24,0,272,273,5,19,
        0,0,273,274,3,48,24,0,274,275,5,6,0,0,275,276,3,74,37,0,276,277,
        5,51,0,0,277,278,5,52,0,0,278,282,5,1,0,0,279,281,3,24,12,0,280,
        279,1,0,0,0,281,284,1,0,0,0,282,280,1,0,0,0,282,283,1,0,0,0,283,
        285,1,0,0,0,284,282,1,0,0,0,285,286,5,2,0,0,286,41,1,0,0,0,287,288,
        5,20,0,0,288,289,5,52,0,0,289,43,1,0,0,0,290,291,5,21,0,0,291,292,
        5,52,0,0,292,45,1,0,0,0,293,294,5,22,0,0,294,295,5,52,0,0,295,47,
        1,0,0,0,296,297,3,50,25,0,297,49,1,0,0,0,298,303,3,52,26,0,299,300,
        5,29,0,0,300,302,3,52,26,0,301,299,1,0,0,0,302,305,1,0,0,0,303,301,
        1,0,0,0,303,304,1,0,0,0,304,51,1,0,0,0,305,303,1,0,0,0,306,311,3,
        54,27,0,307,308,5,28,0,0,308,310,3,54,27,0,309,307,1,0,0,0,310,313,
        1,0,0,0,311,309,1,0,0,0,311,312,1,0,0,0,312,53,1,0,0,0,313,311,1,
        0,0,0,314,315,3,58,29,0,315,316,3,56,28,0,316,317,3,58,29,0,317,
        324,1,0,0,0,318,319,3,58,29,0,319,320,5,7,0,0,320,321,3,84,42,0,
        321,324,1,0,0,0,322,324,3,58,29,0,323,314,1,0,0,0,323,318,1,0,0,
        0,323,322,1,0,0,0,324,55,1,0,0,0,325,326,7,1,0,0,326,57,1,0,0,0,
        327,332,3,60,30,0,328,329,7,2,0,0,329,331,3,60,30,0,330,328,1,0,
        0,0,331,334,1,0,0,0,332,330,1,0,0,0,332,333,1,0,0,0,333,59,1,0,0,
        0,334,332,1,0,0,0,335,340,3,62,31,0,336,337,7,3,0,0,337,339,3,62,
        31,0,338,336,1,0,0,0,339,342,1,0,0,0,340,338,1,0,0,0,340,341,1,0,
        0,0,341,61,1,0,0,0,342,340,1,0,0,0,343,344,5,24,0,0,344,349,3,62,
        31,0,345,346,5,44,0,0,346,349,3,62,31,0,347,349,3,64,32,0,348,343,
        1,0,0,0,348,345,1,0,0,0,348,347,1,0,0,0,349,63,1,0,0,0,350,359,3,
        78,39,0,351,359,3,66,33,0,352,359,3,70,35,0,353,359,3,82,41,0,354,
        355,5,49,0,0,355,356,3,48,24,0,356,357,5,50,0,0,357,359,1,0,0,0,
        358,350,1,0,0,0,358,351,1,0,0,0,358,352,1,0,0,0,358,353,1,0,0,0,
        358,354,1,0,0,0,359,65,1,0,0,0,360,361,3,70,35,0,361,363,5,49,0,
        0,362,364,3,68,34,0,363,362,1,0,0,0,363,364,1,0,0,0,364,365,1,0,
        0,0,365,366,5,50,0,0,366,67,1,0,0,0,367,372,3,48,24,0,368,369,5,
        48,0,0,369,371,3,48,24,0,370,368,1,0,0,0,371,374,1,0,0,0,372,370,
        1,0,0,0,372,373,1,0,0,0,373,69,1,0,0,0,374,372,1,0,0,0,375,379,3,
        74,37,0,376,378,3,72,36,0,377,376,1,0,0,0,378,381,1,0,0,0,379,377,
        1,0,0,0,379,380,1,0,0,0,380,71,1,0,0,0,381,379,1,0,0,0,382,383,5,
        47,0,0,383,384,3,74,37,0,384,73,1,0,0,0,385,386,5,42,0,0,386,75,
        1,0,0,0,387,388,5,41,0,0,388,77,1,0,0,0,389,390,7,4,0,0,390,79,1,
        0,0,0,391,392,7,5,0,0,392,81,1,0,0,0,393,394,3,76,38,0,394,83,1,
        0,0,0,395,398,3,80,40,0,396,398,3,82,41,0,397,395,1,0,0,0,397,396,
        1,0,0,0,398,85,1,0,0,0,31,89,95,102,107,115,128,133,144,152,161,
        165,179,193,216,223,227,238,250,265,282,303,311,323,332,340,348,
        358,363,372,379,397
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!DSLParser.__ATN) {
            DSLParser.__ATN = new antlr.ATNDeserializer().deserialize(DSLParser._serializedATN);
        }

        return DSLParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(DSLParser.literalNames, DSLParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return DSLParser.vocabulary;
    }

    private static readonly decisionsToDFA = DSLParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(DSLParser.EOF, 0)!;
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(DSLParser.NEWLINE);
    	} else {
    		return this.getToken(DSLParser.NEWLINE, i);
    	}
    }
    public topLevelStatement(): TopLevelStatementContext[];
    public topLevelStatement(i: number): TopLevelStatementContext | null;
    public topLevelStatement(i?: number): TopLevelStatementContext[] | TopLevelStatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TopLevelStatementContext);
        }

        return this.getRuleContext(i, TopLevelStatementContext);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_program;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterProgram) {
             listener.enterProgram(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitProgram) {
             listener.exitProgram(this);
        }
    }
}


export class TopLevelStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public elementDefinition(): ElementDefinitionContext | null {
        return this.getRuleContext(0, ElementDefinitionContext);
    }
    public interactionDefinition(): InteractionDefinitionContext | null {
        return this.getRuleContext(0, InteractionDefinitionContext);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_topLevelStatement;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterTopLevelStatement) {
             listener.enterTopLevelStatement(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitTopLevelStatement) {
             listener.exitTopLevelStatement(this);
        }
    }
}


export class ElementDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public elementKeyword(): ElementKeywordContext {
        return this.getRuleContext(0, ElementKeywordContext)!;
    }
    public pascalIdentifier(): PascalIdentifierContext {
        return this.getRuleContext(0, PascalIdentifierContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(DSLParser.COLON, 0)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(DSLParser.NEWLINE, 0)!;
    }
    public INDENT(): antlr.TerminalNode {
        return this.getToken(DSLParser.INDENT, 0)!;
    }
    public DEDENT(): antlr.TerminalNode {
        return this.getToken(DSLParser.DEDENT, 0)!;
    }
    public elementParent(): ElementParentContext | null {
        return this.getRuleContext(0, ElementParentContext);
    }
    public elementMember(): ElementMemberContext[];
    public elementMember(i: number): ElementMemberContext | null;
    public elementMember(i?: number): ElementMemberContext[] | ElementMemberContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ElementMemberContext);
        }

        return this.getRuleContext(i, ElementMemberContext);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_elementDefinition;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterElementDefinition) {
             listener.enterElementDefinition(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitElementDefinition) {
             listener.exitElementDefinition(this);
        }
    }
}


export class ElementKeywordContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ELEMENT(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.ELEMENT, 0);
    }
    public TEMPLATE_ELEMENT(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.TEMPLATE_ELEMENT, 0);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_elementKeyword;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterElementKeyword) {
             listener.enterElementKeyword(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitElementKeyword) {
             listener.exitElementKeyword(this);
        }
    }
}


export class ElementParentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IS(): antlr.TerminalNode {
        return this.getToken(DSLParser.IS, 0)!;
    }
    public LIKE(): antlr.TerminalNode {
        return this.getToken(DSLParser.LIKE, 0)!;
    }
    public typeReference(): TypeReferenceContext {
        return this.getRuleContext(0, TypeReferenceContext)!;
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_elementParent;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterElementParent) {
             listener.enterElementParent(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitElementParent) {
             listener.exitElementParent(this);
        }
    }
}


export class ElementMemberContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public elementVariableDefinition(): ElementVariableDefinitionContext | null {
        return this.getRuleContext(0, ElementVariableDefinitionContext);
    }
    public elementFunctionDefinition(): ElementFunctionDefinitionContext | null {
        return this.getRuleContext(0, ElementFunctionDefinitionContext);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_elementMember;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterElementMember) {
             listener.enterElementMember(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitElementMember) {
             listener.exitElementMember(this);
        }
    }
}


export class ElementVariableDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public HAS(): antlr.TerminalNode {
        return this.getToken(DSLParser.HAS, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(DSLParser.NEWLINE, 0)!;
    }
    public elementInitialValue(): ElementInitialValueContext | null {
        return this.getRuleContext(0, ElementInitialValueContext);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_elementVariableDefinition;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterElementVariableDefinition) {
             listener.enterElementVariableDefinition(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitElementVariableDefinition) {
             listener.exitElementVariableDefinition(this);
        }
    }
}


export class ElementInitialValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(DSLParser.WITH, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_elementInitialValue;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterElementInitialValue) {
             listener.enterElementInitialValue(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitElementInitialValue) {
             listener.exitElementInitialValue(this);
        }
    }
}


export class ElementFunctionDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public HAS(): antlr.TerminalNode {
        return this.getToken(DSLParser.HAS, 0)!;
    }
    public FUNCTION(): antlr.TerminalNode {
        return this.getToken(DSLParser.FUNCTION, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(DSLParser.COLON, 0)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(DSLParser.NEWLINE, 0)!;
    }
    public INDENT(): antlr.TerminalNode {
        return this.getToken(DSLParser.INDENT, 0)!;
    }
    public DEDENT(): antlr.TerminalNode {
        return this.getToken(DSLParser.DEDENT, 0)!;
    }
    public functionParameters(): FunctionParametersContext | null {
        return this.getRuleContext(0, FunctionParametersContext);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_elementFunctionDefinition;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterElementFunctionDefinition) {
             listener.enterElementFunctionDefinition(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitElementFunctionDefinition) {
             listener.exitElementFunctionDefinition(this);
        }
    }
}


export class FunctionParametersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NEEDS(): antlr.TerminalNode {
        return this.getToken(DSLParser.NEEDS, 0)!;
    }
    public parameter(): ParameterContext[];
    public parameter(i: number): ParameterContext | null;
    public parameter(i?: number): ParameterContext[] | ParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParameterContext);
        }

        return this.getRuleContext(i, ParameterContext);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_functionParameters;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterFunctionParameters) {
             listener.enterFunctionParameters(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitFunctionParameters) {
             listener.exitFunctionParameters(this);
        }
    }
}


export class ParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public typeReference(): TypeReferenceContext | null {
        return this.getRuleContext(0, TypeReferenceContext);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_parameter;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterParameter) {
             listener.enterParameter(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitParameter) {
             listener.exitParameter(this);
        }
    }
}


export class InteractionDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTERACTION(): antlr.TerminalNode {
        return this.getToken(DSLParser.INTERACTION, 0)!;
    }
    public pascalIdentifier(): PascalIdentifierContext[];
    public pascalIdentifier(i: number): PascalIdentifierContext | null;
    public pascalIdentifier(i?: number): PascalIdentifierContext[] | PascalIdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PascalIdentifierContext);
        }

        return this.getRuleContext(i, PascalIdentifierContext);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(DSLParser.WITH, 0)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(DSLParser.COLON, 0)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(DSLParser.NEWLINE, 0)!;
    }
    public INDENT(): antlr.TerminalNode {
        return this.getToken(DSLParser.INDENT, 0)!;
    }
    public DEDENT(): antlr.TerminalNode {
        return this.getToken(DSLParser.DEDENT, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_interactionDefinition;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterInteractionDefinition) {
             listener.enterInteractionDefinition(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitInteractionDefinition) {
             listener.exitInteractionDefinition(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variableAssignment(): VariableAssignmentContext | null {
        return this.getRuleContext(0, VariableAssignmentContext);
    }
    public giveStatement(): GiveStatementContext | null {
        return this.getRuleContext(0, GiveStatementContext);
    }
    public conditional(): ConditionalContext | null {
        return this.getRuleContext(0, ConditionalContext);
    }
    public collectionBasedLoop(): CollectionBasedLoopContext | null {
        return this.getRuleContext(0, CollectionBasedLoopContext);
    }
    public rangeBasedLoop(): RangeBasedLoopContext | null {
        return this.getRuleContext(0, RangeBasedLoopContext);
    }
    public skipIteration(): SkipIterationContext | null {
        return this.getRuleContext(0, SkipIterationContext);
    }
    public stopLooping(): StopLoopingContext | null {
        return this.getRuleContext(0, StopLoopingContext);
    }
    public doNothing(): DoNothingContext | null {
        return this.getRuleContext(0, DoNothingContext);
    }
    public expressionStatement(): ExpressionStatementContext | null {
        return this.getRuleContext(0, ExpressionStatementContext);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_statement;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterStatement) {
             listener.enterStatement(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitStatement) {
             listener.exitStatement(this);
        }
    }
}


export class VariableAssignmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LET(): antlr.TerminalNode {
        return this.getToken(DSLParser.LET, 0)!;
    }
    public generalIdentifier(): GeneralIdentifierContext {
        return this.getRuleContext(0, GeneralIdentifierContext)!;
    }
    public BE(): antlr.TerminalNode {
        return this.getToken(DSLParser.BE, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(DSLParser.NEWLINE, 0)!;
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_variableAssignment;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterVariableAssignment) {
             listener.enterVariableAssignment(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitVariableAssignment) {
             listener.exitVariableAssignment(this);
        }
    }
}


export class GiveStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GIVE(): antlr.TerminalNode {
        return this.getToken(DSLParser.GIVE, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(DSLParser.NEWLINE, 0)!;
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_giveStatement;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterGiveStatement) {
             listener.enterGiveStatement(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitGiveStatement) {
             listener.exitGiveStatement(this);
        }
    }
}


export class ExpressionStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public functionCall(): FunctionCallContext {
        return this.getRuleContext(0, FunctionCallContext)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(DSLParser.NEWLINE, 0)!;
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_expressionStatement;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterExpressionStatement) {
             listener.enterExpressionStatement(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitExpressionStatement) {
             listener.exitExpressionStatement(this);
        }
    }
}


export class ConditionalContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IF(): antlr.TerminalNode {
        return this.getToken(DSLParser.IF, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(DSLParser.COLON, 0)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(DSLParser.NEWLINE, 0)!;
    }
    public INDENT(): antlr.TerminalNode {
        return this.getToken(DSLParser.INDENT, 0)!;
    }
    public DEDENT(): antlr.TerminalNode {
        return this.getToken(DSLParser.DEDENT, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public elseIfClause(): ElseIfClauseContext[];
    public elseIfClause(i: number): ElseIfClauseContext | null;
    public elseIfClause(i?: number): ElseIfClauseContext[] | ElseIfClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ElseIfClauseContext);
        }

        return this.getRuleContext(i, ElseIfClauseContext);
    }
    public elseClause(): ElseClauseContext | null {
        return this.getRuleContext(0, ElseClauseContext);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_conditional;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterConditional) {
             listener.enterConditional(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitConditional) {
             listener.exitConditional(this);
        }
    }
}


export class ElseIfClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ELSE(): antlr.TerminalNode {
        return this.getToken(DSLParser.ELSE, 0)!;
    }
    public IF(): antlr.TerminalNode {
        return this.getToken(DSLParser.IF, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(DSLParser.COLON, 0)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(DSLParser.NEWLINE, 0)!;
    }
    public INDENT(): antlr.TerminalNode {
        return this.getToken(DSLParser.INDENT, 0)!;
    }
    public DEDENT(): antlr.TerminalNode {
        return this.getToken(DSLParser.DEDENT, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_elseIfClause;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterElseIfClause) {
             listener.enterElseIfClause(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitElseIfClause) {
             listener.exitElseIfClause(this);
        }
    }
}


export class ElseClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ELSE(): antlr.TerminalNode {
        return this.getToken(DSLParser.ELSE, 0)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(DSLParser.COLON, 0)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(DSLParser.NEWLINE, 0)!;
    }
    public INDENT(): antlr.TerminalNode {
        return this.getToken(DSLParser.INDENT, 0)!;
    }
    public DEDENT(): antlr.TerminalNode {
        return this.getToken(DSLParser.DEDENT, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_elseClause;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterElseClause) {
             listener.enterElseClause(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitElseClause) {
             listener.exitElseClause(this);
        }
    }
}


export class CollectionBasedLoopContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FOR_EVERY(): antlr.TerminalNode {
        return this.getToken(DSLParser.FOR_EVERY, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public IN(): antlr.TerminalNode {
        return this.getToken(DSLParser.IN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(DSLParser.COLON, 0)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(DSLParser.NEWLINE, 0)!;
    }
    public INDENT(): antlr.TerminalNode {
        return this.getToken(DSLParser.INDENT, 0)!;
    }
    public DEDENT(): antlr.TerminalNode {
        return this.getToken(DSLParser.DEDENT, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_collectionBasedLoop;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterCollectionBasedLoop) {
             listener.enterCollectionBasedLoop(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitCollectionBasedLoop) {
             listener.exitCollectionBasedLoop(this);
        }
    }
}


export class RangeBasedLoopContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GO_THROUGH(): antlr.TerminalNode {
        return this.getToken(DSLParser.GO_THROUGH, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(DSLParser.TO, 0)!;
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(DSLParser.WITH, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(DSLParser.COLON, 0)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(DSLParser.NEWLINE, 0)!;
    }
    public INDENT(): antlr.TerminalNode {
        return this.getToken(DSLParser.INDENT, 0)!;
    }
    public DEDENT(): antlr.TerminalNode {
        return this.getToken(DSLParser.DEDENT, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_rangeBasedLoop;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterRangeBasedLoop) {
             listener.enterRangeBasedLoop(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitRangeBasedLoop) {
             listener.exitRangeBasedLoop(this);
        }
    }
}


export class SkipIterationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SKIP_ITERATION(): antlr.TerminalNode {
        return this.getToken(DSLParser.SKIP_ITERATION, 0)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(DSLParser.NEWLINE, 0)!;
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_skipIteration;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterSkipIteration) {
             listener.enterSkipIteration(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitSkipIteration) {
             listener.exitSkipIteration(this);
        }
    }
}


export class StopLoopingContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STOP_LOOPING(): antlr.TerminalNode {
        return this.getToken(DSLParser.STOP_LOOPING, 0)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(DSLParser.NEWLINE, 0)!;
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_stopLooping;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterStopLooping) {
             listener.enterStopLooping(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitStopLooping) {
             listener.exitStopLooping(this);
        }
    }
}


export class DoNothingContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DO_NOTHING(): antlr.TerminalNode {
        return this.getToken(DSLParser.DO_NOTHING, 0)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(DSLParser.NEWLINE, 0)!;
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_doNothing;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterDoNothing) {
             listener.enterDoNothing(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitDoNothing) {
             listener.exitDoNothing(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public booleanOrExpression(): BooleanOrExpressionContext {
        return this.getRuleContext(0, BooleanOrExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_expression;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterExpression) {
             listener.enterExpression(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitExpression) {
             listener.exitExpression(this);
        }
    }
}


export class BooleanOrExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public booleanAndExpression(): BooleanAndExpressionContext[];
    public booleanAndExpression(i: number): BooleanAndExpressionContext | null;
    public booleanAndExpression(i?: number): BooleanAndExpressionContext[] | BooleanAndExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BooleanAndExpressionContext);
        }

        return this.getRuleContext(i, BooleanAndExpressionContext);
    }
    public OR(): antlr.TerminalNode[];
    public OR(i: number): antlr.TerminalNode | null;
    public OR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(DSLParser.OR);
    	} else {
    		return this.getToken(DSLParser.OR, i);
    	}
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_booleanOrExpression;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterBooleanOrExpression) {
             listener.enterBooleanOrExpression(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitBooleanOrExpression) {
             listener.exitBooleanOrExpression(this);
        }
    }
}


export class BooleanAndExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public booleanComparison(): BooleanComparisonContext[];
    public booleanComparison(i: number): BooleanComparisonContext | null;
    public booleanComparison(i?: number): BooleanComparisonContext[] | BooleanComparisonContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BooleanComparisonContext);
        }

        return this.getRuleContext(i, BooleanComparisonContext);
    }
    public AND(): antlr.TerminalNode[];
    public AND(i: number): antlr.TerminalNode | null;
    public AND(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(DSLParser.AND);
    	} else {
    		return this.getToken(DSLParser.AND, i);
    	}
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_booleanAndExpression;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterBooleanAndExpression) {
             listener.enterBooleanAndExpression(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitBooleanAndExpression) {
             listener.exitBooleanAndExpression(this);
        }
    }
}


export class BooleanComparisonContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public arithmeticExpression(): ArithmeticExpressionContext[];
    public arithmeticExpression(i: number): ArithmeticExpressionContext | null;
    public arithmeticExpression(i?: number): ArithmeticExpressionContext[] | ArithmeticExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ArithmeticExpressionContext);
        }

        return this.getRuleContext(i, ArithmeticExpressionContext);
    }
    public comparisonOperator(): ComparisonOperatorContext | null {
        return this.getRuleContext(0, ComparisonOperatorContext);
    }
    public IS(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.IS, 0);
    }
    public typeReference(): TypeReferenceContext | null {
        return this.getRuleContext(0, TypeReferenceContext);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_booleanComparison;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterBooleanComparison) {
             listener.enterBooleanComparison(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitBooleanComparison) {
             listener.exitBooleanComparison(this);
        }
    }
}


export class ComparisonOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQUALS(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.EQUALS, 0);
    }
    public LESS_THAN(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.LESS_THAN, 0);
    }
    public GREATER_THAN(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.GREATER_THAN, 0);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_comparisonOperator;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterComparisonOperator) {
             listener.enterComparisonOperator(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitComparisonOperator) {
             listener.exitComparisonOperator(this);
        }
    }
}


export class ArithmeticExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public multiplicationExpression(): MultiplicationExpressionContext[];
    public multiplicationExpression(i: number): MultiplicationExpressionContext | null;
    public multiplicationExpression(i?: number): MultiplicationExpressionContext[] | MultiplicationExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MultiplicationExpressionContext);
        }

        return this.getRuleContext(i, MultiplicationExpressionContext);
    }
    public PLUS(): antlr.TerminalNode[];
    public PLUS(i: number): antlr.TerminalNode | null;
    public PLUS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(DSLParser.PLUS);
    	} else {
    		return this.getToken(DSLParser.PLUS, i);
    	}
    }
    public MINUS(): antlr.TerminalNode[];
    public MINUS(i: number): antlr.TerminalNode | null;
    public MINUS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(DSLParser.MINUS);
    	} else {
    		return this.getToken(DSLParser.MINUS, i);
    	}
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_arithmeticExpression;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterArithmeticExpression) {
             listener.enterArithmeticExpression(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitArithmeticExpression) {
             listener.exitArithmeticExpression(this);
        }
    }
}


export class MultiplicationExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public unaryExpression(): UnaryExpressionContext[];
    public unaryExpression(i: number): UnaryExpressionContext | null;
    public unaryExpression(i?: number): UnaryExpressionContext[] | UnaryExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UnaryExpressionContext);
        }

        return this.getRuleContext(i, UnaryExpressionContext);
    }
    public MULTIPLY(): antlr.TerminalNode[];
    public MULTIPLY(i: number): antlr.TerminalNode | null;
    public MULTIPLY(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(DSLParser.MULTIPLY);
    	} else {
    		return this.getToken(DSLParser.MULTIPLY, i);
    	}
    }
    public DIVIDE(): antlr.TerminalNode[];
    public DIVIDE(i: number): antlr.TerminalNode | null;
    public DIVIDE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(DSLParser.DIVIDE);
    	} else {
    		return this.getToken(DSLParser.DIVIDE, i);
    	}
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_multiplicationExpression;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterMultiplicationExpression) {
             listener.enterMultiplicationExpression(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitMultiplicationExpression) {
             listener.exitMultiplicationExpression(this);
        }
    }
}


export class UnaryExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.NOT, 0);
    }
    public unaryExpression(): UnaryExpressionContext | null {
        return this.getRuleContext(0, UnaryExpressionContext);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.MINUS, 0);
    }
    public primaryExpression(): PrimaryExpressionContext | null {
        return this.getRuleContext(0, PrimaryExpressionContext);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_unaryExpression;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterUnaryExpression) {
             listener.enterUnaryExpression(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitUnaryExpression) {
             listener.exitUnaryExpression(this);
        }
    }
}


export class PrimaryExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public literal(): LiteralContext | null {
        return this.getRuleContext(0, LiteralContext);
    }
    public functionCall(): FunctionCallContext | null {
        return this.getRuleContext(0, FunctionCallContext);
    }
    public generalIdentifier(): GeneralIdentifierContext | null {
        return this.getRuleContext(0, GeneralIdentifierContext);
    }
    public elementTypeReference(): ElementTypeReferenceContext | null {
        return this.getRuleContext(0, ElementTypeReferenceContext);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.LPAREN, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.RPAREN, 0);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_primaryExpression;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterPrimaryExpression) {
             listener.enterPrimaryExpression(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitPrimaryExpression) {
             listener.exitPrimaryExpression(this);
        }
    }
}


export class FunctionCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public generalIdentifier(): GeneralIdentifierContext {
        return this.getRuleContext(0, GeneralIdentifierContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(DSLParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(DSLParser.RPAREN, 0)!;
    }
    public argumentList(): ArgumentListContext | null {
        return this.getRuleContext(0, ArgumentListContext);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_functionCall;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterFunctionCall) {
             listener.enterFunctionCall(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitFunctionCall) {
             listener.exitFunctionCall(this);
        }
    }
}


export class ArgumentListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(DSLParser.COMMA);
    	} else {
    		return this.getToken(DSLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_argumentList;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterArgumentList) {
             listener.enterArgumentList(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitArgumentList) {
             listener.exitArgumentList(this);
        }
    }
}


export class GeneralIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public memberAccess(): MemberAccessContext[];
    public memberAccess(i: number): MemberAccessContext | null;
    public memberAccess(i?: number): MemberAccessContext[] | MemberAccessContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MemberAccessContext);
        }

        return this.getRuleContext(i, MemberAccessContext);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_generalIdentifier;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterGeneralIdentifier) {
             listener.enterGeneralIdentifier(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitGeneralIdentifier) {
             listener.exitGeneralIdentifier(this);
        }
    }
}


export class MemberAccessContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(DSLParser.DOT, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_memberAccess;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterMemberAccess) {
             listener.enterMemberAccess(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitMemberAccess) {
             listener.exitMemberAccess(this);
        }
    }
}


export class IdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(DSLParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_identifier;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterIdentifier) {
             listener.enterIdentifier(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitIdentifier) {
             listener.exitIdentifier(this);
        }
    }
}


export class PascalIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PASCAL_IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(DSLParser.PASCAL_IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_pascalIdentifier;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterPascalIdentifier) {
             listener.enterPascalIdentifier(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitPascalIdentifier) {
             listener.exitPascalIdentifier(this);
        }
    }
}


export class LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMBER(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.NUMBER, 0);
    }
    public BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.BOOLEAN, 0);
    }
    public COLOR(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.COLOR, 0);
    }
    public NULL(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.NULL, 0);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_literal;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterLiteral) {
             listener.enterLiteral(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitLiteral) {
             listener.exitLiteral(this);
        }
    }
}


export class TypeLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMBER_TYPE(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.NUMBER_TYPE, 0);
    }
    public BOOLEAN_TYPE(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.BOOLEAN_TYPE, 0);
    }
    public COLOR_TYPE(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.COLOR_TYPE, 0);
    }
    public ELEMENT_TYPE(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.ELEMENT_TYPE, 0);
    }
    public ELEMENT_TYPE_TYPE(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.ELEMENT_TYPE_TYPE, 0);
    }
    public NULL_TYPE(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.NULL_TYPE, 0);
    }
    public TYPE_TYPE(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.TYPE_TYPE, 0);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_typeLiteral;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterTypeLiteral) {
             listener.enterTypeLiteral(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitTypeLiteral) {
             listener.exitTypeLiteral(this);
        }
    }
}


export class ElementTypeReferenceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pascalIdentifier(): PascalIdentifierContext {
        return this.getRuleContext(0, PascalIdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_elementTypeReference;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterElementTypeReference) {
             listener.enterElementTypeReference(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitElementTypeReference) {
             listener.exitElementTypeReference(this);
        }
    }
}


export class TypeReferenceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeLiteral(): TypeLiteralContext | null {
        return this.getRuleContext(0, TypeLiteralContext);
    }
    public elementTypeReference(): ElementTypeReferenceContext | null {
        return this.getRuleContext(0, ElementTypeReferenceContext);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_typeReference;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterTypeReference) {
             listener.enterTypeReference(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitTypeReference) {
             listener.exitTypeReference(this);
        }
    }
}
