/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  let current: ListNode | null = head;
  let length = 0;
  while (current) {
    length++;
    current = current.next;
  }

  if (length % 2 === 0) {
    length = length / 2 + 1;
  } else length = Math.floor(length / 2) + 1;

  while (length > 1 && head) {
    head = head.next;
    length--;
  }
  return head;
}
