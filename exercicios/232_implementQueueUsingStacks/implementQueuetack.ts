class MyQueue {
  items: number[];
  constructor() {
    this.items = [];
  }

  push(x: number): void {
    this.items.push(x);
  }

  pop(): number | undefined {
    return this.items.shift();
  }

  peek(): number {
    return this.items[0];
  }

  empty(): boolean {
    return this.items.length === 0;
  }
}
