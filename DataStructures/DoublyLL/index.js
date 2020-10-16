import Node from "../Node";
export class DoublyLL {
  constructor() {
    this.head = new Node(null);
    this.tail = new Node(null);
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.head.value === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    return;
  }
  pop() {
    if (this.tail.value !== null) {
      let popValue = this.tail.value;
      this.tail = this.tail.prev;
      this.tail.next = null;
      return popValue;
    } else {
      return null;
    }
  }
  shift(value) {
    const newNode = new Node(value);
    if (this.head.value === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    console.log("this.head", this.head, newNode);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    return;
  }
  unshift() {
    if (this.head.value !== null) {
      const value = this.head.value;
      this.head = this.head.next;
      this.head.prev = null;
      return value;
    } else return null;
  }
  traverse() {
    let temp = this.head;
    let output = "null <=>";
    while (temp !== null) {
      output += `${temp.value} <=> `;
      temp = temp.next;
      if (temp === null) output += `null`;
    }
    if (!output) console.log("traversed", null);
    else console.log("traversed", output);
  }
  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }
}
