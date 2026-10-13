export interface BaseNode {
  type: string; // for easy type narrowing in ts, we could also use zod
}

// ** LITERALS **

export type Literal =
  | NumberLiteral
  | BooleanLiteral
  | ColorLiteral
  | NullLiteral;

export interface NumberLiteral extends BaseNode {
  type: 'NumberLiteral';
  value: number;
}
export interface BooleanLiteral extends BaseNode {
  type: 'BooleanLiteral';
  value: boolean;
}
export interface ColorLiteral extends BaseNode {
  type: 'Color';
  value: string;
}
export interface NullLiteral extends BaseNode {
  type: 'Null';
}
export interface TypeLiteral extends BaseNode {
  type: 'Type';
  value: 'Number' | 'Boolean' | 'Color' | 'Element' | 'ElementType' | 'Null' | 'Type';
}
export interface ElementTypeLiteral extends BaseNode {
  type: 'ElementTypeLiteral';
  name: Identifier;
}

// ** IDENTIFIER **
export interface Parameter extends BaseNode {
  type: 'Parameter';
  name: Identifier;
  declaredType: TypeLiteral | ElementTypeLiteral | null;
}

export interface Identifier extends BaseNode {
  type: 'Identifier';
  value: string;
}

export interface MemberAccess extends BaseNode {
  type: 'MemberAccess';
  source: Expression;
  member: Identifier;
}

export type GeneralIdentifier = Identifier | MemberAccess;

// ** EXPRESSIONS **

export type Expression =
  | Literal
  | ElementTypeLiteral
  | GeneralIdentifier
  | ArithmeticExpression
  | BooleanExpression
  | FunctionCall
  | UnaryMinusExpression
  | TypeCheckExpression;

export interface ArithmeticExpression extends BaseNode {
  type: 'ArithmeticExpression';
  operation: 'Add' | 'Subtract' | 'Multiply' | 'Divide';
  value1: Expression;
  value2: Expression;
}

export type BooleanExpression = TwoValueBooleanExpression | NotExpression;
export interface TwoValueBooleanExpression extends BaseNode {
  type: 'TwoValueBooleanExpression';
  operation: 'Equals' | 'Less Than' | 'Greater Than' | 'And' | 'Or';
  value1: Expression;
  value2: Expression;
}

export interface NotExpression extends BaseNode {
  type: 'NotExpression';
  value: Expression;
}

export interface ExpressionStatement extends BaseNode {
  type: 'ExpressionStatement';
  expression: Expression;
}

export interface UnaryMinusExpression extends BaseNode {
  type: 'UnaryMinusExpression';
  value: Expression;
}

export interface TypeCheckExpression extends BaseNode {
  type: 'TypeCheckExpression';
  value: Expression;
  checkedType: TypeLiteral | ElementTypeLiteral;
}

export interface FunctionCall extends BaseNode {
  type: 'FunctionCall';
  callee: GeneralIdentifier;
  args: Expression[];
}

// ** STATEMENTS **

export type Statement =
  | ExpressionStatement
  | VarAssignment
  | Give
  | Conditional
  | CollectionBasedLoop
  | RangeBasedLoop
  | SkipIteration
  | StopLooping
  | DoNothing;

export interface VarAssignment extends BaseNode {
  type: 'VarAssignment';
  varName: GeneralIdentifier;
  value: Expression;
}

export interface Give extends BaseNode {
  type: 'Give';
  value: Expression;
}

export interface ConditionBodyPair {
  type: 'ConditionBodyPair';
  condition: Expression;
  body: Statement[];
}

export interface Conditional extends BaseNode {
  type: 'Conditional';
  ifCase: ConditionBodyPair;
  elseIfCases: ConditionBodyPair[];
  elseCase: Statement[];
}

export interface CollectionBasedLoop extends BaseNode {
  type: 'CollectionBasedLoop';
  iteratorVar: Identifier;
  collection: Expression;
  statements: Statement[];
}

export interface RangeBasedLoop extends BaseNode {
  type: 'RangeBasedLoop';
  iteratorVar: Identifier;
  start: Expression;
  end: Expression;
  statements: Statement[];
}

export interface SkipIteration extends BaseNode {
  type: 'SkipIteration';
}

export interface StopLooping extends BaseNode {
  type: 'StopLooping';
}

export interface DoNothing extends BaseNode {
  type: 'DoNothing';
}

// ** PROGRAM **

export interface Program extends BaseNode {
  type: 'Program';
  elementDefs: ElementDef[];
  interactionDefs: InteractionDef[];
}

export interface ElementDef extends BaseNode {
  type: 'ElementDef';
  name: Identifier;
  abstract: boolean;
  parent: Identifier | null;
  varDefs: ElementVarDef[];
  funcDefs: ElementFuncDef[];
}

export interface ElementVarDef extends BaseNode {
  type: 'ElementVarDef';
  varName: Identifier;
  value: Expression | null;
}

export interface ElementFuncDef extends BaseNode {
  type: 'ElementFuncDef';
  name: Identifier;
  args: Parameter[];
  statements: Statement[];
  hasBody: boolean;
}

export interface InteractionDef extends BaseNode {
  type: 'InteractionDef';
  element1: Identifier;
  element2: Identifier;
  element1Binding: Identifier;
  element2Binding: Identifier;
  statements: Statement[];
}
