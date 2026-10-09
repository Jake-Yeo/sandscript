import type {
  ElementFuncDef,
  ElementVarDef,
  Expression,
  InteractionDef,
  Statement,
} from '../ast/ast';

export type ElementId = number;
export type RuntimeValue =
  | number
  | boolean
  | null
  | { kind: 'color'; hex: string }
  | { kind: 'element-ref'; id: ElementId }
  | { kind: 'element-type'; name: string }
  | readonly RuntimeValue[];

export interface CompiledElement {
  name: string;
  abstract: boolean;
  fieldInitializers: readonly ElementVarDef[];
  methods: ReadonlyMap<string, ElementFuncDef>;
}
export interface CompiledGame {
  elements: ReadonlyMap<string, CompiledElement>;
  interactions: readonly InteractionDef[];
}
export interface EvalContext {
  host: RuntimeHost;
  self: ElementId | null;
  locals: Map<string, RuntimeValue>;
}
export type Completion =
  | { kind: 'normal' }
  | { kind: 'return'; value: RuntimeValue }
  | { kind: 'break' }
  | { kind: 'continue' };
export interface Evaluator {
  evaluateExpression(node: Expression, ctx: EvalContext): RuntimeValue;
  executeStatements(nodes: readonly Statement[], ctx: EvalContext): Completion;
  callMethod(
    receiver: ElementId,
    name: string,
    args: readonly RuntimeValue[],
    ctx: EvalContext,
  ): RuntimeValue;
}
export type BuiltinName =
  | 'get-all-elements'
  | 'get-element-at'
  | 'convert-to'
  | 'spread-element'
  | 'disappear';
export interface RuntimeHost {
  readonly game: CompiledGame;
  getElementType(id: ElementId): string;
  hasField(id: ElementId, name: string): boolean;
  readField(id: ElementId, name: string): RuntimeValue;
  writeField(id: ElementId, name: string, value: RuntimeValue): void;
  invokeBuiltin(
    name: BuiltinName,
    receiver: ElementId | null,
    args: readonly RuntimeValue[],
  ): RuntimeValue;
  consumeInstruction(): void;
}
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
  step(): GameSnapshot;
  snapshot(): GameSnapshot;
}
export interface EngineOptions {
  width: number;
  height: number;
}
