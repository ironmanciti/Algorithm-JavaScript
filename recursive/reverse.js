//string 을 입력 받아 역순으로된 string 을 반환
// reverse('awesome') // 'emosewa'
function reverse(str){
  if (str.length === 1) return str;
  return str.slice(-1) + reverse(str.slice(0,-1));
}

console.log(reverse('awesome'));
