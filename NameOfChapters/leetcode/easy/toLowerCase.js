const toLowerCase = (s) => {
    let sLowerCase = ""
    for(let i = 0; i < s.length; i++){
        let charCode = s[i].charCodeAt()
        if(65 <= charCode && charCode <= 90){
            let letter = String.fromCharCode(charCode + 32)
            sLowerCase = sLowerCase + letter
        } else {
            sLowerCase = sLowerCase + s[i]
        }
    }

    return sLowerCase
};

