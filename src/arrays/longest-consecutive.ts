function longestConsecutive(nums: number[]): number {

  const number = new Set(nums)
  let longest = 0

  for(const n of nums){
    if(!number.has(n-1)){
      let length = 0
      while(number.has(n + length)){
        length += 1
      }
      longest = Math.max(length, longest)
    }
  }

  return longest
}

const test1 = [100,4,200,1,3,2] // 4
const test2 = [0,3,7,2,5,8,4,6,0,1] // 9

const ans = longestConsecutive(test2)
console.log('asnwer', ans)

export {}