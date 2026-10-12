import type { TypeCheckExpression } from '../../../ast/ast';
import type { EvalContext, RuntimeValue } from '../../contracts';
import evaluateExpression from './expressionInterpreter';

export function evaluateTypeCheckExpression(expression: TypeCheckExpression, ctx: EvalContext): RuntimeValue {
  void expression;
  void ctx;

  const value = evaluateExpression(expression.value, ctx);
  const type = getRuntimeValueKind(value);

  if (expression.checkedType.type === 'Type') {
    const expectedTypes = {
      Number: 'number',
      Boolean: 'boolean',
      Color: 'color',
      Element: 'element-ref',
      ElementType: 'element-type',
      Null: 'null',
    } as const;

    if (expression.checkedType.value === 'Type') {
      throw new Error('Type checks against Type are unsupported.');
    }
    return type === expectedTypes[expression.checkedType.value];
  }

  if (
    value === null ||
    typeof value !== 'object' ||
    !('kind' in value) ||
    value.kind !== 'element-ref'
  ) {
    return false;
  }

  return (
    ctx.host.getElementType(value.id) === expression.checkedType.name.value
  );
}


type RuntimeValueKind =
  | 'number'
  | 'boolean'
  | 'null'
  | 'color'
  | 'element-ref'
  | 'element-type';

function getRuntimeValueKind(value: RuntimeValue): RuntimeValueKind {
  if (value === null) {
    return 'null';
  }

  if (typeof value === 'number') {
    return 'number';
  }

  if (typeof value === 'boolean') {
    return 'boolean';
  }

  if ('kind' in value) {
    return value.kind;
  }

  throw new Error('Expected a non-collection runtime value.');
}