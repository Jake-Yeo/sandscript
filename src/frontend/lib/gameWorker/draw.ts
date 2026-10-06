import { ELEMENTS } from '../FAKEGAME';
import type { Game } from '../FAKEGAME';

function drawPixel(ctx: OffscreenCanvasRenderingContext2D, x: number, y: number, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
}

export function drawGame(ctx: OffscreenCanvasRenderingContext2D, game: Game) {
  const dims = game.dims;
  ctx.clearRect(0, 0, dims.x, dims.y);

  for (let x = 0; x < dims.x; x++) {
    for (let y = 0; y < dims.y; y++) {
      const cell = game.getElementAt(x, y);
      if (!cell) continue;

      const color = ELEMENTS[cell]?.color;
      if (!color) throw new Error('no element found');

      drawPixel(ctx, x, y, color);
    }
  }
}
