const isGreaterThanNine = (nums) => {
  console.log("Ocene koju ucenik ima:", nums[nums.length - 1]);
  if (nums[nums.length - 1] > 9) {
    console.log("There is students in this class that has above 9 grade");
    return true;
  }
  let grade = nums.pop();
  console.log(
    "Ocena: ",
    grade,
    " je manja od 9 i bice uklonjena iz niza, ono sto je ostalo je:  ",
    nums
  );
  if (nums.length == 0) {
    return false;
  }

  isGreaterThanNine(nums);
};

console.log(isGreaterThanNine([6, 6, 6, 8, 10, 5, 7, 6]));
