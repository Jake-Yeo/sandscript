import type { ArithmeticExpression } from '../../../ast/ast';
import type { EvalContext, RuntimeValue } from '../../contracts';
import evaluateExpression from './expressionInterpreter';
import { requireNumber } from './runtimeValueGuards';

export function evaluateArithmeticExpression(expression: ArithmeticExpression, ctx: EvalContext): RuntimeValue {
  const num1 = requireNumber(evaluateExpression(expression.value1, ctx))
  const num2 = requireNumber(evaluateExpression(expression.value2, ctx))
  
  return requireFinite(applyArithmetic(num1, num2, expression.operation))
}

type ArithmeticOperation = ArithmeticExpression['operation'];

function applyArithmetic(num1: number, num2: number, operand: ArithmeticOperation): number {

  switch (operand) {
    case 'Add': {
      return num1 + num2
    }
    case 'Subtract': {
      return num1 - num2
    }
    case 'Multiply': {
      return num1 * num2
    }
    case 'Divide': {
      return num1 / num2
    }
  }
}

function requireFinite(number: number): number {
  if (!Number.isFinite(number)) {
    throw new Error('Arithmetic result must be finite.');
  }

  return number;
}
