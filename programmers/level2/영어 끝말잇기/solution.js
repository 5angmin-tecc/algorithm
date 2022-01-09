function solution(n, words) {
  var answer = [];
  const pre_words = [words[0]];
  for (let i = 1; i < words.length; i++) {
    if (words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
      if ((i + 1) % n === 0) {
        answer.push(((i + 1) % n) + n);
      } else {
        answer.push((i + 1) % n);
      }
      answer.push(Math.ceil((i + 1) / n));
      return answer;
    }
    if (!pre_words.includes(words[i])) {
      pre_words.push(words[i]);
    } else {
      if ((i + 1) % n === 0) {
        answer.push(((i + 1) % n) + n);
      } else {
        answer.push((i + 1) % n);
      }
      answer.push(Math.ceil((i + 1) / n));
      return answer;
    }
  }

  answer = [0, 0];
  return answer;
}
