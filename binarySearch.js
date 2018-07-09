//이진탐색 (Binary Search) Algorithm
//문제
//색인이 붙어있지 않은 영어 사전이 리스트(혹은 array) 로 주어져 있다고 가정하고
// 주어진 단어를 가장 빨리 찾아낼 수 있는 프로그램을 작성하라.
//단, 사전안의 단어는 n 개라고 가정하고, 테스트 데이터 작성의 편의를 위해 단어 대신 1~n 의 숫자로 대신한다.
//
//이진탐색 알고리즘에서 최대 탐색 횟수는 약  log_2(n) 이라고 알려져 있다. 위 문제에서 최대 탐색 횟수는 얼마인가 ?
//
// 알고리즘

// 1. 중간 위치(n/2 번째)의 단어를 먼처 찾고 주어진 단어와 같은지 비교한다.
//
// 2. 찾은 단어가 주어진 단어보다 크면 n/2 보다 큰 쪽은 버리고 작은 쪽 절반 (0 ~ n/2-1 번)을 대상으로
//    다시 중간 위치 (n/2/2 번째) 단어를 찾아서 크기를 비교하는 작업을 주어진 단어를 찾을 때까지 반복한다.
//
// 3. 중간위치(n/2 번째) 단어가 주어진 단어보다 작으면 큰쪽 절반 (n/2+1 ~ n 번)을 대상으로 같은 작업을 반복한다.
//
//   4. 최대탐색횟수를 구하기 위해 1 ~ n 까지 숫자에 차례로 위 알고리즘을 적용하여 가장 큰 값을 구한다.

let wordList = [];
n = 1000;
for (let i = 0; i < n; i++){
  wordList[i] = i + 1
}

function findword(word){
  let start = 0;
  let end = wordList.length;
  let words = wordList.slice(start, end);
  let search_count = 0;

  while (start < end){
    search_count += 1;
    let middle = Math.floor(words.length / 2);
    if (words[middle] === word) {
      return search_count
    } else if (words[middle] > word) {
      start = 0;
      end = middle;
    } else {
      start = middle + 1;
      end = wordList.length;
    }
    words = words.slice(start, end);
  }
}

console.log(findword(89));

let max_count = 0;
for (let i = 1; i <= n; i++){
  let word = 1
  count = findword(word);
  if (count > max_count){
    max_count = count;
  }
}

console.log(max_count);
