import { useEffect, useRef } from 'react';
import { CANVAS_DIMS } from '../misc/canvas';
import type { WorkerRequest } from '../worker/worker';

export default function GameRenderer() {
  const workerRef = useRef<Worker | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const worker = new Worker(new URL('../worker/worker.ts', import.meta.url), { type: 'module' });
    workerRef.current = worker;

    if (!canvasRef.current) return;
    const offscreen = canvasRef.current.transferControlToOffscreen();

    const message: WorkerRequest = { canvas: offscreen };
    worker.postMessage(message, [offscreen]);

    return () => {
      worker.terminate();
    };
  }, []);

  return (
    <div className="m-5">
      <canvas
        width={CANVAS_DIMS.x}
        height={CANVAS_DIMS.y}
        ref={canvasRef}
        className="w-[512px] h-[512px] border-2 border-solid [image-rendering:pixelated]"
      />
    </div>
  );
}
