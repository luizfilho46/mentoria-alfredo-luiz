class MyStack {
  items: number[];
  constructor() {
    this.items = [];
  }

  push(x: number): void {
    this.items.push(x);
  }

  pop(): number | undefined {
    if (this.items.length > 0) {
      return this.items.pop();
    } else null;
  }

  top(): number {
    return this.items[this.items.length - 1];
  }

  empty(): boolean {
    return this.items.length > 0 ? false : true;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
