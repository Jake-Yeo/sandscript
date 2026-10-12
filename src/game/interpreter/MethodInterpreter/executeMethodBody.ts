import type { ElementFuncDef } from '../../../ast/ast';
import type { EvalContext, RuntimeValue } from '../../contracts';
import { executeStatements } from '../StatementInterpreter/statementInterpreter';

export function executeMethodBody(method: ElementFuncDef, ctx: EvalContext): RuntimeValue {
  const completion = executeStatements(method.statements, ctx);

  switch (completion.kind) {
    case 'return': {
      return completion.value;
    }

    case 'normal': {
      return null;
    }

    case 'break': {
      throw new Error('stop-looping cannot be used outside a loop.');
    }

    case 'continue': {
      throw new Error('skip-iteration cannot be used outside a loop.');
    }
  }
}
