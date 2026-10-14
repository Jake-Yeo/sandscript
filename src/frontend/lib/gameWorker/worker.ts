import type { CompiledGame, GameEngine } from '../../../game/contracts';
import { CANVAS_DIMS } from '../canvas';
import { createFakeEngine } from '../FAKEGAME';
import type { Location } from '../types';
import { drawGame } from './draw';
import Loop from './loop';

export type GameWorkerRequest = CanvasRequest | NewGameRequest | SpawnRequest | EraseRequest;
export type CanvasRequest = {
  type: 'canvas';
  canvas: OffscreenCanvas;
};
export type NewGameRequest = {
  type: 'game';
  game: CompiledGame;
};
export type SpawnRequest = {
  type: 'spawn';
  location: Location;
  elementName: string;
};
export type EraseRequest = {
  type: 'erase';
  location: Location;
};
export type GameWorkerResponse = NewGameResponse;
export type NewGameResponse = {
  type: 'game';
  elements: readonly string[];
};

let loop: Loop = new Loop();
let game: GameEngine | null = null;

self.onmessage = (event: MessageEvent<GameWorkerRequest>) => {
  const data = event.data;
  if (data.type === 'canvas') handleCanvasRequest(data);
  if (data.type === 'game') handleNewGameRequest();
  if (data.type === 'spawn') handleSpawnRequest(data);
  if (data.type === 'erase') handleEraseRequest(data);
};

function handleCanvasRequest(req: CanvasRequest) {
  const canvas = req.canvas;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  loop.callback = () => {
    if (!game) return;
    drawGame(ctx, game.step());
  };
  loop.start();
}

function handleNewGameRequest() {
  game = createFakeEngine({ width: CANVAS_DIMS.x, height: CANVAS_DIMS.y });

  const message: NewGameResponse = {
    type: 'game',
    elements: game.availableElements()
  }
  self.postMessage(message);
}

function handleSpawnRequest(req: SpawnRequest) {
  if (!game) return;
  game.place(req.elementName, req.location.x, req.location.y);
}

function handleEraseRequest(req: EraseRequest) {
  if (!game) return;
  game.erase(req.location.x, req.location.y);
}
