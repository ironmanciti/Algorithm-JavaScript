//Multiple Pointer pattern
//pre-sort 되어 있는 integer 의 array 와 target average 를 받아서 두 숫자의 조합이
//average 가 되는 숫자 조합을 return 한다. 하나 이상의 pair 가 있을 수 있다.
//time complexity 는 O(n) 으로 작성한다.
//solution - Multiple Pointers algorithm : O(n)
//pre-sort 되어 있으므로 가장 작은 수와 큰 수를 더하여 평균이 target 보다 작으면
//작은 수를 키워주고, 평균이 target 보다 크면 큰 수를 줄여 주고
//같으면 두 pointer 를 모두 중앙쪽으로 이동 시킨다.
//
function averagePair(arr, target){
  let i = 0;
  let j = arr.length - 1;
  const pairs = [];
  while(i < j){
    if ((arr[i] + arr[j])/2 == target){
      pairs.push([arr[i], arr[j]]);
      i++
      j--
    } else {
      if ((arr[i] + arr[j])/2 < target)  i++;
      else j--;
    }
  }
  return pairs;
}

console.log(averagePair([-3, -2, -1, 0, 1, 2, 4, 5, 6, 7, 8, 9], 4))
