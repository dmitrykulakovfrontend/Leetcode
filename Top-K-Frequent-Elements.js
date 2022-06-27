/*
  Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
*/

// Answer
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const n = nums.length;
    const freq = new Map();
    
    for (const num of nums) {
        if (!freq.get(num)) freq.set(num, 0);
        freq.set(num, freq.get(num) + 1);
    }
    
    const buckets = [];
    
    for (let i = 0; i <= n; i++) {
        buckets[i] = [];
    }
    
    for (const [num, count] of freq) {
        buckets[count].push(num);
    }
    
    const res = [];
    
    for (let i = n; i >= 0 && k > 0; i--) {
		if (buckets[i].length > 0) {
		    k -= buckets[i].length;
            res.push(...buckets[i]);
        }
    }
    
    return res;
};
// results
/*
Runtime: 96 ms, faster than 77.37% of JavaScript online submissions for Top K Frequent Elements.
Memory Usage: 46.8 MB, less than 37.21% of JavaScript online submissions for Top K Frequent Elements.
*/
