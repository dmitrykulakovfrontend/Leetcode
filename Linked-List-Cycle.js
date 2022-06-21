/*
  Given head, the head of a linked list, determine if the linked list has a cycle in it.

  There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

  Return true if there is a cycle in the linked list. Otherwise, return false.
*/

// Answer
var hasCycle = function(head) {
    while (head) {
        if (head.seen) return true;
        head.seen = true;
        head = head.next;
    }
    return false;
};
// results
/*
Runtime: 102 ms, faster than 52.34% of JavaScript online submissions for Linked List Cycle.
Memory Usage: 45.1 MB, less than 49.08% of JavaScript online submissions for Linked List Cycle.
*/
