const nums1 = [0];
const nums2 = [0];

console.log(findMedianSortedArrays(nums1, nums2));
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const arrFinal = [];
  let positionNums1 = 0;
  let positionNums2 = 0;
  while (arrFinal.length < nums1.length + nums2.length) {
    if (nums1[positionNums1] <= nums2[positionNums2] || nums2[positionNums2] === undefined) {
      arrFinal.push(nums1[positionNums1]);
      positionNums1++;
    } else {
      arrFinal.push(nums2[positionNums2]);
      positionNums2++;
    }
  }
  let meioArrFinal = Math.floor(arrFinal.length / 2);
  if (arrFinal.length % 2 === 0) {
    return (arrFinal[meioArrFinal - 1] + arrFinal[meioArrFinal]) / 2;
  }
  return arrFinal[meioArrFinal];
}
