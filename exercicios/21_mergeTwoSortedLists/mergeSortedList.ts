/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1 && !list2) return null;
  if (list1 && !list2) return list1;
  if (!list1 && list2) return list2;

  let lista: ListNode | null = null;

  let current: ListNode | null = null;
  if (list1 && list2) {
    if (list1.val <= list2.val) {
      lista = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      lista = new ListNode(list2.val);
      list2 = list2.next;
    }
    current = lista;
    while (list1 || list2) {
      if (list1 && list2 && list1.val <= list2.val) {
        let novoNo = new ListNode(list1.val);
        current.next = novoNo;
        current = current?.next;
        list1 = list1.next;
      } else if (list1 && list2 && list1.val > list2.val) {
        let novoNo = new ListNode(list2.val);
        current.next = novoNo;
        current = current?.next;

        list2 = list2.next;
      } else if (list1 && !list2) {
        current.next = list1;
        return lista;
      } else if (!list1 && list2) {
        current.next = list2;
        return lista;
      }
    }
  }

  return null;
}
