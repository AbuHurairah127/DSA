"use strict";
//! Is Anagram
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
// Example 1:
// Input: s = "racecar", t = "carrace"
// Output: true
// Example 2:
// Input: s = "jar", t = "jam"
// Output: false
// Constraints:
// s and t consist of lowercase English letters.
//* Solution:
function isAnagram(s, t) {
    let chars = new Map();
    let anagram = false;
    if (s.length === t.length) {
        for (let char of s) {
            if (!chars.get(char)) {
                chars.set(char, char);
            }
        }
        for (let elem of t) {
            if (!chars.get(elem)) {
                anagram = false;
                break;
            }
            else {
                anagram = true;
            }
        }
    }
    return anagram;
}
let resp1 = isAnagram("carrace", "racecar");
let resp2 = isAnagram("jar", "jam");
console.log(resp1, resp2);
