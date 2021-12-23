function solution(price, money, count) {
  var answer = -1;
  let balance = money;
  for (let i = 1; i <= count; i++) {
    balance -= i * price;
  }
  if (balance < 0) {
    answer *= balance;
  } else {
    answer = 0;
  }

  return answer;
}
