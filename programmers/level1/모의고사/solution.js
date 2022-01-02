function solution(answers) {
  var answer = [];
  const person = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let max = 0;

  for (let i = 0; i < person.length; i++) {
    let count = 0;
    for (let j = 0; j < answers.length; j++) {
      if (person[i][j % person[i].length] === answers[j]) {
        count++;
      }
    }
    if (max < count) {
      max = count;
      answer.length = 0;
      answer.push(i + 1);
    } else if (max === count) {
      answer.push(i + 1);
    }
  }
  return answer;
}
