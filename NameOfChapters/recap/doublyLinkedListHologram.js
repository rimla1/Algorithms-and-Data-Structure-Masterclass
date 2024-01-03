class Node {
    constructor(val){
        this.val = val
        this.prev = null
        this.next = null
    }
}

class DoublyLinkedListHologram {
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
            this.length++
            return node
        }
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
        this.length++
        return this
    }

    pop(){
        if(this.length === 0) return undefined
        if(this.length === 1) {
            this.head = null
            this.tail = this.head
            this.length--
            return true
        }
        let newTail = this.tail.prev
        this.tail = newTail
        newTail.next = null
        this.length--
        return true
    }

    unshift(val){
        let node = new Node(val)
        if(this.length === 0){
            this.head = node
            this.tail = this.head
            this.length++
            return node
        }
        let oldHead = this.head
        this.head = node
        node.next = oldHead
        oldHead.prev = node

        this.length++
        return node
    }

    shift(){
        if(this.length === 0) return undefined
        if(this.length === 1){
            this.head = null
            this.tail = this.head
            this.length--
            return true
        }
        let newHead = this.head.next
        newHead.prev = null
        this.head = newHead
        this.length--
        return true
    }

    get(index){
        if(this.length  <= index || this.length === 0) return undefined
        let halfLength = Math.floor(this.length/2)
        if(index < halfLength){
            console.log("KADA JE BROJ KOJI TRAZIMO NA LEVOJ STRANI I POCINJEMO OD GLAVE")
            let currentNode = this.head
            let counter = 0
            while(counter < index){
                currentNode = currentNode.next
                counter++
            }
            return currentNode
        }

        if(index >= halfLength){
            console.log("KADA JE BROJ KOJI TRAZIMO NA DESNOJ STRANI I POCINJEMO OD REPA")
            let currentNode = this.tail
            let counter = 0
            let reversedIndex = this.length - index
            while(counter < reversedIndex){
                currentNode = currentNode.prev
                counter++
            }
            return currentNode
        }
    
    }


    //   33   97   4    46   85   62    55  
}

const list = new DoublyLinkedListHologram()
console.log("How empty list looks like: ", list)
list.push(33)
list.push(97)
list.push(4)
list.push(46)
list.push(85)
list.push(62)
list.push(55)
console.log("How full list looks like: ", list)
console.log(list.get(6), "OVO SMO DOBILI")
console.log("How list looks like afer shift: ", list)