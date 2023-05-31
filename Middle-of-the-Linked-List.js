/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
*/

// Answer

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  const arr = [];
  let length = 0;
  let temp = head;
  while (temp) {
    arr.push(temp);
    length++;
    temp = temp.next;
  }
  const center = length >> 1;
  return arr[center];
};
