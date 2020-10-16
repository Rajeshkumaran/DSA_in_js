const { Queue } = require("../Queue");

export class Graph {
  constructor(v) {
    this.noOfVertices = v;
    this.nodes = {};

    this.visited = Array(this.noOfVertices).fill(0);
    this.queue = new Queue();
  }
  addEdge(v, n) {
    let nodeValues = this.nodes[v];
    this.nodes = {
      ...this.nodes,
      [v]: [...(nodeValues ? nodeValues : []), n],
    };
  }
  printNode(element) {
    console.log("element", element);
  }
  bfs(node) {
    this.visited[node] = 1;
    this.queue.enQueue(node);
    while (!this.queue.isEmpty()) {
      let n = this.queue.deQueue().value;
      this.printNode(n);
      const { length = 0 } = this.nodes[n] || [];
      for (let i = 0; i < length; i += 1) {
        let vertice = this.nodes[n][i];
        if (!this.visited[vertice]) {
          this.queue.enQueue(vertice);
          this.visited[vertice] = 1;
        }
      }
    }
  }
  dfs_traverse(n) {
    this.visited[n] = 1;
    this.printNode(n);
    const { length = 0 } = this.nodes[n] || [];
    for (let i = 0; i < length; i++) {
      let vertice = this.nodes[n][i];
      // console.log("vertice", vertice);
      if (!this.visited[vertice]) this.dfs_traverse(vertice);
    }
  }

  dfs(node) {
    this.visited[node] = 1;
    this.printNode(node);
    const { length = 0 } = this.nodes[node] || [];
    for (let i = 0; i < length; i++) {
      let vertice = this.nodes[node][i];
      if (!this.visited[vertice]) {
        this.dfs_traverse(vertice);
      }
    }
  }
}
