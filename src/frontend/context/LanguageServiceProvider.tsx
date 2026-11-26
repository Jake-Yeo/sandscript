import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { LanguageServiceContext, type CompileStatus } from './LanguageServiceContext';
import type { Token } from 'antlr4ng';
import { lex } from '@/lib/lex';
import type { CompilerServiceRequest, CompilerServiceResponse } from '@/lib/compilerService/worker';
import { useMainContext } from './MainContext';
import { friendlyError, type FriendlyError } from '@/lib/friendlyError';

type Props = { children: ReactNode; initialText: string };

export default function LanguageServiceProvider({ children, initialText }: Props) {
  const { setGame } = useMainContext();
  const [text, setTextState] = useState(initialText);
  const [tokens, setTokens] = useState<Token[]>(() => lex(initialText));
  const [status, setStatus] = useState<CompileStatus>('idle');
  const [error, setError] = useState<FriendlyError | null>(null);
  const [runId, setRunId] = useState(0);
  const isCompilingRef = useRef(false);
  const workerRef = useRef<Worker | null>(null);
  const textRef = useRef(text);

  const setText = useCallback((value: string) => {
    textRef.current = value;
    setTokens(lex(value));
    setTextState(value);
  }, []);

  const compile = useCallback(() => {
    if (isCompilingRef.current || !workerRef.current) return;
    isCompilingRef.current = true;
    setStatus('compiling');
    const req: CompilerServiceRequest = { source: textRef.current };
    workerRef.current.postMessage(req);
  }, []);

  useEffect(() => {
    const worker = new Worker(new URL('../lib/compilerService/worker.ts', import.meta.url), {
      type: 'module',
    });
    workerRef.current = worker;

    worker.onmessage = (event: MessageEvent<CompilerServiceResponse>) => {
      isCompilingRef.current = false;
      if (event.data.type === 'error') {
        setStatus('error');
        setError(friendlyError(event.data.message, 'compile'));
        return;
      }
      setStatus('ok');
      setError(null);
      setGame(event.data.game);
      setRunId((id) => id + 1);
    };
    worker.onerror = (event) => {
      isCompilingRef.current = false;
      setStatus('error');
      setError(friendlyError(event.message, 'compile'));
    };

    return () => worker.terminate();
  }, [setGame]);

  const value = {
    compile,
    isCompiling: status === 'compiling',
    status,
    error,
    tokens,
    text,
    setText,
    runId,
  };

  return (
    <LanguageServiceContext.Provider value={value}>{children}</LanguageServiceContext.Provider>
  );
}
