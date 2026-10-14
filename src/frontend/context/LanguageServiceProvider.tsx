import { useEffect, useRef, useState, type ReactNode } from 'react';
import { LanguageServiceContext } from './LanguageServiceContext';
import { CharStream, Token } from 'antlr4ng';
import { DSLLexer } from '../../generated/DSLLexer';
import type { CompilerServiceRequest, CompilerServiceResponse } from '@/lib/compilerService/worker';
import { useMainContext } from './MainContext';

function lex(source: string): Token[] {
  const lexer = new DSLLexer(CharStream.fromString(source));
  lexer.removeErrorListeners();
  return lexer.getAllTokens();
}

export default function LanguageServiceProvider({ children }: { children: ReactNode }) {
  const { setGame } = useMainContext();

  const [text, setTextState] = useState('');
  const [tokens, setTokens] = useState<Token[]>([]);

  const [isCompiling, setIsCompiling] = useState(false);
  const isCompilingRef = useRef(false);

  const workerRef = useRef<Worker | null>(null);

  const setText = (value: string) => {
    setTokens(lex(value));
    setTextState(value);
  }

  const compile = () => {
    if (isCompilingRef.current || !workerRef.current) return;

    setIsCompiling(true);
    isCompilingRef.current = true;

    const req: CompilerServiceRequest = { source: text };
    workerRef.current.postMessage(req);
  }

  useEffect(() => {
    const worker = new Worker(new URL('../lib/compilerService/worker.ts', import.meta.url), {
      type: 'module',
    });
    workerRef.current = worker;

    const onCompileDone = () => {
      setIsCompiling(false);
      isCompilingRef.current = false;
    };

    worker.onmessage = (event: MessageEvent<CompilerServiceResponse>) => {
      onCompileDone();

      if (event.data.type === 'error') {
        console.error(event.data.message);
        return;
      }

      setGame(event.data.game);
    };

    worker.onerror = (event) => {
      onCompileDone();
      console.error(event.message);
    };

    return () => {
      worker.terminate();
    };
  }, [setGame]);



  const value = {
    compile,
    isCompiling,
    tokens,
    text,
    setText,
  };

  return (
    <LanguageServiceContext.Provider value={value}>{children}</LanguageServiceContext.Provider>
  );
}
