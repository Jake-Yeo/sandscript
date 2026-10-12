import type { Statement } from '../../../ast/ast';
import type { Completion, EvalContext } from '../../contracts';

function notImplemented(operation: string): never {
  throw new Error(`${operation} is not implemented.`);
}

export function executeStatements(nodes: readonly Statement[], ctx: EvalContext): Completion {
  void nodes;
  void ctx;
  return notImplemented('Statement execution');
}
