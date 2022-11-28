/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
*/

// Answer

function isIsomorphic(s: string, t: string): boolean {
    let map = createMap(s,t);
    let map2 = createMap(t,s);
    let newWord = t.split('').map(char => map2.get(char)).join('')
    return newWord === s && map.size === map2.size
};

const createMap = (s:string, t:string) => {
    let map = new Map<string,string>();
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (map.has(char)) continue;
        map.set(char,t[i]);
    }
    return map;
}


// BigO: O(n)

// results
/*
Runtime
124 ms
Beats
63.37%
Memory
45.9 MB
Beats
36.53%
*/
