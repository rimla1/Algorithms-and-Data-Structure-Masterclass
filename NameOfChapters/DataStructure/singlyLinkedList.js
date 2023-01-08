class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let firstNode = new Node("Gde");
firstNode.next = new Node("Si");
firstNode.next.next = new Node("Bre");

console.log(firstNode);
