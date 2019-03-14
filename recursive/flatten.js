// array of array 를 입력 받아 flatten 된 new array 를 반환한다.
// 3) pure recursion pattern
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
//
function flatten(arr){
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] instanceof Array) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5] ]));
