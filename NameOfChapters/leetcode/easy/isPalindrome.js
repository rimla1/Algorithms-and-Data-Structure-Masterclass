const isPalindrome = (s) => {
    if(s.length === 0) return true
    let validString = ""
    for(let i = 0; i < s.length; i++){
        if((s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122) || (s[i].charCodeAt() >= 48 && s[i].charCodeAt() <= 57)){
            validString = validString + s[i]
        }
        if(s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90){
            let character = String.fromCharCode(s[i].charCodeAt() + 32)
            validString = validString + character
        }
    }
    let left = 0
    let right = validString.length - 1
    while(left <= right){
        if(validString[left] !== validString[right]) return false
        left++
        right--
    }

    return true

};


