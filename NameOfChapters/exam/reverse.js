const reverse = (string) => {
    if(string.length === 0){
        return
    }
    if(string.length === 1) {
        return string[0]
    } 

    return string[string.length - 1] + reverse(string.slice(0, string.length - 1))
}

reverse("")
