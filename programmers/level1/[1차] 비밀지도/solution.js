function solution(n, arr1, arr2) {
  var answer = [];
  let binary1 = "";
  let binary2 = "";

  for (let i = 0; i < arr1.length; i++) {
    let temp = arr1[i];
    for (let j = n - 1; j >= 0; j--) {
      if (2 ** j <= temp) {
        binary1 += "1";
        temp -= 2 ** j;
      } else {
        binary1 += "0";
      }
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    let temp = arr2[i];
    for (let j = n - 1; j >= 0; j--) {
      if (2 ** j <= temp) {
        binary2 += "1";
        temp -= 2 ** j;
      } else {
        binary2 += "0";
      }
    }
  }

  for (let i = 0; i < n; i++) {
    let temp = "";
    for (let j = 0; j < n; j++) {
      if (binary1[i * n + j] === "1" || binary2[i * n + j] === "1") {
        temp += "#";
      } else {
        temp += " ";
      }
    }
    answer.push(temp);
  }

  return answer;
}
