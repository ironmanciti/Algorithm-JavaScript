//이항계수 (Binomial Coefficient)
//nCk = n! / ((n-k)! * k!) 은 factorial 숫자가 너무 커지면 연산 불가
//이항계수 공식을 사용하여 recursive programming 으로 전환
//nCk = (n-1)Ck + (n-1)C(k-1)
//
function binomialCoeff(n, k){
  if (n == k | k == 0){
    return 1;
  } else {
    return binomialCoeff(n-1, k) + binomialCoeff(n-1, k-1);
  }
}

console.log(binomialCoeff(52, 45));

//memoization 을 이용하여 이미 계산한 값은 table 에 저장
//Top-down 방식

function binomialCoeff_memo(n, k){
  const bn = new Array(n+1);   //array index 가 0 부터 시작하므로 편의상 + 1
  for (let i = 0; i < bn.length; i++){
    bn[i] = new Array(k+1).fill(-1);
  }

  function binomialCoeff(n, k){
    if (n == k | k == 0){
      return 1;
    } else if (bn[n][k] > -1){
      return bn[n][k];
    } else {
      bn[n][k] = binomialCoeff(n-1, k) + binomialCoeff(n-1, k-1);
      return bn[n][k];
    }
  }

  return binomialCoeff(n, k);
}

console.log(binomialCoeff_memo(52, 45));


//memoization
//bottom-up 방식 - 행을 증가시켜가며 열을 증가시킨다.

function binomialCoeff_btup(n, k){
  const bn = new Array(n+1);
  for (let i = 0; i < bn.length; i++){
    bn[i] = new Array(k+1).fill(0);
  }

  for (let i = 0; i <= n; i++){
    for (let j = 0; j <= k && j <= i; j++){
      if (n == k | j == 0){
        bn[i][j] = 1;
      } else {
        bn[i][j] = bn[i-1][j] + bn[i-1][j-1];
      }
    }
  }
  //console.log(bn);
  return bn[n][k];
}

console.log(binomialCoeff_btup(52, 45));








////////
