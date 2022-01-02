function solution(numbers, hand) {
  var answer = "";
  let posLeft = 10;
  let posRight = 12;
  let result = "";

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i] === 0 ? 11 : numbers[i];
    let leftLength = 0;
    let rightLength = 0;

    if (num % 3 === 1) {
      posLeft = num;
      result += "L";
      continue;
    } else if (num % 3 === 0) {
      posRight = num;
      result += "R";
      continue;
    }

    if (posLeft % 3 === 1) {
      leftLength = Math.abs(num - (posLeft + 1)) / 3 + 1;
    }
    if (posRight % 3 === 0) {
      rightLength = Math.abs(num - (posRight - 1)) / 3 + 1;
    }

    if (posLeft % 3 === 2) {
      leftLength = Math.abs(num - posLeft) / 3;
    }
    if (posRight % 3 === 2) {
      rightLength = Math.abs(num - posRight) / 3;
    }

    if (leftLength === rightLength) {
      if (hand === "left") {
        posLeft = num;
        result += "L";
      } else if (hand === "right") {
        posRight = num;
        result += "R";
      }
    } else if (leftLength > rightLength) {
      posRight = num;
      result += "R";
    } else if (leftLength < rightLength) {
      posLeft = num;
      result += "L";
    }
  }
  answer = result;
  return answer;
}
