import { CANVAS_DIMS } from '../canvas';
import Loop from './loop';

export type WorkerRequest = {
  canvas: OffscreenCanvas;
};
export type WorkerResponse = null;

let loop: Loop = new Loop();

function drawPixel(ctx: OffscreenCanvasRenderingContext2D, x: number, y: number) {
  ctx.fillRect(x, y, 1, 1);
}

function paint(ctx: OffscreenCanvasRenderingContext2D, tick: number) {
  const mod5 = tick % 5;

  ctx.clearRect(0, 0, CANVAS_DIMS.x, CANVAS_DIMS.y);

  ctx.fillStyle = 'rgb(255, 100, 0)';
  for (let x = 0; x < CANVAS_DIMS.x; x++) {
    for (let y = 0; y < CANVAS_DIMS.y; y++) {
      if (x % 5 == mod5 && y % 5 == mod5) drawPixel(ctx, x, y);
    }
  }
}

self.onmessage = (event: MessageEvent<WorkerRequest>) => {
  const canvas = event.data.canvas;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  loop.callback = (tick: number) => {
    paint(ctx, tick);
  };
  loop.start();

  // Expensive work
  //   const result = numbers.reduce((sum, n) => sum + n, 0);
  //
  //   self.postMessage(result);
};
