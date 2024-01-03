const canPlaceFlowers = (flowerbed, n) => {

    let counter = 0
    if(flowerbed[0] === 0 && flowerbed[1] === 0) {
        flowerbed[0] = 1
        counter++
    }

    if(flowerbed[flowerbed.length - 1] === 0 && flowerbed[flowerbed.length - 2] === 0) {
        flowerbed[flowerbed.length - 1] = 1
        counter++
    }

    if(flowerbed.length === 1 && flowerbed[0] === 0) return true

    for(let i = 1; i < flowerbed.length; i++){
        if(flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0 && flowerbed[i] !== 1){
            flowerbed[i] = 1
            counter++
        }
    }

    return counter >= n

};