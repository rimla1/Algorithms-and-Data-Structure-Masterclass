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
    }
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }
}

// [27, 21, 13]
//   c
//   nt

const list = new SinglyLinkedList();
list.push(27); // [27] head: 27 tail: 27 length: 1
list.push(21); // [27, 21] head: 27 tail: 21 length: 2
list.push(13); // [27, 21, 13] head: 27 tail: 13 length: 3
list.pop(); // [27, 21] head: 27 tail: 21 length: 2
list.push(45); // [27, 21, 45] head: 27 tail: 45 length: 3
list.shift(); // [21, 45] head: 21 tail: 45 length: 2
list.unshift(79); // [79, 21, 45] head: 79 tail: 45 length: 3
console.log(list);

const testList = new SinglyLinkedList();
testList.unshift(120);
console.log("Ovo je test lista: ", testList);
