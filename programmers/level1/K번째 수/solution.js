function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    const arr = [];
    for (let j = commands[i][0] - 1; j < commands[i][1]; j++) {
      arr.push(array[j]);
    }
    arr.sort(function (a, b) {
      return a - b;
    });
    answer.push(arr[commands[i][2] - 1]);
  }
  return answer;
}
