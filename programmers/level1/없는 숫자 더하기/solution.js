function solution(numbers) {
  var answer = -1;
  let sum = 0;
  const total = 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  answer = total - sum;
  return answer;
}
