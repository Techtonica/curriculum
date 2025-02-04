/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence. First argument is the sentence to perform the search and replace on. Second argument is the word that you will be replacing (before). Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog


Examples
myReplace("Let us go to the store", "store", "mall") should return the string ”Let us go to the mall.”
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string “He is Sitting on the couch.”
myReplace("I think we should look up there", "up", "Down") should return the string ”I think we should look down there.”
myReplace("This has a spellngi error", "spellngi", "spelling") should return the string ”This has a spelling error.”
myReplace("His name is Tom", "Tom", "john") should return the string His name is John.
myReplace("Let us get back to more Coding", "Coding", "algorithms") should return the string Let us get back to more Algorithms.

*/












console.log(myReplace("Let us go to the store", "store", "mall")); // "Let us go to the mall."
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // "He is Sitting on the couch."
console.log(myReplace("I think we should look up there", "up", "Down")); // "I think we should look down there."
console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); // "This has a spelling error."
console.log(myReplace("His name is Tom", "Tom", "john")); // "His name is John."
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); // "Let us get back to more Algorithms."