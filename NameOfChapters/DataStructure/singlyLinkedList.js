class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    }
    this.tail.next = node;
    this.tail = node;
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  unshift(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    console.log(current);
    return current;
  }

  set(index, val) {
    let node = this.get(index);
    if (!node) {
      return false;
    }
    node.val = val;
    return true;
  }
}

const list = new SinglyLinkedList();
list.push(27); // [27] head: 27 tail: 27 length: 1
list.push(21); // [27, 21] head: 27 tail: 21 length: 2
list.push(13); // [27, 21, 13] head: 27 tail: 13 length: 3
list.pop(); // [27, 21] head: 27 tail: 21 length: 2
list.push(45); // [27, 21, 45] head: 27 tail: 45 length: 3
list.shift(); // [21, 45] head: 21 tail: 45 length: 2
list.unshift(79); // [79, 21, 45] head: 79 tail: 45 length: 3
list.unshift(3); // [3, 79, 21, 45] head: 3 tail: 45 length: 4
list.unshift(7); // [7, 3, 79, 21, 45] head: 7 tail: 45 length: 5
// list.get(4); // 45
list.set(2, 100); // [7, 3, 100, 21, 45] head: 7 tail: 45 length: 5
list.get(2); // 100
