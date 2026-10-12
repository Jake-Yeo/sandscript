import type { ElementFuncDef } from '../../../ast/ast';
import type { ElementId, EvalContext, RuntimeValue } from '../../contracts';

export function createMethodContext(receiver: ElementId, method: ElementFuncDef, args: readonly RuntimeValue[], ctx: EvalContext): EvalContext {

  const methodArguments = new Map<string, RuntimeValue>();

  for (let i = 0; i < args.length; i++){
    const argumentName = method.args[i].name.value;
    methodArguments.set(argumentName, args[i]);
  }

  const evalContext: EvalContext = {
    host: ctx.host,
    self: receiver,
    locals: methodArguments
  }

  return evalContext;
}
