import type { RangeBasedLoop } from '../../../ast/ast';
import type { Completion, EvalContext } from '../../contracts';

export function executeRangeBasedLoop(statement: RangeBasedLoop, ctx: EvalContext): Completion {
  void statement;
  void ctx;
  throw new Error('Range-based loops are not implemented.');
}
