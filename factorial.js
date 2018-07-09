// Factorial 함수 작성
//문제
//factorial 을 계산하는 함수를 작성하라.
// n! = n * (n-1) * (n-2) *...* 3 * 2 * 1
//
//알고리즘 1
//1 ~ n 까지를 순차적으로 곱한다.
//
//알고리즘 2
//재귀함수를 이용한다.

let n = 10;
let total = 1;
for (let i = 1; i <= 10; i++){
  total *= i;
}
console.log(total)

function factorial(n){
  if (n === 1) return 1;
  else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(10));
