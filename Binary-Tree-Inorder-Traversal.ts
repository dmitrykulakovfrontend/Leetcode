/*
  Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
*/

// Answer
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function inorderTraversal(root: TreeNode | null): number[] {
    if (root == null) return [];
    let result = [];
    let stack = [];
    let currentNode = root;
    while (stack.length || currentNode) {
        if (currentNode) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        } else {
            currentNode = stack.pop();
            result.push(currentNode.val);
            currentNode = currentNode.right;
        }
    }
    return result;
};
// results
/*
Runtime
86 ms
Beats
78.56%

Memory
45.1 MB
Beats
8.71%
*/
