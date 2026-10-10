const TICKS_PER_SECOND = 30;

export default class Loop {
  callback: () => void = () => {};

  private intervalId: ReturnType<typeof setInterval> | null = null;

  start() {
    if (this.intervalId !== null) return;
    this.intervalId = setInterval(
      this.callback,
      (1 / TICKS_PER_SECOND) * 1000,
    );
  }

  stop(): void {
    if (this.intervalId === null) return;
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}
