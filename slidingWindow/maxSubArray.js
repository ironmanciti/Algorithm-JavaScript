//Sliding Window pattern 의 문제
//integer 로 구성된 array 와 window size 를 입력받아 window size 의 subarray 중
//sum 이 최대인 값 return
//
function maxSubArray(arr, n){
  max = -Infinity;
  for (let i = 0; i <= arr.length - n; i++){
    subarr = arr.slice(i, i+n);
    let sum = 0;
    for (let j = 0; j < subarr.length; j++){        //array sum
      sum += subarr[j];
    }
    if (max < sum){
      max = sum;
    }
  }
  return max;
}

function maxSubArray2(arr, n){
  max = -Infinity;
  for (let i = 0; i <= arr.length - n; i++){
    subarr = arr.slice(i, i+n);
    let sum = subarr.reduce((x, y) => x + y, 0);    //array sum using reduce
    if (max < sum){
      max = sum;
    }
  }
  return max;
}

console.log(maxSubArray2([1,2,5,2,8,1,5], 4))
console.log(maxSubArray2([4,2,1,6], 1))
