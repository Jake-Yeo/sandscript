import type { UnaryMinusExpression } from '../../../ast/ast';
import type { EvalContext, RuntimeValue } from '../../contracts';
import evaluateExpression from './expressionInterpreter';
import { requireNumber } from '../runtimeValueGuards';

export function evaluateUnaryMinusExpression(expression: UnaryMinusExpression, ctx: EvalContext,): RuntimeValue {
  const value = requireNumber(evaluateExpression(expression.value, ctx));

  return -value;
}
