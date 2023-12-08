class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
} 

class Queue {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val){
        let newNode = new Node(val)
        if(this.size === 0){
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }

        return ++this.size
    }

    dequeue(){
        if(this.size === 0) return null
        let shiftedNode = this.first
        if(this.size === 1) {
            this.first = null
            this.last = null
        } else {
            let newHead = shiftedNode.next
            this.first = newHead
            shiftedNode.next = null
        }
        this.size--
        return shiftedNode.val

    }



}


// 35 -> 78 -> 29 -> 87 - push(val)
// 78 -> 29 -> 87 - shift()

const queue = new Queue()
queue.push(35)
queue.push(78)
queue.push(29)
queue.push(87)
console.log(queue)
queue.shift()
console.log(queue)