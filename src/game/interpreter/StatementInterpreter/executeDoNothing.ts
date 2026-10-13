import type { Completion } from "../../contracts";

export function executeDoNothing(): Completion {
  return { kind: 'normal' };
}
