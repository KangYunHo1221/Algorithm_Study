//코딩테스트 연습 >> 연습문제 >> 2016년

function solution(a, b) {
  let answer = '';
  let today = new Date(2016, a - 1, b + 1);
  let day = today.getDay();

  const dayList = ['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'];
  answer = dayList[day];

  return answer;
}

console.log(solution(1, 2));
