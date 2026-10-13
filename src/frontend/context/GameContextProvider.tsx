import { useEffect, useRef, useState, type ReactNode } from 'react';
import { GameContext } from './GameContext';
import type { CanvasRequest, NewGameRequest, NewGameResponse } from '@/lib/gameWorker/worker';

// provider is in its own file to allow react fast refresh
export default function GameContextProvider({ children }: { children: ReactNode }) {
  const workerRef = useRef<Worker | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [element, setElement] = useState('fire');
  const [elements, setElements] = useState<string[]>([]);
  const [strokeSize, setStrokeSize] = useState(1);

  useEffect(() => {
    const worker = new Worker(new URL('../lib/gameWorker/worker.ts', import.meta.url), {
      type: 'module',
    });
    workerRef.current = worker;

    worker.onmessage = (event: MessageEvent<NewGameResponse>) => {
      if (event.data.type === 'game') {
        setElements([...event.data.elements]);
      }
    };

    if (!canvasRef.current) return;
    const offscreen = canvasRef.current.transferControlToOffscreen();

    const canvasReq: CanvasRequest = { type: 'canvas', canvas: offscreen };
    worker.postMessage(canvasReq, [offscreen]);

    const gameReq: NewGameRequest = { type: 'game' };
    worker.postMessage(gameReq, []);

    return () => {
      worker.terminate();
    };
  }, [setElements]);

  const value = {
    workerRef,
    canvasRef,

    element,
    setElement,
    elements,
    setElements,
    strokeSize,
    setStrokeSize
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
