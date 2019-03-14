//non-Dynamic Programming
//
function fib(n){
  if (n == 1 | n == 2){
    return 1;
  } else {
    return fib(n-2) + fib(n-1);
  }
}

console.log(fib(35));

//Dynamic Programming
//Memoization memoization version
//Top down 으로 recursion 하지만 caching 에 의해 중복 계산 회피
const fn = {};
function fib_dp(n){
  if (n == 1 | n == 2){
    return 1;
  }
  else if (fn[n]){
    return fn[n];
  } else {
    fn[n] = fib_dp(n-2) + fib_dp(n-1);
    return fn[n];
  }
}

console.log(fib_dp(45));

//Dynamic Programming - bottom-up version
//
function fib_btup(n){
  const fn = {};
  fn[1] = fn[2] = 1;
  for (let i = 3; i <= n; i++){
    fn[i] = fn[i-2] + fn[i-1];
  }
  return fn[n];
}

console.log(fib_btup(45));










////////////////////////////
