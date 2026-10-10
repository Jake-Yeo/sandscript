import { createContext, useContext } from 'react';
import type { ReactSetter } from '@/lib/types';
import type { Token } from 'antlr4ng';

type LexFunc = (text: string) => void;
type ParseFunc = (text: string) => void;

export type LanguageServiceContextType = {
  lex: LexFunc;
  parse: ParseFunc;
  tokens: Token[];
  text: string;
  setText: ReactSetter<string>;
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
