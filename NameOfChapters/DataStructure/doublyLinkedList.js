class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    this.head.previous = null;
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
    this.length++;
  }
}

const list = new DoublyLinkedList();
list.push(27);
list.push(21);
list.push(100);
list.push(77);
console.log(list);
