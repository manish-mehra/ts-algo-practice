// Definition for singly-linked list.
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

export function printNodes(head: ListNode | null):void{
  if(!head) return
  let output = []
  let counter = 0
  while(head !== null){
    if(counter > 10) break
    output.push(head.val)
    if(head.next){
      head = head.next
    } else{
      break
    }
    counter++
  }
  console.log(output)
}

