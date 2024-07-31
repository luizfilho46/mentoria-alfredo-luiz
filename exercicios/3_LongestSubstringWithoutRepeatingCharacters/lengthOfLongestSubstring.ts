function lengthOfLongestSubstring(s: string): number {
  let max: number = 0;
  for (let i = 0; i < s.length; i++) {
    let currentSubstring = new Set();
    for (let j = i; j < s.length; j++) {
      if (!currentSubstring.has(s[j])) currentSubstring.add(s[j]);
      else break;
    }
    if (currentSubstring.size > max) max = currentSubstring.size;
    if (max === s.length || max > s.slice(i).length) break;
  }
  return max;
}