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

    BFS(){
        let queue = [];
        let values = []
        queue.push(this.root)
        while(queue.length !== 0){
            let removedNode = queue.shift()
            values.push(removedNode.value)
            if(removedNode.left !== null){
                queue.push(removedNode.left)
            }
            if(removedNode.right !== null){
                queue.push(removedNode.right)
            }
        }
        return values
    }

    DFSpreOrder(){
        let visited = [];
        let current = this.root
        let traverse = (node) => {
            visited.push(node.value)
            if(node.left){
                traverse(node.left)
            }
            if(node.right){
                traverse(node.right)
            }
        }
        traverse(current)
        return visited
    }

    DFSpostOrder(){
        let visited = [];
        let current = this.root
        let traverse = (node) => {
            if(node.left){
                traverse(node.left)
            }
            if(node.right){
                traverse(node.right)
            }
            visited.push(node.value)
        }
        traverse(current) 
        return visited
    }

    DFSinOrder(){
        let visited = [];
        let current = this.root
        let traverse = (node) => {
            if(node.left){
                traverse(node.left)
            }
            visited.push(node.value)
            if(node.right){
                traverse(node.right)
            }

        }
        traverse(current) 
        return visited
    }
  
  }
  
  const bst = new BinarySearchTree();
  bst.insert(30);
  bst.insert(45);
  bst.insert(15);
  bst.insert(7);
  bst.DFSinOrder();


