
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
    public static readonly FOR = 20;
    public static readonly NEXT = 21;
    public static readonly TICKS = 22;
    public static readonly SKIP_ITERATION = 23;
    public static readonly STOP_LOOPING = 24;
    public static readonly DO_NOTHING = 25;
    public static readonly INTERACTION = 26;
    public static readonly NOT = 27;
    public static readonly EQUALS = 28;
    public static readonly LESS_THAN = 29;
    public static readonly GREATER_THAN = 30;
    public static readonly AND = 31;
    public static readonly OR = 32;
    public static readonly NUMBER_TYPE = 33;
    public static readonly BOOLEAN_TYPE = 34;
    public static readonly COLOR_TYPE = 35;
    public static readonly ELEMENT_TYPE = 36;
    public static readonly ELEMENT_TYPE_TYPE = 37;
    public static readonly NULL_TYPE = 38;
    public static readonly TYPE_TYPE = 39;
    public static readonly BOOLEAN = 40;
    public static readonly NULL = 41;
    public static readonly COLOR = 42;
    public static readonly NUMBER = 43;
    public static readonly HEX_COLOR = 44;
    public static readonly IDENTIFIER = 45;
    public static readonly PLUS = 46;
    public static readonly MINUS = 47;
    public static readonly MULTIPLY = 48;
    public static readonly DIVIDE = 49;
    public static readonly DOT = 50;
    public static readonly COMMA = 51;
    public static readonly LPAREN = 52;
    public static readonly RPAREN = 53;
    public static readonly COLON = 54;
    public static readonly NEWLINE = 55;
    public static readonly COMMENT = 56;
    public static readonly SPACE = 57;
    public static readonly TAB = 58;
    public static readonly RULE_program = 0;
    public static readonly RULE_topLevelStatment = 1;
    public static readonly RULE_elementDefinition = 2;
    public static readonly RULE_elementKeyword = 3;
    public static readonly RULE_elementParent = 4;
    public static readonly RULE_elementMember = 5;
    public static readonly RULE_elementVariableDefinition = 6;
    public static readonly RULE_elementInitialValue = 7;
    public static readonly RULE_elementFunctionDefinition = 8;
    public static readonly RULE_functionParameters = 9;
    public static readonly RULE_parameter = 10;
    public static readonly RULE_declaredType = 11;
    public static readonly RULE_interactionDefinition = 12;
    public static readonly RULE_statement = 13;
    public static readonly RULE_variableAssignment = 14;
    public static readonly RULE_giveStatement = 15;
    public static readonly RULE_expressionStatement = 16;
    public static readonly RULE_conditional = 17;
    public static readonly RULE_elseIfClause = 18;
    public static readonly RULE_elseClause = 19;
    public static readonly RULE_collectionBasedLoop = 20;
    public static readonly RULE_rangeBasedLoop = 21;
    public static readonly RULE_nextTicksLoop = 22;
    public static readonly RULE_skipIteration = 23;
    public static readonly RULE_stopLooping = 24;
    public static readonly RULE_doNothing = 25;
    public static readonly RULE_expression = 26;
    public static readonly RULE_booleanOrExpression = 27;
    public static readonly RULE_booleanAndExpression = 28;
    public static readonly RULE_booleanComparison = 29;
    public static readonly RULE_comparisonOperator = 30;
    public static readonly RULE_arithmeticExpression = 31;
    public static readonly RULE_multiplicationExpression = 32;
    public static readonly RULE_unaryExpression = 33;
    public static readonly RULE_primaryExpression = 34;
    public static readonly RULE_functionCall = 35;
    public static readonly RULE_argumentList = 36;
    public static readonly RULE_generalIdentifier = 37;
    public static readonly RULE_memberAccess = 38;
    public static readonly RULE_identifier = 39;
    public static readonly RULE_typeOrIdentifier = 40;
    public static readonly RULE_literal = 41;
    public static readonly RULE_typeLiteral = 42;
    public static readonly RULE_elementTypeLiteral = 43;

    public static readonly literalNames = [
        null, null, null, "'element'", "'template-element'", "'has'", "'with'", 
        "'is'", "'like'", "'function'", "'needs'", "'let'", "'be'", "'give'", 
        "'if'", "'else'", "'for-every'", "'go-through'", "'in'", "'to'", 
        "'for'", "'next'", "'ticks'", "'skip-iteration'", "'stop-looping'", 
        "'do-nothing'", "'interaction'", "'not'", "'equals'", "'less-than'", 
        "'greater-than'", "'and'", "'or'", "'Number'", "'Boolean'", "'Color'", 
        "'Element'", "'ElementType'", "'Null'", "'Type'", null, "'null'", 
        null, null, null, null, "'+'", "'-'", "'*'", "'/'", "'.'", "','", 
        "'('", "')'", "':'", null, null, null, "'\\t'"
    ];

    public static readonly symbolicNames = [
        null, "INDENT", "DEDENT", "ELEMENT", "TEMPLATE_ELEMENT", "HAS", 
        "WITH", "IS", "LIKE", "FUNCTION", "NEEDS", "LET", "BE", "GIVE", 
        "IF", "ELSE", "FOR_EVERY", "GO_THROUGH", "IN", "TO", "FOR", "NEXT", 
        "TICKS", "SKIP_ITERATION", "STOP_LOOPING", "DO_NOTHING", "INTERACTION", 
        "NOT", "EQUALS", "LESS_THAN", "GREATER_THAN", "AND", "OR", "NUMBER_TYPE", 
        "BOOLEAN_TYPE", "COLOR_TYPE", "ELEMENT_TYPE", "ELEMENT_TYPE_TYPE", 
        "NULL_TYPE", "TYPE_TYPE", "BOOLEAN", "NULL", "COLOR", "NUMBER", 
        "HEX_COLOR", "IDENTIFIER", "PLUS", "MINUS", "MULTIPLY", "DIVIDE", 
        "DOT", "COMMA", "LPAREN", "RPAREN", "COLON", "NEWLINE", "COMMENT", 
        "SPACE", "TAB"
    ];
    public static readonly ruleNames = [
        "program", "topLevelStatment", "elementDefinition", "elementKeyword", 
        "elementParent", "elementMember", "elementVariableDefinition", "elementInitialValue", 
        "elementFunctionDefinition", "functionParameters", "parameter", 
        "declaredType", "interactionDefinition", "statement", "variableAssignment", 
        "giveStatement", "expressionStatement", "conditional", "elseIfClause", 
        "elseClause", "collectionBasedLoop", "rangeBasedLoop", "nextTicksLoop", 
        "skipIteration", "stopLooping", "doNothing", "expression", "booleanOrExpression", 
        "booleanAndExpression", "booleanComparison", "comparisonOperator", 
        "arithmeticExpression", "multiplicationExpression", "unaryExpression", 
        "primaryExpression", "functionCall", "argumentList", "generalIdentifier", 
        "memberAccess", "identifier", "typeOrIdentifier", "literal", "typeLiteral", 
        "elementTypeLiteral",
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
            this.state = 91;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 55) {
                {
                {
                this.state = 88;
                this.match(DSLParser.NEWLINE);
                }
                }
                this.state = 93;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 97;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67108888) !== 0)) {
                {
                {
                this.state = 94;
                this.topLevelStatment();
                }
                }
                this.state = 99;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 100;
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
    public topLevelStatment(): TopLevelStatmentContext {
        let localContext = new TopLevelStatmentContext(this.context, this.state);
        this.enterRule(localContext, 2, DSLParser.RULE_topLevelStatment);
        try {
            this.state = 104;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DSLParser.ELEMENT:
            case DSLParser.TEMPLATE_ELEMENT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 102;
                this.elementDefinition();
                }
                break;
            case DSLParser.INTERACTION:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 103;
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
            this.state = 106;
            this.elementKeyword();
            this.state = 107;
            this.identifier();
            this.state = 109;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 7) {
                {
                this.state = 108;
                this.elementParent();
                }
            }

            this.state = 111;
            this.match(DSLParser.COLON);
            this.state = 112;
            this.match(DSLParser.NEWLINE);
            this.state = 113;
            this.match(DSLParser.INDENT);
            this.state = 117;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 114;
                this.elementMember();
                }
                }
                this.state = 119;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 120;
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
            this.state = 122;
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
            this.state = 124;
            this.match(DSLParser.IS);
            this.state = 125;
            this.match(DSLParser.LIKE);
            this.state = 126;
            this.typeOrIdentifier();
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
            this.state = 130;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 128;
                this.elementVariableDefinition();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 129;
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
            this.state = 132;
            this.match(DSLParser.HAS);
            this.state = 133;
            this.identifier();
            this.state = 135;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 134;
                this.elementInitialValue();
                }
            }

            this.state = 137;
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
            this.state = 139;
            this.match(DSLParser.WITH);
            this.state = 140;
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
            this.state = 142;
            this.match(DSLParser.HAS);
            this.state = 143;
            this.match(DSLParser.FUNCTION);
            this.state = 144;
            this.identifier();
            this.state = 146;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10) {
                {
                this.state = 145;
                this.functionParameters();
                }
            }

            this.state = 148;
            this.match(DSLParser.COLON);
            this.state = 149;
            this.match(DSLParser.NEWLINE);
            this.state = 150;
            this.match(DSLParser.INDENT);
            this.state = 154;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 194209792) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 530431) !== 0)) {
                {
                {
                this.state = 151;
                this.statement();
                }
                }
                this.state = 156;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 157;
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
            this.state = 159;
            this.match(DSLParser.NEEDS);
            this.state = 161;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 160;
                this.parameter();
                }
                }
                this.state = 163;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 45);
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
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 165;
            this.identifier();
            this.state = 167;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 10, this.context) ) {
            case 1:
                {
                this.state = 166;
                this.declaredType();
                }
                break;
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
    public declaredType(): DeclaredTypeContext {
        let localContext = new DeclaredTypeContext(this.context, this.state);
        this.enterRule(localContext, 22, DSLParser.RULE_declaredType);
        try {
            this.state = 171;
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
                this.state = 169;
                this.typeLiteral();
                }
                break;
            case DSLParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 170;
                this.elementTypeLiteral();
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
    public interactionDefinition(): InteractionDefinitionContext {
        let localContext = new InteractionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 24, DSLParser.RULE_interactionDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 173;
            this.match(DSLParser.INTERACTION);
            this.state = 174;
            this.identifier();
            this.state = 175;
            this.identifier();
            this.state = 176;
            this.match(DSLParser.WITH);
            this.state = 177;
            this.identifier();
            this.state = 178;
            this.identifier();
            this.state = 179;
            this.match(DSLParser.COLON);
            this.state = 180;
            this.match(DSLParser.NEWLINE);
            this.state = 181;
            this.match(DSLParser.INDENT);
            this.state = 185;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 194209792) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 530431) !== 0)) {
                {
                {
                this.state = 182;
                this.statement();
                }
                }
                this.state = 187;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 188;
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
        this.enterRule(localContext, 26, DSLParser.RULE_statement);
        try {
            this.state = 200;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DSLParser.LET:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 190;
                this.variableAssignment();
                }
                break;
            case DSLParser.GIVE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 191;
                this.giveStatement();
                }
                break;
            case DSLParser.IF:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 192;
                this.conditional();
                }
                break;
            case DSLParser.FOR_EVERY:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 193;
                this.collectionBasedLoop();
                }
                break;
            case DSLParser.GO_THROUGH:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 194;
                this.rangeBasedLoop();
                }
                break;
            case DSLParser.FOR:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 195;
                this.nextTicksLoop();
                }
                break;
            case DSLParser.SKIP_ITERATION:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 196;
                this.skipIteration();
                }
                break;
            case DSLParser.STOP_LOOPING:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 197;
                this.stopLooping();
                }
                break;
            case DSLParser.DO_NOTHING:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 198;
                this.doNothing();
                }
                break;
            case DSLParser.NOT:
            case DSLParser.NUMBER_TYPE:
            case DSLParser.BOOLEAN_TYPE:
            case DSLParser.COLOR_TYPE:
            case DSLParser.ELEMENT_TYPE:
            case DSLParser.ELEMENT_TYPE_TYPE:
            case DSLParser.NULL_TYPE:
            case DSLParser.TYPE_TYPE:
            case DSLParser.BOOLEAN:
            case DSLParser.NULL:
            case DSLParser.COLOR:
            case DSLParser.NUMBER:
            case DSLParser.IDENTIFIER:
            case DSLParser.LPAREN:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 199;
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
        this.enterRule(localContext, 28, DSLParser.RULE_variableAssignment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 202;
            this.match(DSLParser.LET);
            this.state = 203;
            this.generalIdentifier();
            this.state = 204;
            this.match(DSLParser.BE);
            this.state = 205;
            this.expression();
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
    public giveStatement(): GiveStatementContext {
        let localContext = new GiveStatementContext(this.context, this.state);
        this.enterRule(localContext, 30, DSLParser.RULE_giveStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 208;
            this.match(DSLParser.GIVE);
            this.state = 209;
            this.expression();
            this.state = 210;
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
        this.enterRule(localContext, 32, DSLParser.RULE_expressionStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 212;
            this.expression();
            this.state = 213;
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
        this.enterRule(localContext, 34, DSLParser.RULE_conditional);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 215;
            this.match(DSLParser.IF);
            this.state = 216;
            this.expression();
            this.state = 217;
            this.match(DSLParser.COLON);
            this.state = 218;
            this.match(DSLParser.NEWLINE);
            this.state = 219;
            this.match(DSLParser.INDENT);
            this.state = 223;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 194209792) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 530431) !== 0)) {
                {
                {
                this.state = 220;
                this.statement();
                }
                }
                this.state = 225;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 226;
            this.match(DSLParser.DEDENT);
            this.state = 230;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 227;
                    this.elseIfClause();
                    }
                    }
                }
                this.state = 232;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
            }
            this.state = 234;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 15) {
                {
                this.state = 233;
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
        this.enterRule(localContext, 36, DSLParser.RULE_elseIfClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 236;
            this.match(DSLParser.ELSE);
            this.state = 237;
            this.match(DSLParser.IF);
            this.state = 238;
            this.expression();
            this.state = 239;
            this.match(DSLParser.COLON);
            this.state = 240;
            this.match(DSLParser.NEWLINE);
            this.state = 241;
            this.match(DSLParser.INDENT);
            this.state = 245;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 194209792) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 530431) !== 0)) {
                {
                {
                this.state = 242;
                this.statement();
                }
                }
                this.state = 247;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 248;
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
        this.enterRule(localContext, 38, DSLParser.RULE_elseClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 250;
            this.match(DSLParser.ELSE);
            this.state = 251;
            this.match(DSLParser.COLON);
            this.state = 252;
            this.match(DSLParser.NEWLINE);
            this.state = 253;
            this.match(DSLParser.INDENT);
            this.state = 257;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 194209792) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 530431) !== 0)) {
                {
                {
                this.state = 254;
                this.statement();
                }
                }
                this.state = 259;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 260;
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
        this.enterRule(localContext, 40, DSLParser.RULE_collectionBasedLoop);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 262;
            this.match(DSLParser.FOR_EVERY);
            this.state = 263;
            this.identifier();
            this.state = 264;
            this.match(DSLParser.IN);
            this.state = 265;
            this.expression();
            this.state = 266;
            this.match(DSLParser.COLON);
            this.state = 267;
            this.match(DSLParser.NEWLINE);
            this.state = 268;
            this.match(DSLParser.INDENT);
            this.state = 272;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 194209792) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 530431) !== 0)) {
                {
                {
                this.state = 269;
                this.statement();
                }
                }
                this.state = 274;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 275;
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
        this.enterRule(localContext, 42, DSLParser.RULE_rangeBasedLoop);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 277;
            this.match(DSLParser.GO_THROUGH);
            this.state = 278;
            this.expression();
            this.state = 279;
            this.match(DSLParser.TO);
            this.state = 280;
            this.expression();
            this.state = 281;
            this.match(DSLParser.WITH);
            this.state = 282;
            this.identifier();
            this.state = 283;
            this.match(DSLParser.COLON);
            this.state = 284;
            this.match(DSLParser.NEWLINE);
            this.state = 285;
            this.match(DSLParser.INDENT);
            this.state = 289;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 194209792) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 530431) !== 0)) {
                {
                {
                this.state = 286;
                this.statement();
                }
                }
                this.state = 291;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 292;
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
    public nextTicksLoop(): NextTicksLoopContext {
        let localContext = new NextTicksLoopContext(this.context, this.state);
        this.enterRule(localContext, 44, DSLParser.RULE_nextTicksLoop);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 294;
            this.match(DSLParser.FOR);
            this.state = 295;
            this.match(DSLParser.NEXT);
            this.state = 296;
            this.expression();
            this.state = 297;
            this.match(DSLParser.TICKS);
            this.state = 298;
            this.match(DSLParser.COLON);
            this.state = 299;
            this.match(DSLParser.NEWLINE);
            this.state = 300;
            this.match(DSLParser.INDENT);
            this.state = 304;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 194209792) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 530431) !== 0)) {
                {
                {
                this.state = 301;
                this.statement();
                }
                }
                this.state = 306;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 307;
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
        this.enterRule(localContext, 46, DSLParser.RULE_skipIteration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 309;
            this.match(DSLParser.SKIP_ITERATION);
            this.state = 310;
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
        this.enterRule(localContext, 48, DSLParser.RULE_stopLooping);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 312;
            this.match(DSLParser.STOP_LOOPING);
            this.state = 313;
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
        this.enterRule(localContext, 50, DSLParser.RULE_doNothing);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 315;
            this.match(DSLParser.DO_NOTHING);
            this.state = 316;
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
        this.enterRule(localContext, 52, DSLParser.RULE_expression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 318;
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
        this.enterRule(localContext, 54, DSLParser.RULE_booleanOrExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 320;
            this.booleanAndExpression();
            this.state = 325;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 32) {
                {
                {
                this.state = 321;
                this.match(DSLParser.OR);
                this.state = 322;
                this.booleanAndExpression();
                }
                }
                this.state = 327;
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
        this.enterRule(localContext, 56, DSLParser.RULE_booleanAndExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 328;
            this.booleanComparison();
            this.state = 333;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 31) {
                {
                {
                this.state = 329;
                this.match(DSLParser.AND);
                this.state = 330;
                this.booleanComparison();
                }
                }
                this.state = 335;
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
        this.enterRule(localContext, 58, DSLParser.RULE_booleanComparison);
        try {
            this.state = 341;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 24, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 336;
                this.arithmeticExpression();
                this.state = 337;
                this.comparisonOperator();
                this.state = 338;
                this.arithmeticExpression();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 340;
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
        this.enterRule(localContext, 60, DSLParser.RULE_comparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 343;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1879048192) !== 0))) {
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
        this.enterRule(localContext, 62, DSLParser.RULE_arithmeticExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 345;
            this.multiplicationExpression();
            this.state = 350;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 46 || _la === 47) {
                {
                {
                this.state = 346;
                _la = this.tokenStream.LA(1);
                if(!(_la === 46 || _la === 47)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 347;
                this.multiplicationExpression();
                }
                }
                this.state = 352;
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
        this.enterRule(localContext, 64, DSLParser.RULE_multiplicationExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 353;
            this.unaryExpression();
            this.state = 358;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 48 || _la === 49) {
                {
                {
                this.state = 354;
                _la = this.tokenStream.LA(1);
                if(!(_la === 48 || _la === 49)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 355;
                this.unaryExpression();
                }
                }
                this.state = 360;
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
        this.enterRule(localContext, 66, DSLParser.RULE_unaryExpression);
        try {
            this.state = 364;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DSLParser.NOT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 361;
                this.match(DSLParser.NOT);
                this.state = 362;
                this.unaryExpression();
                }
                break;
            case DSLParser.NUMBER_TYPE:
            case DSLParser.BOOLEAN_TYPE:
            case DSLParser.COLOR_TYPE:
            case DSLParser.ELEMENT_TYPE:
            case DSLParser.ELEMENT_TYPE_TYPE:
            case DSLParser.NULL_TYPE:
            case DSLParser.TYPE_TYPE:
            case DSLParser.BOOLEAN:
            case DSLParser.NULL:
            case DSLParser.COLOR:
            case DSLParser.NUMBER:
            case DSLParser.IDENTIFIER:
            case DSLParser.LPAREN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 363;
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
        this.enterRule(localContext, 68, DSLParser.RULE_primaryExpression);
        try {
            this.state = 373;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 28, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 366;
                this.literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 367;
                this.functionCall();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 368;
                this.generalIdentifier();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 369;
                this.match(DSLParser.LPAREN);
                this.state = 370;
                this.expression();
                this.state = 371;
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
        this.enterRule(localContext, 70, DSLParser.RULE_functionCall);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 375;
            this.generalIdentifier();
            this.state = 376;
            this.match(DSLParser.LPAREN);
            this.state = 378;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 33947585) !== 0)) {
                {
                this.state = 377;
                this.argumentList();
                }
            }

            this.state = 380;
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
        this.enterRule(localContext, 72, DSLParser.RULE_argumentList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 382;
            this.expression();
            this.state = 387;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 51) {
                {
                {
                this.state = 383;
                this.match(DSLParser.COMMA);
                this.state = 384;
                this.expression();
                }
                }
                this.state = 389;
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
        this.enterRule(localContext, 74, DSLParser.RULE_generalIdentifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 390;
            this.identifier();
            this.state = 394;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 50) {
                {
                {
                this.state = 391;
                this.memberAccess();
                }
                }
                this.state = 396;
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
        this.enterRule(localContext, 76, DSLParser.RULE_memberAccess);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 397;
            this.match(DSLParser.DOT);
            this.state = 398;
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
        this.enterRule(localContext, 78, DSLParser.RULE_identifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 400;
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
    public typeOrIdentifier(): TypeOrIdentifierContext {
        let localContext = new TypeOrIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 80, DSLParser.RULE_typeOrIdentifier);
        try {
            this.state = 404;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DSLParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 402;
                this.identifier();
                }
                break;
            case DSLParser.NUMBER_TYPE:
            case DSLParser.BOOLEAN_TYPE:
            case DSLParser.COLOR_TYPE:
            case DSLParser.ELEMENT_TYPE:
            case DSLParser.ELEMENT_TYPE_TYPE:
            case DSLParser.NULL_TYPE:
            case DSLParser.TYPE_TYPE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 403;
                this.typeLiteral();
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
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 82, DSLParser.RULE_literal);
        try {
            this.state = 412;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DSLParser.NUMBER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 406;
                this.match(DSLParser.NUMBER);
                }
                break;
            case DSLParser.BOOLEAN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 407;
                this.match(DSLParser.BOOLEAN);
                }
                break;
            case DSLParser.COLOR:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 408;
                this.match(DSLParser.COLOR);
                }
                break;
            case DSLParser.NULL:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 409;
                this.match(DSLParser.NULL);
                }
                break;
            case DSLParser.NUMBER_TYPE:
            case DSLParser.BOOLEAN_TYPE:
            case DSLParser.COLOR_TYPE:
            case DSLParser.ELEMENT_TYPE:
            case DSLParser.ELEMENT_TYPE_TYPE:
            case DSLParser.NULL_TYPE:
            case DSLParser.TYPE_TYPE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 410;
                this.typeLiteral();
                }
                break;
            case DSLParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 411;
                this.elementTypeLiteral();
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
    public typeLiteral(): TypeLiteralContext {
        let localContext = new TypeLiteralContext(this.context, this.state);
        this.enterRule(localContext, 84, DSLParser.RULE_typeLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 414;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 127) !== 0))) {
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
    public elementTypeLiteral(): ElementTypeLiteralContext {
        let localContext = new ElementTypeLiteralContext(this.context, this.state);
        this.enterRule(localContext, 86, DSLParser.RULE_elementTypeLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 416;
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

    public static readonly _serializedATN: number[] = [
        4,1,58,419,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,
        2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,1,0,5,0,90,8,0,10,0,12,0,
        93,9,0,1,0,5,0,96,8,0,10,0,12,0,99,9,0,1,0,1,0,1,1,1,1,3,1,105,8,
        1,1,2,1,2,1,2,3,2,110,8,2,1,2,1,2,1,2,1,2,5,2,116,8,2,10,2,12,2,
        119,9,2,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,3,5,131,8,5,1,6,
        1,6,1,6,3,6,136,8,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,3,8,147,
        8,8,1,8,1,8,1,8,1,8,5,8,153,8,8,10,8,12,8,156,9,8,1,8,1,8,1,9,1,
        9,4,9,162,8,9,11,9,12,9,163,1,10,1,10,3,10,168,8,10,1,11,1,11,3,
        11,172,8,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,
        12,184,8,12,10,12,12,12,187,9,12,1,12,1,12,1,13,1,13,1,13,1,13,1,
        13,1,13,1,13,1,13,1,13,1,13,3,13,201,8,13,1,14,1,14,1,14,1,14,1,
        14,1,14,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,
        17,1,17,5,17,222,8,17,10,17,12,17,225,9,17,1,17,1,17,5,17,229,8,
        17,10,17,12,17,232,9,17,1,17,3,17,235,8,17,1,18,1,18,1,18,1,18,1,
        18,1,18,1,18,5,18,244,8,18,10,18,12,18,247,9,18,1,18,1,18,1,19,1,
        19,1,19,1,19,1,19,5,19,256,8,19,10,19,12,19,259,9,19,1,19,1,19,1,
        20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,5,20,271,8,20,10,20,12,20,
        274,9,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,
        1,21,5,21,288,8,21,10,21,12,21,291,9,21,1,21,1,21,1,22,1,22,1,22,
        1,22,1,22,1,22,1,22,1,22,5,22,303,8,22,10,22,12,22,306,9,22,1,22,
        1,22,1,23,1,23,1,23,1,24,1,24,1,24,1,25,1,25,1,25,1,26,1,26,1,27,
        1,27,1,27,5,27,324,8,27,10,27,12,27,327,9,27,1,28,1,28,1,28,5,28,
        332,8,28,10,28,12,28,335,9,28,1,29,1,29,1,29,1,29,1,29,3,29,342,
        8,29,1,30,1,30,1,31,1,31,1,31,5,31,349,8,31,10,31,12,31,352,9,31,
        1,32,1,32,1,32,5,32,357,8,32,10,32,12,32,360,9,32,1,33,1,33,1,33,
        3,33,365,8,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,3,34,374,8,34,1,
        35,1,35,1,35,3,35,379,8,35,1,35,1,35,1,36,1,36,1,36,5,36,386,8,36,
        10,36,12,36,389,9,36,1,37,1,37,5,37,393,8,37,10,37,12,37,396,9,37,
        1,38,1,38,1,38,1,39,1,39,1,40,1,40,3,40,405,8,40,1,41,1,41,1,41,
        1,41,1,41,1,41,3,41,413,8,41,1,42,1,42,1,43,1,43,1,43,0,0,44,0,2,
        4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,
        50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,0,5,1,0,
        3,4,1,0,28,30,1,0,46,47,1,0,48,49,1,0,33,39,422,0,91,1,0,0,0,2,104,
        1,0,0,0,4,106,1,0,0,0,6,122,1,0,0,0,8,124,1,0,0,0,10,130,1,0,0,0,
        12,132,1,0,0,0,14,139,1,0,0,0,16,142,1,0,0,0,18,159,1,0,0,0,20,165,
        1,0,0,0,22,171,1,0,0,0,24,173,1,0,0,0,26,200,1,0,0,0,28,202,1,0,
        0,0,30,208,1,0,0,0,32,212,1,0,0,0,34,215,1,0,0,0,36,236,1,0,0,0,
        38,250,1,0,0,0,40,262,1,0,0,0,42,277,1,0,0,0,44,294,1,0,0,0,46,309,
        1,0,0,0,48,312,1,0,0,0,50,315,1,0,0,0,52,318,1,0,0,0,54,320,1,0,
        0,0,56,328,1,0,0,0,58,341,1,0,0,0,60,343,1,0,0,0,62,345,1,0,0,0,
        64,353,1,0,0,0,66,364,1,0,0,0,68,373,1,0,0,0,70,375,1,0,0,0,72,382,
        1,0,0,0,74,390,1,0,0,0,76,397,1,0,0,0,78,400,1,0,0,0,80,404,1,0,
        0,0,82,412,1,0,0,0,84,414,1,0,0,0,86,416,1,0,0,0,88,90,5,55,0,0,
        89,88,1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,97,1,
        0,0,0,93,91,1,0,0,0,94,96,3,2,1,0,95,94,1,0,0,0,96,99,1,0,0,0,97,
        95,1,0,0,0,97,98,1,0,0,0,98,100,1,0,0,0,99,97,1,0,0,0,100,101,5,
        0,0,1,101,1,1,0,0,0,102,105,3,4,2,0,103,105,3,24,12,0,104,102,1,
        0,0,0,104,103,1,0,0,0,105,3,1,0,0,0,106,107,3,6,3,0,107,109,3,78,
        39,0,108,110,3,8,4,0,109,108,1,0,0,0,109,110,1,0,0,0,110,111,1,0,
        0,0,111,112,5,54,0,0,112,113,5,55,0,0,113,117,5,1,0,0,114,116,3,
        10,5,0,115,114,1,0,0,0,116,119,1,0,0,0,117,115,1,0,0,0,117,118,1,
        0,0,0,118,120,1,0,0,0,119,117,1,0,0,0,120,121,5,2,0,0,121,5,1,0,
        0,0,122,123,7,0,0,0,123,7,1,0,0,0,124,125,5,7,0,0,125,126,5,8,0,
        0,126,127,3,80,40,0,127,9,1,0,0,0,128,131,3,12,6,0,129,131,3,16,
        8,0,130,128,1,0,0,0,130,129,1,0,0,0,131,11,1,0,0,0,132,133,5,5,0,
        0,133,135,3,78,39,0,134,136,3,14,7,0,135,134,1,0,0,0,135,136,1,0,
        0,0,136,137,1,0,0,0,137,138,5,55,0,0,138,13,1,0,0,0,139,140,5,6,
        0,0,140,141,3,52,26,0,141,15,1,0,0,0,142,143,5,5,0,0,143,144,5,9,
        0,0,144,146,3,78,39,0,145,147,3,18,9,0,146,145,1,0,0,0,146,147,1,
        0,0,0,147,148,1,0,0,0,148,149,5,54,0,0,149,150,5,55,0,0,150,154,
        5,1,0,0,151,153,3,26,13,0,152,151,1,0,0,0,153,156,1,0,0,0,154,152,
        1,0,0,0,154,155,1,0,0,0,155,157,1,0,0,0,156,154,1,0,0,0,157,158,
        5,2,0,0,158,17,1,0,0,0,159,161,5,10,0,0,160,162,3,20,10,0,161,160,
        1,0,0,0,162,163,1,0,0,0,163,161,1,0,0,0,163,164,1,0,0,0,164,19,1,
        0,0,0,165,167,3,78,39,0,166,168,3,22,11,0,167,166,1,0,0,0,167,168,
        1,0,0,0,168,21,1,0,0,0,169,172,3,84,42,0,170,172,3,86,43,0,171,169,
        1,0,0,0,171,170,1,0,0,0,172,23,1,0,0,0,173,174,5,26,0,0,174,175,
        3,78,39,0,175,176,3,78,39,0,176,177,5,6,0,0,177,178,3,78,39,0,178,
        179,3,78,39,0,179,180,5,54,0,0,180,181,5,55,0,0,181,185,5,1,0,0,
        182,184,3,26,13,0,183,182,1,0,0,0,184,187,1,0,0,0,185,183,1,0,0,
        0,185,186,1,0,0,0,186,188,1,0,0,0,187,185,1,0,0,0,188,189,5,2,0,
        0,189,25,1,0,0,0,190,201,3,28,14,0,191,201,3,30,15,0,192,201,3,34,
        17,0,193,201,3,40,20,0,194,201,3,42,21,0,195,201,3,44,22,0,196,201,
        3,46,23,0,197,201,3,48,24,0,198,201,3,50,25,0,199,201,3,32,16,0,
        200,190,1,0,0,0,200,191,1,0,0,0,200,192,1,0,0,0,200,193,1,0,0,0,
        200,194,1,0,0,0,200,195,1,0,0,0,200,196,1,0,0,0,200,197,1,0,0,0,
        200,198,1,0,0,0,200,199,1,0,0,0,201,27,1,0,0,0,202,203,5,11,0,0,
        203,204,3,74,37,0,204,205,5,12,0,0,205,206,3,52,26,0,206,207,5,55,
        0,0,207,29,1,0,0,0,208,209,5,13,0,0,209,210,3,52,26,0,210,211,5,
        55,0,0,211,31,1,0,0,0,212,213,3,52,26,0,213,214,5,55,0,0,214,33,
        1,0,0,0,215,216,5,14,0,0,216,217,3,52,26,0,217,218,5,54,0,0,218,
        219,5,55,0,0,219,223,5,1,0,0,220,222,3,26,13,0,221,220,1,0,0,0,222,
        225,1,0,0,0,223,221,1,0,0,0,223,224,1,0,0,0,224,226,1,0,0,0,225,
        223,1,0,0,0,226,230,5,2,0,0,227,229,3,36,18,0,228,227,1,0,0,0,229,
        232,1,0,0,0,230,228,1,0,0,0,230,231,1,0,0,0,231,234,1,0,0,0,232,
        230,1,0,0,0,233,235,3,38,19,0,234,233,1,0,0,0,234,235,1,0,0,0,235,
        35,1,0,0,0,236,237,5,15,0,0,237,238,5,14,0,0,238,239,3,52,26,0,239,
        240,5,54,0,0,240,241,5,55,0,0,241,245,5,1,0,0,242,244,3,26,13,0,
        243,242,1,0,0,0,244,247,1,0,0,0,245,243,1,0,0,0,245,246,1,0,0,0,
        246,248,1,0,0,0,247,245,1,0,0,0,248,249,5,2,0,0,249,37,1,0,0,0,250,
        251,5,15,0,0,251,252,5,54,0,0,252,253,5,55,0,0,253,257,5,1,0,0,254,
        256,3,26,13,0,255,254,1,0,0,0,256,259,1,0,0,0,257,255,1,0,0,0,257,
        258,1,0,0,0,258,260,1,0,0,0,259,257,1,0,0,0,260,261,5,2,0,0,261,
        39,1,0,0,0,262,263,5,16,0,0,263,264,3,78,39,0,264,265,5,18,0,0,265,
        266,3,52,26,0,266,267,5,54,0,0,267,268,5,55,0,0,268,272,5,1,0,0,
        269,271,3,26,13,0,270,269,1,0,0,0,271,274,1,0,0,0,272,270,1,0,0,
        0,272,273,1,0,0,0,273,275,1,0,0,0,274,272,1,0,0,0,275,276,5,2,0,
        0,276,41,1,0,0,0,277,278,5,17,0,0,278,279,3,52,26,0,279,280,5,19,
        0,0,280,281,3,52,26,0,281,282,5,6,0,0,282,283,3,78,39,0,283,284,
        5,54,0,0,284,285,5,55,0,0,285,289,5,1,0,0,286,288,3,26,13,0,287,
        286,1,0,0,0,288,291,1,0,0,0,289,287,1,0,0,0,289,290,1,0,0,0,290,
        292,1,0,0,0,291,289,1,0,0,0,292,293,5,2,0,0,293,43,1,0,0,0,294,295,
        5,20,0,0,295,296,5,21,0,0,296,297,3,52,26,0,297,298,5,22,0,0,298,
        299,5,54,0,0,299,300,5,55,0,0,300,304,5,1,0,0,301,303,3,26,13,0,
        302,301,1,0,0,0,303,306,1,0,0,0,304,302,1,0,0,0,304,305,1,0,0,0,
        305,307,1,0,0,0,306,304,1,0,0,0,307,308,5,2,0,0,308,45,1,0,0,0,309,
        310,5,23,0,0,310,311,5,55,0,0,311,47,1,0,0,0,312,313,5,24,0,0,313,
        314,5,55,0,0,314,49,1,0,0,0,315,316,5,25,0,0,316,317,5,55,0,0,317,
        51,1,0,0,0,318,319,3,54,27,0,319,53,1,0,0,0,320,325,3,56,28,0,321,
        322,5,32,0,0,322,324,3,56,28,0,323,321,1,0,0,0,324,327,1,0,0,0,325,
        323,1,0,0,0,325,326,1,0,0,0,326,55,1,0,0,0,327,325,1,0,0,0,328,333,
        3,58,29,0,329,330,5,31,0,0,330,332,3,58,29,0,331,329,1,0,0,0,332,
        335,1,0,0,0,333,331,1,0,0,0,333,334,1,0,0,0,334,57,1,0,0,0,335,333,
        1,0,0,0,336,337,3,62,31,0,337,338,3,60,30,0,338,339,3,62,31,0,339,
        342,1,0,0,0,340,342,3,62,31,0,341,336,1,0,0,0,341,340,1,0,0,0,342,
        59,1,0,0,0,343,344,7,1,0,0,344,61,1,0,0,0,345,350,3,64,32,0,346,
        347,7,2,0,0,347,349,3,64,32,0,348,346,1,0,0,0,349,352,1,0,0,0,350,
        348,1,0,0,0,350,351,1,0,0,0,351,63,1,0,0,0,352,350,1,0,0,0,353,358,
        3,66,33,0,354,355,7,3,0,0,355,357,3,66,33,0,356,354,1,0,0,0,357,
        360,1,0,0,0,358,356,1,0,0,0,358,359,1,0,0,0,359,65,1,0,0,0,360,358,
        1,0,0,0,361,362,5,27,0,0,362,365,3,66,33,0,363,365,3,68,34,0,364,
        361,1,0,0,0,364,363,1,0,0,0,365,67,1,0,0,0,366,374,3,82,41,0,367,
        374,3,70,35,0,368,374,3,74,37,0,369,370,5,52,0,0,370,371,3,52,26,
        0,371,372,5,53,0,0,372,374,1,0,0,0,373,366,1,0,0,0,373,367,1,0,0,
        0,373,368,1,0,0,0,373,369,1,0,0,0,374,69,1,0,0,0,375,376,3,74,37,
        0,376,378,5,52,0,0,377,379,3,72,36,0,378,377,1,0,0,0,378,379,1,0,
        0,0,379,380,1,0,0,0,380,381,5,53,0,0,381,71,1,0,0,0,382,387,3,52,
        26,0,383,384,5,51,0,0,384,386,3,52,26,0,385,383,1,0,0,0,386,389,
        1,0,0,0,387,385,1,0,0,0,387,388,1,0,0,0,388,73,1,0,0,0,389,387,1,
        0,0,0,390,394,3,78,39,0,391,393,3,76,38,0,392,391,1,0,0,0,393,396,
        1,0,0,0,394,392,1,0,0,0,394,395,1,0,0,0,395,75,1,0,0,0,396,394,1,
        0,0,0,397,398,5,50,0,0,398,399,3,78,39,0,399,77,1,0,0,0,400,401,
        5,45,0,0,401,79,1,0,0,0,402,405,3,78,39,0,403,405,3,84,42,0,404,
        402,1,0,0,0,404,403,1,0,0,0,405,81,1,0,0,0,406,413,5,43,0,0,407,
        413,5,40,0,0,408,413,5,42,0,0,409,413,5,41,0,0,410,413,3,84,42,0,
        411,413,3,86,43,0,412,406,1,0,0,0,412,407,1,0,0,0,412,408,1,0,0,
        0,412,409,1,0,0,0,412,410,1,0,0,0,412,411,1,0,0,0,413,83,1,0,0,0,
        414,415,7,4,0,0,415,85,1,0,0,0,416,417,3,78,39,0,417,87,1,0,0,0,
        34,91,97,104,109,117,130,135,146,154,163,167,171,185,200,223,230,
        234,245,257,272,289,304,325,333,341,350,358,364,373,378,387,394,
        404,412
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
    public topLevelStatment(): TopLevelStatmentContext[];
    public topLevelStatment(i: number): TopLevelStatmentContext | null;
    public topLevelStatment(i?: number): TopLevelStatmentContext[] | TopLevelStatmentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TopLevelStatmentContext);
        }

        return this.getRuleContext(i, TopLevelStatmentContext);
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


export class TopLevelStatmentContext extends antlr.ParserRuleContext {
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
        return DSLParser.RULE_topLevelStatment;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterTopLevelStatment) {
             listener.enterTopLevelStatment(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitTopLevelStatment) {
             listener.exitTopLevelStatment(this);
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
    public typeOrIdentifier(): TypeOrIdentifierContext {
        return this.getRuleContext(0, TypeOrIdentifierContext)!;
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
    public declaredType(): DeclaredTypeContext | null {
        return this.getRuleContext(0, DeclaredTypeContext);
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


export class DeclaredTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeLiteral(): TypeLiteralContext | null {
        return this.getRuleContext(0, TypeLiteralContext);
    }
    public elementTypeLiteral(): ElementTypeLiteralContext | null {
        return this.getRuleContext(0, ElementTypeLiteralContext);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_declaredType;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterDeclaredType) {
             listener.enterDeclaredType(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitDeclaredType) {
             listener.exitDeclaredType(this);
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
    public nextTicksLoop(): NextTicksLoopContext | null {
        return this.getRuleContext(0, NextTicksLoopContext);
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
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
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


export class NextTicksLoopContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(DSLParser.FOR, 0)!;
    }
    public NEXT(): antlr.TerminalNode {
        return this.getToken(DSLParser.NEXT, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public TICKS(): antlr.TerminalNode {
        return this.getToken(DSLParser.TICKS, 0)!;
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
        return DSLParser.RULE_nextTicksLoop;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterNextTicksLoop) {
             listener.enterNextTicksLoop(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitNextTicksLoop) {
             listener.exitNextTicksLoop(this);
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


export class TypeOrIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public typeLiteral(): TypeLiteralContext | null {
        return this.getRuleContext(0, TypeLiteralContext);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_typeOrIdentifier;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterTypeOrIdentifier) {
             listener.enterTypeOrIdentifier(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitTypeOrIdentifier) {
             listener.exitTypeOrIdentifier(this);
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
    public typeLiteral(): TypeLiteralContext | null {
        return this.getRuleContext(0, TypeLiteralContext);
    }
    public elementTypeLiteral(): ElementTypeLiteralContext | null {
        return this.getRuleContext(0, ElementTypeLiteralContext);
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


export class ElementTypeLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_elementTypeLiteral;
    }
    public override enterRule(listener: DSLParserListener): void {
        if(listener.enterElementTypeLiteral) {
             listener.enterElementTypeLiteral(this);
        }
    }
    public override exitRule(listener: DSLParserListener): void {
        if(listener.exitElementTypeLiteral) {
             listener.exitElementTypeLiteral(this);
        }
    }
}
