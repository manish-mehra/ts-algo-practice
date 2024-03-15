export class Node {
  value: number
  next: Node | null
  constructor(value?: number, next?: Node | null) {
      this.value = (value===undefined ? 0 : value)
      this.next = (next===undefined ? null : next)
  }
}

export function mergeSortedList(list1: Node | null, list2: Node | null){

const dummyNode: Node = new Node(0)
let currentNode = dummyNode

while(list1 !== null && list2 !== null){
if(list1.value > list2.value){
  currentNode.next = list1
  list1 = list1.next
} else{
  currentNode.next = list2
  list2 = list2.next
}
currentNode = currentNode.next
}

if(list1 !== null) currentNode.next = list1
if(list2 !== null) currentNode.next = list2

return dummyNode.next

}



