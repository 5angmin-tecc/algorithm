function solution(n) {
  var answer = [];
  let num = n;
  while (num > 0) {
    answer.push(num % 10);
    num = Math.floor(num / 10);
  }
  return answer;
}
