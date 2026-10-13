import type { ExpressionStatement } from '../../../ast/ast';
import type { Completion, EvalContext } from '../../contracts';
import evaluateExpression from '../ExpressionInterpreter/expressionInterpreter';

export function executeExpressionStatement(statement: ExpressionStatement, ctx: EvalContext): Completion {
  evaluateExpression(statement.expression, ctx)
  return {'kind': 'normal'}
}
