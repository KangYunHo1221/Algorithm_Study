//코딩테스트 연습 >> 월간 코드 챌린지 시즌1 >> 내적

function solution(a, b) {
  var answer = 0;

  for (var i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}
