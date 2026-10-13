import { CANVAS_DIMS } from '../lib/canvas';
import type {
  EraseRequest,
  SpawnRequest,
} from '../lib/gameWorker/worker';
import type { Location } from '../lib/types';
import { useGameContext } from '@/context/GameContext';

export default function GameRenderer() {
  const { workerRef, canvasRef, element, strokeSize } = useGameContext();

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
    </div>
  );
}
