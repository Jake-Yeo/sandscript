import { type ReactNode } from 'react';
import { MainContext } from './MainContext';

// provider is in its own file to allow react fast refresh
export default function MainContextProvider({ children }: { children: ReactNode }) {
  const value = {
    game: null,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
