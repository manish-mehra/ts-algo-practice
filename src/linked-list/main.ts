export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

// Function to create a linked list from an array of values
export function createLinkedList(values: number[]): { head: ListNode | null, tail: ListNode | null } {
  if (values.length === 0) {
      return { head: null, tail: null };
  }

  const head = new ListNode(values[0]);
  let current = head;

  for (let i = 1; i < values.length; i++) {
      current.next = new ListNode(values[i]);
      current = current.next;
  }

  return { head, tail: current };
}
