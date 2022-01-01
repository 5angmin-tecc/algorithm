function solution(lottos, win_nums) {
  var answer = [];
  let low = 0;
  let high = 0;
  const rank = [6, 6, 5, 4, 3, 2, 1];

  lottos.sort((a, b) => b - a);
  for (let i = 0; i < lottos.length; i++) {
    if (~win_nums.indexOf(lottos[i])) {
      low++;
    }
    if (lottos[i] === 0) {
      high++;
    }
  }

  if (low === 0 && high !== 0) {
    answer.push(rank[low] - high + 1);
    answer.push(rank[low]);
  } else {
    answer.push(rank[low] - high);
    answer.push(rank[low]);
  }
  return answer;
}
