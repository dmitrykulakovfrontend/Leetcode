/*
  Given the head of a singly linked list, reverse the list, and return the reversed list.
*/

// Answer


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    while (head) {
        const temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }
    return prev;
};

// results
/*
Runtime: 55 ms. Beats 99.47 % of javascript submissions.
Memory Usage: 44.1 MB. Beats 62.33 % of javascript submissions.
*/
