const swap = (arr, indx1, indx2) => {
    console.log('This is how array looks now: ', arr)
    let temp = arr[indx1]
    arr[indx1] = arr[indx2]
    arr[indx2] = temp
    console.log("This is how array looks after: ", arr)
}

swap([6,2,3,4,5,1], 0, 5)