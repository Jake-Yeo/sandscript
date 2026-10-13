import type { ElementFuncDef, ElementTypeLiteral, Parameter, TypeLiteral } from '../../../ast/ast';
import type { EvalContext, RuntimeValue } from '../../contracts';
import { requireElementId } from '../runtimeValueGuards';

export function validateMethodArguments(method: ElementFuncDef, args: readonly RuntimeValue[], ctx: EvalContext): void {

  if (method.args.length !== args.length) {
    throw new Error(`Method ${method.name.value} expected ${method.args.length} arguments but received ${args.length}.`);
  }

  for (let i = 0; i < method.args.length; i++) {
    const parameter = method.args[i];
    const argument = args[i];

    if (parameter.declaredType === null) {
      continue
    }

    if (parameter.declaredType.type === 'ElementTypeLiteral') {
      validateElementTypeParameters(parameter, parameter.declaredType, argument, ctx);
    } else {
      validateTypeParameters(parameter, parameter.declaredType, argument);
    }
  }
}

function validateTypeParameters(parameter: Parameter, declaredType: TypeLiteral, argument: RuntimeValue): void {
  switch (declaredType.value) {
    case 'Number': {
      if (typeof argument !== 'number') {
        throw new Error(`${parameter.name.value} must be a Number.`);
      }
      break;
    }

    case 'Boolean': {
      if (typeof argument !== 'boolean') {
        throw new Error(`${parameter.name.value} must be a Boolean.`);
      }
      break;
    }

    case 'Null': {
      if (argument !== null) {
        throw new Error(`${parameter.name.value} must be Null.`);
      }
      break;
    }

    case 'Color': {
      if (argument === null || typeof argument !== 'object' || !('kind' in argument) || argument.kind !== 'color') {
        throw new Error(`${parameter.name.value} must be a Color.`);
      }
      break;
    }

    case 'Element': {
      requireElementId(argument)
      break;
    }

    case 'ElementType': {
      if (argument === null || typeof argument !== 'object' || !('kind' in argument) || argument.kind !== 'element-type') {
        throw new Error(`${parameter.name.value} must be an ElementType.`);
      }
      break;
    }

    case 'Type': {
      throw new Error('Parameters whose declared type is `Type` are not supported since the RuntimeValue in the interpreter contract has no `Type` representation.');
    }
  }
}

function validateElementTypeParameters(parameter: Parameter, declaredType: ElementTypeLiteral, argument: RuntimeValue, ctx: EvalContext): void {
  const expectedElementType = declaredType.name.value;
  const elementId = requireElementId(argument);
  const actualElementType = ctx.host.getElementType(elementId);

  if (actualElementType !== expectedElementType) {
    throw new Error(`${parameter.name.value} should be ${expectedElementType} but is ${actualElementType}`)
  }
}
