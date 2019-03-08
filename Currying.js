//Currying 은 여러개의 parameter 를 갖는 함수를 단일 parameter 를 갖는 함수들의
//연결로 바꾸는 것이다.
//ES6 에서는 arrow function 을 이용하여 간편하게 currying 을 구현할 수 있다.

const convertUnits = (toUnit, factor, offset=0) => (input) =>
      ((offset + input) * factor).toFixed(2).concat(toUnit);

const milesToKm = convertUnits('km', 1.60936, 0);
const poundsToKg = convertUnits('kg', 0.45460, 0);
const fareheitToCelcius = convertUnits('degrees C', 0.5556, -32);

console.log(milesToKm(10));
console.log(poundsToKg(2.5));
console.log(fareheitToCelcius(98));

const weightsInPounds = [5, 15.4, 9.8, 110];

const weightsInKg = weightsInPounds.map(poundsToKg);

console.log(weightsInKg);

//ES6 의 arrow 함수가 아닌 전통적 방법으로 coding 하면 currying 의 의미를 더 쉽게
//이해할 수 있다. 결국 closure 를 만드는 것이다.

const convertUnits_oldStyle = function(toUnit, factor, offset=0){
    return function(input) {
      return ((offset + input) * factor).toFixed(2).concat(toUnit);
    }
}

const milesToKm_old = convertUnits_oldStyle('km', 1.60936, 0);
const poundsToKg_old = convertUnits_oldStyle('kg', 0.45460, 0);
const fareheitToCelcius_old = convertUnits_oldStyle('degrees C', 0.5556, -32);

console.log(milesToKm_old(10));
console.log(poundsToKg_old(2.5));
console.log(fareheitToCelcius_old(98));
