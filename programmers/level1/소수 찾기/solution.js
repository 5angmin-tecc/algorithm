function solution(n) {
  var answer = 0;
  let numbers = [];

  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }

  for (let i = 1; i * i < n; i++) {
    if (numbers[i]) {
      let num = numbers[i];
      for (let j = num * num; j <= n; j += num) {
        numbers[j - 1] = 0;
        console.log(numbers);
      }
    }
  }

  answer = numbers.filter((e) => e);
  answer.shift();
  return answer.length;
}
