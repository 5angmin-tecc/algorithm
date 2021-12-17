function solution(phone_number) {
  var answer = "";
  answer = phone_number.split("");
  for (let i = 0; i < answer.length - 4; i++) {
    answer[i] = "*";
  }
  answer = answer.join("");
  return answer;
}
