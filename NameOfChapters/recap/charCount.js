// const charCount = (str) => {
//     const charCounter = {}
//     for(let i = 0; i < str.length; i++){
//         const lowerChar = str[i].toLowerCase()
//         if(charCounter[lowerChar] > 0){
//             charCounter[lowerChar]++
//         } else {
//                 charCounter[lowerChar] = 1
//         }
//     }
//     console.log(charCounter)
//     return charCount
// }

const charTrack = (string) => {
    const charTracker = {}

    for(let char of string){
        char = char.toLowerCase()
        if(/[a-z0-9]/.test(char)){
            charTracker[char] = ++charTracker[char] || 1
        } 
    }
    return charTracker
}

charTrack("Aaalmir")