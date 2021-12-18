function solution(arr) {
  var answer = [];
  let min = arr[0];
  if (arr.length === 1) {
    return (answer = [-1]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  answer = arr.filter((e) => e !== min);

  return answer;
}
