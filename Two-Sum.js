/*
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  You can return the answer in any order.
*/

// Answer

/*

  input: array (2 <= length  <= 10^4, -10^9 <= elements <= 10^9), number (-10^9 <= number <= 10^9)
  output: array with 2 indices


  twoSum([2,7,11,15], 9) => [0,1]
  twoSum([3,3], 6) => [0,1]
  twoSum([3,2,4],6) => [1,2]

  pseudo: make a hashtable, store in that hashtable number and its index, iterate through array and get the difference between target and current array item,
  if this difference is not exist in hashtable then add current array item into hashtable.

*/
var twoSum = function(nums, target) {
    const hashTable = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (hashTable[diff] === undefined) {
            hashTable[nums[i]] = i;
        } else {
            return [hashTable[diff],i]
        }
    }
}
/*
  Runtime: 78 ms. Beats 82.11 % of javascript submissions.
  Memory Usage: 42.8 MB. Beats 44.69 % of javascript submissions.
*/
