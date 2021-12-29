function solution(board, moves) {
  var answer = 0;
  const basket = [];
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        basket.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        if (basket.length > 1) {
          if (basket[basket.length - 1] === basket[basket.length - 2]) {
            answer += 2;
            basket.pop();
            basket.pop();
          }
        }
        break;
      }
    }
  }
  return answer;
}
