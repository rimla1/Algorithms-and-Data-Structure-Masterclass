const power = (base, exponent) => {
    let result = 1
    const inner = (base, exponent) => {
        if(exponent < 1) return
        result = result * base
        exponent--
        inner(base, exponent)
    }
    inner(base, exponent)

    return result
}



const powerCleanRecursion = (base, exponent) => {
    if (exponent === 0) {
        return 1;
    }

    return base * power(base, exponent - 1);
}

powerCleanRecursion(5, 3)
