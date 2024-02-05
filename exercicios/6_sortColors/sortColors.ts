const numss = [2, 0, 2, 1, 1, 0];

sortColors(numss);
function sortColors(nums: number[]): void {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  console.log(numss);
}
