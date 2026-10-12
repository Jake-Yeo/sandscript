import type { CollectionBasedLoop } from '../../../ast/ast';
import type { Completion, EvalContext } from '../../contracts';
import evaluateExpression from '../ExpressionInterpreter/expressionInterpreter';
import { executeStatements } from './statementInterpreter';

export function executeCollectionBasedLoop(statement: CollectionBasedLoop, ctx: EvalContext): Completion {
  const value = evaluateExpression(statement.collection, ctx);

  if (!Array.isArray(value)) {
    throw new Error('Expected a collection.');
  }

  const collection = [...value];

  for (const collectible of collection) {
    ctx.locals.set(statement.iteratorVar.value, collectible);
    const completion = executeStatements(statement.statements, ctx);

    if (completion.kind === 'return') {
      return completion;
    }

    if (completion.kind === 'break') {
      return { kind: 'normal' };
    }

    if (completion.kind === 'continue') {
      // Not necessary but makes it clearer
      continue;
    }

  }

  return { kind: 'normal' };
}
