import type { FunctionCall } from '../../../ast/ast';
import type { BuiltinName, EvalContext, RuntimeValue } from '../../contracts';
import { callMethod } from '../MethodInterpreter/methodInterpreter';
import evaluateExpression from './expressionInterpreter';

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
    // For bare calls like disappear()

    if (isBuiltinName(name)) {

    } else {

    }
  } else {
    // For chained calls like target.convert_to()

    if (ctx.self === null) {
      throw new Error(
        `Cannot call ${name} without a current element.`,
      );
    }

    if (isBuiltinName(name)) {
      ctx.host.invokeBuiltin(name, ctx.self, methodArguments)
    } else {
      callMethod(ctx.self, name, methodArguments, ctx)
    }
  }


  return null;
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
