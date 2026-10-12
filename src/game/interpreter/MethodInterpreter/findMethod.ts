import type { ElementFuncDef } from '../../../ast/ast';
import type { ElementId, EvalContext } from '../../contracts';

export function findMethod(receiver: ElementId, name: string, ctx: EvalContext): ElementFuncDef | null {
  const elementType = ctx.host.getElementType(receiver);
  const element = ctx.host.game.elements.get(elementType);

  if (element === undefined) {
    throw new Error(`Element type ${elementType} does not exist.`);
  }

  return element.methods.get(name) ?? null;
}
