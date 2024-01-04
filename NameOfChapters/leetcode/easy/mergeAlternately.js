// const mergeAlternately = (word1, word2) => {
//     let indexWord1 = 0
//     let indexWord2 = 0
//     let result = []

//     while(indexWord1 < word1.length && indexWord2 < word2.length){

//         result.push(word1[indexWord1])
//         result.push(word2[indexWord2])

//         indexWord1++
//         indexWord2++

//     }

//     while(indexWord1 < word1.length){
//         result.push(word1[indexWord1])
//         indexWord1++
//     }

//     while(indexWord2 < word2.length){
//         result.push(word2[indexWord2])
//         indexWord2++
//     }

//     const word = result.join("")
//     return word

    
// };

const mergeAlternately = (word1, word2) => {
    let indexWord1 = 0
    let indexWord2 = 0
    let result = ""

    while(indexWord1 < word1.length && indexWord2 < word2.length){

        result += word1[indexWord1]
        result += word2[indexWord2]

        indexWord1++
        indexWord2++

    }

    while(indexWord1 < word1.length){
        result += word1[indexWord1]
        indexWord1++
    }

    while(indexWord2 < word2.length){
        result += word2[indexWord2]
        indexWord2++
    }


    return result

    
};

mergeAlternately("ab", "pqrs")