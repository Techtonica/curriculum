/*

An anagram is a word formed by rearranging the letters of a different word using all the original letters exactly once. The function is given two strings: s - to search in, p - a template word. Find the starting indexes of anagrams of p among substrings of the given s.

Examples ==> function (s, p)
findAnagrams("cbaebabacd", "abc") ➞ [0, 6]
// Anagrams: "cba", "bac"

findAnagrams("abab", "ab") ➞ [0, 1, 2]
// Anagrams: "ab", "ba", "ab"

*/

// console.log(findAnagrams("cbaebabacd", "abc"));// [0, 6];
// console.log(findAnagrams("abab", "ab")); // [0, 1, 2];
// console.log(findAnagrams('a', 'ab')); // [];
console.log(findAnagrams("racecar", "ace")); // [ 1, 3 ]
