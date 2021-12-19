function solution(n) {
  var answer = 0;
  let num = n;

  do {
    answer += num % 10;
    num = Math.floor(num / 10);
  } while (num > 0);

  return answer;
}
