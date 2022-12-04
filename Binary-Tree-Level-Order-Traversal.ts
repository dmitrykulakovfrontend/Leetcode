/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
// Answer
function levelOrder(root: TreeNode | null): number[][] {
    let queue = [root];
    let result = [];
    while (queue[0]) {
        let level = [];
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let curr = queue.shift()
            level.push(curr.val)
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
        result.push(level)            
    }
    return result
};
// results
/*
Runtime
83 ms
Beats
85.12%
Memory
45.2 MB
Beats
44.33%
*/
