function solution(n) {
  var answer = 0;
  let num = n.toString().split("");
  for (let i = 0; i < num.length - 1; i++) {
    for (let j = 0; j < num.length - 1; j++) {
      if (num[j] < num[j + 1]) {
        const temp = num[j + 1];
        num[j + 1] = num[j];
        num[j] = temp;
      }
    }
  }
  answer = parseInt(num.join(""));
  return answer;
}
