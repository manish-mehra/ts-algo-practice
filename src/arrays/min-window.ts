
// unsolved 
export function minWindow(s: string, t: string): string {
  const hash: {[key: string]: number} = {}
  let iN:number = 0

  for(let i = 0; i < t.length; i++){
    if(hash[t[i]]){
      hash[t[i]]++
    } else {
      hash[t[i]] = 1
      iN++
    }
  }

  let l:number | null = null
  let max_str = ""


  for(let i = 0; i < s.length; i++){

    console.log(hash, s[i])
    if(hash[s[i]]){
      if(l == null) {
        l = i
      }
      hash[s[i]]--
      iN--
    }

    if(iN === 0 && l !== null){
      // update the return substring
      if(i - l + 1  > max_str.length){
        max_str = s.substring(l, i + 1)
      }
      console.log(max_str, 'l: ', l)

      // shift until the last element
      let temp_i: number = l ? (l + 1) : 1
      let flag = true
      while(flag){
          if(hash.hasOwnProperty(s[temp_i])){
          flag = false
          l = temp_i
          hash[s[l]]++
          iN++
          break
          }
          temp_i++
      }

    }
  }

  return "last: " + max_str
}

const test1 = "ADOBECODEBANC", t = "ABC"
console.log(minWindow(test1, t))