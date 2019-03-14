//string 으로 구성된 array 를 입력 받아 각 string 의 첫번째 character 를 대문자로
//바꾼다.
//capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
//
function capitalizeFirst1(arr){    //non-recursive version
  let capArr = []
  for (let str of arr){
    [a, b] = [str[0], str.slice(1, str.length)];
    capArr.push(a.toUpperCase() + b);
  }
  return capArr;
}

//recursive version
function capitalizeFirst2(arr){
  let newArr = [];
  if (arr.length == 0) {
    return newArr;
  }
  newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));
  newArr = newArr.concat(capitalizeFirst2(arr.slice(1)));
  return newArr;
}

console.log(capitalizeFirst1(['car','taco','banana']));
console.log(capitalizeFirst2(['car','taco','banana']));
