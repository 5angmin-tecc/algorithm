function solution(numbers) {
  var answer = [];
  const sumNumbers = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      sumNumbers.push(sum);
    }
  }
  sumNumbers.sort(function (a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });
  sumNumbers.forEach((e, index) => {
    if (sumNumbers.indexOf(e) === index) {
      answer.push(e);
    }
  });

  return answer;
}
