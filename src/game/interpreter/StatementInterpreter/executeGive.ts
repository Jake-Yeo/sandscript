import type { Give } from '../../../ast/ast';
import type { Completion, EvalContext } from '../../contracts';
import evaluateExpression from '../ExpressionInterpreter/expressionInterpreter';

export function executeGive(statement: Give, ctx: EvalContext): Completion {
  const value = evaluateExpression(statement.value, ctx);

  return {
    kind: 'return',
    value,
  };
}
