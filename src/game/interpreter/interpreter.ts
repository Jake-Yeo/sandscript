import type { Evaluator } from '../contracts';
import evaluateExpression from './ExpressionInterpreter/expressionInterpreter';
import { callMethod } from './MethodInterpreter/methodInterpreter';
import { executeStatements } from './StatementInterpreter/statementInterpreter';

export function createEvaluator(): Evaluator {
    return {
        evaluateExpression,
        executeStatements,
        callMethod,
    };
}
