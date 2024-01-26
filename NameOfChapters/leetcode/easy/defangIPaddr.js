const defangIPaddr = (address) => {
    let i = 0;
    let str=""
    while(i < address.length){
        if(address[i] === "."){
            str = str + "[.]"
        } else {
            str = str + address[i]
        }
        i++
    }
    return str
};

defangIPaddr("1.1.1.1")