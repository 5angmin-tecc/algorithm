function solution(a, b) {
  var answer = 0;
  const numbers = [];

  if (a < b) {
    numbers.push(a);
    numbers.push(b);
  } else {
    numbers.push(b);
    numbers.push(a);
  }
  console.log(numbers);

  for (let i = numbers[0]; i <= numbers[1]; i++) {
    answer += i;
  }

  return answer;
}
