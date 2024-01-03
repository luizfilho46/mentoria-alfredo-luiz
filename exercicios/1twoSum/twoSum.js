function soma(nums, target) {
  for (let index = 0; index < nums.length; index++) {
     for (let index2 = index + 1; index2 < nums.length; index2++) {
        if (nums[index] + nums[index2] === target) {
           return ([index, index2])
        }
     }
  }
}

let nums = [2, 11, 15, 7]
let target = 9

soma(nums, target)
/* 
solucao ideal

function name(nums, target) {
  let map = new Map()
  for (let index = 0; index < nums.length; index++) {
     const complement = target - nums[i]
     if (map.has(complement)) {
        return [i, map.get(complement)]
     }
     map.set(nums[i], i)
  }
}
// https://www.youtube.com/watch?v=w1728E_ucdU */