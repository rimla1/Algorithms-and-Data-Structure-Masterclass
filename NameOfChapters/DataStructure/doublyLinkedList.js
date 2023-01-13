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

  pop() {
    if (!this.head) return null;
    this.tail = this.tail.previous;
    this.tail.next = null;
    this.length--;
  }

  shift() {
    if (!this.head) return null;
    this.head = this.head.next;
    this.head.previous = null;
    this.length--;
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    node.next = this.head;
    this.head.previous = node;
    length++;
  }
}

const list = new DoublyLinkedList();
list.push(27); // [27]
list.push(21); // [27, 21]
list.push(100); // [27, 21, 100]
list.push(77); // [27, 21, 100, 77]
list.pop(); // [27, 21, 100]
list.shift(); // [21, 100]
console.log(list);
