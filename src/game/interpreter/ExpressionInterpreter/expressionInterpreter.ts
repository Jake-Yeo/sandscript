import type { Expression } from '../../../ast/ast';
import type { EvalContext, RuntimeValue } from '../../contracts';
import { evaluateArithmeticExpression } from './evaluateArithmeticExpression';
import { evaluateBooleanExpression } from './evaluateBooleanExpression';
import { evaluateElementTypeLiteral } from './evaluateElementTypeLiteral';
import { evaluateFunctionCall } from './evaluateFunctionCall';
import { evaluateGeneralIdentifier } from './evaluateGeneralIdentifier';
import { evaluateLiteral } from './evaluateLiteral';
import { evaluateTypeCheckExpression } from './evaluateTypeCheckExpression';
import { evaluateUnaryMinusExpression } from './evaluateUnaryMinusExpression';

export default function evaluateExpression(expression: Expression, ctx: EvalContext): RuntimeValue {
    ctx.host.consumeInstruction();
    switch (expression.type) {
        case 'NumberLiteral':
        case 'BooleanLiteral':
        case 'Color':
        case 'Null': {
            return evaluateLiteral(expression);
        }

        case 'ElementTypeLiteral': {
            return evaluateElementTypeLiteral(expression);
        }

        case 'Identifier':
        case 'MemberAccess': {
            return evaluateGeneralIdentifier(expression, ctx);
        }

        case 'ArithmeticExpression': {
            return evaluateArithmeticExpression(expression, ctx);
        }

        case 'TwoValueBooleanExpression':
        case 'NotExpression': {
            return evaluateBooleanExpression(expression, ctx);
        }

        case 'FunctionCall': {
            return evaluateFunctionCall(expression, ctx);
        }

        case 'UnaryMinusExpression': {
            return evaluateUnaryMinusExpression(expression, ctx);
        }

        case 'TypeCheckExpression': {
            return evaluateTypeCheckExpression(expression, ctx);
        }

        default: {
            throw new Error(`Unsupported expression type`);
        }
    }
}
