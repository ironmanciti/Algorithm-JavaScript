//Frequncy Counter pattern
//2 개 string 을 입력 받아 두글자 조합의 frequency 가 같은지 비교한다.
//예, (182, 281): true, (34, 14): false, (3589578, 5879385): true (22, 222): false
//time complexity (O(n)) 로 작성한다.
//(해답) 조합의 frequency 가 같으려면 두 string 의 길이가 같고
//글자들의 frequency 가 같아야 한다.
function sameFrequency(str1, str2){
  if (str1.length != str2.length){
    return false;
  }
  str1_hash = {}
  str2_hash = {}
  for (let ele of str1){
    str1_hash[ele] = (str1_hash[ele] || 0) + 1;
  }
  for (let ele of str2){
    str2_hash[ele] = (str2_hash[ele] || 0) + 1;
  }
  for (let ele in str1_hash){
    if (str1_hash[ele] != str2_hash[ele]){
      console.log('Arrays not matched');
      return false;
    }
  }
  console.log('Arrays matched');
  return true;
}

console.log(sameFrequency('3589578', '5879385'));
