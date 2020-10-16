export class Queue {
  constructor() {
    this.front = -1;
    this.rear = -1;
    this.queue = [];
  }
  isEmpty() {
    return this.front > this.rear || this.front === -1;
  }
  enQueue(element) {
    if (this.front === -1) this.front++;
    this.queue[++this.rear] = element;
  }
  deQueue() {
    if (this.front === -1 || this.front > this.rear)
      return { message: "queue is empty", value: null };
    return { message: "", value: this.queue[this.front++] };
  }
  printQueue() {
    for (let i = this.front; i <= this.rear; i++) {
      console.log("element", this.queue[i]);
    }
  }
}
