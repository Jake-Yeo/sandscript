import type { ElementId, EvalContext, RuntimeValue } from '../../contracts';

function notImplemented(operation: string): never {
  throw new Error(`${operation} is not implemented.`);
}

export function callMethod(
  receiver: ElementId,
  name: string,
  args: readonly RuntimeValue[],
  ctx: EvalContext,
): RuntimeValue {
  void receiver;
  void name;
  void args;
  void ctx;
  return notImplemented('Method calls');
}
