function solution(arr1, arr2) {
  var answer = [[]];
  let t = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      t.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(t);
    t = [];
  }
  return answer;
}
