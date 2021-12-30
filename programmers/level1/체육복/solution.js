function solution(n, lost, reserve) {
  var answer = 0;
  let have = new Array(n).fill(1);

  for (let i = 0; i < lost.length; i++) {
    have[lost[i] - 1] -= 1;
  }

  for (let i = 0; i < reserve.length; i++) {
    have[reserve[i] - 1] += 1;
  }

  for (let i = 0; i < have.length; i++) {
    if (have[i] === 0) {
      if (have[i - 1] === 2) {
        have[i] += 1;
        have[i - 1] -= 1;
      } else if (have[i + 1] === 2) {
        have[i] += 1;
        have[i + 1] -= 1;
      }
    }

    if (have[i] > 0) {
      answer++;
    }
  }

  return answer;
}
