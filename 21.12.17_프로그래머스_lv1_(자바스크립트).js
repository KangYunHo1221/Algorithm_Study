//코딩테스트 연습 >> 연습문제 >> 가운데 글자 가져오기

function solution(s) {
  let answer = '';
  const wordLen = s.length;
  let start = 0;

  if (wordLen % 2 === 1) {
    start = parseInt(wordLen / 2);
    answer += s[start];
  } else {
    start = parseInt(wordLen / 2);
    answer += s[start - 1] + s[start];
  }

  return answer;
}

console.log(solution('abcde'));
console.log(solution('qwer'));
console.log(solution('a'));
console.log(solution('ab'));
