import type { FunctionCall, MemberAccess } from '../../../ast/ast';
import type { BuiltinName, EvalContext, RuntimeValue } from '../../contracts';
import { callMethod } from '../MethodInterpreter/methodInterpreter';
import evaluateExpression from './expressionInterpreter';
import { requireElementId } from '../runtimeValueGuards';

const BUILTIN_NAMES: ReadonlySet<string> = new Set(
  [
    'get_all_elements',
    'get_element_at',
    'convert_to',
    'spread_element',
    'disappear',
  ] satisfies BuiltinName[],
);

type ReceiverBuiltInName = Extract<
  BuiltinName,
  'convert_to' | 'spread_element' | 'disappear'
>;

const RECEIVER_BUILTIN_NAMES: ReadonlySet<string> = new Set(
  [
    'convert_to',
    'spread_element',
    'disappear',
  ] satisfies ReceiverBuiltInName[],
);

export function evaluateFunctionCall(call: FunctionCall, ctx: EvalContext): RuntimeValue {

  const methodArguments = call.args.map((argument) =>
    evaluateExpression(argument, ctx),
  );

  const name = getFunctionName(call);

  if (call.callee.type === 'Identifier') {
    return evaluateBareFunctionCall(name, methodArguments, ctx);
  }

  return evaluateMemberFunctionCall(call.callee, name, methodArguments, ctx);
}

function evaluateBareFunctionCall(name: string, methodArguments: readonly RuntimeValue[], ctx: EvalContext): RuntimeValue {

  if (isBuiltinName(name)) {
    if (isReceiverBuiltinName(name)) {
      if (ctx.self === null) {
        throw new Error(
          `Cannot call ${name} without a current element.`,
        );
      }

      return ctx.host.invokeBuiltin(name, ctx.self, methodArguments);
    } else {
      return ctx.host.invokeBuiltin(name, null, methodArguments);
    }
  }

  if (ctx.self === null) {
    throw new Error(
      `Cannot call ${name} without a current element.`,
    );
  }

  return callMethod(ctx.self, name, methodArguments, ctx);
}

function evaluateMemberFunctionCall(callee: MemberAccess, name: string, methodArguments: readonly RuntimeValue[], ctx: EvalContext): RuntimeValue {

  const elementId = requireElementId(evaluateExpression(callee.source, ctx));

  if (isBuiltinName(name)) {
    if (!isReceiverBuiltinName(name)) {
      throw new Error(
        `Built-in ${name} cannot be called on an element.`,
      );
    }

    return ctx.host.invokeBuiltin(name, elementId, methodArguments);
  }

  return callMethod(elementId, name, methodArguments, ctx);
}

function isBuiltinName(name: string): name is BuiltinName {
  return BUILTIN_NAMES.has(name);
}

export function isReceiverBuiltinName(name: string): name is ReceiverBuiltInName {
  return RECEIVER_BUILTIN_NAMES.has(name);
}

function getFunctionName(call: FunctionCall): string {
  if (call.callee.type === 'Identifier') {
    return call.callee.value;
  }
  return call.callee.member.value;
}
