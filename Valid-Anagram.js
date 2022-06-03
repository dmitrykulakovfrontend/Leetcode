/*
  Given two strings s and t, return true if t is an anagram of s, and false otherwise.

  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

// Answer

/*
  input: 2 strings
  output: boolean which shows is one string is anagram of another

  isAnagram('anagram', 'nagaram') => true
  isAnagram('rat', 'cat') => false

  pseudo: create map of seen letters while iterating first string, and during iterating second string we will each time reduce amount of seen letter by 1, so if we dont see letter in map return false, at the end return true.
*/

var isAnagram = function(s, t) {
    if (t.length !== s.length) return false;
    const map = {};
    for (let char of s) {
        map[char] = (map[char] || 0) + 1;
    }
    for (let char of t) {
        if (!map[char]) return false;
        map[char]--;
    }
    return true;
};

// results
/*
Runtime: 102 ms. Beats 63.20 % of javascript submissions.
Memory Usage: 44.2 MB. Beats 52.63 % of javascript submissions.
*/
