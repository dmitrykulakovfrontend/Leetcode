/*
  A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
  it reads the same forward and backward. Alphanumeric characters include letters and numbers.

  Given a string s, return true if it is a palindrome, or false otherwise.
*/

// Answer

/*

    input: string (1 <= s.length <= 2 * 105, only printable ASCII)
    output: boolean
    
    isPalindrome("A man, a plan, a canal: Panama") => true
    isPalindrome("race a car") => false
    isPalindrome(" ") => true
    
    pseudo: use 2 pointers, if at some point they are not equal letters then return false, otherwise return true, skip 
    non-alphanumeric characters.

*/
var isPalindrome = function(s) {
    

    let left = 0
    let right = s.length - 1;
    const regexp = /^[a-z0-9]+$/i
    
    while(left <= right) {
        while(left <= right && !regexp.test(s[left])) {
            left++;
        }
        while(left <= right && !regexp.test(s[right])) {
            right--;
        }
        if(left <= right && s[left].toLowerCase() != s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }

    return true;
    
};

// results
/*
Runtime: 83 ms. Beats 76.18 % of javascript submissions..
Memory Usage: 45.2 MB. Beats 57.50 % of javascript submissions..
*/
