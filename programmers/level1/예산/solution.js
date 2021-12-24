function solution(d, budget) {
  var answer = 0;
  d.sort(function (a, b) {
    if (a > b) return 1;
    else if (a === b) return 0;
    else return -1;
  });

  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum > budget) {
      answer = i;
      break;
    }
  }

  if (sum <= budget) {
    answer = d.length;
  }

  return answer;
}
