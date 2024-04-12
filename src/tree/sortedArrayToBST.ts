import { TreeNode, printBinaryTree } from "./"


function sortedArrayToBST(nums: number[]): TreeNode | null {
  // Base case: if array is empty, return null
  if (nums.length === 0) {
      return null
  }

  const mid = Math.floor(nums.length / 2)
  const root = new TreeNode(nums[mid])
  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid + 1))

  return root
}

// Example usage:
const sortedArray = [-10, -3, 0, 5, 9]
const bstRoot = sortedArrayToBST(sortedArray)
console.log(bstRoot)
printBinaryTree(bstRoot)

export {}