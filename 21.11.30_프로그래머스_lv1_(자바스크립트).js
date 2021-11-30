//코딩테스트연습 >> 2021 dev-matching: 웹 백... >> 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
  var answer = [];
  lottos = lottos.sort((a, b) => a - b);
  let numZero = lottos.filter(element => element === 0).length;

  win_nums = win_nums.sort((a, b) => a - b);
  var count = 0;

  for (var i of lottos) {
    if (win_nums.includes(i)) {
      count += 1;
    }
  }
  var max_count = 0;
  var min_count = count;

  if (count + numZero <= 6) {
    max_count = count + numZero;
  } else {
    max_count = 6;
  }

  if (max_count >= 2) {
    answer.push(7 - max_count);
  } else {
    answer.push(6);
  }

  if (min_count >= 2) {
    answer.push(7 - min_count);
  } else {
    answer.push(6);
  }

  return answer;
}
