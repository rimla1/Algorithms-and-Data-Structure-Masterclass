const firstPalindrome = (words) => {
    for(let word of words){
        if(isPalindrome(word)){
            return word
        }
    }
    return ""
};

const isPalindrome = (word) => {
    let i = 0
    let j = word.length - 1
    while(i <= j){
        if(word[i] !== word[j]) return false
        i++
        j--
        
    }
    return true
}