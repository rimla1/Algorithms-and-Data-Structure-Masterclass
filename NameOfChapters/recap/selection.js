const swap = (arr, indx1, indx2) => {
    let temp = arr[indx1]
    arr[indx1] = arr[indx2]
    arr[indx2] = temp
}

const selectionSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
       let smallestValue = i
       for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[smallestValue]){
                smallestValue = j
            }
       }
       if(i !== smallestValue){
        swap(arr, smallestValue, i)
       }

    }
    console.log(arr)
    return(arr)
}

selectionSort([90,30,4,5,13, 29, 77, 3])



