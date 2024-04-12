// Definition for a binary tree node.
export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
}
}

// design a tree
/**
 1. tree definition ✅
 2. Insert✅
 3. Search ✅
 4. Traverse
   1. preorder✅
   2. inorder✅
   3. postorder✅
 5. delete
 6. height

 */
export class Tree{
root: TreeNode
constructor(root: TreeNode){
  this.root = root
}

insert(node: TreeNode | null, parent: TreeNode | null){   
  
  if(parent === null){
    parent = node
    return
  }
  // base cases
  if(node && node.val < parent.val && parent.left === null){
    parent.left = node
    return
  } else  if(node && node.val > parent.val && parent.right === null) {
    parent.right = node
    return 
  }
  // recursive cases
  if(node && node.val < parent.val) {
    parent.left  &&  this.insert(node, parent.left)
  } else if(node && node.val > parent.val){
    parent.right && this.insert(node, parent.right)
  }
}

search(value: number, current: TreeNode = this.root):boolean{
  // base case
  if(value === current.val){
    return true
  }
  // recursive case
  if(value < current.val && current.left){
    return this.search(value,current.left )
  } else if(current.right && value > current.val){
    return this.search(value, current.right)
  }
  return false
}
traversePreOrder(root: TreeNode | null = this.root):number[]{
  const result: number[] = []
  function traverse(root: TreeNode | null){
    if(!root) return
    result.push(root.val)
    traverse(root.left)
    traverse(root.right)
  }
  traverse(root)
  return result
}

traverseInOrder(root: TreeNode | null = this.root){
  const result: number[] = []
  function traverse(root: TreeNode | null){
    if(!root) return
    traverse(root.left)
    result.push(root.val)
    traverse(root.right)
  }
  traverse(root)
  return result
}

traversePostOrder(root: TreeNode | null): number[] {
  const result: number[] = []
  function traverse(root: TreeNode | null){
      if(!root) return
      traverse(root.left)
      traverse(root.right)
      result.push(root.val)
  }
  traverse(root)
  return result
}
delete(){}
}


// Create the nodes
let node50 = new TreeNode(50)
let node30 = new TreeNode(30)
let  node70 = new TreeNode(70)
const node20 = new TreeNode(20)
const node40 = new TreeNode(40)
const node60 = new TreeNode(60)
const node80 = new TreeNode(80)
const node10 = new TreeNode(10)
// Create the tree
const tree = new Tree(node50)

// Insert the nodes into the tree (demonstrates recursive behavior)
tree.insert(node30, tree.root) // Initial insertion uses the root as parent
tree.insert(node70, tree.root)
tree.insert(node20, node30)
tree.insert(node40, node30)
tree.insert(node60, node70)
tree.insert(node80, node70)
tree.insert(node10, node20)

export function printBinaryTree(root: TreeNode | null) {
  const lines: string[] = [];

  const printNode = (node: TreeNode | null, prefix: string, isLeft: boolean) => {
    if (node === null) {
      return;
    }

    const newPrefix = isLeft ? `${prefix}│   ` : `${prefix}    `;
    lines.push(`${prefix}${isLeft ? '├──' : '└──'}${node.val}`);

    printNode(node.left, newPrefix, true);
    printNode(node.right, newPrefix, false);
  };

  printNode(root, '', false);
  console.log(lines.join('\n'));
}

export function preorderTraversalIterative(root: TreeNode | null): number[] {
  if(!root) return []
  let current: TreeNode | null | undefined = root
  const result: number[] = []
  const stack: (TreeNode | null)[] = []

  while(current || stack.length > 0){
    if(current){
      result.push(current.val)
      stack.push(current.right)
      current = current.left
    } else {
      current = stack.pop()
    }
  }
  return result
}

export function inorderTraversalIterative(root: TreeNode | null): number[] {
  const result: number[] = []
  const stack: TreeNode[] = []

  let current = root

  while (current || stack.length > 0) {
    if (current) {
      stack.push(current)
      current = current.left
    } else {
      const node = stack.pop()!
      result.push(node.val)
      current = node.right
    }
  }
  return result
}