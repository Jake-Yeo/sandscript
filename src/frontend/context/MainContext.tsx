import { createContext, useContext } from 'react';
import type { ReactSetter, Theme } from '@/lib/types';
import type { CompiledGame } from '../../game/contracts';

export type MainContextType = {
  theme: Theme;
  setTheme: ReactSetter<Theme>;
  game: CompiledGame | null;
  setGame: ReactSetter<CompiledGame>;
};

export const MainContext = createContext<MainContextType | undefined>(undefined);

export function useMainContext() {
  const context = useContext(MainContext);

  if (!context) {
    throw new Error('useMainContext must be used inside MainContextProvider');
  }

  return context;
}
