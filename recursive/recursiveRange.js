//integer 를 입력 받아 0 부터 그 숫자까지의 합을 반환한다.
//recursiveRange(10) --> 55
function recursiveRange(n){
  if (n === 0) return 0;
  return n + recursiveRange(n-1);
}

console.log(recursiveRange(10));
console.log(recursiveRange(100));
console.log(recursiveRange(1));
