function solution(s) {
  var answer = true;

  if (s.length === 4 || s.length === 6) {
    for (let i = 0; i < s.length; i++) {
      const t = parseInt(s[i]);
      if (!t) {
        if (t === 0) {
          continue;
        }
        answer = false;
        break;
      }
    }
  } else {
    answer = false;
  }

  return answer;
}
