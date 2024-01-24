const buildArray = (nums) => {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        console.log(nums[i])
        nums[i] += n * (nums[nums[i]] % n);
        console.log(nums[i])
    }

    for (let i = 0; i < n; i++) {
        nums[i] = Math.floor(nums[i] / n);
    }

    return nums;
}

buildArray([0,2,1,5,3,4])