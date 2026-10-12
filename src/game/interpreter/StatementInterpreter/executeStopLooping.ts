import type { Completion } from '../../contracts';

export function executeStopLooping(): Completion {
  return { kind: 'break' };
}
