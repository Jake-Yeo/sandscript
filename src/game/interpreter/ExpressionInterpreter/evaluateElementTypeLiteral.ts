import type { ElementTypeLiteral } from '../../../ast/ast';
import type { RuntimeValue } from '../../contracts';

export function evaluateElementTypeLiteral(elementType: ElementTypeLiteral): RuntimeValue {
  return {
    kind: "element-type",
    name: elementType.name.value
  };
}
