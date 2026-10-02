import { useEffect, useRef, useState, type ReactNode } from 'react';
import { LanguageServiceContext } from './LanguageServiceContext';

export default function LanguageServiceProvider({ children }: { children: ReactNode }) {
  const [text, setText] = useState('');

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

  const value = {
    lex: () => {},
    parse: () => {},
    text,
    setText,
  };

  return (
    <LanguageServiceContext.Provider value={value}>{children}</LanguageServiceContext.Provider>
  );
}
