const isPowerOfTwo = (n) => {
    let counter = 0
    while( n >= 2){
        n = n / 2
        counter++
    }
    return n === 1
};

isPowerOfTwo(1)