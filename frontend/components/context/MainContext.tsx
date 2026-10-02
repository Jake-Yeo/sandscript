import { createContext, useContext } from 'react';
import type { Game } from '../../../game/game';

export type MainContextType = {
  game: Game | null;
};

export const MainContext = createContext<MainContextType | undefined>(undefined);

export function useMainContext() {
  const context = useContext(MainContext);

  if (!context) {
    throw new Error('useMainContext must be used inside MainContextProvider');
  }

  return context;
}
