const productOfArray = (arrOfNums) => {

    if(arrOfNums.length === 0) return 1;
    return arrOfNums[0] + productOfArray(arrOfNums.splice(1))
}

productOfArray([1,5,20,150,300]) 