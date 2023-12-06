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
        let node = new Node(val)
        if(!this.head){
            this.head = node
            this.tail = this.head
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length++
        return node
    }

    
    pop(){
        if(this.length === 0) return undefined
        if(this.length === 1){
            this.head = null
            this.tail = this.head
            this.length--
            return this
        }
        let current = this.head
        while(current.next.next !== null){
            current = current.next
        }
        current.next = null
        this.tail = current
        this.length--
        return current
    }

    
    shift(){
        if(this.length === 0) return undefined
        if(this.length === 1) {
            this.head = null
            this.tail = this.head
            this.length--
            return this
        }
        let newHead = this.head.next
        this.head = newHead
        this.length--
        return newHead
    }

    
    unshift(val){
        let node = new Node(val)
        if(this.length === 0){
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.length++
        return node
    }


    
    get(num){
        if(this.length < num) return undefined
        if(this.length === 0) return undefined
        if(this.length === 1) return this.head

        let i = 1
        let current = this.head
        while(i < num){
            current = current.next
            i++
        }
        
        return current
    }

    
    set(num, val){
        let foundNode = this.get(num)
        if(!foundNode){
            return undefined
        }
        foundNode.val = val
        return this
    }

    
    insert(num, val){
        
        if(this.length + 1 < num) return undefined
        if(num === 1) return this.unshift(val)
        if(num === this.length + 1) return this.push(val)
        let node = new Node(val)
        let oldNode = this.get(num)
        let next = oldNode.next
        node.next = next
        oldNode.next = node
        this.length++
        return this
    }

    remove(num){
        if(this.length === 0) return undefined
        if(this.length === 1) {
            this.head = null
            this.tail = null
            this.length--
        }
        if(this.length === num) return this.pop()
        let node = this.get(num - 1)
        
        node.next = node.next.next
        this.length--
        return this
    }

  
    reverse(){
        if(this.length <= 0) return false
        if(this.length === 1) return this

        let node = this.head       
        this.head = this.tail  
        this.tail = node      
        let prev = null;       
        let next;  

        for(let i = 0; i < this.length; i++){
            next = node.next   

            node.next = prev   
            prev = node 
            node = next 
        }
        return this
    }
    
}


const list = new SinglyLinkedList()
list.push(25)
list.push(9)
list.push(12)
list.push(33)
list.reverse()


