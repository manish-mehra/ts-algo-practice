import { Tree, TreeNode, printBinaryTree } from "./"


function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = []
  const q: TreeNode[] = []

  if (root) {
      q.push(root)
  }

  while (q.length > 0) {
      const val: number[] = []

      const size = q.length
      for (let i = 0; i < size; i++) {
          const node = q.shift()!
          val.push(node.val)

          if (node.left) {
              q.push(node.left)
          }
          if (node.right) {
              q.push(node.right)
          }
      }

      res.push(val)
  }

  return res
}
export {}