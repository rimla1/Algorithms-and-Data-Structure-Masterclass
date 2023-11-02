// Anagram Detection: Write a function to determine if two strings are anagrams of each other. For example, "listen" and "silent" are anagrams.

const anagramDetection = (string1, string2) => {
    if(string1.length !== string2.length){
        return false
    }

    let string1Counter = {}
    let string2Counter = {}

    for(let i = 0; i < string1.length; i++){
        string1Counter[string1[i]] = (string1Counter[string1[i]] || 0) + 1
    }

    for(let i = 0; i < string2.length; i++){
        string2Counter[string2[i]] = (string2Counter[string2[i]] || 0) + 1
    }

    for (const letter in string1Counter) {
        if(!string2Counter[letter]){
            return false
        }

        if(string1Counter[letter] !== string2Counter[letter]){
            return false
        }
    }

    return true

}

anagramDetection("listen", "silent")


// Are There Duplicates: Implement a function that checks if there are any duplicates in an array of numbers.

const areThereDuplicates = (arrayOfNumbers) => {
    if(arrayOfNumbers === 0){
        return false
    }

    let counter = {}
    for (const number of arrayOfNumbers) {
        counter[number] = (counter[number] || 0) + 1
    }
    for(let key in counter){
        if(counter[key] > 1){
            return true
        }
    }

    return false
}

areThereDuplicates([1,2,3,4,5,6,7,8,9])