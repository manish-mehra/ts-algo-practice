

function FistANDLastOccur(arr: number[], x: number): number[]{

  // binary search
  // if found:
  // find the subset

  let left = 0, right = arr.length - 1
  let output = []

  while(left <= right){
    
    let mid = Math.floor((left + right)/2)

    if(arr[mid] === x){
      let l = mid, r = mid
      // find the subset
      if(arr[mid + 1] === x){
        while(arr[r + 1] === x){
          r++
        }
      }

      if(arr[mid - 1] === x){
        while(arr[l - 1] === x){
          l--
        }
      }
      output.push(l)
      output.push(r)
      break
      }
    if(arr[mid] > x){
      right = mid - 1
    } else{
      left = mid + 1
    }
  }
  return output
}

const test1 = [1, 3, 5, 5, 5, 5, 67, 123, 125]

console.log(FistANDLastOccur(test1, 5))
export {}