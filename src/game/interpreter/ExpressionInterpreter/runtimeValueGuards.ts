import type { RuntimeValue } from '../../contracts';

export function requireNumber(value: RuntimeValue): number {
  if (typeof value !== 'number') {
    throw new Error('Expected a number.');
  }

  return value;
}
