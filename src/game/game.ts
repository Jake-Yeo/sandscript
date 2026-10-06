export interface ElementInstance {
  readonly id: number;
  readonly elementTypeName: string; // PascalCase: "Water", "Fire", "Sand"
  
  // Positional coordinates on the grid
  positionX: number;
  positionY: number;

  // Visual representation
  color: DslColor;

  // Dynamic user-defined and inherited fields (e.g. health, intensity, melting-speed)
  properties: Map<string, DslValue>;

  // Execution tracking for tick cycles
  lastTickProcessed: number;
  isDisappeared: boolean;
}

export interface ResolvedElementDefinition {
  readonly name: string;
  readonly isTemplate: boolean;
  readonly parentName: string | null;
  readonly inheritanceChain: string[]; // ['Water', 'Liquid', 'Element']
  
  // Default values resolved down the prototype chain
  readonly defaultProperties: ReadonlyMap<string, DslValue>;

  // Resolved function implementations (preserving super-call chaining)
  readonly functions: ReadonlyMap<string, ElementFuncDef[]>;
}

export interface GridNeighborhood {
  north: ElementInstance | null;
  south: ElementInstance | null;
  east: ElementInstance | null;
  west: ElementInstance | null;
}

export interface GameGrid {
  readonly width: number;
  readonly height: number;

  inBounds(x: number, y: number): boolean;
  get(x: number, y: number): ElementInstance | null;
  set(x: number, y: number, element: ElementInstance | null): void;
  swap(x1: number, y1: number, x2: number, y2: number): void;
  move(element: ElementInstance, targetX: number, targetY: number): boolean;
  getNeighbors(x: number, y: number): GridNeighborhood;
  clear(): void;
}

export class Game {
  readonly width: number;
  readonly height: number;
  readonly tickCount: number;
  
  private state: GameState;
  
  elementRegistry: Map<string, ResolvedElementDefinition>;

  /** Advances simulation by 1 tick */
  step(): void;

  /** Spawns an element on user click / brush */
  spawn(elementName: string, x: number, y: number): boolean;

  /** Inspect cell at coordinate */
  getElementAt(x: number, y: number): ElementView | null;
}

export interface GameState {
  // --- Simulation Metadata ---
  currentTick: number;
  nextInstanceId: number;
  nextTaskId: number;

  // --- Spatial Storage ---
  grid: GameGrid;

  // --- Entities ---
  // Active elements indexed by unique runtime ID
  readonly elements: Map<number, ElementInstance>;

  // --- Definitions Cache ---
  readonly elementRegistry: Map<string, ResolvedElementDefinition>;
  readonly interactionRegistry: ResolvedInteraction[];

  // --- Deferred / Timed Loops ---
  scheduledTasks: ScheduledTickTask[];

  // --- Built-In DSL Service Hooks ---
  getAllElements(): ElementInstance[];
  getElementAt(x: number, y: number): ElementInstance | null;
  convertTo(target: ElementInstance, newType: string): ElementInstance;
  spreadElement(source: ElementInstance): ElementInstance[];
  disappear(target: ElementInstance): void;
  spawnElement(typeName: string, x: number, y: number, props?: Record<string, DslValue>): ElementInstance;
}