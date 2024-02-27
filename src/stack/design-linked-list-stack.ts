function printStack(head: ListNode):void{
  let output = []
  while(head !== null){
    output.push(head.value)
    if(head.next){
      head = head.next
    } else{
      break
    }
  }
  console.log(output)
}

class ListNode{
  value: number | null
  next: ListNode | null

  constructor(value: number, next: ListNode | null){
    this.value = value
    this.next = next
  }
}

class Stack{

  stack: ListNode | null

  constructor(){
    this.stack = null
  }

  pop(){
    // traverse the linkedlist
    let currP = this.stack
    let prev = null
    
    while(currP && currP.next !== null){
      let temp = currP
      prev = temp      
      currP = currP.next
    }
    if(prev){
      prev.next = null
    }
  }

  push(val:number, next: ListNode | null){
    const newNode = new ListNode(val, next)

    if(!this.stack){
      this.stack = newNode
      return
    }

    let current = this.stack
    while(current.next){
      current = current.next
    }
    current.next = newNode
  }

  printStack():void{
    let head = this.stack
    let output = []
    while(head){
      output.push(head.value)
      head = head.next
    }
    console.log(output)
  }
  
}

const st = new Stack()
st.push(1, null)
st.push(2, null)
st.push(3, null)
st.printStack()
st.pop()
st.printStack()

export {}
