function findTheDifference(s: string, t: string): string {

  // create an array of alphabets
  const hashArr = Array(26).fill(0)

  // add
  for(let i = 0; i < t.length; i++){
    hashArr[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
  }
  
  // minus
  for(let i = 0; i < s.length; i++){
    hashArr[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]--
  }

  // check if all are zero
  for(let i = 0; i < hashArr.length; i++){
    if(hashArr[i] !== 0){
      let charCode = 'a'.charCodeAt(0) + i
      return String.fromCharCode(charCode)
    }
  }

  return ""
}
