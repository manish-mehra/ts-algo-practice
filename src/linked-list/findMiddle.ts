// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

function findMiddle(head: ListNode | null): ListNode | null{

if(!head) return null

let slow: ListNode | null = head
let fast: ListNode | null = head

// while fast is not null
  // move fast next
  // if fast is not null
      // move fast next
// move slow next

while(fast){
  fast = fast?.next
  if(fast){
    fast = fast.next
    slow = slow && slow?.next
  }
}

return slow
}

// const node5 = new ListNode(5, null)
const node4 = new ListNode(4, null)
const node3 = new ListNode(3, node4)
const node2 = new ListNode(2, node3)
const node1 = new ListNode(1, node2)

console.log(findMiddle(node1))
export {}