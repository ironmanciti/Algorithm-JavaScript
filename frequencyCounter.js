//2 개 array 의 frequency 를 비교한다.
//예, [1, 2, 3, 2], [1, 4, 9, 4]
//첫번째 array 와 두번째 array 의 length 는 same
// 두번째 array 의 element 는 첫번째 array element 의 제곱이어야 한다.
// 서로 match 되는 element 의 frequency 가 같은지 비교
//1. brure-force algorithm O(n^2)
function brute(arr1, arr2){
  let match;
  for (let i = 0; i < arr1.length; i++){
    for (let j = 0; j < arr2.length; j++){
      match = false;
      if (arr1[i]**2 == arr2[j]){
        arr2.splice(j,1);
        match = true;
        break;
      }
    }
    if (!match){
      console.log("Arrays not matched");
      return;
    }
  }
  console.log("Arrays matchs");
}

//2. hash table 이용 (O(n))
function hash(arr1, arr2){
  arr1_hash = {}
  arr2_hash = {}
  for (let ele of arr1){
    arr1_hash[ele ** 2] = (arr1_hash[ele ** 2] || 0) + 1;
  }
  for (let ele of arr2){
    arr2_hash[ele] = (arr2_hash[ele] || 0) + 1;
  }
  for (let ele in arr1_hash){
    if (arr1_hash[ele] != arr2_hash[ele]){
      console.log('Arrays not matched');
      return;
    }
  }
  console.log('Arrays matched');
  return;
}

//brute([1,2,3,2,5,6], [1,4,9,4,25,25])
hash([1,2,3,2,5,6], [1,4,9,4,25, 25])
