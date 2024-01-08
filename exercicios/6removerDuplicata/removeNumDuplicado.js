var entrada = [1, 1, 2];
removeDuplicates(entrada);
function removeDuplicates(nums) {
    var count = 1;
    for (var i = 1; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[count] = nums[i];
            count++;
        }
    }
    console.log(nums);
    console.log(count);
    return count;
}
