import type { RangeBasedLoop } from '../../../ast/ast';
import type { Completion, EvalContext } from '../../contracts';
import evaluateExpression from '../ExpressionInterpreter/expressionInterpreter';
import { requireNumber } from '../runtimeValueGuards';
import { executeStatements } from './statementInterpreter';

export function executeRangeBasedLoop(statement: RangeBasedLoop, ctx: EvalContext): Completion {
  const start = requireNumber(evaluateExpression(statement.start, ctx));
  const end = requireNumber(evaluateExpression(statement.end, ctx));

  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    throw new Error('Range endpoints must be integers.');
  }

  for (let i = start; i <= end; i++) {
    ctx.locals.set(statement.iteratorVar.value, i);

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
