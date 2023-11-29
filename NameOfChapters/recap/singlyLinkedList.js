class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        const node = new Node(val)
        if(!this.head){
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length += 1
        return this;
    }

    pop(){
        if(!this.head) return undefined
        let prev;
        let current = this.head
        let counter = 0;
        while(counter < this.length - 1){
            prev = current
            current = current.next
            counter++
        }
        this.tail = prev
        prev.next = null
        this.length--
        return current
    }
    



}

const list = new SinglyLinkedList()
list.push(30)
list.push(27)
list.push(78)
list.pop()
console.log(list)
