import type {
  BooleanLiteral,
  ColorLiteral,
  Literal,
  NumberLiteral,
} from '../../../ast/ast';
import type { RuntimeValue } from '../../contracts';

export function evaluateLiteral(literal: Literal): RuntimeValue {
  switch (literal.type) {
    case 'NumberLiteral': {
      return evaluateNumberLiteral(literal);
    }

    case 'BooleanLiteral': {
      return evaluateBooleanLiteral(literal);
    }

    case 'Color': {
      return evaluateColorLiteral(literal);
    }

    case 'Null': {
      return evaluateNullLiteral();
    }
  }
}

function evaluateNumberLiteral(literal: NumberLiteral): RuntimeValue {
  return literal.value;
}

function evaluateBooleanLiteral(literal: BooleanLiteral): RuntimeValue {
  return literal.value;
}

function evaluateColorLiteral(literal: ColorLiteral): RuntimeValue {
  return {
    kind: "color",
    hex: literal.value
  };
}

function evaluateNullLiteral(): RuntimeValue {
  return null;
}
