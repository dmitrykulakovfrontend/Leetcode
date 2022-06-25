  /*
  Given an array of strings strs, group the anagrams together. You can return the answer in any order.

  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

// Answer
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
  const mapping = {};
  for (let str of strs) {
    const sorted = str.split('').sort().join('');
    if(mapping[sorted] !== undefined) {
      mapping[sorted].push(str);
    } else {
      mapping[sorted] = [str];
    }
  }
  return Object.values(mapping);
};
// results
/*
Runtime: 139 ms, faster than 86.51% of JavaScript online submissions for Group Anagrams.
Memory Usage: 53.7 MB, less than 49.21% of JavaScript online submissions for Group Anagrams.
*/
