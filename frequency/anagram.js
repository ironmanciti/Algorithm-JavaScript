//Frequency Counter pattern
//어구전철 (문자의 순서 바꾸기) 
//두개의 array 를 입력 받아 두 array 내의 각 character 빈도가 같은지 비교
function anagram(str1, str2){
  let str1_cnt = {};
  let str2_cnt = {};
  if (str1.length != str2.length){
    return false;
  }
  for (let str of str1){
    str1_cnt[str] = (str1_cnt[str] || 0) + 1;
  }
  for (let str of str2){
    str2_cnt[str] = (str2_cnt[str] || 0) + 1;
  }
  for (let str of str1){
    if (str1_cnt[str] != str2_cnt[str]){
      return false;
    }
  }
  return true;
}

//string1 = "qwerty";
//string2 = "wqtyre1";
string1 = "낙동강go";
string2 = "g강동낙o";

console.log(anagram(string1, string2));
