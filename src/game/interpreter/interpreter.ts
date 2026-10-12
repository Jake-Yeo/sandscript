import type {
    Completion,
    Evaluator,
} from '../contracts';
import evaluateExpression from './ExpressionInterpreter/expressionInterpreter';
import { callMethod } from './MethodInterpreter/methodInterpreter';

function notImplemented(operation: string): never {
    throw new Error(`${operation} is not implemented.`);
}

export function createEvaluator(): Evaluator {
    return {
        evaluateExpression,

        executeStatements(_nodes, _ctx): Completion {
            return notImplemented('Statement execution');
        },

        callMethod,
    };
}
