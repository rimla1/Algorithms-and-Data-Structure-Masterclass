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

  insertion(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.unshift(val);
    }

    if (index === this.length) {
      this.push(val);
    }
    let newNode = new Node(val);
    let previousNode = this.get(index - 1);
    let nextNode = this.get(index);
    previousNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }

    if (index === 0) {
      this.shift();
    }

    if (index === this.length - 1) {
      this.pop();
    }
    let nodeBeforeRemovedNode = this.get(index - 1);
    let removedNode = nodeBeforeRemovedNode.next;
    nodeBeforeRemovedNode.next = removedNode.next;
    this.length--;
    return true;
  }

  reverse() {
    if (this.length < 2) {
      return null;
    }
    if (this.length === 2) {
      let oldHead = this.head;
      this.head = this.tail;
      this.head.next = oldHead;
      this.tail = oldHead;
      this.tail.next = null;
    }

    // let oldHead = this.head;
    // this.head = this.tail;
    // this.tail = oldHead;

    // for (let i = 1; i < this.length; i++) {
    //   if (i === 1) {
    //     console.log("Ulazil ovde");
    //     let newNext = this.tail;
    //     let currentNode = this.get(i);
    //     currentNode.next = newNext;
    //   }
    //   newNext = this.get(i - 1);
    //   currentNode = this.get(i);
    //   currentNode.next = newNext;
    // }

    return this;
  }
}

// const list = new SinglyLinkedList();
// list.push(27); // [27] head: 27 tail: 27 length: 1
// list.push(21); // [27, 21] head: 27 tail: 21 length: 2
// list.push(13); // [27, 21, 13] head: 27 tail: 13 length: 3
// list.pop(); // [27, 21] head: 27 tail: 21 length: 2
// list.push(45); // [27, 21, 45] head: 27 tail: 45 length: 3
// list.shift(); // [21, 45] head: 21 tail: 45 length: 2
// list.unshift(79); // [79, 21, 45] head: 79 tail: 45 length: 3
// list.unshift(3); // [3, 79, 21, 45] head: 3 tail: 45 length: 4
// list.unshift(7); // [7, 3, 79, 21, 45] head: 7 tail: 45 length: 5
// list.get(4); // 45
// list.set(2, 100); // [7, 3, 100, 21, 45] head: 7 tail: 45 length: 5
// list.get(2); // 100
// list.insertion(3, 200); // [7, 3, 100, 200, 21, 45] head: 7 tail: 45 length: 6
// list.remove(2); // [7, 3, ,200, 21, 45] head: 7 tail: 45 length: 5

const testList = new SinglyLinkedList();
testList.push(27); // [27] head: 27 tail: 27 length: 1
testList.push(21); // [27, 21] head: 27 tail: 21 length: 2
console.log(testList);
testList.reverse();
console.log(testList);
