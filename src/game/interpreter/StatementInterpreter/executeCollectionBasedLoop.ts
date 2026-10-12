import type { CollectionBasedLoop } from '../../../ast/ast';
import type { Completion, EvalContext } from '../../contracts';

export function executeCollectionBasedLoop(statement: CollectionBasedLoop, ctx: EvalContext): Completion {
  void statement;
  void ctx;
  throw new Error('Collection-based loops are not implemented.');
}
