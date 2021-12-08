//코딩테스트 연습 >> 위클리 챌린지 시즌3 >> 부족한 금액 계산하기

function solution(price, money, count) {
  let answer = -1;
  let countSum = (count * (count + 1)) / 2;
  let totalPrice = countSum * price;
  answer = totalPrice - money;

  if (answer < 0) {
    answer = 0;
  }
  return answer;
}

console.log(solution(1, 1, 1));
