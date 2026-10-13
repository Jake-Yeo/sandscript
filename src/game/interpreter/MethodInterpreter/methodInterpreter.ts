import type { ElementId, EvalContext, RuntimeValue } from '../../contracts';
import { createMethodContext } from './createMethodContext';
import { executeMethodBody } from './executeMethodBody';
import { findMethod } from './findMethod';
import { validateMethodArguments } from './validateMethodArguments';

export function callMethod(receiver: ElementId, name: string, args: readonly RuntimeValue[], ctx: EvalContext): RuntimeValue {
  const method = findMethod(receiver, name, ctx);

  if (method === null) {
    if (name === 'tick') {
      return null;
    }

    throw new Error(`Method ${name} does not exist.`);
  }

  validateMethodArguments(method, args, ctx);

  const methodContext = createMethodContext(receiver, method, args, ctx);

  return executeMethodBody(method, methodContext);
}
