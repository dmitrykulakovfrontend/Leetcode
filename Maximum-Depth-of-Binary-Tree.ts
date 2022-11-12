/*
  Given the root of a binary tree, return its maximum depth.

  A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
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

function maxDepth(root: TreeNode | null, depth: number = 0): number {
    if (!root) return depth;
    return Math.max(...[maxDepth(root.left, depth + 1), maxDepth(root.right, depth + 1)])
};
// results
/*
Runtime
123 ms
Beats
48.65%
Memory
46.2 MB
Beats
73.4%
*/
