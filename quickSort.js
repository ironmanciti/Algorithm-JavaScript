/*
# Quick Sort

### 문제
1~100 까지의 숫자가 무작위로 섞여있는 list 를 퀵소트 알고리즘을 이용하여
순서대로 정렬하라.

* 알고리즘
첫번째 list 값을 기준으로 그 보다 작은 sub-list 와 그 보다 큰 sub-list 로
나누고 각 sub-list 를 남은 원소 갯수가 0 이나 1 이 될 때까지 재귀적으로
나누어 간다. 더 이상 나눌 수 없으면 최종 sub-list 를 return 하고
상위 list 에 merge 하여 전체 list 를 연결한다.

*/
let random_list = []
for (var i = 0; i < 50; i++) {
  random_list[i] = Math.floor(Math.random() * 50) + 1;
}

function qsort(qlist){
  let lower = [];
  let higher = [];
  let sorted_list = [];

  if (qlist.length < 1){
    return;
  }

  let center = qlist[0];

  for (var i = 1; i < qlist.length; i++) {
    if (qlist[i] <= center){
      lower.push(qlist[i]);
    } else {
      higher.push(qlist[i]);
    }
  }

  lower = qsort(lower);
  if (lower != null) {
    sorted_list = sorted_list.concat(lower);
  }
  sorted_list.push(center);
  higher = qsort(higher)
  if (higher != null) {
    sorted_list = sorted_list.concat(higher);
  }
  return sorted_list;
}

console.log(qsort(random_list));
