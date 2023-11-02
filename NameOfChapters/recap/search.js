const search = (array, val) => {
 
    let min = 0;
    let max = array.length - 1;
 
    while (min <= max) {
        console.log(min, max)
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];

        if (currentElement < val) {
            min = middle + 1;
        }
        else if (currentElement > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
 
    return -1;
}

search([1,3,4,5,6,7,8,9,22,23,24,55,67,78,88,89,121,222,343,567], 3)