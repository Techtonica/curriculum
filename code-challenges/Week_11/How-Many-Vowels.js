// Given a string, count the total number of vowels (a, e, i, o, u) in it.

// Example 1: 					Example 2:
// Input: ”abc de”			    Input: ”geeksforgeeks portal”	
// Output: 2					Output: 7

// Challenge: Think about how you can you solve this recursively after solving the problem.

/*
PSEUDOCODE
- create a function that takes a string as input
- define a set of vowels that we should count
- iterate through each character in the string provided
- check if each character is in fact a vowel based on vowels given
- increment counter for each vowel found
- return total count

RECURSIVELY
- base case: empty string length
- check if the first character is a vowel
- recursively call the rest of the string

*/

function countVowels(str){
    // check if the input is a string is a 
    if (typeof str !== 'string'){
        return "Input must be a string";
    }
    // - define a set of vowels that we should count, lower/uppercase
    const vowels ='aeiouAEIOU';
    // init counter
    let count = 0;
    // - iterate through each character in the string provided
    for (let char of str){
        // - check if each character is in fact a vowel based on vowels given
        if (vowels.includes(char)){
            // - increment counter for each vowel found
            count++;
        }
    }
    // - return total count
    return count;
}

// console.log(countVowels('abc de')); //  2
// console.log(countVowels('geeksforgeeks portal')); // 7

function countVowelsRecursive(str){
// - base case: empty string length
    if(str.length === 0) return 0;
// - check if the first character is a vowel
    const vowels ='aeiouAEIOU';
    const isVowel = vowels.includes(str[0]);
// - recursively call the rest of the string
    return (isVowel ? 1 : 0) + countVowelsRecursive(str.slice(1));
}

console.log(countVowelsRecursive('abc de')); //  2
console.log(countVowelsRecursive('geeksforgeeks portal')); // 7