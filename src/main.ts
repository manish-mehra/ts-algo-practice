import { ListNode, printNodes } from "./linked-list/utils"

// Linked List Techniques
// 1. Two pointers ✅
// 2. Fast & slow ✅
// 3. Linked List reversal: iterative && recursive


function reverseListIterative(head: ListNode): ListNode | null{

  let prev = null
  while(head !== null){
    let temp = head.next
    head.next = prev
    prev = head
    head = temp!
  }

  return prev
}

function reverseListRecurse(head: ListNode | null){

  // base case
  if(!head){
    return
  }
  reverseListRecurse(head.next)
  console.log(head.val)
}


const node5 = new ListNode(5, null)
const node4 = new ListNode(4, node5)
const node3 = new ListNode(3, node4)
const node2 = new ListNode(2, node3)
const node1 = new ListNode(1, node2)

reverseListRecurse(node1)