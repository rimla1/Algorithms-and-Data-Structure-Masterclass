class MinStack {
    constructor(){
        this.stack = []
        this.minValStack = []
    }

    push(val){
        if(this.stack.length === 0) {
            this.minValStack.push(val)
        } else {
            this.minValStack.push(Math.min(val, this.minValStack[this.minValStack.length - 1]))
        }
        this.stack.push(val)
        
    }

    pop(){
        this.stack.pop()
        this.minValStack.pop()
        return null
    }

    top(){
        return this.stack[this.stack.length - 1]
    }

    getMin(){
        return this.minValStack[this.minValStack.length - 1]
    }

}