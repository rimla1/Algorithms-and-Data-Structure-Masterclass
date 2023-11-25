const searchInsert = (nums, target) => {
    let start = 0
    let end = nums.length - 1

    while(start <= end){
        let middle = Math.floor((start + end)/2)
        if(nums[middle] == target){
            return middle
        }

        if(nums[middle] > target){
            end = middle - 1
        }

        if(nums[middle] < target){
            start = middle + 1
        }

    }
    
    // Should return where number should be placed if not found
    return start
};


searchInsert([1,2,3,5,6,7,8], 20)