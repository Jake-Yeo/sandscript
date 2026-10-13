
import type {
    Program,
} from './ast';

export interface ASTValidationError {
    path: string;
    message: string;
}

const NODE_TYPES = new Set([
    'Program',
    'Parameter',
    'NumberLiteral',
    'BooleanLiteral',
    'Color',
    'Null',
    'Type',
    'ElementTypeLiteral',
    'Identifier',
    'MemberAccess',
    'ArithmeticExpression',
    'TwoValueBooleanExpression',
    'NotExpression',
    'ExpressionStatement',
    'UnaryMinusExpression',
    'TypeCheckExpression',
    'FunctionCall',
    'VarAssignment',
    'Give',
    'ConditionBodyPair',
    'Conditional',
    'CollectionBasedLoop',
    'RangeBasedLoop',
    'SkipIteration',
    'StopLooping',
    'DoNothing',
    'ElementDef',
    'ElementVarDef',
    'ElementFuncDef',
    'InteractionDef',
]);

const TYPE_VALUES = new Set([
    'Number',
    'Boolean',
    'Color',
    'Element',
    'ElementType',
    'Null',
    'Type',
]);

function isObject(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isNonEmptyString(value: unknown): value is string {
    return typeof value === 'string' && value.trim().length > 0;
}

export function validateAST(program: Program): void {
    const errors: ASTValidationError[] = [];

    function error(path: string, message: string): void {
        errors.push({ path, message });
    }

    function checkNode(
        value: unknown,
        path: string,
        expectedTypes?: string[],
    ): value is Record<string, unknown> {
        if (!isObject(value)) {
            error(path, 'Expected an AST node object.');
            return false;
        }

        if (typeof value.type !== 'string' || !NODE_TYPES.has(value.type)) {
            error(`${path}.type`, `Unknown or missing node type '${String(value.type)}'.`);
            return false;
        }

        if (expectedTypes && !expectedTypes.includes(value.type)) {
            error(
                `${path}.type`,
                `Expected ${expectedTypes.join(' or ')}, received '${value.type}'.`,
            );
            return false;
        }

        return true;
    }

    function checkArray(
        value: unknown,
        path: string,
        checkItem: (item: unknown, itemPath: string) => void,
    ): void {
        if (!Array.isArray(value)) {
            error(path, 'Expected an array.');
            return;
        }

        value.forEach((item, index) => checkItem(item, `${path}[${index}]`));
    }

    function checkIdentifier(value: unknown, path: string): void {
        if (!checkNode(value, path, ['Identifier'])) return;

        if (!isNonEmptyString(value.value)) {
            error(`${path}.value`, 'Identifier value must be a non-empty string.');
        }
    }

    function checkElementType(value: unknown, path: string): void {
        if (!checkNode(value, path, ['ElementTypeLiteral'])) return;
        checkIdentifier(value.name, `${path}.name`);
    }

    function checkTypeLiteral(value: unknown, path: string): void {
        if (!checkNode(value, path, ['Type'])) return;

        if (!TYPE_VALUES.has(String(value.value))) {
            error(`${path}.value`, 'Invalid type literal value.');
        }
    }

    function checkTypeReference(value: unknown, path: string): void {
        if (
            checkNode(value, path, ['Type', 'ElementTypeLiteral'])
        ) {
            if (value.type === 'Type') checkTypeLiteral(value, path);
            else checkElementType(value, path);
        }
    }

    function checkParameter(value: unknown, path: string): void {
        if (!checkNode(value, path, ['Parameter'])) return;

        checkIdentifier(value.name, `${path}.name`);

        if (value.declaredType !== null) {
            checkTypeReference(value.declaredType, `${path}.declaredType`);
        }
    }

    function checkExpression(value: unknown, path: string): void {
        if (!checkNode(value, path, [
            'NumberLiteral',
            'BooleanLiteral',
            'Color',
            'Null',
            'ElementTypeLiteral',
            'Identifier',
            'MemberAccess',
            'ArithmeticExpression',
            'TwoValueBooleanExpression',
            'NotExpression',
            'UnaryMinusExpression',
            'TypeCheckExpression',
            'FunctionCall',
        ])) return;

        switch (value.type) {
            case 'NumberLiteral':
                if (typeof value.value !== 'number' || !Number.isFinite(value.value)) {
                    error(`${path}.value`, 'Number literal must be a finite number.');
                }
                break;

            case 'BooleanLiteral':
                if (typeof value.value !== 'boolean') {
                    error(`${path}.value`, 'Boolean literal must be true or false.');
                }
                break;

            case 'Color':
                if (typeof value.value !== 'string' ||
                    !/^#[0-9a-fA-F]{6}$/.test(value.value)) {
                    error(`${path}.value`, 'Color must be a six-digit hexadecimal string.');
                }
                break;

            case 'Null':
                break;

            case 'Identifier':
                checkIdentifier(value, path);
                break;

            case 'ElementTypeLiteral':
                checkElementType(value, path);
                break;

            case 'MemberAccess':
                checkExpression(value.source, `${path}.source`);
                checkIdentifier(value.member, `${path}.member`);
                break;

            case 'ArithmeticExpression':
                if (!['Add', 'Subtract', 'Multiply', 'Divide'].includes(String(value.operation))) {
                    error(`${path}.operation`, 'Invalid arithmetic operator.');
                }
                checkExpression(value.value1, `${path}.value1`);
                checkExpression(value.value2, `${path}.value2`);
                break;

            case 'TwoValueBooleanExpression':
                if (!['Equals', 'Less Than', 'Greater Than', 'And', 'Or'].includes(String(value.operation))) {
                    error(`${path}.operation`, 'Invalid boolean operator.');
                }
                checkExpression(value.value1, `${path}.value1`);
                checkExpression(value.value2, `${path}.value2`);
                break;

            case 'NotExpression':
            case 'UnaryMinusExpression':
                checkExpression(value.value, `${path}.value`);
                break;

            case 'TypeCheckExpression':
                checkExpression(value.value, `${path}.value`);
                checkTypeReference(value.checkedType, `${path}.checkedType`);
                break;

            case 'FunctionCall':
                checkGeneralIdentifier(value.callee, `${path}.callee`);
                checkArray(value.args, `${path}.args`, checkExpression);
                break;
        }
    }

    function checkStatement(value: unknown, path: string): void {
        if (!checkNode(value, path, [
            'ExpressionStatement',
            'VarAssignment',
            'Give',
            'Conditional',
            'CollectionBasedLoop',
            'RangeBasedLoop',
            'SkipIteration',
            'StopLooping',
            'DoNothing',
        ])) return;

        switch (value.type) {
            case 'ExpressionStatement':
                checkExpression(value.expression, `${path}.expression`);
                break;

            case 'VarAssignment':
                checkGeneralIdentifier(value.varName, `${path}.varName`);
                checkExpression(value.value, `${path}.value`);
                break;

            case 'Give':
                checkExpression(value.value, `${path}.value`);
                break;

            case 'Conditional':
                checkConditionBody(value.ifCase, `${path}.ifCase`);
                checkArray(value.elseIfCases, `${path}.elseIfCases`, checkConditionBody);
                checkArray(value.elseCase, `${path}.elseCase`, checkStatement);
                break;

            case 'CollectionBasedLoop':
                checkIdentifier(value.iteratorVar, `${path}.iteratorVar`);
                checkExpression(value.collection, `${path}.collection`);
                checkArray(value.statements, `${path}.statements`, checkStatement);
                break;

            case 'RangeBasedLoop':
                checkIdentifier(value.iteratorVar, `${path}.iteratorVar`);
                checkExpression(value.start, `${path}.start`);
                checkExpression(value.end, `${path}.end`);
                checkArray(value.statements, `${path}.statements`, checkStatement);
                break;

            case 'SkipIteration':
            case 'StopLooping':
            case 'DoNothing':
                break;
        }
    }

    function checkConditionBody(value: unknown, path: string): void {
        if (!checkNode(value, path, ['ConditionBodyPair'])) return;

        checkExpression(value.condition, `${path}.condition`);
        checkArray(value.body, `${path}.body`, checkStatement);
    }

    function checkElementVar(value: unknown, path: string): void {
        if (!checkNode(value, path, ['ElementVarDef'])) return;

        checkIdentifier(value.varName, `${path}.varName`);
        if (value.value !== null) checkExpression(value.value, `${path}.value`);
    }

    function checkElementFunc(value: unknown, path: string): void {
        if (!checkNode(value, path, ['ElementFuncDef'])) return;

        checkIdentifier(value.name, `${path}.name`);
        checkArray(value.args, `${path}.args`, checkParameter);
        checkArray(value.statements, `${path}.statements`, checkStatement);

        if (typeof value.hasBody !== 'boolean') {
            error(`${path}.hasBody`, 'Expected a boolean.');
        } else if (!value.hasBody && Array.isArray(value.statements) && value.statements.length > 0) {
            error(`${path}.statements`, 'A function without a body cannot contain statements.');
        }
    }

    function checkElement(value: unknown, path: string): void {
        if (!checkNode(value, path, ['ElementDef'])) return;

        checkIdentifier(value.name, `${path}.name`);

        if (typeof value.abstract !== 'boolean') {
            error(`${path}.abstract`, 'Expected a boolean.');
        }

        if (value.parent !== null) checkIdentifier(value.parent, `${path}.parent`);

        checkArray(value.varDefs, `${path}.varDefs`, checkElementVar);
        checkArray(value.funcDefs, `${path}.funcDefs`, checkElementFunc);
    }

    function checkInteraction(value: unknown, path: string): void {
        if (!checkNode(value, path, ['InteractionDef'])) return;

        checkIdentifier(value.element1, `${path}.element1`);
        checkIdentifier(value.element2, `${path}.element2`);
        checkIdentifier(value.element1Binding, `${path}.element1Binding`);
        checkIdentifier(value.element2Binding, `${path}.element2Binding`);
        checkArray(value.statements, `${path}.statements`, checkStatement);
    }

    if (!checkNode(program, 'program', ['Program'])) {
        if (!checkNode(program, 'program', ['Program'])) {
            throw new Error(
                `AST validation failed:\n${errors
                    .map(({ path, message }) => `${path}: ${message}`)
                    .join('\n')}`,
            );
        }
    }

    checkArray(program.elementDefs, 'program.elementDefs', checkElement);
    checkArray(program.interactionDefs, 'program.interactionDefs', checkInteraction);

    if (errors.length > 0) {
        throw new Error(
            `AST validation failed:\n${errors
                .map(({ path, message }) => `${path}: ${message}`)
                .join('\n')}`,
        );
    }

    function checkGeneralIdentifier(value: unknown, path: string): void {
        if (!checkNode(value, path, ['Identifier', 'MemberAccess'])) return;

        checkExpression(value, path);
    }
}
