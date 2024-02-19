export class Stringbuilder {
 
  str: string[]

  constructor(length: number){
    this.str = new Array(length)
  }

  append(char: string){
    this.str.push(char)
    return this
  }

  toString(){
    return this.str.join('')
  }
}

export function compress(str: string){

  let length = countCompression(str)
  let newStr = new Stringbuilder(length)

  let currentCount = 0

  for(let i = 0; i < str.length; i++){
    currentCount++

    if(i + 1 >= str.length || str.charAt(i) !== str.charAt(i + 1)){
      let temp_str = `${str.charAt(i)}${currentCount}`
      newStr.append(temp_str)
      currentCount = 0
    }
  }
  return newStr.toString()
}

export function countCompression(str: String){

  let count = 0
  let currentCount = 0

  for(let i = 0; i < str.length; i++){
    currentCount++

    if(i + 1 >= str.length || str.charAt(i) !== str.charAt(i + 1)){
      let newStr = `${str.charAt(i)}${currentCount}`
      count += newStr.length
      currentCount = 0
    }
  }
  return count
}

const test1 = 'aabcccccaaa'
const test2 = 'abc'
console.log(compress(test1), countCompression(test1))


