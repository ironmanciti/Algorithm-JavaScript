//String 을 입력 받아 character (0-9, a-Z) 의 갯수별로 count 하여 출력
//
function charCount(str){
  let cnt = {};
  for (let s of str){
    if (/[0-9a-zA-Z]/.test(s)){    //regex 로 범위 check
      ch = s.toLowerCase();
      cnt[ch] = cnt[ch]++ || 1;    // ternary operator
    }
  }
  return cnt;
}

console.log(charCount("Hello... world !"))
