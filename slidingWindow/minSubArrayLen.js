//positive integer 로 구성된 array 와 positive integer 하나를 입력으로 받아서
//첫번째 array 의 연속된 숫자의 합이 두번째 parameter integer 보다 같거나 큰
//연속된 숫자 중 가장 짧은 길이를 반환한다. 없으면 0 을 반환한다.
//([2,3,1,2,4,3], 7) -> 2 ([4,3] 이 7 과 같음)
//([2,1,6,5,4], 9) -> 2 ([6,5], [5,4])
//([3,1,7,11,9,8,21,62,33,19], 52) -> 1([62])
//([1,4,16,22,5,7,8,9,10], 55) -> 5
//
function minSubArrayLen(arr, n){
  gteLen = [];
  for (let i = 0; i < arr.length; i++){          // window start position
    for (let j = 1; j <= arr.length - i; j++){   // window size 증가
      subarray = arr.slice(i, i+j);
      sum = subarray.reduce((a, b) => a + b, 0);
      if (sum >= n){
        gteLen.push(j);                          // 조건에 맞는 window size
      }
    }
  }
  if (gteLen.length === 0){
    return 0;
  } else {
    return Math.min(...gteLen);                  //ES6 array destructuring
  }
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7));
console.log(minSubArrayLen([2,1,6,5,4], 9));
console.log(minSubArrayLen([3,1,7,11,9,8,21,62,33,19], 52));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95));
