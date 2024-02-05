
class Solution {

  Encode(list: string[]): string{ 
    let encoded = ''
    for(let i = 0; i < list.length; i++) {
      const charCount = (list[i]).length
      encoded += `${charCount}#${list[i]}`
    }
    return encoded
  }

  Decode(str: string){
    let curr = 0
    let decodedArr = []

    while(curr < str.length){
      let j = curr
      
      while(str[j] !== "#") {
        j++
      }

      const len = parseInt(str.slice(curr, j), 10)
      if(!isNaN(len)) {
        decodedArr.push(str.substring(j+1, j + 1 + len))
        curr = j + 1 + len
      } else {
        curr++
      }

    }
    return decodedArr

  }

}

const test1 = ['i', 'love', 'manish']
const test2 = ["lint","code","love","you"]
const test3 = ["we", "say", "#", "yes"]
const sol = new Solution()
const encoded = sol.Encode(test3)
const decoded = sol.Decode(encoded)
console.log(decoded)