import type { GeneralIdentifier, Identifier, MemberAccess } from '../../../ast/ast';
import type { EvalContext, RuntimeValue } from '../../contracts';
import evaluateExpression from './expressionInterpreter';

export function evaluateGeneralIdentifier(identifier: GeneralIdentifier, ctx: EvalContext): RuntimeValue {
  switch (identifier.type) {
    case 'Identifier': {
      return evaluateIdentifier(identifier, ctx);
    }

    case 'MemberAccess': {
      return evaluateMemberAccess(identifier, ctx);
    }
  }
}

function evaluateIdentifier(identifier: Identifier, ctx: EvalContext): RuntimeValue {

  const identifierName = identifier.value

  if (identifierName === 'this') {
    if (ctx.self === null) {
      throw new Error('Cannot use this outside an element context.');
    }

    return {
      kind: 'element-ref',
      id: ctx.self
    }
  }

  if (ctx.locals.has(identifierName)) {
    return ctx.locals.get(identifierName) || null
  }

  return null;
}

function evaluateMemberAccess(memberAccess: MemberAccess, ctx: EvalContext): RuntimeValue {
  const source = evaluateExpression(memberAccess.source, ctx)

  if (
    typeof source !== 'object' ||
    source === null ||
    !('kind' in source) ||
    source.kind !== 'element-ref'
  ) {
    throw new Error('Member access requires an element reference.');
  }

  return ctx.host.readField(
    source.id,
    memberAccess.member.value,
  );
}
