const gcdOfStrings = (str1, str2) => {
    if(str1 + str2 !== str2 + str1) return "";
    let a = str1.length
    let b = str2.length
    while(b !== 0){
        let temp = b
        b = a % b
        a = temp
    }
    
    let result = ""
    for(let i = 0; i < a; i++){
        result = result + str1[i]
    }

    return result

};

gcdOfStrings("ABABAB", "ABAB")
gcdOfStrings("ABCABC", "ABC")