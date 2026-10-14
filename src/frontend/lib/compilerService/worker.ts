import { Parser } from "../../../parser/parser";
import { ASTBuilder } from "../../../ast/astBuilder";
import { validateAST } from '../../..//ast/astValidator';
import type { CompiledGame } from "../../../game/contracts";
import { buildGame } from "../../../game/builder/builder";

export type CompilerServiceRequest = {
  source: string;
};

export type CompilerServiceResponse = SuccessResponse | ErrorResponse;
type SuccessResponse = {
  type: 'success';
  game: CompiledGame
};
type ErrorResponse = {
  type: 'error';
  message: string;
};

self.onmessage = (event: MessageEvent<CompilerServiceRequest>) => {
  try {
    const tree = new Parser(event.data.source).parse();
    const program = new ASTBuilder().build(tree);
    validateAST(program);

    const game = buildGame(program);

    const response: SuccessResponse = { type: 'success', game };
    self.postMessage(response);

  } catch (e) {
    const response: ErrorResponse = {
      type: 'error',
      message: e instanceof Error ? e.message : String(e)
    }
    self.postMessage(response);
  }
};
