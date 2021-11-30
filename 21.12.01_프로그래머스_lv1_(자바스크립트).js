//코딩테스트 연습 >> 월간 코드 챌린지 시즌1 >> 3진법 뒤집기

function solution(n) {
  var answer = 0;
  var n = n;
  var answerList = [];

  while (n > 0) {
    var rest = n % 3;
    answerList.push(rest);
    n = (n - rest) / 3;
  }

  for (var i = 0; i < answerList.length; i++) {
    answer += 3 ** (answerList.length - i - 1) * answerList[i];
  }
  return answer;
}

solution(45);
