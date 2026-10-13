
import * as antlr from "antlr4ng";



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
        null, null, null, "'element'", "'template_element'", "'has'", "'with'", 
        "'is'", "'like'", "'function'", "'needs'", "'let'", "'be'", "'give'", 
        "'if'", "'else'", "'for_every'", "'go_through'", "'in'", "'to'", 
        "'skip_iteration'", "'stop_looping'", "'do_nothing'", "'interaction'", 
        "'not'", "'equals'", "'less_than'", "'greater_than'", "'and'", "'or'", 
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
            this.state = 126;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DSLParser.ELEMENT_TYPE:
                {
                this.state = 124;
                this.match(DSLParser.ELEMENT_TYPE);
                }
                break;
            case DSLParser.PASCAL_IDENTIFIER:
                {
                this.state = 125;
                this.pascalIdentifier();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
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
    public elementMember(): ElementMemberContext {
        let localContext = new ElementMemberContext(this.context, this.state);
        this.enterRule(localContext, 10, DSLParser.RULE_elementMember);
        try {
            this.state = 130;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
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

            this.state = 159;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DSLParser.COLON:
                {
                this.state = 148;
                this.match(DSLParser.COLON);
                this.state = 149;
                this.match(DSLParser.NEWLINE);
                this.state = 150;
                this.match(DSLParser.INDENT);
                this.state = 154;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 2147487341) !== 0)) {
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
                break;
            case DSLParser.NEWLINE:
                {
                this.state = 158;
                this.match(DSLParser.NEWLINE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
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
    public functionParameters(): FunctionParametersContext {
        let localContext = new FunctionParametersContext(this.context, this.state);
        this.enterRule(localContext, 18, DSLParser.RULE_functionParameters);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 161;
            this.match(DSLParser.NEEDS);
            this.state = 163;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 162;
                this.parameter();
                }
                }
                this.state = 165;
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
            this.state = 167;
            this.identifier();
            this.state = 169;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 2175) !== 0)) {
                {
                this.state = 168;
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
            this.state = 171;
            this.match(DSLParser.INTERACTION);
            this.state = 172;
            this.pascalIdentifier();
            this.state = 173;
            this.identifier();
            this.state = 174;
            this.match(DSLParser.WITH);
            this.state = 175;
            this.pascalIdentifier();
            this.state = 176;
            this.identifier();
            this.state = 177;
            this.match(DSLParser.COLON);
            this.state = 178;
            this.match(DSLParser.NEWLINE);
            this.state = 179;
            this.match(DSLParser.INDENT);
            this.state = 183;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 2147487341) !== 0)) {
                {
                {
                this.state = 180;
                this.statement();
                }
                }
                this.state = 185;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 186;
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
            this.state = 197;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DSLParser.LET:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 188;
                this.variableAssignment();
                }
                break;
            case DSLParser.GIVE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 189;
                this.giveStatement();
                }
                break;
            case DSLParser.IF:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 190;
                this.conditional();
                }
                break;
            case DSLParser.FOR_EVERY:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 191;
                this.collectionBasedLoop();
                }
                break;
            case DSLParser.GO_THROUGH:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 192;
                this.rangeBasedLoop();
                }
                break;
            case DSLParser.SKIP_ITERATION:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 193;
                this.skipIteration();
                }
                break;
            case DSLParser.STOP_LOOPING:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 194;
                this.stopLooping();
                }
                break;
            case DSLParser.DO_NOTHING:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 195;
                this.doNothing();
                }
                break;
            case DSLParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 196;
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
            this.state = 199;
            this.match(DSLParser.LET);
            this.state = 200;
            this.generalIdentifier();
            this.state = 201;
            this.match(DSLParser.BE);
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
    public giveStatement(): GiveStatementContext {
        let localContext = new GiveStatementContext(this.context, this.state);
        this.enterRule(localContext, 28, DSLParser.RULE_giveStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 205;
            this.match(DSLParser.GIVE);
            this.state = 206;
            this.expression();
            this.state = 207;
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
            this.state = 209;
            this.functionCall();
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
    public conditional(): ConditionalContext {
        let localContext = new ConditionalContext(this.context, this.state);
        this.enterRule(localContext, 32, DSLParser.RULE_conditional);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 212;
            this.match(DSLParser.IF);
            this.state = 213;
            this.expression();
            this.state = 214;
            this.match(DSLParser.COLON);
            this.state = 215;
            this.match(DSLParser.NEWLINE);
            this.state = 216;
            this.match(DSLParser.INDENT);
            this.state = 220;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 2147487341) !== 0)) {
                {
                {
                this.state = 217;
                this.statement();
                }
                }
                this.state = 222;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 223;
            this.match(DSLParser.DEDENT);
            this.state = 227;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 224;
                    this.elseIfClause();
                    }
                    }
                }
                this.state = 229;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
            }
            this.state = 231;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 15) {
                {
                this.state = 230;
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
            this.state = 233;
            this.match(DSLParser.ELSE);
            this.state = 234;
            this.match(DSLParser.IF);
            this.state = 235;
            this.expression();
            this.state = 236;
            this.match(DSLParser.COLON);
            this.state = 237;
            this.match(DSLParser.NEWLINE);
            this.state = 238;
            this.match(DSLParser.INDENT);
            this.state = 242;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 2147487341) !== 0)) {
                {
                {
                this.state = 239;
                this.statement();
                }
                }
                this.state = 244;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 245;
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
            this.state = 247;
            this.match(DSLParser.ELSE);
            this.state = 248;
            this.match(DSLParser.COLON);
            this.state = 249;
            this.match(DSLParser.NEWLINE);
            this.state = 250;
            this.match(DSLParser.INDENT);
            this.state = 254;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 2147487341) !== 0)) {
                {
                {
                this.state = 251;
                this.statement();
                }
                }
                this.state = 256;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 257;
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
            this.state = 259;
            this.match(DSLParser.FOR_EVERY);
            this.state = 260;
            this.identifier();
            this.state = 261;
            this.match(DSLParser.IN);
            this.state = 262;
            this.expression();
            this.state = 263;
            this.match(DSLParser.COLON);
            this.state = 264;
            this.match(DSLParser.NEWLINE);
            this.state = 265;
            this.match(DSLParser.INDENT);
            this.state = 269;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 2147487341) !== 0)) {
                {
                {
                this.state = 266;
                this.statement();
                }
                }
                this.state = 271;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 272;
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
            this.state = 274;
            this.match(DSLParser.GO_THROUGH);
            this.state = 275;
            this.expression();
            this.state = 276;
            this.match(DSLParser.TO);
            this.state = 277;
            this.expression();
            this.state = 278;
            this.match(DSLParser.WITH);
            this.state = 279;
            this.identifier();
            this.state = 280;
            this.match(DSLParser.COLON);
            this.state = 281;
            this.match(DSLParser.NEWLINE);
            this.state = 282;
            this.match(DSLParser.INDENT);
            this.state = 286;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 2147487341) !== 0)) {
                {
                {
                this.state = 283;
                this.statement();
                }
                }
                this.state = 288;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 289;
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
            this.state = 291;
            this.match(DSLParser.SKIP_ITERATION);
            this.state = 292;
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
            this.state = 294;
            this.match(DSLParser.STOP_LOOPING);
            this.state = 295;
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
            this.state = 297;
            this.match(DSLParser.DO_NOTHING);
            this.state = 298;
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
            this.state = 300;
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
            this.state = 302;
            this.booleanAndExpression();
            this.state = 307;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 29) {
                {
                {
                this.state = 303;
                this.match(DSLParser.OR);
                this.state = 304;
                this.booleanAndExpression();
                }
                }
                this.state = 309;
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
            this.state = 310;
            this.booleanComparison();
            this.state = 315;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 28) {
                {
                {
                this.state = 311;
                this.match(DSLParser.AND);
                this.state = 312;
                this.booleanComparison();
                }
                }
                this.state = 317;
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
            this.state = 327;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 24, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 318;
                this.arithmeticExpression();
                this.state = 319;
                this.comparisonOperator();
                this.state = 320;
                this.arithmeticExpression();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 322;
                this.arithmeticExpression();
                this.state = 323;
                this.match(DSLParser.IS);
                this.state = 324;
                this.typeReference();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 326;
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
            this.state = 329;
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
            this.state = 331;
            this.multiplicationExpression();
            this.state = 336;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 43 || _la === 44) {
                {
                {
                this.state = 332;
                _la = this.tokenStream.LA(1);
                if(!(_la === 43 || _la === 44)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 333;
                this.multiplicationExpression();
                }
                }
                this.state = 338;
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
            this.state = 339;
            this.unaryExpression();
            this.state = 344;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 45 || _la === 46) {
                {
                {
                this.state = 340;
                _la = this.tokenStream.LA(1);
                if(!(_la === 45 || _la === 46)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 341;
                this.unaryExpression();
                }
                }
                this.state = 346;
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
            this.state = 352;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case DSLParser.NOT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 347;
                this.match(DSLParser.NOT);
                this.state = 348;
                this.unaryExpression();
                }
                break;
            case DSLParser.MINUS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 349;
                this.match(DSLParser.MINUS);
                this.state = 350;
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
                this.state = 351;
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
            this.state = 362;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 28, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 354;
                this.literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 355;
                this.functionCall();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 356;
                this.generalIdentifier();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 357;
                this.elementTypeReference();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 358;
                this.match(DSLParser.LPAREN);
                this.state = 359;
                this.expression();
                this.state = 360;
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
            this.state = 364;
            this.generalIdentifier();
            this.state = 365;
            this.match(DSLParser.LPAREN);
            this.state = 367;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & 35119105) !== 0)) {
                {
                this.state = 366;
                this.argumentList();
                }
            }

            this.state = 369;
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
            this.state = 371;
            this.expression();
            this.state = 376;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 48) {
                {
                {
                this.state = 372;
                this.match(DSLParser.COMMA);
                this.state = 373;
                this.expression();
                }
                }
                this.state = 378;
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
            this.state = 379;
            this.identifier();
            this.state = 383;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 47) {
                {
                {
                this.state = 380;
                this.memberAccess();
                }
                }
                this.state = 385;
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
            this.state = 386;
            this.match(DSLParser.DOT);
            this.state = 387;
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
            this.state = 389;
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
            this.state = 391;
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
            this.state = 393;
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
            this.state = 395;
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
            this.state = 397;
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
            this.state = 401;
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
                this.state = 399;
                this.typeLiteral();
                }
                break;
            case DSLParser.PASCAL_IDENTIFIER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 400;
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
        4,1,55,404,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,
        2,40,7,40,2,41,7,41,2,42,7,42,1,0,5,0,88,8,0,10,0,12,0,91,9,0,1,
        0,5,0,94,8,0,10,0,12,0,97,9,0,1,0,1,0,1,1,1,1,3,1,103,8,1,1,2,1,
        2,1,2,3,2,108,8,2,1,2,1,2,1,2,1,2,5,2,114,8,2,10,2,12,2,117,9,2,
        1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,3,4,127,8,4,1,5,1,5,3,5,131,8,5,
        1,6,1,6,1,6,3,6,136,8,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,3,8,
        147,8,8,1,8,1,8,1,8,1,8,5,8,153,8,8,10,8,12,8,156,9,8,1,8,1,8,3,
        8,160,8,8,1,9,1,9,4,9,164,8,9,11,9,12,9,165,1,10,1,10,3,10,170,8,
        10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,182,8,
        11,10,11,12,11,185,9,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,
        1,12,1,12,1,12,3,12,198,8,12,1,13,1,13,1,13,1,13,1,13,1,13,1,14,
        1,14,1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,5,16,
        219,8,16,10,16,12,16,222,9,16,1,16,1,16,5,16,226,8,16,10,16,12,16,
        229,9,16,1,16,3,16,232,8,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,5,
        17,241,8,17,10,17,12,17,244,9,17,1,17,1,17,1,18,1,18,1,18,1,18,1,
        18,5,18,253,8,18,10,18,12,18,256,9,18,1,18,1,18,1,19,1,19,1,19,1,
        19,1,19,1,19,1,19,1,19,5,19,268,8,19,10,19,12,19,271,9,19,1,19,1,
        19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,5,20,285,8,
        20,10,20,12,20,288,9,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,
        1,23,1,23,1,23,1,24,1,24,1,25,1,25,1,25,5,25,306,8,25,10,25,12,25,
        309,9,25,1,26,1,26,1,26,5,26,314,8,26,10,26,12,26,317,9,26,1,27,
        1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,328,8,27,1,28,1,28,
        1,29,1,29,1,29,5,29,335,8,29,10,29,12,29,338,9,29,1,30,1,30,1,30,
        5,30,343,8,30,10,30,12,30,346,9,30,1,31,1,31,1,31,1,31,1,31,3,31,
        353,8,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,363,8,32,1,
        33,1,33,1,33,3,33,368,8,33,1,33,1,33,1,34,1,34,1,34,5,34,375,8,34,
        10,34,12,34,378,9,34,1,35,1,35,5,35,382,8,35,10,35,12,35,385,9,35,
        1,36,1,36,1,36,1,37,1,37,1,38,1,38,1,39,1,39,1,40,1,40,1,41,1,41,
        1,42,1,42,3,42,402,8,42,1,42,0,0,43,0,2,4,6,8,10,12,14,16,18,20,
        22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,
        66,68,70,72,74,76,78,80,82,84,0,6,1,0,3,4,1,0,25,27,1,0,43,44,1,
        0,45,46,1,0,37,40,1,0,30,36,405,0,89,1,0,0,0,2,102,1,0,0,0,4,104,
        1,0,0,0,6,120,1,0,0,0,8,122,1,0,0,0,10,130,1,0,0,0,12,132,1,0,0,
        0,14,139,1,0,0,0,16,142,1,0,0,0,18,161,1,0,0,0,20,167,1,0,0,0,22,
        171,1,0,0,0,24,197,1,0,0,0,26,199,1,0,0,0,28,205,1,0,0,0,30,209,
        1,0,0,0,32,212,1,0,0,0,34,233,1,0,0,0,36,247,1,0,0,0,38,259,1,0,
        0,0,40,274,1,0,0,0,42,291,1,0,0,0,44,294,1,0,0,0,46,297,1,0,0,0,
        48,300,1,0,0,0,50,302,1,0,0,0,52,310,1,0,0,0,54,327,1,0,0,0,56,329,
        1,0,0,0,58,331,1,0,0,0,60,339,1,0,0,0,62,352,1,0,0,0,64,362,1,0,
        0,0,66,364,1,0,0,0,68,371,1,0,0,0,70,379,1,0,0,0,72,386,1,0,0,0,
        74,389,1,0,0,0,76,391,1,0,0,0,78,393,1,0,0,0,80,395,1,0,0,0,82,397,
        1,0,0,0,84,401,1,0,0,0,86,88,5,52,0,0,87,86,1,0,0,0,88,91,1,0,0,
        0,89,87,1,0,0,0,89,90,1,0,0,0,90,95,1,0,0,0,91,89,1,0,0,0,92,94,
        3,2,1,0,93,92,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,
        96,98,1,0,0,0,97,95,1,0,0,0,98,99,5,0,0,1,99,1,1,0,0,0,100,103,3,
        4,2,0,101,103,3,22,11,0,102,100,1,0,0,0,102,101,1,0,0,0,103,3,1,
        0,0,0,104,105,3,6,3,0,105,107,3,76,38,0,106,108,3,8,4,0,107,106,
        1,0,0,0,107,108,1,0,0,0,108,109,1,0,0,0,109,110,5,51,0,0,110,111,
        5,52,0,0,111,115,5,1,0,0,112,114,3,10,5,0,113,112,1,0,0,0,114,117,
        1,0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,118,1,0,0,0,117,115,
        1,0,0,0,118,119,5,2,0,0,119,5,1,0,0,0,120,121,7,0,0,0,121,7,1,0,
        0,0,122,123,5,7,0,0,123,126,5,8,0,0,124,127,5,33,0,0,125,127,3,76,
        38,0,126,124,1,0,0,0,126,125,1,0,0,0,127,9,1,0,0,0,128,131,3,12,
        6,0,129,131,3,16,8,0,130,128,1,0,0,0,130,129,1,0,0,0,131,11,1,0,
        0,0,132,133,5,5,0,0,133,135,3,74,37,0,134,136,3,14,7,0,135,134,1,
        0,0,0,135,136,1,0,0,0,136,137,1,0,0,0,137,138,5,52,0,0,138,13,1,
        0,0,0,139,140,5,6,0,0,140,141,3,48,24,0,141,15,1,0,0,0,142,143,5,
        5,0,0,143,144,5,9,0,0,144,146,3,74,37,0,145,147,3,18,9,0,146,145,
        1,0,0,0,146,147,1,0,0,0,147,159,1,0,0,0,148,149,5,51,0,0,149,150,
        5,52,0,0,150,154,5,1,0,0,151,153,3,24,12,0,152,151,1,0,0,0,153,156,
        1,0,0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,157,1,0,0,0,156,154,
        1,0,0,0,157,160,5,2,0,0,158,160,5,52,0,0,159,148,1,0,0,0,159,158,
        1,0,0,0,160,17,1,0,0,0,161,163,5,10,0,0,162,164,3,20,10,0,163,162,
        1,0,0,0,164,165,1,0,0,0,165,163,1,0,0,0,165,166,1,0,0,0,166,19,1,
        0,0,0,167,169,3,74,37,0,168,170,3,84,42,0,169,168,1,0,0,0,169,170,
        1,0,0,0,170,21,1,0,0,0,171,172,5,23,0,0,172,173,3,76,38,0,173,174,
        3,74,37,0,174,175,5,6,0,0,175,176,3,76,38,0,176,177,3,74,37,0,177,
        178,5,51,0,0,178,179,5,52,0,0,179,183,5,1,0,0,180,182,3,24,12,0,
        181,180,1,0,0,0,182,185,1,0,0,0,183,181,1,0,0,0,183,184,1,0,0,0,
        184,186,1,0,0,0,185,183,1,0,0,0,186,187,5,2,0,0,187,23,1,0,0,0,188,
        198,3,26,13,0,189,198,3,28,14,0,190,198,3,32,16,0,191,198,3,38,19,
        0,192,198,3,40,20,0,193,198,3,42,21,0,194,198,3,44,22,0,195,198,
        3,46,23,0,196,198,3,30,15,0,197,188,1,0,0,0,197,189,1,0,0,0,197,
        190,1,0,0,0,197,191,1,0,0,0,197,192,1,0,0,0,197,193,1,0,0,0,197,
        194,1,0,0,0,197,195,1,0,0,0,197,196,1,0,0,0,198,25,1,0,0,0,199,200,
        5,11,0,0,200,201,3,70,35,0,201,202,5,12,0,0,202,203,3,48,24,0,203,
        204,5,52,0,0,204,27,1,0,0,0,205,206,5,13,0,0,206,207,3,48,24,0,207,
        208,5,52,0,0,208,29,1,0,0,0,209,210,3,66,33,0,210,211,5,52,0,0,211,
        31,1,0,0,0,212,213,5,14,0,0,213,214,3,48,24,0,214,215,5,51,0,0,215,
        216,5,52,0,0,216,220,5,1,0,0,217,219,3,24,12,0,218,217,1,0,0,0,219,
        222,1,0,0,0,220,218,1,0,0,0,220,221,1,0,0,0,221,223,1,0,0,0,222,
        220,1,0,0,0,223,227,5,2,0,0,224,226,3,34,17,0,225,224,1,0,0,0,226,
        229,1,0,0,0,227,225,1,0,0,0,227,228,1,0,0,0,228,231,1,0,0,0,229,
        227,1,0,0,0,230,232,3,36,18,0,231,230,1,0,0,0,231,232,1,0,0,0,232,
        33,1,0,0,0,233,234,5,15,0,0,234,235,5,14,0,0,235,236,3,48,24,0,236,
        237,5,51,0,0,237,238,5,52,0,0,238,242,5,1,0,0,239,241,3,24,12,0,
        240,239,1,0,0,0,241,244,1,0,0,0,242,240,1,0,0,0,242,243,1,0,0,0,
        243,245,1,0,0,0,244,242,1,0,0,0,245,246,5,2,0,0,246,35,1,0,0,0,247,
        248,5,15,0,0,248,249,5,51,0,0,249,250,5,52,0,0,250,254,5,1,0,0,251,
        253,3,24,12,0,252,251,1,0,0,0,253,256,1,0,0,0,254,252,1,0,0,0,254,
        255,1,0,0,0,255,257,1,0,0,0,256,254,1,0,0,0,257,258,5,2,0,0,258,
        37,1,0,0,0,259,260,5,16,0,0,260,261,3,74,37,0,261,262,5,18,0,0,262,
        263,3,48,24,0,263,264,5,51,0,0,264,265,5,52,0,0,265,269,5,1,0,0,
        266,268,3,24,12,0,267,266,1,0,0,0,268,271,1,0,0,0,269,267,1,0,0,
        0,269,270,1,0,0,0,270,272,1,0,0,0,271,269,1,0,0,0,272,273,5,2,0,
        0,273,39,1,0,0,0,274,275,5,17,0,0,275,276,3,48,24,0,276,277,5,19,
        0,0,277,278,3,48,24,0,278,279,5,6,0,0,279,280,3,74,37,0,280,281,
        5,51,0,0,281,282,5,52,0,0,282,286,5,1,0,0,283,285,3,24,12,0,284,
        283,1,0,0,0,285,288,1,0,0,0,286,284,1,0,0,0,286,287,1,0,0,0,287,
        289,1,0,0,0,288,286,1,0,0,0,289,290,5,2,0,0,290,41,1,0,0,0,291,292,
        5,20,0,0,292,293,5,52,0,0,293,43,1,0,0,0,294,295,5,21,0,0,295,296,
        5,52,0,0,296,45,1,0,0,0,297,298,5,22,0,0,298,299,5,52,0,0,299,47,
        1,0,0,0,300,301,3,50,25,0,301,49,1,0,0,0,302,307,3,52,26,0,303,304,
        5,29,0,0,304,306,3,52,26,0,305,303,1,0,0,0,306,309,1,0,0,0,307,305,
        1,0,0,0,307,308,1,0,0,0,308,51,1,0,0,0,309,307,1,0,0,0,310,315,3,
        54,27,0,311,312,5,28,0,0,312,314,3,54,27,0,313,311,1,0,0,0,314,317,
        1,0,0,0,315,313,1,0,0,0,315,316,1,0,0,0,316,53,1,0,0,0,317,315,1,
        0,0,0,318,319,3,58,29,0,319,320,3,56,28,0,320,321,3,58,29,0,321,
        328,1,0,0,0,322,323,3,58,29,0,323,324,5,7,0,0,324,325,3,84,42,0,
        325,328,1,0,0,0,326,328,3,58,29,0,327,318,1,0,0,0,327,322,1,0,0,
        0,327,326,1,0,0,0,328,55,1,0,0,0,329,330,7,1,0,0,330,57,1,0,0,0,
        331,336,3,60,30,0,332,333,7,2,0,0,333,335,3,60,30,0,334,332,1,0,
        0,0,335,338,1,0,0,0,336,334,1,0,0,0,336,337,1,0,0,0,337,59,1,0,0,
        0,338,336,1,0,0,0,339,344,3,62,31,0,340,341,7,3,0,0,341,343,3,62,
        31,0,342,340,1,0,0,0,343,346,1,0,0,0,344,342,1,0,0,0,344,345,1,0,
        0,0,345,61,1,0,0,0,346,344,1,0,0,0,347,348,5,24,0,0,348,353,3,62,
        31,0,349,350,5,44,0,0,350,353,3,62,31,0,351,353,3,64,32,0,352,347,
        1,0,0,0,352,349,1,0,0,0,352,351,1,0,0,0,353,63,1,0,0,0,354,363,3,
        78,39,0,355,363,3,66,33,0,356,363,3,70,35,0,357,363,3,82,41,0,358,
        359,5,49,0,0,359,360,3,48,24,0,360,361,5,50,0,0,361,363,1,0,0,0,
        362,354,1,0,0,0,362,355,1,0,0,0,362,356,1,0,0,0,362,357,1,0,0,0,
        362,358,1,0,0,0,363,65,1,0,0,0,364,365,3,70,35,0,365,367,5,49,0,
        0,366,368,3,68,34,0,367,366,1,0,0,0,367,368,1,0,0,0,368,369,1,0,
        0,0,369,370,5,50,0,0,370,67,1,0,0,0,371,376,3,48,24,0,372,373,5,
        48,0,0,373,375,3,48,24,0,374,372,1,0,0,0,375,378,1,0,0,0,376,374,
        1,0,0,0,376,377,1,0,0,0,377,69,1,0,0,0,378,376,1,0,0,0,379,383,3,
        74,37,0,380,382,3,72,36,0,381,380,1,0,0,0,382,385,1,0,0,0,383,381,
        1,0,0,0,383,384,1,0,0,0,384,71,1,0,0,0,385,383,1,0,0,0,386,387,5,
        47,0,0,387,388,3,74,37,0,388,73,1,0,0,0,389,390,5,42,0,0,390,75,
        1,0,0,0,391,392,5,41,0,0,392,77,1,0,0,0,393,394,7,4,0,0,394,79,1,
        0,0,0,395,396,7,5,0,0,396,81,1,0,0,0,397,398,3,76,38,0,398,83,1,
        0,0,0,399,402,3,80,40,0,400,402,3,82,41,0,401,399,1,0,0,0,401,400,
        1,0,0,0,402,85,1,0,0,0,33,89,95,102,107,115,126,130,135,146,154,
        159,165,169,183,197,220,227,231,242,254,269,286,307,315,327,336,
        344,352,362,367,376,383,401
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
    public ELEMENT_TYPE(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.ELEMENT_TYPE, 0);
    }
    public pascalIdentifier(): PascalIdentifierContext | null {
        return this.getRuleContext(0, PascalIdentifierContext);
    }
    public override get ruleIndex(): number {
        return DSLParser.RULE_elementParent;
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
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.COLON, 0);
    }
    public NEWLINE(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.NEWLINE, 0);
    }
    public INDENT(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.INDENT, 0);
    }
    public DEDENT(): antlr.TerminalNode | null {
        return this.getToken(DSLParser.DEDENT, 0);
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
}
