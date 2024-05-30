import { TreeNode } from "."

export function sumOfLeftLeaves(root: TreeNode | null): number {
  function dfs(root: TreeNode | null, type: string){
      if(!root) return 0
      if(!root.left && !root.right){
          if(type === 'left'){
             sum += root.val
          }
      }
      dfs(root.left,  'left')
      dfs(root.right, 'right')
  }
  let sum = 0
  dfs(root, '')
  return sum
}