import { TreeNode } from "."
import { isSameTree } from "./sameTree"

export function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {

  if(subRoot === null) return true
  if(root === null) return false

  if(isSameTree(root, subRoot)){
    return true
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}