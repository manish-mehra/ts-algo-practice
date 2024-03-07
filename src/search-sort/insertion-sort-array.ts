
// store the current key and index
// loop: compare the values backward
// swap the values, if current is smaller than the previous

function insertionSort(arr:number[]){

  for(let i = 1; i < arr.length; i++){
      let j = i
      while(arr[j] < arr[j - 1]){
          let temp = arr[j - 1]
          arr[j-1] =  arr[j]
          arr[j] = temp
         j--
      }
  }

  return arr
}
const test1 = [-1,5,3,4,0]
console.log(insertionSort(test1))

export {}