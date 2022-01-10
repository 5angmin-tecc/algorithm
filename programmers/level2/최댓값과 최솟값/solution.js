function solution(s) {
  var answer = "";
  const nums = s.split(" ");
  let max = nums[0] / 1;
  let min = nums[0] / 1;

  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i] / 1) {
      max = nums[i] / 1;
    }
    if (min > nums[i] / 1) {
      min = nums[i] / 1;
    }
  }
  answer = `${min} ${max}`;
  return answer;
}
