const maxArea = (height) => {
    let start = 0
    let end = height.length - 1

    let currentMax = Math.min(height[start], height[end]) * (end - start);

    while(start < end){

        if(height[start] < height[end]){
            start++
        } else {
            end--
        }

        currentMax = Math.max(currentMax,  Math.min(height[start], height[end]) * (end - start))

    }


    return currentMax

};