const backspaceCompare = (s, t) => {
    let i = s.length - 1
    let j = t.length - 1
    let strS = ""
    let strT = ""
    while(s[i] !== "#" && i >= 0){
        strS = strS + s[i]
        i--
    }
    while(t[j] !== "#" && i >= 0){
        strT = strT + t[j]
        j--
    }
    return strS === strT
};

console.log(backspaceCompare("aa#a", "df#a"))