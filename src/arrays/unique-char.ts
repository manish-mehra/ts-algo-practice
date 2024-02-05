
// CTCI 1.1 determine unique character. no additional DS

function isUniqueChars(str: string):boolean{

  if(str.length > 128) false
  
  let char_set: boolean[] = new Array(128).fill(false) 
  
  for(let i = 0; i < str.length; i++) {
    let val = str.charCodeAt(i)
    if(char_set[val]){
      return false
    }
    char_set[val] = true
  }
  return true
}

