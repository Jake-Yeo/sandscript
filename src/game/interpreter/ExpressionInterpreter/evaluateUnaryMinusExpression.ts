import type { UnaryMinusExpression } from '../../../ast/ast';
import type { EvalContext, RuntimeValue } from '../../contracts';

export function evaluateUnaryMinusExpression(
  expression: UnaryMinusExpression,
  ctx: EvalContext,
): RuntimeValue {
  void expression;
  void ctx;
  return null;
}
