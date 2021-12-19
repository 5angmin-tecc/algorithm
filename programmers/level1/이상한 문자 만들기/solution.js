function solution(s) {
  var answer = "";
  let strarr = s.split("");
  let index = 0;

  for (let i = 0; i < strarr.length; i++) {
    if (strarr[i] === " ") {
      index = -1;
    }

    if (index % 2 === 0) {
      answer += strarr[i].toUpperCase();
    } else {
      answer += strarr[i].toLowerCase();
    }

    index++;
  }

  return answer;
}
