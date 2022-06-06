/*
  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

  An input string is valid if:

  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.
*/

// Answer

/*

    input: string( 1 <= length <= 10^4)
    ouput boolean
    
    isValidX("()") => true
    isValidX("()[]{}") => true
    isValidX("(]") => true
    
    pseudo: use stack data structure, each time if its openning parentheses then push it to stack, if its closing then     remove item from stack, if no items in stack then return true, otherwise false.

*/
var isValid = function(s) {
    const parentheses = {
        ')': '(',
        '}': '{',
        ']': '[',
    }
    const open = ['(', '{', '[']
    const close = [')', '}', ']']
    const stack = [];
    
    for (char of s) {
        if (open.includes(char)) {
            stack.push(char);
        }
        if (close.includes(char)) {
            let item = stack.pop();
            if (item !== parentheses[char]) return false;
        }
    }
    return stack.length === 0;
    
};

// results
/*
Runtime: 70 ms. Beats 76.07 % of javascript submissions.
Memory Usage: 42.2 MB. Beats 56.76 % of javascript submissions.
*/
