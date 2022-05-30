/*
  Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

// Answer


/*

    args: number array, array length is atleast 1 and maximum is 10^5, array elements values can be from -10^9 to 10^9
    return: boolean which means is this array has duplicates or no,
    
    containsDuplicate([1,2,3]) // false
    containsDuplicate([1,2,3,1]) // true
    
    pseudo: Create Set from given array and compare its size to the original array length.

*/
let containsDuplicate = (nums) => {
    
    const result = new Set(nums);
    return result.size !== nums.length
    
};

// results
/*
Runtime: 101 ms. Beats 72.97 % of javascript submissions.
Memory Usage: 50.7 MB. Beats 71.37 % of javascript submissions.
*/
