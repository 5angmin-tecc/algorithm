function solution(s, n) {
  var answer = "";
  for (let i = 0; i < s.length; i++) {
    let newchar = s.charCodeAt(i) + n;
    if (s[i] === " ") {
      answer += " ";
      continue;
    }
    // 대소문자
    if (
      "A".charCodeAt(0) <= s.charCodeAt(i) &&
      "Z".charCodeAt(0) >= s.charCodeAt(i)
    ) {
      if (newchar > "Z".charCodeAt(0)) {
        newchar -= "z".charCodeAt(0) - "a".charCodeAt(0) + 1;
      }
    }
    if (
      "a".charCodeAt(0) <= s.charCodeAt(i) &&
      "z".charCodeAt(0) >= s.charCodeAt(i)
    ) {
      if (newchar > "z".charCodeAt(0)) {
        newchar -= "z".charCodeAt(0) - "a".charCodeAt(0) + 1;
      }
    }
    answer += String.fromCharCode(newchar);
  }
  return answer;
}
