export class Stack {
  constructor() {
    this.top = -1;
    this.stack = [];
  }
  isEmpty() {
    return this.top === -1;
  }
  push(element) {
    this.stack[++this.top] = element;
  }
  pop() {
    if (this.top < 0) return { message: "stack is empty", value: null };
    return {
      message: "",
      value: this.stack[this.top--],
    };
  }
  printStack() {
    for (let i = 0; i <= this.top; i++) {
      console.log("element", this.stack[i]);
    }
  }
}
