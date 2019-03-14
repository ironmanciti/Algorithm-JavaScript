//숫자 array 를 입력 받아 array 전체의 product 을 return
//productOfArray([1,2,3,10]) --> 60
function productOfArray(arr){
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3,10]));
