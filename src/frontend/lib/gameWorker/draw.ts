import type { GameSnapshot } from '../../../game/contracts';

export function drawGame(ctx: OffscreenCanvasRenderingContext2D, snapshot: GameSnapshot) {
  ctx.clearRect(0, 0, snapshot.width, snapshot.height);

  for (const element of snapshot.elements) {
    ctx.fillStyle = element.color;
    ctx.fillRect(element.x, element.y, 1, 1);
  }
}
