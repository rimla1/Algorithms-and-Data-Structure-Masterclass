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
        if(isAlphaNumeric(char)){
            charTracker[char] = ++charTracker[char] || 1
        } 
    }
    return charTracker
}

const isAlphaNumeric = (char) => {
    const code = char.charCodeAt()
    if(!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)){
        return false
    }
    return true
}

charTrack("test TEST 123")