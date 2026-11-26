import { CharStream, type Token } from 'antlr4ng';
import { DSLLexer } from '../../generated/DSLLexer';

export function lex(source: string): Token[] {
  const lexer = new DSLLexer(CharStream.fromString(source));
  lexer.removeErrorListeners();
  return lexer.getAllTokens();
}
