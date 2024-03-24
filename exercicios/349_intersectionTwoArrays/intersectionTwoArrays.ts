const v = [1, 2, 2, 1, 3];
const v2 = [2, 2, 3];
intersection(v, v2);
function intersection(nums1: number[], nums2: number[]): number[] {
  const response: number[] = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        if (response.filter((item) => item === nums2[j]).length === 0) {
          response.push(nums2[j]);
        }
        nums2.splice(j, 1);
        break;
      }
    }
  }

  console.log(response);
  return response;
}
