//pre-sort 된 입력 array 중 unique 한 character 의 갯수를 구한다.
//sequence data 의 중복제거 algorithm
//Solution 1 - i, j 두개의 pointer 를 이용하여 좌에서 우로 이동하며 compare
//i, j 번째가 같으면 j 만 증가 / 다르면 i = j, j++, unqiue_count++
//j 가 array length 보다 커지면 종료 : O(n)
//Solution 2 - ES6 의 Set() object type 을 이용
//
//Solution 1
function twoPinters(arr){
  let [i, j, unique_count] = [0, 1, 0];
  while(j <= arr.length){
    if (arr[i] == arr[j]){
      j++;
    } else {
      unique_count ++;
      i = j;
      j++;
    }
  }
  return unique_count;
}

function setES6(arr){
  unique_ch = new Set();
  for (let ch of arr){
    unique_ch.add(ch);
  }
  return unique_ch.size;
}

console.log(setES6([1,1,1,1,1,2]));

console.log(twoPinters([-1, 0, 1, 1, 2, 2, 3]));
