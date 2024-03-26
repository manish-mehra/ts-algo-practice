
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

  if(!head) return null

  let dummyNode = new ListNode(0, head)
  let left: ListNode | null = dummyNode
  let right: ListNode | null = head

  // move right to offset
  while(n > 0){
    right = right && right.next
    n -= 1
  }

  // move pointers
  while(right){
    left = left && left.next
    right = right.next
  }

  if(left) left.next = right
  
  return dummyNode.next
}

const node5 = new ListNode(5, null)
const node4 = new ListNode(4, node5)
const node3 = new ListNode(3, node4)
const node2 = new ListNode(2, node3)
const node1 = new ListNode(1, node2)

console.log(removeNthFromEnd(node1, 2))
 
export {}