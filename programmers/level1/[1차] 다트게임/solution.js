function solution(dartResult) {
  var answer = 0;
  const score = [];
  let t = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (parseInt(dartResult[i]) || parseInt(dartResult[i]) === 0) {
      if (parseInt(dartResult[i + 1]) === 0) {
        t = 10;
        if (dartResult[i + 2] === "S") {
          score.push(t);
        } else if (dartResult[i + 2] === "D") {
          score.push(t ** 2);
        } else if (dartResult[i + 2] === "T") {
          score.push(t ** 3);
        }
      } else {
        t = parseInt(dartResult[i]);
        if (dartResult[i + 1] === "S") {
          score.push(t);
        } else if (dartResult[i + 1] === "D") {
          score.push(t ** 2);
        } else if (dartResult[i + 1] === "T") {
          score.push(t ** 3);
        }
      }
    }
  }

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] === "*") {
      if (i === 2) {
        score[0] = score[0] * 2;
      } else if (i === 4 || i === 5) {
        score[0] = score[0] * 2;
        score[1] = score[1] * 2;
      } else {
        score[1] = score[1] * 2;
        score[2] = score[2] * 2;
      }
    }
    if (dartResult[i] === "#") {
      if (i === 2) {
        score[0] = score[0] * -1;
      } else if (i === 4 || i === 5) {
        score[1] = score[1] * -1;
      } else {
        score[2] = score[2] * -1;
      }
    }
  }
  for (let i = 0; i < score.length; i++) {
    answer += score[i];
  }

  return answer;
}
