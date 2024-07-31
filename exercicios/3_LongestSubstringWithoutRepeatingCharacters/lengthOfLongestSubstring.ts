const s1 = 'abcabcbb'; // 3
const s2 = 'bbbbb'; // 1
const s3 = 'pwwkew'; // 3
const s4 = 'p'; // 1
const s5 = ''; // 0
const s6 = 'dvdf'; // 3

function lengthOfLongestSubstring(s: string): number {
  let current: string = '';
  let max: number = 0;
  let restart: number = 0;
  for (let i = restart; i < s.length; i++) {
    if (!current.includes(s[i])) {
      current += s[i];
    } else {
      if (max < current.length) {
        max = current.length;
      }
      current = '';
      i = restart++;
    }
  }
  return max > current.length ? max : current.length;
}
console.log(lengthOfLongestSubstring(s1));
// console.log(lengthOfLongestSubstring(s2));
// console.log(lengthOfLongestSubstring(s3));
// console.log(lengthOfLongestSubstring(s4));
// console.log(lengthOfLongestSubstring(s5));
// console.log(lengthOfLongestSubstring(s6));
