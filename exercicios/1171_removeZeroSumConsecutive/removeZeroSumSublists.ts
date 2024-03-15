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

const nums21 = [-2, -1, 1, -1, 1, -1, 2];
let nvs = insert(nums21);

console.log(removeZeroSumSublists(nvs));

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
  let current: ListNode | null = head;

  let numeros: number[] = [];
  while (current) {
    if (current.val !== 0) numeros.push(current.val);
    current = current.next;
  }

  for (let i = 0; i < numeros.length; i++) {
    let count = 1;
    let soma = numeros[i];
    for (let j = i + 1; j < numeros.length; j++) {
      count += 1;
      if (soma + numeros[j] === 0) {
        numeros.splice(i, count);
        i -= 1;
        break;
      } else soma += numeros[j];
    }
  }
  return insert(numeros);
}

function insert(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;

  let head = new ListNode(arr[0]);
  let current: ListNode | null = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current?.next;
  }

  return head;
}
