function solution(n) {
  var answer = 0;
  let reverseTri = [];
  while (true) {
    if (n < 3) {
      reverseTri.push(n);
      break;
    }
    reverseTri.push(n % 3);
    n = Math.floor(n / 3);
  }
  let sum = 0;
  for (let i = 0; i < reverseTri.length; i++) {
    sum += reverseTri[i] * 3 ** (reverseTri.length - 1 - i);
  }
  answer = sum;
  return answer;
}
