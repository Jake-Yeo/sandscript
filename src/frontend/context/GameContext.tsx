import { createContext, useContext, type RefObject } from 'react';
import type { ElementInfo } from '@/lib/gameWorker/worker';
import type { FriendlyError } from '@/lib/friendlyError';
import type { Location } from '@/lib/types';

export type Tool = 'paint' | 'erase';

export type GameContextType = {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  elements: ElementInfo[];
  element: string;
  setElement: (name: string) => void;
  strokeSize: number;
  setStrokeSize: (size: number) => void;
  tool: Tool;
  setTool: (tool: Tool) => void;
  paused: boolean;
  setPaused: (paused: boolean) => void;
  clear: () => void;
  paint: (cells: Location[], erasing: boolean) => void;
  pixelCount: number;
  runtimeError: FriendlyError | null;
};

export const GameContext = createContext<GameContextType | undefined>(undefined);

export function useGameContext() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used inside GameContextProvider');
  }
  return context;
}
