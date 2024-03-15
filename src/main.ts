
 // Definition for singly-linked list.
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
     }
 }
 
 function traverse(head:ListNode | null){
  const arr = []
  while(head !== null){
    arr.push(head.val)
    head = head.next
  }
  return arr
 }

 function reorderList(head: ListNode | null): void {

  // find the mid
  let slow: ListNode | null | undefined = head
  let fast: ListNode | null | undefined = head?.next

  while(fast && fast.next){
    slow = slow?.next
    fast = fast?.next?.next
  }
  // reverse the second half
  if(!(slow  && slow.next)) return
  let second: ListNode | null = slow.next
  slow.next = null
  let prev: ListNode | null = null
  while(second){
    let temp: ListNode | null = second.next
    second.next = prev
    prev = second
    second = temp
  }

  if(!head) return
  // reorder the list
  let first: any = head
  second = prev

  while(second) {
    let temp1 = first
    let temp2 = second
    first.next = second
    second.next = temp1
    first = temp1
    second = temp2
  }
}

const n5 = new ListNode(5, null)
const n4 = new ListNode(4, n5)
const n3 = new ListNode(3, n4)
const n2 = new ListNode(2, n3)
const n1 = new ListNode(1, n2)
reorderList(n1)