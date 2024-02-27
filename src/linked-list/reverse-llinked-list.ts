function printNodes(head: ListNode):void{
  let output = []
  while(head !== null){
    output.push(head.val)
    if(head.next){
      head = head.next
    } else{
      break
    }
  }
  console.log(output)
}

// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}


function reverseList(head: ListNode | null): ListNode | null {

  let prev: ListNode | null = null;
  let current: ListNode | null = head;

  while (current !== null) {
    const next: ListNode | null = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

let node4 = new ListNode(4, null)
let node3 = new ListNode(3, node4)
let node2 = new ListNode(2, node3)
let node1 = new ListNode(1, node2)


printNodes(node1)
const newHead = reverseList(node1)
newHead && printNodes(newHead)

export {}