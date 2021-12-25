function solution(N, stages) {
  var answer = [];
  const failureRate = {};
  let user = stages.length;

  for (let i = 0; i < N; i++) {
    let fail = 0;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] === i + 1) {
        fail++;
      }
    }
    failureRate[i + 1] = fail / user;
    user -= fail;
  }

  let sortobj = [];
  for (let number in failureRate) {
    sortobj.push([number, failureRate[number]]);
  }
  sortobj.sort(function (a, b) {
    return b[1] - a[1];
  });

  for (let i = 0; i < sortobj.length; i++) {
    answer.push(+sortobj[i][0]);
  }
  return answer;
}
