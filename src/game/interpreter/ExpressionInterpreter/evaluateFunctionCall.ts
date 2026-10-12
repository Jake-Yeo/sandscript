import type { FunctionCall } from '../../../ast/ast';
import type { EvalContext, RuntimeValue } from '../../contracts';

export function evaluateFunctionCall(call: FunctionCall, ctx: EvalContext): RuntimeValue {
  void call;
  void ctx;
  return null;
}
