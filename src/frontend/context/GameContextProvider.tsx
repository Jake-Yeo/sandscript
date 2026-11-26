import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { GameContext, type Tool } from './GameContext';
import type {
  ElementInfo,
  GameWorkerRequest,
  GameWorkerResponse,
} from '@/lib/gameWorker/worker';
import { useMainContext } from './MainContext';
import { friendlyError, type FriendlyError } from '@/lib/friendlyError';
import type { Location } from '@/lib/types';

// provider is in its own file to allow react fast refresh
export default function GameContextProvider({ children }: { children: ReactNode }) {
  const { game } = useMainContext();
  const workerRef = useRef<Worker | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [elements, setElements] = useState<ElementInfo[]>([]);
  const [element, setElement] = useState('');
  const [strokeSize, setStrokeSize] = useState(2);
  const [tool, setTool] = useState<Tool>('paint');
  const [paused, setPausedState] = useState(false);
  const [pixelCount, setPixelCount] = useState(0);
  const [runtimeError, setRuntimeError] = useState<FriendlyError | null>(null);

  const send = useCallback((req: GameWorkerRequest, transfer: Transferable[] = []) => {
    workerRef.current?.postMessage(req, transfer);
  }, []);

  useEffect(() => {
    const worker = new Worker(new URL('../lib/gameWorker/worker.ts', import.meta.url), {
      type: 'module',
    });
    workerRef.current = worker;

    worker.onmessage = (event: MessageEvent<GameWorkerResponse>) => {
      const data = event.data;
      if (data.type === 'game') {
        setElements(data.elements);
        setRuntimeError(null);
        setElement((current) =>
          data.elements.some((e) => e.name === current) ? current : (data.elements[0]?.name ?? ''),
        );
      } else if (data.type === 'stats') {
        setPixelCount(data.count);
      } else if (data.type === 'error') {
        setRuntimeError(friendlyError(data.message, 'runtime'));
      }
    };

    const canvas = canvasRef.current;
    if (canvas) {
      const offscreen = canvas.transferControlToOffscreen();
      worker.postMessage({ type: 'canvas', canvas: offscreen } satisfies GameWorkerRequest, [offscreen]);
    }

    return () => worker.terminate();
  }, []);

  useEffect(() => {
    if (game) send({ type: 'game', game });
  }, [game, send]);

  const setPaused = useCallback(
    (value: boolean) => {
      setPausedState(value);
      send({ type: 'pause', paused: value });
    },
    [send],
  );

  const clear = useCallback(() => {
    setRuntimeError(null);
    send({ type: 'clear' });
  }, [send]);

  const paint = useCallback(
    (cells: Location[], erasing: boolean) => {
      if (erasing) send({ type: 'erase', cells });
      else if (element) send({ type: 'paint', cells, elementName: element });
    },
    [element, send],
  );

  const value = {
    canvasRef,
    elements,
    element,
    setElement,
    strokeSize,
    setStrokeSize,
    tool,
    setTool,
    paused,
    setPaused,
    clear,
    paint,
    pixelCount,
    runtimeError,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
