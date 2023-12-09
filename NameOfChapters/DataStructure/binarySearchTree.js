class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current !== null) {
        if(newNode.value === current.value) return false
      if (newNode.value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }

      if (newNode.value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } 
    }
  }

  find(wantedValue){
    if(this.root === null) return false
    let current = this.root
    while(current !== null) {
        if(current.value === wantedValue) return true
        if(current.value < wantedValue){
            current = current.right
        } else {
            current = current.left
        }
    }
    return false
  }

}

const bst = new BinarySearchTree();
bst.insert(30);
bst.insert(45);
bst.insert(15);
bst.insert(7);
console.log(bst.find(40))
