class MaxBinaryHeap{
    constructor(){
        this.values = []
    }



    insert(value){
       this.values.push(value)
       this.bubbleUp()
    }

    bubbleUp(){
        let index = this.values.length - 1
        let child = this.values[index]
        while(true){
            let parentIndex = Math.floor((index - 1)/2)
            let parent = this.values[parentIndex]
            if(child > parent){
                this.values[parentIndex] = child
                this.values[index] = parent
                index = parentIndex
            } else {
                return 
            }
        }



    }

    extractMax() {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
          this.values[0] = end
          this.sinkDown()
        }
        return max
    }

    sinkDown() {
        let idx = 0
        const length = this.values.length
        const element = this.values[0]
        while (true) {
          let leftChildIdx = 2 * idx + 1
          let rightChildIdx = 2 * idx + 2
          let leftChild, rightChild
          let swap = null
     
          if (leftChildIdx < length) {
            leftChild = this.values[leftChildIdx]
            if (leftChild > element) {
              swap = leftChildIdx
            }
          }
          if (rightChildIdx < length) {
            rightChild = this.values[rightChildIdx]
            if (
              swap === null && rightChild > element ||
              swap !== null && rightChild > leftChild
            ) {
              swap = rightChildIdx
            }
          }
     
          if (swap === null) break;
          this.values[idx] = this.values[swap]
          this.values[swap] = element
          idx = swap
        }
      }
    

}

//                    30
//        15                      21
//    13      9               19      13      

const maxBinaryHeap = new MaxBinaryHeap()
maxBinaryHeap.insert(30)
maxBinaryHeap.insert(15)
maxBinaryHeap.insert(21)
maxBinaryHeap.insert(13)
maxBinaryHeap.insert(9)
maxBinaryHeap.insert(19)
maxBinaryHeap.insert(13)
maxBinaryHeap.insert(50)
maxBinaryHeap.extractMax()
console.log(maxBinaryHeap)