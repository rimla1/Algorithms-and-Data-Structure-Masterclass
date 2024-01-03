class Node {
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        let node = new Node(val)
        if(this.length === 0){
            this.head = node
            this.tail = this.head
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }

        this.length++
        return this
    }

    pop(){
        let deletedNode = this.tail
        if(this.length === 0) return undefined
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = deletedNode.prev
            this.tail.next = null
            deletedNode.prev = null 
        }

        this.length--
        return deletedNode
    }


    unshift(val){
        let node = new Node(val)
        if(this.length === 0){
            this.head = node
            this.tail = this.head
        } else {
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        this.length++
        return node
    }

    shift(){
        let shiftedNode = this.head
        if(this.length === 0) return undefined
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
           this.head = shiftedNode.next
           this.head.prev = null
           shiftedNode.next = null
        }
        this.length--
        return shiftedNode
    }

    get(index){
        if(index < 0 || index >= this.length) return null
        let halfLengthOfTheList = Math.floor(this.length/2)
        let current;

        if(index <= halfLengthOfTheList){
            current = this.head 
            for(let i = 0; i < index; i++){
                current = current.next
            }
        }

        if(index > halfLengthOfTheList){
            current = this.tail
            for(let i = this.length - 1; i > index; i--){
                current = current.prev
            }
        }
        console.log("GET",current)
        return current
    }

    set(index, val){
        if(index < 0 || index >= this.length) return null
        let wantedNode = this.get(index)
        if(!wantedNode) return false
        wantedNode.val = val
        return true
    }

    insert(index, val){
        if(this.length === 0) return undefined
        if(index < 0 || index > this.length) return undefined
        if(index === 1) return this.unshift(val)
        if(index === this.length) return this.push(val)
        let newNode = new Node(val)
        let wantedNode = this.get(index)
        wantedNode.prev.next = newNode
        newNode.prev = wantedNode.prev
        newNode.next = wantedNode
        wantedNode.prev = newNode
        this.length++
        return newNode
    }


    remove(index){
        if(this.length === 0 || this.length <= index) return undefined
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()
        let deletedNode = this.get(index)
        deletedNode.prev.next = deletedNode.next
        deletedNode.next.prev = deletedNode.prev
        deletedNode.next = null
        deletedNode.prev = null
        this.length--
        return deletedNode
    }

    reverse(){
        let currentNode = this.head
        let temp = null

        this.head = this.tail
        this.tail = currentNode

        for(let i=0; i < this.length; i++){
            temp = currentNode.prev
            currentNode.prev = currentNode.next
            currentNode.next = temp
            currentNode = currentNode.prev
        }
        
        return this
    }

}
            

let list = new DoublyLinkedList()


list.push(35) 
list.push(27)
list.push(95)
console.log("List before reverse: ,", list)   
list.reverse()
console.log("List after reverse: ,", list)  
