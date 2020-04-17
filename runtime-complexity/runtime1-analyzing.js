/* 
Read the following functions. For each one, figure out:
- What does the function do? 
- Try to figure out the runtime -- O(1), O(log n), O(n), O(n log n), O(n^2), or O(2^n)
- Run the function with a few different input sizes and see how long it takes
- When the input size doubles, what happens to the time it takes to run?
*/


const mysteryFunction0 = function (array) {
  const myFavoriteNum = 7;
  for (i = 0; i < array.length; i++) {
    if (array[i] === myFavoriteNum) {
      return true;
    }
  }
  return false;
}


const mysteryFunction1 = function (array) {
  index = 4;
  return array[index];
}


const mysteryFunction2 = function (n) {
  const primes = []
  for (i = 2; i < n; i++) {
    let factorFound = false;
    for (j = 2; j < n; j++) {
      if (i % j === 0 && i !== j) {
        factorFound = true;
      }
    }
    if (!factorFound) {
      primes.push(i);
    }
  }
  return primes.length;
}


const mysteryFunction3 = function (array) {
  myLength = array.length;
  if (myLength % 2 == 0) {
    return "even length";
  } else {
    return "odd length";
  }
}


const mysteryFunction4 = function (string) {
  let eCount = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === 'e') {
      eCount++;
    }
  }
  return eCount;
}


const mysteryFunction5 = function (array) {
  array.sort();
}


const mysteryFunction6 = function (dict, key) {
  const value = dict[key];
  return value;
}


const mysteryFunction7 = function (array) {
  // Assume `array` is an array of ints sorted from smallest to biggest
  const lookingFor = 9;
  let lowerBound = 0;
  let upperBound = array.length - 1;
  let guessIndex = Math.floor(upperBound / 2);
  while (lowerBound <= upperBound) {
    if (array[guessIndex] === lookingFor) {
      return true;
    } else if (lookingFor < array[guessIndex]) {
      upperBound = guessIndex - 1;
    } else {
      lowerBound = guessIndex + 1;
    }
    guessIndex = Math.floor((lowerBound + upperBound) / 2);
  }
  return false;
}


const mysteryFunction8 = function (dictionary) {
  for (let key in dictionary) {
    let value = dictionary[key];
    if (key == value) {
      return true;
    }
    return false;
  }
}


