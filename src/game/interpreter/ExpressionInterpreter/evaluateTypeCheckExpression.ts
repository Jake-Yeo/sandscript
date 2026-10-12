import type { TypeCheckExpression } from '../../../ast/ast';
import type { EvalContext, RuntimeValue } from '../../contracts';

export function evaluateTypeCheckExpression(
  expression: TypeCheckExpression,
  ctx: EvalContext,
): RuntimeValue {
  void expression;
  void ctx;
  return null;
}
