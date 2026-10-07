// Sandbox DSL — evaluation stage contracts (src/game/contracts.ts).
// A creates this file once agreed. Nobody executes code here.
// A implements buildGame. B implements createEvaluator.
// C implements RuntimeHost (internal) + createEngine (frontend).

import type {
  ElementFuncDef,
  ElementVarDef,
  Expression,
  InteractionDef,
  Program,
  Statement,
} from "../ast/ast";

// ---------- Shared ----------

// Stable ID for one live element instance.
export type ElementId = number;

// Result of executing an expression. Refs point at live IDs;
// element-type values name definitions like "Water".
export type RuntimeValue =
  | number
  | boolean
  | null
  | { kind: "color"; hex: string }
  | { kind: "element-ref"; id: ElementId }
  | { kind: "element-type"; name: string }
  | readonly RuntimeValue[];

// ---------- A: builder output ----------

export interface CompiledElement {
  name: string;
  abstract: boolean; // templates can't be placed
  fieldInitializers: readonly ElementVarDef[]; // parent-first, evaluated once per placement
  methods: ReadonlyMap<string, ElementFuncDef>; // one body per name; child replaces parent
}

export interface CompiledGame {
  elements: ReadonlyMap<string, CompiledElement>;
  interactions: readonly InteractionDef[]; // source order
}

export declare function buildGame(program: Program): CompiledGame;

// ---------- B: interpreter ----------

// host = callbacks to C; self = current instance or null;
// locals = fresh scratch variables per call.
export interface EvalContext {
  host: RuntimeHost;
  self: ElementId | null;
  locals: Map<string, RuntimeValue>;
}

// How a statement list finished; propagates return/break/continue.
export type Completion =
  | { kind: "normal" }
  | { kind: "return"; value: RuntimeValue }
  | { kind: "break" }
  | { kind: "continue" };

export interface Evaluator {
  evaluateExpression(node: Expression, ctx: EvalContext): RuntimeValue;
  executeStatements(nodes: readonly Statement[], ctx: EvalContext): Completion;
  // Missing `tick` = no-op; other missing methods = error.
  callMethod(
    receiver: ElementId,
    name: string,
    args: readonly RuntimeValue[],
    ctx: EvalContext
  ): RuntimeValue;
}

export declare function createEvaluator(): Evaluator;

// ---------- C: world callbacks (B calls these) ----------

export type BuiltinName =
  | "get-all-elements"
  | "get-element-at"
  | "convert-to"
  | "spread-element"
  | "disappear";

export interface RuntimeHost {
  readonly game: CompiledGame;
  getElementType(id: ElementId): string;
  hasField(id: ElementId, name: string): boolean;
  readField(id: ElementId, name: string): RuntimeValue;
  // Coordinate writes are movement requests; blocked = stay put.
  writeField(id: ElementId, name: string, value: RuntimeValue): void;
  // Null receiver = global lookup; instance receiver = mutation (returns null).
  invokeBuiltin(
    name: BuiltinName,
    receiver: ElementId | null,
    args: readonly RuntimeValue[]
  ): RuntimeValue;
  // Safety fuse; C throws past a fixed per-step limit.
  consumeInstruction(): void;
}

// ---------- C: frontend API ----------

export interface ElementView {
  id: ElementId;
  elementType: string;
  x: number;
  y: number;
  color: string;
}

export interface GameSnapshot {
  tick: number;
  width: number;
  height: number;
  elements: readonly ElementView[];
}

export interface GameEngine {
  availableElements(): readonly string[];
  place(elementType: string, x: number, y: number): ElementId;
  erase(x: number, y: number): void;
  step(): GameSnapshot; // advance one tick, then report
  snapshot(): GameSnapshot; // report without advancing
}

export interface EngineOptions {
  width: number;
  height: number;
}

export declare function createEngine(
  game: CompiledGame,
  options: EngineOptions,
  evaluator: Evaluator
): GameEngine;
