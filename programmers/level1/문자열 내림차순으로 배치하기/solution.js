function solution(s) {
  var answer = "";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    arr.push(alphabet.indexOf(s[i]));
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        const t = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = t;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    answer += alphabet[arr[i]];
  }

  return answer;
}
