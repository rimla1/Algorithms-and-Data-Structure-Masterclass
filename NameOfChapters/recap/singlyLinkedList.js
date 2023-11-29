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
        let current = this.head
        let prev = current
        while(current.next){
            prev = current
            current = current.next
        }
        this.tail = prev
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }
    



}

const list = new SinglyLinkedList()
list.push(30)
list.push(27)
list.push(78)
list.pop()
console.log(list)
