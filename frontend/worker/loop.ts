const TICKS_PER_SECOND = 30;

export default class Loop {
  callback: (tick: number) => void = () => {};

  private tick: number = 0;
  private intervalId: number | null = null;

  start() {
    if (this.intervalId !== null) return;
    this.intervalId = setInterval(
      () => {
        this.callback(this.tick);
        this.tick++;
      },
      (1 / TICKS_PER_SECOND) * 1000,
    );
  }

  stop(): void {
    if (this.intervalId === null) return;
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.tick = 0;
  }
}
