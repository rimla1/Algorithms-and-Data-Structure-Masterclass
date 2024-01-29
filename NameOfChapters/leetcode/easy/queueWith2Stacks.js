class Queue{
    constructor(){
        this.pushStack = []
        this.popStack = []
    }

    push(x){
        this.pushStack.push(x)
    }

    pop(){

        if(this.popStack.length !== 0){
            this.popStack.pop()
        } else {
            const wow = this.pushStack.length
            for(let i = 0; i < wow; i++){
                let poppedElement = this.pushStack.pop()
                this.popStack.push(poppedElement)
            }
            this.popStack.pop()
        }
    }

    peek(){
        if(this.popStack.length > 0){ 
            console.log(this.popStack[this.popStack.length - 1])
            return this.popStack[this.popStack.length - 1]
        }
        else if (this.pushStack.length > 0){
            console.log(this.pushStack[0])
            return this.pushStack[0]
        } else {
            return -1
        }
    }

    empty(){
        console.log(this.popStack.length + this.pushStack.length === 0)
        return this.popStack.length + this.pushStack.length === 0
    }

    getBothStacks(){
        console.log(this.pushStack, this.popStack)
    }

}

let queue = new Queue()
queue.push(7)
queue.push(12)
queue.push(23)
queue.push(47)
queue.pop()
queue.push(55)
queue.push(66)
queue.push(77)
queue.pop()
queue.pop()
queue.pop()
queue.pop()
queue.pop()
queue.pop()
queue.getBothStacks()
queue.empty()


// pushStack [7, 12, 23, 47]
// treba sve da prebacim u popStack = [47, 23, 12, 7]