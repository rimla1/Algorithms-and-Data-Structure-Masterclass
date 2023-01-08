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
    console.log(this.tail.next);
    this.tail = node;
    this.length += 1;
    console.log(this);
    return this;
  }
}

const list = new SinglyLinkedList();
list.push(27);
list.push(21);
list.push(13);
console.log(list.head);
console.log(list.tail);
console.log(list.length);
