const mySqrt = (x) => {
    if (x === 0 || x === 1) {
        return x;
    }
    
    let left = 1;
    let right = Math.floor(x / 2);
    let result = 0;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;
        
        if (square === x) {
            return mid;
        } else if (square < x) {
            left = mid + 1;
            result = mid;  
        } else {
            right = mid - 1;
        }
    }
    
    return result;
};
