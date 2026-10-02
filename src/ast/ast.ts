interface BaseNode {
  type: string; // for easy type narrowing in ts, we could also use zod
}

// ** LITERALS **

type Literal =
  | NumberLiteral
  | BooleanLiteral
  | ColorLiteral
  | NullLiteral
  | TypeLiteral
  | ElementTypeLiteral;

interface NumberLiteral extends BaseNode {
  type: 'NumberLiteral';
  value: number;
}
interface BooleanLiteral extends BaseNode {
  type: 'BooleanLiteral';
  value: boolean;
}
interface ColorLiteral extends BaseNode {
  type: 'Color';
  value: string;
}
interface NullLiteral extends BaseNode {
  type: 'Null';
}
interface TypeLiteral extends BaseNode {
  type: 'Type';
  value: 'Number' | 'Boolean' | 'Color' | 'Element' | 'ElementType' | 'Null' | 'Type';
}
interface ElementTypeLiteral extends BaseNode {
  type: 'ElementTypeLiteral';
  name: Identifier;
}

// ** IDENTIFIER **
interface Parameter extends BaseNode {
  type: 'Parameter';
  name: Identifier;
  declaredType: TypeLiteral | ElementTypeLiteral | null;
}

interface Identifier extends BaseNode {
  type: 'Identifier';
  value: string;
}

interface MemberAccess extends BaseNode {
  type: 'MemberAccess';
  source: Expression;
  member: Identifier;
}

type GeneralIdentifier = Identifier | MemberAccess;

// ** EXPRESSIONS **

type Expression =
  | Literal
  | GeneralIdentifier
  | ArithmeticExpression
  | BooleanExpression
  | FunctionCall;

interface ArithmeticExpression extends BaseNode {
  type: 'ArithmeticExpression';
  operation: 'Add' | 'Subtract' | 'Multiply' | 'Divide';
  value1: Expression;
  value2: Expression;
}

type BooleanExpression = TwoValueBooleanExpression | NotExpression;
interface TwoValueBooleanExpression extends BaseNode {
  type: 'TwoValueBooleanExpression';
  operation: 'Equals' | 'Less Than' | 'Greater Than' | 'And' | 'Or';
  value1: Expression;
  value2: Expression;
}

interface NotExpression extends BaseNode {
  type: 'NotExpression';
  value: Expression;
}

interface ExpressionStatement extends BaseNode {
  type: 'ExpressionStatement';
  expression: Expression;
}

interface FunctionCall extends BaseNode {
  type: 'FunctionCall';
  callee: GeneralIdentifier;
  args: Expression[];
}

// ** STATEMENTS **

type Statement =
  | ExpressionStatement
  | VarAssignment
  | Give
  | Conditional
  | CollectionBasedLoop
  | RangeBasedLoop
  | NextTicksLoop
  | SkipIteration
  | StopLooping
  | DoNothing;

interface VarAssignment extends BaseNode {
  type: 'VarAssignment';
  varName: GeneralIdentifier;
  value: Expression;
}

interface Give extends BaseNode {
  type: 'Give';
  value: Expression;
}

interface ConditionBodyPair {
  type: 'ConditionBodyPair';
  condition: Expression;
  body: Statement[];
}

interface Conditional extends BaseNode {
  type: 'Conditional';
  ifCase: ConditionBodyPair;
  elseIfCases: ConditionBodyPair[];
  elseCase: Statement[];
}

interface CollectionBasedLoop extends BaseNode {
  type: 'CollectionBasedLoop';
  iteratorVar: Identifier;
  collection: Expression;
  statements: Statement[];
}

interface RangeBasedLoop extends BaseNode {
  type: 'RangeBasedLoop';
  iteratorVar: Identifier;
  start: Expression;
  end: Expression;
  statements: Statement[];
}

interface NextTicksLoop extends BaseNode {
  type: 'NextTicksLoop';
  iteratorVar: Identifier;
  ticks: Expression;
  statements: Statement[];
}

interface SkipIteration extends BaseNode {
  type: 'SkipIteration';
}

interface StopLooping extends BaseNode {
  type: 'StopLooping';
}

interface DoNothing extends BaseNode {
  type: 'DoNothing';
}

// ** PROGRAM **

export interface Program extends BaseNode {
  type: 'Program';
  elementDefs: ElementDef[];
  interactionDefs: InteractionDef[];
}

interface ElementDef extends BaseNode {
  type: 'ElementDef';
  name: Identifier;
  abstract: boolean;
  parent: Identifier | null;
  varDefs: ElementVarDef[];
  funcDefs: ElementFuncDef[];
}

interface ElementVarDef extends BaseNode {
  type: 'ElementVarDef';
  varName: Identifier;
  value: Expression | null;
}

interface ElementFuncDef extends BaseNode {
  type: 'ElementFuncDef';
  name: Identifier;
  args: Parameter[];
  statements: Statement[];
}

interface InteractionDef extends BaseNode {
  type: 'InteractionDef';
  element1: Identifier;
  element2: Identifier;
  element1Binding: Identifier;
  element2Binding: Identifier;
  statements: Statement[];
}
