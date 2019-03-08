//정수들이 저장된 nXn 행렬의 좌상단에서 우하단까지 이동한다.
//단, 오른쪽이나 아래쪽으로만 이동할 수 있다.
//방문한 칸에 있는 정수들이 최소화 되는 경로는 ?
//

function matrixPath(mat, memo, path, i, j){

    if (memo[i][j] != -1) {
      return memo[i][j];
    }

    if (i == 0 && j == 0){
      memo[i][i] = mat[0][0];
      path[0][0] = '-'
    }
    else if (j == 0){
      memo[i][j] = matrixPath(mat, memo, path, i-1, 0) + mat[i][0];
      path[i][j] = 'up';
    }
    else if (i == 0){
      memo[i][j] =  matrixPath(mat, memo, path, 0, j-1) + mat[0][j];
      path[i][j] = 'left';
    }
    else {
      memo[i][j] = Math.min(matrixPath(mat, memo, path, i-1, j),
                           matrixPath(mat, memo, path, i, j-1)) + mat[i][j];
      if (memo[i][j-1] < memo[i-1][j]){
        path[i][j] = 'left';
      } else {
        path[i][j] = 'up';
      }

    }
    return memo[i][j];
}

function trackPath(path, seq, i, j){
  if (i == 0 && j == 0){
    seq.push('00');
    return;
  }

  seq.push(i.toString() + j.toString());
  
  if (path[i][j] == 'up'){
    return trackPath(path, seq, i-1, j);
  } else {
    return trackPath(path, seq, i, j-1);
  }
}

const mat = [[6, 7, 12, 5], [5, 3, 11, 18], [7, 17, 3, 3], [8, 10, 14, 9]]

const memo = new Array(4)     //for memoization
for (let i = 0; i < memo.length; i++){
  memo[i] = new Array(4).fill(-1);
}

const path = new Array(4)     //for path tracking
for (let i = 0; i < path.length; i++){
  path[i] = new Array(4).fill(-1);
}

let distance = matrixPath(mat, memo, path, 3, 3); // mat.length - 1 로 parameter 준다
console.log(distance);
console.log(path);
const seq = []
trackPath(path, seq, 3, 3);
console.log(seq.reverse());
