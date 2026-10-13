import { useEffect, useRef, useState, type ReactNode } from 'react';
import { LanguageServiceContext } from './LanguageServiceContext';
import { CharStream, Token } from 'antlr4ng';
import { DSLLexer } from '../../generated/DSLLexer';

function lex(source: string): Token[] {
  const lexer = new DSLLexer(CharStream.fromString(source));
  lexer.removeErrorListeners();
  return lexer.getAllTokens();
}

export default function LanguageServiceProvider({ children }: { children: ReactNode }) {
  const [text, setTextState] = useState('');
  const [tokens, setTokens] = useState<Token[]>([]);

  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    const worker = new Worker(new URL('../lib/languageService/worker.ts', import.meta.url), {
      type: 'module',
    });
    workerRef.current = worker;

    return () => {
      worker.terminate();
    };
  }, []);

  const setText = (value: string) => {
    setTokens(lex(value));
    setTextState(value);
  }


  const value = {
    lex: () => {},
    parse: () => { },
    tokens,
    text,
    setText,
  };

  return (
    <LanguageServiceContext.Provider value={value}>{children}</LanguageServiceContext.Provider>
  );
}
