// const lemonadeChange = (bills) => {
//     if(bills[0] !== 5) return false
//     let lookup = {}

//     for(let i = 0; i < bills.length; i++){
//         if(bills[i] === 5){
//             lookup[bills[i]] = (lookup[bills[i]] || 0) + 1
//         }
//         if(bills[i] === 10){
//             if(lookup[5] >= 1) {
//                 lookup[bills[i]] = (lookup[bills[i]] || 0) + 1
//                 lookup[5]--
//             } else {
//                 return false
//             }

//         } 
//         if(bills[i] === 20){
//             if(lookup[5] >= 1 && lookup[10] >= 1){
//                 lookup[bills[i]] = (lookup[bills[i]] || 0) + 1
//                 lookup[5]--
//                 lookup[10]--
//             } else if (lookup[5] >= 3 && lookup[10] === 0){
//                 lookup[bills[i]] = (lookup[bills[i]] || 0) + 1
//                 lookup[5] = lookup[5] - 3
//             } else {
//                 return false
//             }
//         }
//     }
//     return true
// };


const lemonadeChange = (bills) => {
    let five = 0; 
    let ten = 0;

    for (const bill of bills) {
        if (bill === 5) {
            five++;
        } else if (bill === 10) {
            if (five > 0) {
                five--;
                ten++;
            } else {
                return false; 
            }
        } else if (bill === 20) {
            if (ten > 0 && five > 0) {
                ten--;
                five--;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false; 
            }
        }
    }

    return true; 
}


