//코딩테스트 연습 >> 월간 코드 챌린지 시즌2 >> 약수의 개수와 덧셈

function solution(left, right) {
  let answer = 0;

  function isSquared(num) {
    if (Number.isInteger(Math.sqrt(num))) {
      return true;
    }
    return false;
  }

  for (let i = left; i <= right; i++) {
    if (isSquared(i)) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

console.log(solution(13, 17));
