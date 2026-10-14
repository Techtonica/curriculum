/*

Create a function that takes in a number as a string n and returns the number as a string without trailing and leading zeros. 
    - If you get a number with .0 on the end, return the integer value (e.g. return "4" rather than "4.0") as a string. 
    - If the number is 0, 0.0, 000, 00.00, etc... return the string, "0".

Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000). 

Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230). 

Special case: For decimal values less than 1, keep a zero before the decimal point for consistency and readability.

Examples
removeLeadingTrailing("230.000") ➞ "230"

removeLeadingTrailing("00402") ➞ "402"

removeLeadingTrailing("03.1400") ➞ "3.14"

removeLeadingTrailing("30") ➞ "30"

removeLeadingTrailing("0.5") ➞ "0.5"

*/
