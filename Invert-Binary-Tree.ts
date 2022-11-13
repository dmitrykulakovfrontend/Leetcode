/*
  Given the root of a binary tree, invert the tree, and return its root.
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

function invertTree(root: TreeNode | null): TreeNode | null {
   if (!root) return root;
   let temp = root.left;
   root.left = root.right;
   root.right = temp;
   invertTree(root.left);
   invertTree(root.right);
   return root
};
// results
/*
Runtime
108 ms
Beats
48.44%
Memory
44.7 MB
Beats
53.27%
*/
