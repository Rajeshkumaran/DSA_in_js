import Node from "../Node";
export class LinkedList {
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
    this.tail = newNode;
    return;
  }
  pop() {
    if (this.head.value !== null) {
      let temp = this.head;
      let prev = new Node(null);
      let popValue = temp.value;
      if (!temp.next) this.head = new Node(null);
      while (temp.next) {
        prev = temp;
        temp = temp.next;
      }
      popValue = temp.value;
      prev.next = null;
      this.tail = prev;
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
    newNode.next = this.head;
    this.head = newNode;
    return;
  }
  unshift() {
    if (this.head.value !== null) {
      const value = this.head.value;
      this.head = this.head.next;
      return value;
    } else return null;
  }
  traverse() {
    let temp = this.head;
    let output = "";
    while (temp !== null) {
      output += `${temp.value} -> `;
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
