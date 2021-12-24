function solution(a, b) {
  var answer = "";
  const endDate = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let indexFromStartDate = 0;

  for (let i = 0; i < a - 1; i++) {
    indexFromStartDate += endDate[i];
  }
  indexFromStartDate += b;

  answer = week[(indexFromStartDate + 4) % 7];

  return answer;
}
