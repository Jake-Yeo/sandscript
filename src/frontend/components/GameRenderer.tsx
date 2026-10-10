import { useEffect, useRef, useState } from 'react';
import { CANVAS_DIMS } from '../lib/canvas';
import type {
  CanvasRequest,
  EraseRequest,
  NewGameRequest,
  NewGameResponse,
  SpawnRequest,
} from '../lib/gameWorker/worker';
import type { Location } from '../lib/types';
import { Button } from './ui/button';

export default function GameRenderer() {
  const workerRef = useRef<Worker | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [element, setElement] = useState('fire');
  const [elements, setElements] = useState<readonly string[]>([]);
  const [strokeSize, setStrokeSize] = useState(1);

  const mouseToGridPos = (event: React.PointerEvent<HTMLCanvasElement>): Location => {
    const canvas = event.currentTarget;
    const rect = canvas.getBoundingClientRect();

    const x = Math.floor(((event.clientX - rect.left) * canvas.width) / rect.width);
    const y = Math.floor(((event.clientY - rect.top) * canvas.height) / rect.height);
    return { x, y };
  };

  const sendRequest = (location: Location, erasing: boolean) => {
    if (location.x < 0 || location.y < 0 || location.x >= CANVAS_DIMS.x || location.y >= CANVAS_DIMS.y) return;

    const req: SpawnRequest | EraseRequest = erasing
      ? { type: 'erase', location }
      : { type: 'spawn', location, elementName: element };

    workerRef.current!.postMessage(req, []);
  }

  const draw = (location: Location, erasing: boolean) => {
    if (!workerRef.current) return;

    const r = strokeSize - 1;
    for (let dy = -r; dy <= r; dy++) {
      for (let dx = -r; dx <= r; dx++) {
        if (Math.abs(dx) + Math.abs(dy) <= r) {
          sendRequest({ x: location.x + dx, y: location.y + dy }, erasing);
        }
      }
    }
  };

  const handlePointer = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const drawing = (event.buttons & 1) !== 0;
    const erasing = (event.buttons & 2) !== 0;
    if (!drawing && !erasing) return;

    draw(mouseToGridPos(event), erasing);
  };

  useEffect(() => {
    const worker = new Worker(new URL('../lib/gameWorker/worker.ts', import.meta.url), {
      type: 'module',
    });
    workerRef.current = worker;

    worker.onmessage = (event: MessageEvent<NewGameResponse>) => {
      if (event.data.type === 'game') {
        setElements(event.data.elements);
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
  }, []);

  return (
    <div className="p-5">
      <canvas
        width={CANVAS_DIMS.x}
        height={CANVAS_DIMS.y}
        ref={canvasRef}
        className="w-[512px] h-[512px] border-2 border-solid [image-rendering:pixelated]"
        onPointerDown={handlePointer}
        onPointerMove={handlePointer}
        onContextMenu={(event) => event.preventDefault()}
      />
      <div>
        {elements.map((elm) => (
          <Button key={elm} onClick={() => setElement(elm)}>
            {elm}
          </Button>
        ))}
      </div>
      <div>
        <Button onClick={() => setStrokeSize(1)}>
          1
        </Button>
        <Button onClick={() => setStrokeSize(2)}>
          2
        </Button>
        <Button onClick={() => setStrokeSize(3)}>
          3
        </Button>
        <Button onClick={() => setStrokeSize(4)}>
          4
        </Button>
      </div>
    </div>
  );
}
