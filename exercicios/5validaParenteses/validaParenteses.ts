const s = '((';
isValid(s);

function isValid(s: string): boolean {
  let parentesesAbertos: Array<string> = [];
  if (s.length % 2 != 0 || s[0] === ')' || s[0] === ']' || s[0] === '}') {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      parentesesAbertos.push(s[i]);
    } else if (parentesesAbertos[parentesesAbertos.length - 1] + s[i] === '()') {
      parentesesAbertos.pop();
    } else if (parentesesAbertos[parentesesAbertos.length - 1] + s[i] === '[]') {
      parentesesAbertos.pop();
    } else if (parentesesAbertos[parentesesAbertos.length - 1] + s[i] === '{}') {
      parentesesAbertos.pop();
    } else return false;
  }
  if (parentesesAbertos.length > 0) {
    return false;
  }
  return parentesesAbertos.length === 0;
}
