
import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { ProgramContext } from "./DSLParser.js";
import { TopLevelStatementContext } from "./DSLParser.js";
import { ElementDefinitionContext } from "./DSLParser.js";
import { ElementKeywordContext } from "./DSLParser.js";
import { ElementParentContext } from "./DSLParser.js";
import { ElementMemberContext } from "./DSLParser.js";
import { ElementVariableDefinitionContext } from "./DSLParser.js";
import { ElementInitialValueContext } from "./DSLParser.js";
import { ElementFunctionDefinitionContext } from "./DSLParser.js";
import { FunctionParametersContext } from "./DSLParser.js";
import { ParameterContext } from "./DSLParser.js";
import { InteractionDefinitionContext } from "./DSLParser.js";
import { StatementContext } from "./DSLParser.js";
import { VariableAssignmentContext } from "./DSLParser.js";
import { GiveStatementContext } from "./DSLParser.js";
import { ExpressionStatementContext } from "./DSLParser.js";
import { ConditionalContext } from "./DSLParser.js";
import { ElseIfClauseContext } from "./DSLParser.js";
import { ElseClauseContext } from "./DSLParser.js";
import { CollectionBasedLoopContext } from "./DSLParser.js";
import { RangeBasedLoopContext } from "./DSLParser.js";
import { SkipIterationContext } from "./DSLParser.js";
import { StopLoopingContext } from "./DSLParser.js";
import { DoNothingContext } from "./DSLParser.js";
import { ExpressionContext } from "./DSLParser.js";
import { BooleanOrExpressionContext } from "./DSLParser.js";
import { BooleanAndExpressionContext } from "./DSLParser.js";
import { BooleanComparisonContext } from "./DSLParser.js";
import { ComparisonOperatorContext } from "./DSLParser.js";
import { ArithmeticExpressionContext } from "./DSLParser.js";
import { MultiplicationExpressionContext } from "./DSLParser.js";
import { UnaryExpressionContext } from "./DSLParser.js";
import { PrimaryExpressionContext } from "./DSLParser.js";
import { FunctionCallContext } from "./DSLParser.js";
import { ArgumentListContext } from "./DSLParser.js";
import { GeneralIdentifierContext } from "./DSLParser.js";
import { MemberAccessContext } from "./DSLParser.js";
import { IdentifierContext } from "./DSLParser.js";
import { PascalIdentifierContext } from "./DSLParser.js";
import { LiteralContext } from "./DSLParser.js";
import { TypeLiteralContext } from "./DSLParser.js";
import { ElementTypeReferenceContext } from "./DSLParser.js";
import { TypeReferenceContext } from "./DSLParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `DSLParser`.
 */
export class DSLParserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `DSLParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.topLevelStatement`.
     * @param ctx the parse tree
     */
    enterTopLevelStatement?: (ctx: TopLevelStatementContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.topLevelStatement`.
     * @param ctx the parse tree
     */
    exitTopLevelStatement?: (ctx: TopLevelStatementContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.elementDefinition`.
     * @param ctx the parse tree
     */
    enterElementDefinition?: (ctx: ElementDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.elementDefinition`.
     * @param ctx the parse tree
     */
    exitElementDefinition?: (ctx: ElementDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.elementKeyword`.
     * @param ctx the parse tree
     */
    enterElementKeyword?: (ctx: ElementKeywordContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.elementKeyword`.
     * @param ctx the parse tree
     */
    exitElementKeyword?: (ctx: ElementKeywordContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.elementParent`.
     * @param ctx the parse tree
     */
    enterElementParent?: (ctx: ElementParentContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.elementParent`.
     * @param ctx the parse tree
     */
    exitElementParent?: (ctx: ElementParentContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.elementMember`.
     * @param ctx the parse tree
     */
    enterElementMember?: (ctx: ElementMemberContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.elementMember`.
     * @param ctx the parse tree
     */
    exitElementMember?: (ctx: ElementMemberContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.elementVariableDefinition`.
     * @param ctx the parse tree
     */
    enterElementVariableDefinition?: (ctx: ElementVariableDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.elementVariableDefinition`.
     * @param ctx the parse tree
     */
    exitElementVariableDefinition?: (ctx: ElementVariableDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.elementInitialValue`.
     * @param ctx the parse tree
     */
    enterElementInitialValue?: (ctx: ElementInitialValueContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.elementInitialValue`.
     * @param ctx the parse tree
     */
    exitElementInitialValue?: (ctx: ElementInitialValueContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.elementFunctionDefinition`.
     * @param ctx the parse tree
     */
    enterElementFunctionDefinition?: (ctx: ElementFunctionDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.elementFunctionDefinition`.
     * @param ctx the parse tree
     */
    exitElementFunctionDefinition?: (ctx: ElementFunctionDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.functionParameters`.
     * @param ctx the parse tree
     */
    enterFunctionParameters?: (ctx: FunctionParametersContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.functionParameters`.
     * @param ctx the parse tree
     */
    exitFunctionParameters?: (ctx: FunctionParametersContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.parameter`.
     * @param ctx the parse tree
     */
    enterParameter?: (ctx: ParameterContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.parameter`.
     * @param ctx the parse tree
     */
    exitParameter?: (ctx: ParameterContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.interactionDefinition`.
     * @param ctx the parse tree
     */
    enterInteractionDefinition?: (ctx: InteractionDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.interactionDefinition`.
     * @param ctx the parse tree
     */
    exitInteractionDefinition?: (ctx: InteractionDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.variableAssignment`.
     * @param ctx the parse tree
     */
    enterVariableAssignment?: (ctx: VariableAssignmentContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.variableAssignment`.
     * @param ctx the parse tree
     */
    exitVariableAssignment?: (ctx: VariableAssignmentContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.giveStatement`.
     * @param ctx the parse tree
     */
    enterGiveStatement?: (ctx: GiveStatementContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.giveStatement`.
     * @param ctx the parse tree
     */
    exitGiveStatement?: (ctx: GiveStatementContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.expressionStatement`.
     * @param ctx the parse tree
     */
    enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.expressionStatement`.
     * @param ctx the parse tree
     */
    exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.conditional`.
     * @param ctx the parse tree
     */
    enterConditional?: (ctx: ConditionalContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.conditional`.
     * @param ctx the parse tree
     */
    exitConditional?: (ctx: ConditionalContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.elseIfClause`.
     * @param ctx the parse tree
     */
    enterElseIfClause?: (ctx: ElseIfClauseContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.elseIfClause`.
     * @param ctx the parse tree
     */
    exitElseIfClause?: (ctx: ElseIfClauseContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.elseClause`.
     * @param ctx the parse tree
     */
    enterElseClause?: (ctx: ElseClauseContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.elseClause`.
     * @param ctx the parse tree
     */
    exitElseClause?: (ctx: ElseClauseContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.collectionBasedLoop`.
     * @param ctx the parse tree
     */
    enterCollectionBasedLoop?: (ctx: CollectionBasedLoopContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.collectionBasedLoop`.
     * @param ctx the parse tree
     */
    exitCollectionBasedLoop?: (ctx: CollectionBasedLoopContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.rangeBasedLoop`.
     * @param ctx the parse tree
     */
    enterRangeBasedLoop?: (ctx: RangeBasedLoopContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.rangeBasedLoop`.
     * @param ctx the parse tree
     */
    exitRangeBasedLoop?: (ctx: RangeBasedLoopContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.skipIteration`.
     * @param ctx the parse tree
     */
    enterSkipIteration?: (ctx: SkipIterationContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.skipIteration`.
     * @param ctx the parse tree
     */
    exitSkipIteration?: (ctx: SkipIterationContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.stopLooping`.
     * @param ctx the parse tree
     */
    enterStopLooping?: (ctx: StopLoopingContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.stopLooping`.
     * @param ctx the parse tree
     */
    exitStopLooping?: (ctx: StopLoopingContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.doNothing`.
     * @param ctx the parse tree
     */
    enterDoNothing?: (ctx: DoNothingContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.doNothing`.
     * @param ctx the parse tree
     */
    exitDoNothing?: (ctx: DoNothingContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.booleanOrExpression`.
     * @param ctx the parse tree
     */
    enterBooleanOrExpression?: (ctx: BooleanOrExpressionContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.booleanOrExpression`.
     * @param ctx the parse tree
     */
    exitBooleanOrExpression?: (ctx: BooleanOrExpressionContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.booleanAndExpression`.
     * @param ctx the parse tree
     */
    enterBooleanAndExpression?: (ctx: BooleanAndExpressionContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.booleanAndExpression`.
     * @param ctx the parse tree
     */
    exitBooleanAndExpression?: (ctx: BooleanAndExpressionContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.booleanComparison`.
     * @param ctx the parse tree
     */
    enterBooleanComparison?: (ctx: BooleanComparisonContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.booleanComparison`.
     * @param ctx the parse tree
     */
    exitBooleanComparison?: (ctx: BooleanComparisonContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.arithmeticExpression`.
     * @param ctx the parse tree
     */
    enterArithmeticExpression?: (ctx: ArithmeticExpressionContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.arithmeticExpression`.
     * @param ctx the parse tree
     */
    exitArithmeticExpression?: (ctx: ArithmeticExpressionContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.multiplicationExpression`.
     * @param ctx the parse tree
     */
    enterMultiplicationExpression?: (ctx: MultiplicationExpressionContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.multiplicationExpression`.
     * @param ctx the parse tree
     */
    exitMultiplicationExpression?: (ctx: MultiplicationExpressionContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.unaryExpression`.
     * @param ctx the parse tree
     */
    enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.unaryExpression`.
     * @param ctx the parse tree
     */
    exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.functionCall`.
     * @param ctx the parse tree
     */
    enterFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.functionCall`.
     * @param ctx the parse tree
     */
    exitFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.argumentList`.
     * @param ctx the parse tree
     */
    enterArgumentList?: (ctx: ArgumentListContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.argumentList`.
     * @param ctx the parse tree
     */
    exitArgumentList?: (ctx: ArgumentListContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.generalIdentifier`.
     * @param ctx the parse tree
     */
    enterGeneralIdentifier?: (ctx: GeneralIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.generalIdentifier`.
     * @param ctx the parse tree
     */
    exitGeneralIdentifier?: (ctx: GeneralIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.memberAccess`.
     * @param ctx the parse tree
     */
    enterMemberAccess?: (ctx: MemberAccessContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.memberAccess`.
     * @param ctx the parse tree
     */
    exitMemberAccess?: (ctx: MemberAccessContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.identifier`.
     * @param ctx the parse tree
     */
    enterIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.identifier`.
     * @param ctx the parse tree
     */
    exitIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.pascalIdentifier`.
     * @param ctx the parse tree
     */
    enterPascalIdentifier?: (ctx: PascalIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.pascalIdentifier`.
     * @param ctx the parse tree
     */
    exitPascalIdentifier?: (ctx: PascalIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.literal`.
     * @param ctx the parse tree
     */
    enterLiteral?: (ctx: LiteralContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.literal`.
     * @param ctx the parse tree
     */
    exitLiteral?: (ctx: LiteralContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.typeLiteral`.
     * @param ctx the parse tree
     */
    enterTypeLiteral?: (ctx: TypeLiteralContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.typeLiteral`.
     * @param ctx the parse tree
     */
    exitTypeLiteral?: (ctx: TypeLiteralContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.elementTypeReference`.
     * @param ctx the parse tree
     */
    enterElementTypeReference?: (ctx: ElementTypeReferenceContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.elementTypeReference`.
     * @param ctx the parse tree
     */
    exitElementTypeReference?: (ctx: ElementTypeReferenceContext) => void;
    /**
     * Enter a parse tree produced by `DSLParser.typeReference`.
     * @param ctx the parse tree
     */
    enterTypeReference?: (ctx: TypeReferenceContext) => void;
    /**
     * Exit a parse tree produced by `DSLParser.typeReference`.
     * @param ctx the parse tree
     */
    exitTypeReference?: (ctx: TypeReferenceContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

