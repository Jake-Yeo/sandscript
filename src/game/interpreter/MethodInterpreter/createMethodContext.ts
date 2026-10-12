import type { ElementFuncDef } from '../../../ast/ast';
import type { ElementId, EvalContext, RuntimeValue } from '../../contracts';

export function createMethodContext(receiver: ElementId, method: ElementFuncDef, args: readonly RuntimeValue[], ctx: EvalContext): EvalContext {
  void receiver;
  void method;
  void args;
  void ctx;
  throw new Error('Method context creation is not implemented.');
}
