import type { ReactSetter } from '@/lib/types';
import { createContext, useContext, type RefObject } from 'react';

export type GameContextType = {
  workerRef: RefObject<Worker | null>
  canvasRef: RefObject<HTMLCanvasElement | null>;

  element: string
  setElement: ReactSetter<string>
  elements: string[]
  setElements: ReactSetter<string[]>
  strokeSize: number
  setStrokeSize: ReactSetter<number>
};

export const GameContext = createContext<GameContextType | undefined>(undefined);

export function useGameContext() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('useGameContext must be used inside GameContextProvider');
  }

  return context;
}
