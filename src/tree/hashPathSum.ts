import { TreeNode } from "."

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {  
  if(root == null) return false
  if(root.left === null && root.right === null) return targetSum - root.val == 0
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
}