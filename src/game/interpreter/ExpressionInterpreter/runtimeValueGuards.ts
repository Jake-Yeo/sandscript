import type { ElementId, RuntimeValue } from '../../contracts';

export function requireNumber(value: RuntimeValue): number {
  if (typeof value !== 'number') {
    throw new Error('Expected a number.');
  }

  return value;
}

export function requireElementId(value: RuntimeValue): ElementId {
  if (
    typeof value !== 'object' ||
    value === null ||
    !('kind' in value) ||
    value.kind !== 'element-ref'
  ) {
    throw new Error('Expected an element reference.');
  }

  return value.id;
}
