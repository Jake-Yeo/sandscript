import type { ElementFuncDef } from '../../../ast/ast';
import type { EvalContext, RuntimeValue } from '../../contracts';

export function executeMethodBody(method: ElementFuncDef, ctx: EvalContext): RuntimeValue {
  void method;
  void ctx;
  throw new Error('Method body execution is not implemented.');
}
