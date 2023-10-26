const charCount = (str) => {
    const charCounter = {}
    for(let i = 0; i < str.length; i++){
        lowerChar = str[i].toLowerCase()
        if(charCounter[str[i]] > 0){
            console.log("Ovde sam", )
            charCounter[str[i]]++
        } else {
                charCounter[str[i]] = 1
        }
    }
    console.log(charCounter)
    return charCount
}

charCount("Aaalmir")