import type { VarAssignment } from '../../../ast/ast';
import type { Completion, EvalContext } from '../../contracts';
import evaluateExpression from '../ExpressionInterpreter/expressionInterpreter';
import { requireElementId } from '../ExpressionInterpreter/runtimeValueGuards';

export function executeVarAssignment(statement: VarAssignment, ctx: EvalContext): Completion {

  const valueToAssign = evaluateExpression(statement.value, ctx)

  if (statement.varName.type === 'Identifier') {
    const variableName = statement.varName.value;

    if (ctx.locals.has(variableName)) {
      ctx.locals.set(variableName, valueToAssign);
    } else if (ctx.self !== null && ctx.host.hasField(ctx.self, variableName)) {
      ctx.host.writeField(ctx.self, variableName, valueToAssign);
    } else {
      ctx.locals.set(variableName, valueToAssign);
    }

    return { kind: 'normal' };
  }

  const elementId = requireElementId(evaluateExpression(statement.varName.source, ctx));

  // no case for locals because we can only access its class var (host)
  ctx.host.writeField(elementId, statement.varName.member.value, valueToAssign);

  return { 'kind': 'normal' }
}
