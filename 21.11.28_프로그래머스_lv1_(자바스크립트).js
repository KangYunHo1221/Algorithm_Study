//예산

function solution(d, budget) {
  var answer = 0;
  const department = d.sort((a, b) => a - b);
  let sum = 0;

  for (var i of department) {
    if (sum + i <= budget) {
      sum += i;
      answer += 1;
    } else {
      break;
    }
  }
  return answer;
}
