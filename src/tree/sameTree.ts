import { TreeNode } from "./index"

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if(p === null && q === null) return true
  if ((p === null && q !== null) || (p !== null && q === null)) return false
  let leftSame = isSameTree(p!.left, q!.left);
  let rightSame = isSameTree(p!.right, q!.right);
  if (p!.val === q!.val && leftSame && rightSame) {
      return true;
  }
  return false
}