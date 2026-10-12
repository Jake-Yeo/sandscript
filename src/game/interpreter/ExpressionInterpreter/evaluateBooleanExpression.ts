import type { BooleanExpression, TwoValueBooleanExpression } from '../../../ast/ast';
import type { EvalContext, RuntimeValue } from '../../contracts';
import evaluateExpression from './expressionInterpreter';
import { requireNumber } from './runtimeValueGuards';

export function evaluateBooleanExpression(
  expression: BooleanExpression,
  ctx: EvalContext,
): RuntimeValue {
  switch (expression.type) {
    case 'TwoValueBooleanExpression': {
      return applyTwoValueBooleanExpression(expression, ctx);
    }

    case 'NotExpression': {
      const value = evaluateExpression(expression.value, ctx);
      return applyNotExpression(value);
    }
  }
}

function applyTwoValueBooleanExpression(expression: TwoValueBooleanExpression, ctx: EvalContext): RuntimeValue {
  const value1 = evaluateExpression(expression.value1, ctx);

  switch (expression.operation) {
    case 'Equals': {
      const value2 = evaluateExpression(expression.value2, ctx);
      return runtimeValuesEqual(value1, value2);
    }

    case 'Less Than': {
      const value2 = evaluateExpression(expression.value2, ctx);
      return requireNumber(value1) < requireNumber(value2);
    }

    case 'Greater Than': {
      const value2 = evaluateExpression(expression.value2, ctx);
      return requireNumber(value1) > requireNumber(value2);
    }

    case 'And': {
      if (!isTruthy(value1)) {
        return false;
      }

      const value2 = evaluateExpression(expression.value2, ctx);
      return isTruthy(value2);
    }

    case 'Or': {
      if (isTruthy(value1)) {
        return true;
      }

      const value2 = evaluateExpression(expression.value2, ctx);
      return isTruthy(value2);
    }
  }
}

function isTruthy(value: RuntimeValue): boolean {
  return value !== false && value !== null;
}

function applyNotExpression(value: RuntimeValue): RuntimeValue {
  return !isTruthy(value);
}

type TaggedRuntimeValue = Extract<RuntimeValue, { kind: string }>;

function isTaggedRuntimeValue(value: RuntimeValue): value is TaggedRuntimeValue {
  return typeof value === 'object' && value !== null && 'kind' in value;
}

function runtimeValuesEqual(value1: RuntimeValue, value2: RuntimeValue): boolean {
  if (value1 === value2) {
    return true;
  }

  if (Array.isArray(value1) || Array.isArray(value2)) {
    if (!Array.isArray(value1) || !Array.isArray(value2)) {
      return false;
    }

    return (
      value1.length === value2.length &&
      value1.every((value, index) => runtimeValuesEqual(value, value2[index]))
    );
  }

  if (!isTaggedRuntimeValue(value1) || !isTaggedRuntimeValue(value2)) {
    return false;
  }

  switch (value1.kind) {
    case 'color': {
      return value2.kind === 'color' && value1.hex === value2.hex;
    }

    case 'element-ref': {
      return value2.kind === 'element-ref' && value1.id === value2.id;
    }

    case 'element-type': {
      return value2.kind === 'element-type' && value1.name === value2.name;
    }
  }
}
