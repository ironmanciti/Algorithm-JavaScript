//base 와 지수(exponent) 를 입력 받아 지수 제곱을 반화하는 함수 작성
//Math.pow() 와 같은 기능, power(2,2) -> 4, power(2,4) -> 16
//
function power(base, exponent){
  if (exponent === 0) return 1;
  return base * power(base, exponent-1);
};

console.log(power(2, 4));
