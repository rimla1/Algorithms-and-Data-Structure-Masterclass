const swap = (arr, indx1, indx2) => {
    let temp = arr[indx1]
    arr[indx1] = arr[indx2]
    arr[indx2] = temp
}

swap([6,2,3,4,5,1], 0, 5)

const modernSwap = (arr, indx1, indx2) => {
    [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]
}

modernSwap([8,2,3,4,5,6,7,1], 0, 7)