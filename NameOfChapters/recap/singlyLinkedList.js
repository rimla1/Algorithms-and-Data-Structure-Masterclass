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

    shift(){
        if(!this.head) return undefined
        let oldHead = this.head
        this.head = oldHead.next
        this.length--
        if(this.length === 0){
            this.tail = null
        }

        return oldHead
    }

    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
    }
    
    get(index){
        if(index >= this.length || index < 0) return null
        let counter = 0
        let tempNode = this.head
        while(counter < index){
            tempNode = tempNode.next
            counter++
        }
        return tempNode
    }

    set(index, newVal){
        let node = this.get(index)
        if(!node) return false
        node.val = newVal
        return true
    }

}

const list = new SinglyLinkedList()



