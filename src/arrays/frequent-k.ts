/** 
Date: 1 Feb, 2024
Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

* */

function topKFrequent(nums: number[], k: number): number[] {
  // create hashtable to count the frequencies
const hashTable: Map<string, number> = new Map()

// count frequencies
for(let i = 0; i < nums.length; i++) {
  const current = nums[i].toString()
  if(hashTable.has(current)){
     const prev = hashTable.get(current)
     prev && hashTable.set(current, prev + 1)
  } else {
    hashTable.set(current, 1)
  }
}

// create an array based on the hashtable frequencies
const freqArray: number[][] =Array.apply(null, Array(nums.length + 1)).map(
      () => []
  )


// iterate over values(array list) of hashtable and put their keys in freq array
hashTable.forEach((value, key) => {
  const freqIndex = value - 1
  const prevItemsArray = freqArray[freqIndex]
  freqArray[freqIndex] = [...prevItemsArray, parseInt(key)] // // put 1(key) into index 1(0)
})

const ret:number[] = []
for(let i = freqArray.length; i > 0; i--) {
  for(let j = 0; j < freqArray[i - 1].length; j++) {
    if(ret.length < k) {
      ret.push(freqArray[i - 1][j])
    }
  }
}
return ret
}