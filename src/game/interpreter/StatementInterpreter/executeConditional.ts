import type { Conditional } from '../../../ast/ast';
import type { Completion, EvalContext } from '../../contracts';

export function executeConditional(statement: Conditional, ctx: EvalContext): Completion {
  void statement;
  void ctx;
  throw new Error('Conditionals are not implemented.');
}
