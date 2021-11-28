//여벌의 체육복

function solution(n, lost, reserve) {
  var answer = 0;
  let realLost = lost.filter(element => !reserve.includes(element)).sort();
  let realReserve = reserve.filter(element => !lost.includes(element)).sort();

  for (const i of realReserve) {
    for (var j = i - 1; j <= i + 1; j++) {
      if (realLost.includes(j)) {
        realLost = realLost.filter(x => x !== j);
        break;
      }
    }
  }
  answer = n - realLost.length;
  return answer;
}

/*console.log(solution(11, [3, 4, 5], [1]));
console.log(solution(7, [1, 2, 3, 4], [2, 3, 6]));
console.log(solution(2, [2], [1, 2]));
console.log(solution(5, [1, 2, 3], [2, 3, 4]));
console.log(solution(5, [2, 3, 4], [1, 2, 3]));
console.log(solution(5, [3, 5], [2, 4]));
console.log(solution(5, [2, 4], [3, 5]));*/
console.log(solution(6, [6, 2, 4], [1, 5, 3]));
