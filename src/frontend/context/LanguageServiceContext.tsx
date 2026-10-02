import { createContext, useContext } from 'react';

type LexFunc = (text: string) => void;
type ParseFunc = (text: string) => void;

export type LanguageServiceContextType = {
  lex: LexFunc;
  parse: ParseFunc;
};

export const LanguageServiceContext = createContext<LanguageServiceContextType | undefined>(
  undefined,
);

export function useLanguageServiceContext() {
  const context = useContext(LanguageServiceContext);

  if (!context) {
    throw new Error('useLanguageServiceContext must be used inside MainContextProvider');
  }

  return context;
}
