/*

Create a function that takes in a number as a string n and returns the number without trailing and leading zeros. If you get a number with .0 on the end, return the integer value (e.g. return "4" rather than "4.0"). If the number is 0, 0.0, 000, 00.00, etc... return "0". Return a string.

Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000). 

Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230). 

Examples
removeLeadingTrailing("230.000") ➞ "230"

removeLeadingTrailing("00402") ➞ "402"

removeLeadingTrailing("03.1400") ➞ "3.14"

removeLeadingTrailing("30") ➞ "30"

*/
