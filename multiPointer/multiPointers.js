//Multiple Pointer pattern
//pre-sort 되어 있는 array 혹은 string 에서 원하는 조건을 충족하는 첫번째 pair 를
//return 하는 algorithm 이다. 예를 들어 [-3, -2, 1, 0, 1, 2, 3, 4] 에서 합이 0 이
//되는 첫번째 pair 는 [-3, 3] 이다.
//
//solution 1 - brute-force algorithm : O(n^2)
function brutePointer(arr){
  for (let i = 0; i < arr.length; i++){
    for (let j = arr.length-1; j > i; j--){
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  console.log('no pair');
  return false;
}

//solution 2 - Multiple Pointers algorithm : O(n)
function multiPointer(arr){
  let i = 0;
  let j = arr.length - 1;
  while(i < j){
    if (arr[i] + arr[j] === 0){
      return [arr[i], arr[j]];
    } else {
      if (arr[i] + arr [j] < 0){
        i++;
      } else {
        j--;
      }
    }
  }
  console.log('no pair');
  return false;
}

console.log(multiPointer([-3, -2, -1, 0, 1, 2, 4]))

//console.log(brutePointer([-2, -1, 0, 1, 2, 4]))
