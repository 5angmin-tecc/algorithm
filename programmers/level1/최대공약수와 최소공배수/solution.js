function solution(n, m) {
  var answer = [];
  let num1 = n;
  let num2 = m;
  let max = 1;

  for (let i = 1; i <= num1; i++) {
    for (let j = 1; j <= num1; j++) {
      if (num1 % i === 0 && num2 % i === 0) {
        num1 /= i;
        num2 /= i;
        max *= i;
      }
    }
  }

  answer.push(max);
  answer.push((((n / max) * m) / max) * max);
  return answer;
}
