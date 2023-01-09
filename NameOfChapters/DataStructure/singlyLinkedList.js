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

  //   push(val) {
  //     const node = new Node(val);
  //     if (this.length === 0) {
  //       this.head = val;
  //       this.tail = val;
  //     }
  //     this.tail = val;
  //     this.length += 1;
  //     console.log(this);
  //     return this;
  //   }

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
}

// [27, 21, 13]
//   c
//   nt

const list = new SinglyLinkedList();
list.push(27); // [27] head: 27 tail: 27 length: 1
list.push(21); // [27, 21] head: 27 tail: 21 length: 2
list.push(13); // [27, 21, 13] head: 27 tail: 13 length: 3
list.pop(); // [27, 21] head: 27 tail: 21 length: 2
