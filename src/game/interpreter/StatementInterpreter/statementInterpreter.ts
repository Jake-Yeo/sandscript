import type { Statement } from '../../../ast/ast';
import type { Completion, EvalContext } from '../../contracts';
import { executeCollectionBasedLoop } from './executeCollectionBasedLoop';
import { executeConditional } from './executeConditional';
import { executeDoNothing } from './executeDoNothing';
import { executeExpressionStatement } from './executeExpressionStatement';
import { executeGive } from './executeGive';
import { executeRangeBasedLoop } from './executeRangeBasedLoop';
import { executeSkipIteration } from './executeSkipIteration';
import { executeStopLooping } from './executeStopLooping';
import { executeVarAssignment } from './executeVarAssignment';

export function executeStatements(nodes: readonly Statement[], ctx: EvalContext): Completion {
  for (const node of nodes) {
    const completion = executeStatement(node, ctx);

    if (completion.kind !== 'normal') {
      return completion;
    }
  }

  return { kind: 'normal' };
}

function executeStatement(statement: Statement, ctx: EvalContext): Completion {
  switch (statement.type) {
    case 'ExpressionStatement': {
      return executeExpressionStatement(statement, ctx);
    }

    case 'VarAssignment': {
      return executeVarAssignment(statement, ctx);
    }

    case 'Give': {
      return executeGive(statement, ctx);
    }

    case 'Conditional': {
      return executeConditional(statement, ctx);
    }

    case 'CollectionBasedLoop': {
      return executeCollectionBasedLoop(statement, ctx);
    }

    case 'RangeBasedLoop': {
      return executeRangeBasedLoop(statement, ctx);
    }

    case 'SkipIteration': {
      return executeSkipIteration();
    }

    case 'StopLooping': {
      return executeStopLooping();
    }

    case 'DoNothing': {
      return executeDoNothing();
    }

    default: {
      throw new Error('Unsupported statement type.');
    }
  }
}
