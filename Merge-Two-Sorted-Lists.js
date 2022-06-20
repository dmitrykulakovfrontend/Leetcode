/*
  You are given the heads of two sorted linked lists list1 and list2.

  Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

  Return the head of the merged linked list.
 
*/

// Answer

var mergeTwoLists = function (list1, list2) {
  const head = list2;
  if (!list2) return list1;
  if (!list1) return list2;
  if (list1.val < list2.val) return mergeTwoLists(list2, list1);
  while (list1) {
    let val1 = list1.val;
    let val2 = list2.val;
    let val3 = list2.next === null ? Infinity : list2.next.val;
    if (val1 >= val2 && val1 <= val3) {
      let nextList1 = list1.next;
      let nextList2 = list2.next;
      list1.next = nextList2;
      list2.next = list1;
      list2 = list2.next;
      list1 = nextList1;
    } else {
      list2 = list2.next;
    }
  }
  return head;
};

// results
/*
Runtime: 83 ms. Beats 71.20 % of javascript submissions.
Memory Usage: 44.2 MB. Beats 60.04 % of javascript submissions.
*/
