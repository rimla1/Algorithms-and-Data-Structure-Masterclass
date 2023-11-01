const isAnagram = (string1, string2) => {

    if(string1.length !== string2.length){
        return false
    }

    letterCounter1 = {}
    letterCounter2 = {}

    for (const letter of string1) {
        letterCounter1[letter] = (letterCounter1[letter] || 0) + 1
    }


    for (const letter of string2) {
        letterCounter2[letter] = (letterCounter2[letter] || 0) + 1
    }

    for (const key in letterCounter1) {
        
        if(!letterCounter2[key]){
            return false
        }

        if(letterCounter1[key] !== letterCounter2[key]){
            return false
        }
    }

    return true

}


console.log(isAnagram("almin", "rimla"))