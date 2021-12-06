//코딩테스트 연습 >> 월간 코드 챌린지 시즌3 >> 나머지가 1이 되는 수 찾기

function solution(n) {
  for (let i = 2; i < n / 2; i++) {
    if (Number.isInteger((n - 1) / i)) {
      return i;
    }
  }
  return n - 1;
}

console.log(solution(10));
