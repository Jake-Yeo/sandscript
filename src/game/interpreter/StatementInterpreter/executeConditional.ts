import type { Conditional, ConditionBodyPair } from '../../../ast/ast';
import type { Completion, EvalContext } from '../../contracts';
import evaluateExpression from '../ExpressionInterpreter/expressionInterpreter';
import { executeStatements } from './statementInterpreter';

export function executeConditional(statement: Conditional, ctx: EvalContext): Completion {

  const ifCases = [statement.ifCase, ...statement.elseIfCases];

  for (const ifCase of ifCases) {
    const completion = executeIfCase(ifCase, ctx);

    if (completion !== null) {
      return completion;
    }

  }

  return executeStatements(statement.elseCase, ctx);
}

function executeIfCase(ifCase: ConditionBodyPair, ctx: EvalContext): Completion | null {

  const conditionValue = evaluateExpression(ifCase.condition, ctx);
  const isTrue = conditionValue !== false && conditionValue !== null;

  if (isTrue) {
    const statements = ifCase.body;
    return executeStatements(statements, ctx);
  }

  return null;
}
