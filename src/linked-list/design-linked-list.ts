// Sinly linked list

class Node<T> {
  value: T | null = null
  next: Node<T | null> | null= null

  constructor(value: T, next: Node<T | null> | null = null) {
    this.value = value
    this.next = next
  }
}

export class LinkedList{

  list: Node<number | null>

  constructor(val: number, next: Node<number> | null){
    this.list = new Node(val, next)
  }

  get(i: number): number{
    return -1
  }

  insertHead(val: number){
    if(val !== null){
      if(this.list){        
        const tempCurrHead = this.list
        const newHead = new Node(val, tempCurrHead)
        this.list = newHead
      } else{
        const newHead = new Node(val, null)
        this.list = newHead
      }
    }
  }

  insertTail(val: number){
    if(val !== null){
      let currP = this.list
      while(currP){
        if(currP.next === null){
          const newTail = new Node(val, null) 
          currP.next = newTail
          break
        }
        currP = currP.next
      }
    }
  }

  remove(i: number):boolean{

    if(i < 0){
      return false
    }

    let prev: Node<number | null> | null = null
    let currP: Node<number | null> | null = this.list
    let next = currP.next

    let listIndex = 0

    while(currP !== null){
      if(listIndex === i) {
        // case: list with one node
        if(prev === null && next === null){
          console.log("can't delete first item")
          return false
        }

        if(prev){
          prev.next = next
        } else{
          // case: first node
          currP.next = null
          if(next){
            this.list.next = next.next
            this.list.value = next.value
          }
          return true
        }
        // rest of node
        currP = null
        return true
      }
      prev = currP
      currP = next
      next = currP && currP.next
      listIndex++
    }

    return false
  }

  getValues():any[]{
    if(this.list === null) {
      return []
    }
    let result = []
    result.push(this.list.value)

    let currP = this.list.next
    while(currP !== null){
      result.push(currP.value)
      currP = currP.next
    }

    return result
  }

}


const list = new LinkedList(0, null)
list.insertTail(1)
list.insertTail(2)
list.insertTail(3)
list.insertTail(4)
console.log(list.getValues())
list.remove(-1)
console.log(list.getValues())



export {}