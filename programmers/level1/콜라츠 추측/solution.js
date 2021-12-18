function solution(num) {
  var answer = 0;
  let number = num;
  while (number !== 1) {
    if (answer >= 500) {
      answer = -1;
      break;
    }

    if (number % 2 === 0) {
      number = number / 2;
    } else {
      number = number * 3 + 1;
    }
    answer++;
  }
  return answer;
}
