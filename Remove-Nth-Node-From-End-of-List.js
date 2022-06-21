/*
  Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/

// Answer
var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head
    for (let i = 0; i < n; i++) fast = fast.next
    if (!fast) return head.next
    while (fast.next) fast = fast.next, slow = slow.next
    slow.next = slow.next.next
    return head
};
// results
/*
Runtime: 78 ms, faster than 67.67% of JavaScript online submissions for Remove Nth Node From End of List.
Memory Usage: 43.5 MB, less than 22.01% of JavaScript online submissions for Remove Nth Node From End of List.
*/
