import type { Program } from "../../../ast/ast";
import { Parser } from "../../../parser/parser";
import { ASTBuilder } from "../../../ast/astBuilder";

export type CompilerServiceRequest = {
  source: string;
};

export type CompilerServiceResponse = SuccessResponse | ErrorResponse;
type SuccessResponse = {
  type: 'success';
  program: Program
};
type ErrorResponse = {
  type: 'error';
  message: string;
};

self.onmessage = (event: MessageEvent<CompilerServiceRequest>) => {
  try {
    const tree = new Parser(event.data.source).parse();
    const program = new ASTBuilder().build(tree);

    const response: SuccessResponse = { type: 'success', program };
    self.postMessage(response);

  } catch (e) {
    const response: ErrorResponse = {
      type: 'error',
      message: e instanceof Error ? e.message : String(e)
    }
    self.postMessage(response);
  }
};
