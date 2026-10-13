import type { Program } from "../../../ast/ast";
import { Parser } from "../../../parser/parser";
import { ASTBuilder } from "../../../ast/astBuilder";

export type CompilerServiceRequest = {
  source: string;
};

export type CompilerServiceResponse = {
  program: Program;
};

self.onmessage = (event: MessageEvent<CompilerServiceRequest>) => {
  const data = event.data;

  const parser = new Parser(data.source);
  const tree = parser.parse();

  const astBuilder = new ASTBuilder();
  const program: Program = astBuilder.build(tree);

  self.postMessage({ program });
};
