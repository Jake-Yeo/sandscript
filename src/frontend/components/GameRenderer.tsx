import { useEffect, useRef, useState } from 'react';
import { CANVAS_DIMS } from '../lib/canvas';
import type { CanvasRequest, NewGameRequest, SpawnRequest } from '../lib/gameWorker/worker';

export default function GameRenderer() {
  const workerRef = useRef<Worker | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [element, setElement] = useState('fire');

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!workerRef.current) return;

    const canvas = event.currentTarget;
    const rect = canvas.getBoundingClientRect();

    const x = Math.floor(((event.clientX - rect.left) * canvas.width) / rect.width);
    const y = Math.floor(((event.clientY - rect.top) * canvas.height) / rect.height);

    const spawnReq: SpawnRequest = { type: 'spawn', location: { x, y }, elementName: element };
    workerRef.current.postMessage(spawnReq, []);
  };

  useEffect(() => {
    const worker = new Worker(new URL('../lib/gameWorker/worker.ts', import.meta.url), {
      type: 'module',
    });
    workerRef.current = worker;

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
        onClick={handleClick}
      />
    </div>
  );
}
