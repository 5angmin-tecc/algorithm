function solution(left, right) {
  var answer = 0;
  const count = new Array(right - left + 1).fill(0);

  for (let i = left; i <= right; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count[i - left]++;
      }
    }
  }

  let calc = 0;
  for (let i = 0; i < count.length; i++) {
    if (count[i] % 2 === 0) {
      calc += left + i;
    } else {
      calc -= left + i;
    }
  }

  answer = calc;
  return answer;
}
