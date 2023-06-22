# Code Challenges about Strings - JavaScript

## Resources:

- [Techtonica Lesson about Strings](https://github.com/Techtonica/curriculum/blob/main/javascript/javascript-1-variables.md)

## Motivation

Techtonica's JavaScript lessons set a solid foundation in JavaScript basics so we can use the language in more robust ways in later studies. Nevertheless, you want to practice problems that use string as a preparation for your technical interview.

## Objectives

Participants will be able to:

- Work each problem as a code challenge
- Work their solutions using functions
- Test their solutions with several test cases

## Things to Remember

Strings are immutable, which means you can't get inside them and change the characters. The only way you can change the string that's associated with a particular variable name is to re-bind that variable name to an entirely new string.

### Problem Sets

Question | Test Cases | Solutions

#### Problem 1 -

Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (i.e., “waterbottle” is a rotation of “erbottlewat”).
Test Cases:

Test Case 1:

s1: "waterbottle"
s2: "erbottlewat"

Expected output: true

Test Case 2:

s1: "hello"
s2: "oehll"

Expected output: false

Test Case 3:

s1 = "abcde"
s2 = "cdeab"

Expected output: True

Test Case 4:

s1 = "programming"
s2 = "mmingprogra"

Expected output: True

Test Case 5:

s1 = "goodbye"
s2 = "eygoodb"

Expected output: False

Sample Solution:

function isRotation(s1, s2) {
if (s1.length !== s2.length) {
return false;
}

const concatenated = s1 + s1;

return isSubstring(concatenated, s2);
}

function isSubstring(str, substr) {
return str.includes(substr);
// Implementation of the isSubstring method goes here
// Returns true if `substr` is a substring of `str`, false otherwise
}

// Testing the isRotation function
const s1 = "goodbye";
const s2 = "eygoodb";

console.log(isRotation(s1, s2)); // Output: false // Fixed a mistake here

#### Problem 2 -

Given a string, return a new string where "not" has been added as the first word in the string. However, if the string already begins with "not", return the string unchanged.

Test Cases
not_string('candy') → 'not candy'
not_string('x') → 'not x'
not_string('not bad') → 'not bad'

Needs sample solution

#### Problem 3 -

Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front;

front_times('Chocolate', 2) → 'ChoCho'
front_times('Chocolate', 3) → 'ChoChoCho'
front_times('Ok', 4) → 'OkOkOkOk'

Needs sample solution

#### Problem 4 -

Given a string and a non-negative int n, return a larger string that is n copies of the original string.

string_times('Hi', 2) → 'HiHi'
string_times('Hi', 3) → 'HiHiHi'
string_times('Hi', 1) → 'Hi'

Needs sample solution

#### Problem 5 -

Given a non-empty string like "Code" return a string like "CCoCodCode".

string_splosion('Code') → 'CCoCodCode'
string_splosion('abc') → 'aababc'
string_splosion('ab') → 'aab'

Needs sample solution

#### Problem 6 -

Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).

last2('hixxhi') → 1
last2('xaxxaxaxx') → 1
last2('axxxaaxx') → 2

Needs sample solution

#### Problem 7 -

Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".

string_bits('Hello') → 'Hlo'
string_bits('Hi') → 'H'
string_bits('Heeololeo') → 'Hello'

Needs sample solution

#### Problem 8 -

Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in the same place in both strings.

string_match('xxcaazz', 'xxbaaz') → 3
string_match('abc', 'abc') → 2
string_match('abc', 'axc') → 0

Needs sample solution

#### Problem 9 -

Given a string representing a name, e.g. "Bob", return a greeting of the form "Hello Bob!"

hello_name('Bob') → 'Hello Bob!'
hello_name('Alice') → 'Hello Alice!'
hello_name('X') → 'Hello X!'

Needs sample solution

#### Problem 10 -

Given an "out" string length 4, such as "<<>>", and a word, return a new string where the word is in the middle of the out string, e.g. "<<word>>".

make_out_word('<<>>', 'Yay') → '<<Yay>>'
make_out_word('<<>>', 'WooHoo') → '<<WooHoo>>'
make_out_word('[[]]', 'word') → '[[word]]'
