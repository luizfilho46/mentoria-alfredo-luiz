const nums1 = [0, 0, 0, 0];
const nums2 = [1];

findMedianSortedArrays(nums1, nums2);
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let tamanhoArr = nums1.length + nums2.length;
  let arrFinal = [];
  let position1 = 0,
    position2 = 0;
  while (arrFinal.length < tamanhoArr) {
    if (nums1[position1] <= nums2[position2]) {
      arrFinal.push(nums1[position1]);
      position1++;
    } else if (nums1[position1] > nums2[position2]) {
      arrFinal.push(nums2[position2]);
      position2++;
    } else if (nums1[position1] !== undefined && nums2[position2] === undefined) {
      arrFinal.push(nums1[position1]);
      position1++;
    } else if (nums1[position1] === undefined && nums2[position2] !== undefined) {
      arrFinal.push(nums2[position2]);
      position2++;
    }
  }
  let indice = Math.floor(arrFinal.length / 2);
  if (arrFinal.length % 2 === 0) {
    return (arrFinal[indice - 1] + arrFinal[indice]) / 2;
  } else return arrFinal[indice];
}
