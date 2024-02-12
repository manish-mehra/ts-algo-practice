function maxArea(height: number[]): number {
  const len  = height.length
  let p1 = 0
  let p2 = len - 1
  let max_area = 0

  while(p1 < p2){
    let distance = p2 - p1
    let curr_area = Math.min(height[p1], height[p2]) * distance
    
    if(curr_area > max_area){
      max_area = curr_area
    }

    if(height[p2] > height[p1]){
      p1++
    } else{
      p2--
    }
  }

  return max_area
}

const test1 = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(test1))
export {}