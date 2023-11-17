const swap = (arr, indx1, indx2) => {
    let temp = arr[indx1]
    arr[indx1] = arr[indx2]
    arr[indx2] = temp
}

const bubbleSort = (arr) => {
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j + 1]){
                swap(arr, j, j + 1)
                noSwaps = false
            }
        }
        if(noSwaps){
            break
        }
    }
    
    return arr
}


bubbleSort([6,1,2,3,4,5])


