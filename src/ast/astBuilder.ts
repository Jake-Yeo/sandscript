
import {
    ProgramContext,
    ElementDefinitionContext,
    ElementVariableDefinitionContext,
    ElementFunctionDefinitionContext,
    ParameterContext,
    InteractionDefinitionContext,
    ExpressionContext,
    BooleanOrExpressionContext,
    BooleanAndExpressionContext,
    BooleanComparisonContext,
    ArithmeticExpressionContext,
    MultiplicationExpressionContext,
    UnaryExpressionContext,
    PrimaryExpressionContext,
    LiteralContext,
    FunctionCallContext,
    GeneralIdentifierContext,
    TypeReferenceContext,
    TypeLiteralContext,
    StatementContext,
    VariableAssignmentContext,
    ConditionalContext,
    ElseIfClauseContext,
    CollectionBasedLoopContext,
    RangeBasedLoopContext,
} from '../generated/DSLParser';

import type {
    Program,
    ElementDef,
    ElementVarDef,
    ElementFuncDef,
    Parameter,
    InteractionDef,
    Identifier,
    Expression,
    Literal,
    TypeLiteral,
    ElementTypeLiteral,
    ArithmeticExpression,
    TwoValueBooleanExpression,
    FunctionCall,
    GeneralIdentifier,
    Statement,
    VarAssignment,
    Conditional,
    ConditionBodyPair,
    CollectionBasedLoop,
    RangeBasedLoop,
} from './ast';

export class ASTBuilder {
    build(ctx: ProgramContext): Program {
        const elementDefs: ElementDef[] = [];
        const interactionDefs: InteractionDef[] = [];

        for (const topLevel of ctx.topLevelStatement()) {
            const element = topLevel.elementDefinition();
            const interaction = topLevel.interactionDefinition();

            if (element) {
                elementDefs.push(this.buildElementDefinition(element));
            } else if (interaction) {
                interactionDefs.push(this.buildInteractionDefinition(interaction));
            }
        }

        return {
            type: 'Program',
            elementDefs,
            interactionDefs,
        };
    }

    private buildElementDefinition(
        ctx: ElementDefinitionContext,
    ): ElementDef {
        const keyword = ctx.elementKeyword();
        const parentCtx = ctx.elementParent();

        const varDefs: ElementVarDef[] = [];
        const funcDefs: ElementFuncDef[] = [];

        for (const member of ctx.elementMember()) {
            const variable = member.elementVariableDefinition();
            const func = member.elementFunctionDefinition();

            if (variable) {
                varDefs.push(this.buildElementVariable(variable));
            } else if (func) {
                funcDefs.push(this.buildElementFunction(func));
            }
        }

        return {
            type: 'ElementDef',
            name: this.identifier(ctx.pascalIdentifier().getText()),
            abstract: keyword.TEMPLATE_ELEMENT() !== null,
            parent: parentCtx
                ? this.identifier(
                    parentCtx.ELEMENT_TYPE()?.getText()
                    ?? parentCtx.pascalIdentifier()!.getText(),
                )
                : null,
            varDefs,
            funcDefs,
        };
    }

    private buildElementVariable(
        ctx: ElementVariableDefinitionContext,
    ): ElementVarDef {
        const initialValue = ctx.elementInitialValue();

        return {
            type: 'ElementVarDef',
            varName: this.identifier(ctx.identifier().getText()),
            value: initialValue
                ? this.buildExpression(initialValue.expression())
                : null,
        };
    }

    private buildElementFunction(
        ctx: ElementFunctionDefinitionContext,
    ): ElementFuncDef {
        const args: Parameter[] =
            ctx.functionParameters()?.parameter().map((p) => this.buildParameter(p))
            ?? [];

        return {
            type: 'ElementFuncDef',
            name: this.identifier(ctx.identifier().getText()),
            args,
            statements: ctx.statement().map((s) => this.buildStatement(s)),
        };
    }

    private buildParameter(ctx: ParameterContext): Parameter {
        const declaredType = ctx.typeReference();

        return {
            type: 'Parameter',
            name: this.identifier(ctx.identifier().getText()),
            declaredType: declaredType
                ? this.buildTypeReference(declaredType)
                : null,
        };
    }

    private buildInteractionDefinition(
        ctx: InteractionDefinitionContext,
    ): InteractionDef {
        const pascalNames = ctx.pascalIdentifier();
        const identifiers = ctx.identifier();

        return {
            type: 'InteractionDef',
            element1: this.identifier(pascalNames[0].getText()),
            element2: this.identifier(pascalNames[1].getText()),
            element1Binding: this.identifier(identifiers[0].getText()),
            element2Binding: this.identifier(identifiers[1].getText()),
            statements: ctx.statement().map((s) => this.buildStatement(s)),
        };
    }

    private identifier(value: string): Identifier {
        return { type: 'Identifier', value };
    }

    private buildExpression(ctx: ExpressionContext): Expression {
        return this.buildBooleanOr(ctx.booleanOrExpression());
    }

    private buildBooleanOr(ctx: BooleanOrExpressionContext): Expression {
        const operands = ctx.booleanAndExpression();
        let result = this.buildBooleanAnd(operands[0]);

        for (let i = 1; i < operands.length; i++) {
            result = {
                type: 'TwoValueBooleanExpression',
                operation: 'Or',
                value1: result,
                value2: this.buildBooleanAnd(operands[i]),
            };
        }

        return result;
    }

    private buildBooleanAnd(ctx: BooleanAndExpressionContext): Expression {
        const operands = ctx.booleanComparison();
        let result = this.buildBooleanComparison(operands[0]);

        for (let i = 1; i < operands.length; i++) {
            result = {
                type: 'TwoValueBooleanExpression',
                operation: 'And',
                value1: result,
                value2: this.buildBooleanComparison(operands[i]),
            };
        }

        return result;
    }

    private buildBooleanComparison(
        ctx: BooleanComparisonContext,
    ): Expression {
        const operands = ctx.arithmeticExpression();
        const left = this.buildArithmetic(operands[0]);

        if (ctx.IS()) {
            return {
                type: 'TypeCheckExpression',
                value: left,
                checkedType: this.buildTypeReference(ctx.typeReference()!),
            };
        }

        const operator = ctx.comparisonOperator();
        if (!operator) {
            return left;
        }

        const operation = operator.getText();
        const operationMap: Record<string, TwoValueBooleanExpression['operation']> = {
            equals: 'Equals',
            'less-than': 'Less Than',
            'greater-than': 'Greater Than',
        };

        return {
            type: 'TwoValueBooleanExpression',
            operation: operationMap[operation],
            value1: left,
            value2: this.buildArithmetic(operands[1]),
        };
    }

    private buildArithmetic(ctx: ArithmeticExpressionContext): Expression {
        const operands = ctx.multiplicationExpression();
        let result = this.buildMultiplication(operands[0]);

        for (let i = 1; i < operands.length; i++) {
            const operator = ctx.getChild(2 * i - 1)?.getText();

            if (!operator) {
                throw new Error('Missing arithmetic operator');
            }

            const operationMap: Record<string, ArithmeticExpression['operation']> = {
                '+': 'Add',
                '-': 'Subtract',
            };

            result = {
                type: 'ArithmeticExpression',
                operation: operationMap[operator],
                value1: result,
                value2: this.buildMultiplication(operands[i]),
            };
        }

        return result;
    }

    private buildMultiplication(
        ctx: MultiplicationExpressionContext,
    ): Expression {
        const operands = ctx.unaryExpression();
        let result = this.buildUnary(operands[0]);

        for (let i = 1; i < operands.length; i++) {
            const operator = ctx.getChild(2 * i - 1)?.getText();

            if (!operator) {
                throw new Error('Missing arithmetic operator');
            }

            const operationMap: Record<string, ArithmeticExpression['operation']> = {
                '*': 'Multiply',
                '/': 'Divide',
            };

            result = {
                type: 'ArithmeticExpression',
                operation: operationMap[operator],
                value1: result,
                value2: this.buildUnary(operands[i]),
            };
        }

        return result;
    }

    private buildUnary(ctx: UnaryExpressionContext): Expression {
        if (ctx.NOT()) {
            return {
                type: 'NotExpression',
                value: this.buildUnary(ctx.unaryExpression()!),
            };
        }

        if (ctx.MINUS()) {
            return {
                type: 'UnaryMinusExpression',
                value: this.buildUnary(ctx.unaryExpression()!),
            };
        }

        return this.buildPrimary(ctx.primaryExpression()!);
    }

    private buildPrimary(ctx: PrimaryExpressionContext): Expression {
        if (ctx.literal()) {
            return this.buildLiteral(ctx.literal()!);
        }

        if (ctx.functionCall()) {
            return this.buildFunctionCall(ctx.functionCall()!);
        }

        if (ctx.generalIdentifier()) {
            return this.buildGeneralIdentifier(ctx.generalIdentifier()!);
        }

        if (ctx.elementTypeReference()) {
            return {
                type: 'ElementTypeLiteral',
                name: this.identifier(
                    ctx.elementTypeReference()!.getText(),
                ),
            };
        }

        // Parenthesized expression
        return this.buildExpression(ctx.expression()!);
    }

    private buildLiteral(ctx: LiteralContext): Literal {
        const text = ctx.getText();

        if (text === 'true' || text === 'false') {
            return { type: 'BooleanLiteral', value: text === 'true' };
        }

        if (text === 'null') {
            return { type: 'Null' };
        }

        if (text.startsWith('Color(')) {
            return {
                type: 'Color',
                value: text.slice('Color('.length, -1),
            };
        }

        return {
            type: 'NumberLiteral',
            value: Number(text),
        };
    }

    private buildGeneralIdentifier(
        ctx: GeneralIdentifierContext,
    ): GeneralIdentifier {
        let result: GeneralIdentifier = this.identifier(
            ctx.identifier().getText(),
        );

        for (const access of ctx.memberAccess()) {
            result = {
                type: 'MemberAccess',
                source: result,
                member: this.identifier(access.identifier().getText()),
            };
        }

        return result;
    }

    private buildFunctionCall(ctx: FunctionCallContext): FunctionCall {
        const args = ctx.argumentList()?.expression().map(
            (arg) => this.buildExpression(arg),
        ) ?? [];

        return {
            type: 'FunctionCall',
            callee: this.buildGeneralIdentifier(ctx.generalIdentifier()),
            args,
        };
    }

    private buildTypeReference(
        ctx: TypeReferenceContext,
    ): TypeLiteral | ElementTypeLiteral {
        const elementType = ctx.elementTypeReference();

        if (elementType) {
            return {
                type: 'ElementTypeLiteral',
                name: this.identifier(elementType.getText()),
            };
        }

        return this.buildTypeLiteral(ctx.typeLiteral()!);
    }

    private buildTypeLiteral(ctx: TypeLiteralContext): TypeLiteral {
        const value = ctx.getText();

        const validTypes: TypeLiteral['value'][] = [
            'Number',
            'Boolean',
            'Color',
            'Element',
            'ElementType',
            'Null',
            'Type',
        ];

        if (!validTypes.includes(value as TypeLiteral['value'])) {
            throw new Error(`Unknown type literal: ${value}`);
        }

        return {
            type: 'Type',
            value: value as TypeLiteral['value'],
        };
    }

    private buildStatement(ctx: StatementContext): Statement {
        if (ctx.variableAssignment()) {
            return this.buildVariableAssignment(ctx.variableAssignment()!);
        }

        if (ctx.giveStatement()) {
            const give = ctx.giveStatement()!;
            return {
                type: 'Give',
                value: this.buildExpression(give.expression()),
            };
        }

        if (ctx.expressionStatement()) {
            const statement = ctx.expressionStatement()!;
            return {
                type: 'ExpressionStatement',
                expression: this.buildFunctionCall(statement.functionCall()),
            };
        }

        if (ctx.conditional()) {
            return this.buildConditional(ctx.conditional()!);
        }

        if (ctx.collectionBasedLoop()) {
            return this.buildCollectionLoop(ctx.collectionBasedLoop()!);
        }

        if (ctx.rangeBasedLoop()) {
            return this.buildRangeLoop(ctx.rangeBasedLoop()!);
        }

        if (ctx.skipIteration()) {
            return { type: 'SkipIteration' };
        }

        if (ctx.stopLooping()) {
            return { type: 'StopLooping' };
        }

        if (ctx.doNothing()) {
            return { type: 'DoNothing' };
        }

        throw new Error(`Unsupported statement: ${ctx.getText()}`);
    }

    private buildVariableAssignment(
        ctx: VariableAssignmentContext,
    ): VarAssignment {
        return {
            type: 'VarAssignment',
            varName: this.buildGeneralIdentifier(ctx.generalIdentifier()),
            value: this.buildExpression(ctx.expression()),
        };
    }

    private buildConditional(ctx: ConditionalContext): Conditional {
        const ifCase: ConditionBodyPair = {
            type: 'ConditionBodyPair',
            condition: this.buildExpression(ctx.expression()),
            body: ctx.statement().map((statement) => this.buildStatement(statement)),
        };

        const elseIfCases: ConditionBodyPair[] = ctx.elseIfClause().map(
            (clause: ElseIfClauseContext) => ({
                type: 'ConditionBodyPair',
                condition: this.buildExpression(clause.expression()),
                body: clause.statement().map((statement) => this.buildStatement(statement)),
            }),
        );

        const elseClause = ctx.elseClause();

        return {
            type: 'Conditional',
            ifCase,
            elseIfCases,
            elseCase: elseClause
                ? elseClause.statement().map((statement) => this.buildStatement(statement))
                : [],
        };
    }

    private buildCollectionLoop(
        ctx: CollectionBasedLoopContext,
    ): CollectionBasedLoop {
        return {
            type: 'CollectionBasedLoop',
            iteratorVar: this.identifier(ctx.identifier().getText()),
            collection: this.buildExpression(ctx.expression()),
            statements: ctx.statement().map((statement) => this.buildStatement(statement)),
        };
    }

    private buildRangeLoop(ctx: RangeBasedLoopContext): RangeBasedLoop {
        const expressions = ctx.expression();

        return {
            type: 'RangeBasedLoop',
            iteratorVar: this.identifier(ctx.identifier().getText()),
            start: this.buildExpression(expressions[0]),
            end: this.buildExpression(expressions[1]),
            statements: ctx.statement().map((statement) => this.buildStatement(statement)),
        };
    }
}