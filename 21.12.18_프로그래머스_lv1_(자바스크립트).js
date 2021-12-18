//코딩테스트 연습 >> 연습문제 >> 하샤드 수

function solution(x) {
  let answer = true;
  let sum = 0;

  for (let i of String(x)) {
    sum += Number(i);
  }

  if (x % sum !== 0) {
    answer = false;
  }

  return answer;
}

solution(1003);
