import { ListNode } from "./main"

function hasCycle(head: ListNode | null): boolean {
  if(!head) return false
  
  let ifCycle = false
  const seen = new Set()
  
  let curr = head

  while(curr.next !== null) {
    if(seen.has(curr)){
      ifCycle = true
      break
    }
    console.log(curr.val)
    seen.add(curr)
    curr = curr.next
  }

  return ifCycle
}

export {}