function solution(nums) {
  var answer = 0;
  const digit = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let h = j + 1; h < nums.length; h++) {
        digit.push(nums[i] + nums[j] + nums[h]);
      }
    }
  }

  for (let i = 0; i < digit.length; i++) {
    if (digit[i] % 2 === 0) continue;
    for (let j = 3; j <= digit[i]; j++) {
      if (digit[i] % j === 0) {
        if (j === digit[i]) {
          answer++;
        }
        break;
      }
    }
  }
  return answer;
}
