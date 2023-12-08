class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val){
        let node = new Node(val)
        if(this.size === 0){
            this.first = node
            this.last = node
        } else {
            let temp = this.first;
            this.first = node;
            this.first.next = temp
        }

        return ++this.size
    }

    pop(){
        if(this.size === 0) return null
        let oldFirst = this.first
        if(this.size === 1) {
            this.first = null
            this.last = null
        } else {
            let newFirst = oldFirst.next
            this.first = newFirst
        }
        this.size--
        return oldFirst.val
    }




}


let stack = new Stack()


