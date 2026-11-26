import { createContext, useContext } from 'react';
import type { Token } from 'antlr4ng';
import type { FriendlyError } from '@/lib/friendlyError';

export type CompileStatus = 'idle' | 'compiling' | 'ok' | 'error';

export type LanguageServiceContextType = {
  compile: () => void;
  isCompiling: boolean;
  status: CompileStatus;
  error: FriendlyError | null;
  tokens: Token[];
  text: string;
  setText: (value: string) => void;
  /** Bumps every time a program compiles, so views can react to a fresh run. */
  runId: number;
};

export const LanguageServiceContext = createContext<LanguageServiceContextType | undefined>(
  undefined,
);

export function useLanguageServiceContext() {
  const context = useContext(LanguageServiceContext);
  if (!context) {
    throw new Error('useLanguageServiceContext must be used inside LanguageServiceProvider');
  }
  return context;
}
