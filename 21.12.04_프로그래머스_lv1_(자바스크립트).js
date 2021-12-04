//코딩테스트 연습 >> 위클리 챌린지 >> 최소직사각형

function solution(sizes) {
  let answer = 0;

  sizes.sort((a, b) => b[0] - a[0]);
  let size0 = [...sizes];

  sizes.sort((a, b) => b[1] - a[1]);
  let size1 = [...sizes];

  let look = 'size0';
  let maxOfmax = 0;
  let maxOfother = 0;
  if (size0[0][0] > size1[0][1]) {
    look = 'size0';
    maxOfmax = size0[0][0];
    maxOfother = size0[0][1];
  } else {
    look = 'size1';
    maxOfmax = size1[0][1];
    maxOfother = size1[0][0];
  }

  let minn = 0;

  if (look === 'size0') {
    for (let i of size0) {
      if (i[0] !== maxOfmax) {
        minn = Math.min(i[0], i[1]);
        if (minn >= maxOfother) {
          maxOfother = minn;
        }
      }
    }
  }
  if (look === 'size1') {
    for (let i of size1) {
      if (i[1] !== maxOfmax) {
        minn = Math.min(i[0], i[1]);
        if (minn >= maxOfother) {
          maxOfother = minn;
        }
      }
    }
  }
  answer = maxOfmax * maxOfother;
  return answer;
}

solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
  [110, 20],
  [30, 100],
]);
solution([
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
]);
solution([
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
]);
