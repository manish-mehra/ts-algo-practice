
export function moveZeroes(nums: number[]): void {
  let left = 0
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      if (left !== right) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
      }
      left++
    }
  }
};
