function solution(array, commands) {
  var answer = [];
  for (let a of commands) {
    let i = a[0];
    let j = a[1];
    let k = a[2];
    let temp = array.slice(i - 1, j);
    temp = temp.sort((a, b) => a - b); //문자열을 sort함 javascript는
    answer.push(temp[k - 1]);
  }
  return answer;
}
