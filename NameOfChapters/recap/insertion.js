const swap = (arr, indx1, indx2) => {
    let temp = arr[indx1]
    arr[indx1] = arr[indx2]
    arr[indx2] = temp
}

const insertion = (arr) => {

    for(let i = 1; i < arr.length; i++){
        for(let j = 0; j < i; j++){
            if(arr[j] >  arr[i]){
                swap(arr, j, i)
            }
        }
    }

    return arr
}

insertion([8,3,7,6,2,1,5,4])

