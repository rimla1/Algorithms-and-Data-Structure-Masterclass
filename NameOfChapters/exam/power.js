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

power(5, 3)