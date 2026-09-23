import { CANVAS_DIMS } from '../misc/canvas';

export type WorkerRequest = {
  canvas: OffscreenCanvas;
};
export type WorkerResponse = null;

function drawPixel(ctx: OffscreenCanvasRenderingContext2D, x: number, y: number) {
  ctx.fillRect(x, y, 1, 1);
}

self.onmessage = (event: MessageEvent<WorkerRequest>) => {
  const canvas = event.data.canvas;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.fillStyle = 'rgb(255, 100, 0)';
  for (let x = 0; x < CANVAS_DIMS.x; x++) {
    for (let y = 0; y < CANVAS_DIMS.y; y++) {
      if (x % 5 == 0 && y % 5 == 0) drawPixel(ctx, x, y);
    }
  }

  // Expensive work
  //   const result = numbers.reduce((sum, n) => sum + n, 0);
  //
  //   self.postMessage(result);
};
