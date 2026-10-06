import { CANVAS_DIMS } from './canvas';
import type { Dimensions } from './types';

export type Cell = string | null;

export type Element = {
  color: string;
};
export const ELEMENTS: Record<string, Element> = {
  fire: { color: 'rgb(255, 0, 0)' },
};

export class Game {
  readonly dims: Dimensions;
  tickCount: number = 0;

  private grid: Cell[][];

  constructor() {
    this.dims = CANVAS_DIMS;
    this.grid = Array.from({ length: this.dims.x }, () => Array<Cell>(this.dims.y).fill(null));
  }

  step() {
    this.tickCount++;
  }

  spawn(elementName: string, x: number, y: number) {
    const element = this.getElementAt(x, y);
    if (!element) this.grid[x][y] = elementName;
  }

  erase(x: number, y: number) {
    this.grid[x][y] = null;
  }

  getElementAt(x: number, y: number): Cell {
    return this.grid[x][y];
  }
}
