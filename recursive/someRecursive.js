// array 와 callback 을 입력 받아 array 의 single element 를 callback 에 넘겨서
// true 를 반환받으면 true 를 반환하고 그렇지 않으면 false 반환
// 1) general pattern
// const isOdd = val => val % 2 !== 0;
// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
//
const isOdd = val => val % 2 !== 0;

function someRecursive(arr, callback){
  if (arr.length === 1) return callback(arr[0]);
  if (callback(arr[0])) return true;
  else return someRecursive(arr.slice(1), callback);
}

console.log(someRecursive([1,2,3,4], isOdd));
console.log(someRecursive([4,6,8,9], isOdd));
console.log(someRecursive([4,6,8], isOdd));
console.log(someRecursive([4,6,8], val => val > 10));
