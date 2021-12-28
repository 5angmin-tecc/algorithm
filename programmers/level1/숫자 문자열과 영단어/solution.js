function solution(s) {
  var answer = 0;
  let str = s.concat();
  const digit = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < digit.length; i++) {
    while (~str.indexOf(digit[i])) {
      str = str.replace(digit[i], i);
    }
  }
  answer = parseInt(str);
  return answer;
}
