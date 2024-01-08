const entrada: number[] = [1, 1, 2];

removeDuplicates(entrada);

function removeDuplicates(nums: number[]): number {
  let count = 1;
  let comparacao = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== comparacao) {
      comparacao = nums[i];
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
}
