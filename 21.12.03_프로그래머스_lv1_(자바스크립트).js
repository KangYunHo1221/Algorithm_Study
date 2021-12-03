//코딩테스트 연습 >> 월간 코드 챌린지 시즌1 >> 두개 뽑아서 더하기

function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  const answerSet = new Set(answer);
  answer = [...answerSet];
  answer.sort((a, b) => a - b);
  return answer;
}
