
function BinarySearch(arr: number[], num: number):number[]{

  let left = 0, right = arr.length - 1

  while(left <= right){
    let mid = Math.floor((left + right)/2)

    if(arr[mid] === num){
      return [arr[mid], mid] // number, index
    }

    if(arr[mid] > num){
      right = mid - 1
    } else{
      left = mid + 1
    }
  }

  return [-1, -1]
}

const test1 = [1, 2, 3, 4, 5, 6, 7]

console.log(BinarySearch(test1, 3))

export {}