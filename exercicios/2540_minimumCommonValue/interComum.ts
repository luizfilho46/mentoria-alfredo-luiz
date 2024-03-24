const n1 = [1, 2, 3];
const n2 = [2, 4];
console.log(getCommon(n1, n2));

function getCommon(nums1: number[], nums2: number[]): number {
  for (let i = 0; i < nums1.length; i++) {
    let inicio = 0;
    let fim = nums2.length - 1;
    while (inicio <= fim && nums1[i] >= nums2[0]) {
      let meio = Math.floor((inicio + fim) / 2);
      if (nums1[i] === nums2[meio]) {
        return nums1[i];
      } else if (nums1[i] < nums2[meio]) {
        fim = meio - 1;
      } else if (nums1[i] > nums2[meio]) {
        inicio = meio + 1;
      }
    }
  }
  return -1;
}
