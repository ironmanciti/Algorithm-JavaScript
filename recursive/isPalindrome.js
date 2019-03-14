//입력받은 string 이 palindrome (앞으로 읽어도 뒤로 읽어도 같은 것)이면 true
//아니면 false 를 반환한다.
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
//General pattern of recusive function
//solution 1 : reverse 내부함수 이용
//solution 2 : palindrome 의 처음과 끝이 같아야 함 (udemy solution)
function isPalindrome(str){

  function reverse(str){
    if (str.length === 1) return str;
    return str.slice(-1) + reverse(str.slice(0, -1))
  }

  if (str === reverse(str)) return true;
  else return false;
}

function isPalindrome2(str){
  if (str.length === 1) return true;
  if (str.length === 2){
    if (str[0] === str[1]) return true;
    else return false;
  }
  if (str[0] === str.slice(-1)) return isPalindrome2(str.slice(1,-1));
  else return false;
}

console.log(isPalindrome2('amanaplanacanalpanama'));
console.log(isPalindrome2('amanaplanacanalpandemonium'));
