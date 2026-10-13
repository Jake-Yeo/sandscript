import type {
  ElementId,
  ElementView,
  EngineOptions,
  GameEngine,
  GameSnapshot,
} from '../../game/contracts';

const ELEMENT_COLORS: Record<string, string> = {
  sand: 'rgb(219, 189, 120)',
  water: 'rgb(52, 120, 219)',
  stone: 'rgb(120, 120, 128)',
  wood: 'rgb(122, 84, 48)',
  fire: 'rgb(255, 90, 20)',
  plant: 'rgb(60, 170, 70)',
};

class FakeEngine implements GameEngine {
  private tickCount = 0;
  private nextId: ElementId = 0;
  private grid: (ElementView | null)[][];
  private readonly options: EngineOptions;
  private readonly moved = new Set<ElementId>();

  constructor(options: EngineOptions) {
    this.options = options;
    this.grid = Array.from({ length: options.width }, () =>
      Array<ElementView | null>(options.height).fill(null),
    );
    this.populate();
  }

  availableElements(): readonly string[] {
    return Object.keys(ELEMENT_COLORS);
  }

  place(elementType: string, x: number, y: number): ElementId {
    const color = ELEMENT_COLORS[elementType];
    if (!color) throw new Error(`unknown element: ${elementType}`);

    const existing = this.grid[x][y];
    if (existing) return existing.id;

    const element: ElementView = { id: this.nextId++, elementType, x, y, color };
    this.grid[x][y] = element;
    return element.id;
  }

  erase(x: number, y: number) {
    this.grid[x][y] = null;
  }

  step(): GameSnapshot {
    this.tickCount++;
    this.moved.clear();

    for (let y = this.options.height - 1; y >= 0; y--) {
      const leftToRight = Math.random() < 0.5;
      for (let i = 0; i < this.options.width; i++) {
        const x = leftToRight ? i : this.options.width - 1 - i;
        const element = this.grid[x][y];
        if (element && !this.moved.has(element.id)) this.update(element);
      }
    }

    return this.snapshot();
  }

  snapshot(): GameSnapshot {
    return {
      tick: this.tickCount,
      width: this.options.width,
      height: this.options.height,
      elements: this.grid
        .flat()
        .filter((cell) => cell !== null)
        .map((cell) => ({ ...cell })),
    };
  }

  private update(element: ElementView) {
    const side = Math.random() < 0.5 ? 1 : -1;

    switch (element.elementType) {
      case 'sand':
        this.tryMove(
          element,
          [
            [0, 1],
            [side, 1],
            [-side, 1],
          ],
          (target) => !target || target.elementType === 'water',
        );
        break;
      case 'water':
        this.tryMove(
          element,
          [
            [0, 1],
            [side, 1],
            [-side, 1],
            [side, 0],
            [-side, 0],
          ],
          (target) => !target,
        );
        break;
      case 'fire':
        this.burn(element);
        break;
    }
  }

  private burn(fire: ElementView) {
    const neighbors = [
      this.at(fire.x + 1, fire.y),
      this.at(fire.x - 1, fire.y),
      this.at(fire.x, fire.y + 1),
      this.at(fire.x, fire.y - 1),
    ];

    const fuel = neighbors.filter((n) => n?.elementType === 'wood' || n?.elementType === 'plant');
    const doused = neighbors.some((n) => n?.elementType === 'water');

    if (doused || Math.random() < (fuel.length > 0 ? 0.02 : 0.15)) {
      this.erase(fire.x, fire.y);
      return;
    }

    for (const neighbor of fuel) {
      if (neighbor && Math.random() < 0.1) {
        neighbor.elementType = 'fire';
        neighbor.color = ELEMENT_COLORS.fire;
        this.moved.add(neighbor.id);
      }
    }

    const dx = Math.floor(Math.random() * 3) - 1;
    if (fuel.length === 0) {
      if (Math.random() < 0.5) this.tryMove(fire, [[dx, -1]], (target) => !target);
    } else if (Math.random() < 0.3 && this.at(fire.x + dx, fire.y - 1) === null) {
      this.moved.add(this.place('fire', fire.x + dx, fire.y - 1));
    }
  }

  private tryMove(
    element: ElementView,
    offsets: [number, number][],
    canEnter: (target: ElementView | null) => boolean,
  ) {
    for (const [dx, dy] of offsets) {
      const x = element.x + dx;
      const y = element.y + dy;
      const target = this.at(x, y);
      if (target === undefined || !canEnter(target)) continue;

      this.grid[element.x][element.y] = target;
      if (target) {
        target.x = element.x;
        target.y = element.y;
        this.moved.add(target.id);
      }
      this.grid[x][y] = element;
      element.x = x;
      element.y = y;
      this.moved.add(element.id);
      return;
    }
  }

  private at(x: number, y: number): ElementView | null | undefined {
    return this.grid[x]?.[y];
  }

  private populate() {
    const { width: w, height: h } = this.options;
    const floor = h - 4;

    this.fill('stone', 0, floor, w - 1, h - 1);

    const duneCenter = Math.floor(w / 4);
    const duneHeight = Math.floor(h / 6);
    for (let dy = 0; dy < duneHeight; dy++) {
      const half = duneHeight - dy;
      this.fill('sand', duneCenter - half, floor - 1 - dy, duneCenter + half, floor - 1 - dy);
    }

    const basinLeft = Math.floor(w / 2);
    const basinRight = w - 8;
    const basinTop = floor - 10;
    this.fill('stone', basinLeft, basinTop, basinLeft + 1, floor - 1);
    this.fill('stone', basinRight - 1, basinTop, basinRight, floor - 1);
    this.fill('water', basinLeft + 2, basinTop + 3, basinRight - 2, floor - 1);

    const logY = Math.floor(h / 3);
    this.fill('wood', duneCenter - 8, logY, duneCenter + 8, logY + 1);
    this.fill('fire', duneCenter - 4, logY - 2, duneCenter + 4, logY - 1);

    for (let x = duneCenter + duneHeight + 2; x < basinLeft - 1; x += 3) {
      this.fill('plant', x, floor - 5, x, floor - 1);
    }

    this.fill('water', duneCenter + 12, 4, duneCenter + 20, 12);
    this.fill('sand', basinLeft + 10, 8, basinLeft + 18, 16);
  }

  private fill(elementType: string, x0: number, y0: number, x1: number, y1: number) {
    for (let x = Math.max(0, x0); x <= Math.min(this.options.width - 1, x1); x++) {
      for (let y = Math.max(0, y0); y <= Math.min(this.options.height - 1, y1); y++) {
        this.place(elementType, x, y);
      }
    }
  }
}

export function createFakeEngine(options: EngineOptions): GameEngine {
  return new FakeEngine(options);
}
