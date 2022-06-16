/*
 Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
 Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

 Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

 The tests are generated such that there is exactly one solution. You may not use the same element twice.

 Your solution must use only constant extra space.
*/

// Answer


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        let leftNum = numbers[left];
        let rightNum = numbers[right];
        let element = leftNum + rightNum; 
        if (element !== target) {
            if (element > target) {
                right -= 1
            } else {
                left += 1
            };
        } else return [left + 1, right + 1]
    }
   
};

// results
/*
Runtime: 88 ms. Beats 53.57 % of javascript submissions.
Memory Usage: 42.6 MB. Beats 86.83 % of javascript submissions.
*/
