import { TreeNode } from "./index"

export function invertBinary(root: TreeNode | null){
  if(!root) return
  
  let temp = root.left
  root.left  = root.right
  root.right = temp
  
  invertBinary(root.left)
  invertBinary(root.right)
}