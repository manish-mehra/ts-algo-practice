import { TreeNode } from "./"


function binaryTreePaths(root: TreeNode | null): string[] {

    if(!root){
        return []
    }
    const res:string[] = []
    function dfs(root: TreeNode|null, path: string){
        
        if(!root){
            return
        }
        path += root.val
        if(!root!.left && !root!.right){
            res.push(path)
            return
        }
        path += "->"
        dfs(root.left, path)
        dfs(root.right, path)

    }

    dfs(root, "")
    return res
}
export {}