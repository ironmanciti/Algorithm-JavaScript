//variable number of arguments 를 받아서 arguments 중에 중복이 있는지 check 한다.

function areThereDuplicates(...args){
  if (args.length == new Set(args).size){
    return true;
  } else {
    return false;
  }
}

console.log(areThereDuplicates(1,2,3,4));
