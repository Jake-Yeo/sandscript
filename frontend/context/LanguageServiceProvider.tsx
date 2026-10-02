import { type ReactNode } from 'react';
import { LanguageServiceContext } from './LanguageServiceContext';

// provider is in its own file to allow react fast refresh
export default function LanguageServiceProvider({ children }: { children: ReactNode }) {
  const value = {
    lex: () => {},
    parse: () => {},
  };

  return (
    <LanguageServiceContext.Provider value={value}>{children}</LanguageServiceContext.Provider>
  );
}
