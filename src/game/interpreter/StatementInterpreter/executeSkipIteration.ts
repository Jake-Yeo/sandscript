import type { Completion } from '../../contracts';

export function executeSkipIteration(): Completion {
  return { kind: 'continue' };
}
