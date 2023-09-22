# Code Challenges about Booleans - JavaScript

## Resources:

- [Techtonica Lesson about Booleans](https://github.com/Techtonica/curriculum/blob/main/javascript/javascript-1-variables.md)

## Motivation

Techtonica's JavaScript lessons set a solid foundation in JavaScript basics so we can use the language in more robust ways in later studies. Nevertheless, you want to practice problems that use booleans as a preparation for your technical interview.

## Objectives

Participants will be able to:

- Work each problem as a code challenge
- Work on their solutions using functions
- Test their solutions with several test cases

## Things to Remember

Strings are immutable, which means you can't get inside them and change the characters. The only way you can change the string that's associated with a particular variable name is to re-bind that variable name to an entirely new string.

### Problem Sets

Question | Test Cases | Solutions

### Problem 1

When squirrels get together for a party, they like to have acorns. A squirrel party is successful when the number of acorns is between 40 and 60, inclusive. Unless it is the weekend, in which case there is no upper bound on the number of acorns. Return true if the party with the given values is successful, or false otherwise.
Test Case 1:
```
acorns_party(30, false) → false
```
Test Case 2:
```
acorns_party(50, false) → true
```
Test Case 3:
```
acorns_party(70, true) → true
```

Sample Solution:
```javascript
function acorns_party(acorns, isWeekend) {
  if (isWeekend) {
    // If it's the weekend, there is no upper bound on the number of acorns.
    return acorns >= 40;
  } else {
    // If it's not the weekend, the number of acorns should be between 40 and 60, inclusive.
    return acorns >= 40 && acorns <= 60;
  }
}
```

### Problem 2 

Given a number n, return true if n is in the range 1..10, inclusive. Unless outside_mode is true, in which case return true if the number is less or equal to 1, or greater or equal to 10.

Test Case 1:
```
in1to10(5, false) → true
```
Test Case 2:
```
in1to10(11, false) → false
```
Test Case 3:
```
in1to10(11, true) → true
```
Sample Solution:
```javascript
function in1To10(n, outside_mode) {
  if (outside_mode) {
//outside_mode is true.
    return n <= 1 || n >= 10;
  } else {
//outside_mode is false.
    return n >= 1 && n <= 10;
  }
}
```

### Problem 3

The squirrels in Palo Alto spend most of the day playing. In particular, they play if the temperature is between 60 and 90 (inclusive). Unless it is summer, then the upper limit is 100 instead of 90. Given an int temperature and a boolean is_summer, return true if the squirrels play and false otherwise.
Test Case 1:
```
squirrel_play(70, false) → true
```
Test Case 2:
```
squirrel_play(95, false) → false
```
Test Case 3:
```
squirrel_play(95, true) → true
```

Sample Solution:
```javascript
	function squirrel_play(temperature, isSummer) {
		LOWER_LIMIT = 60 
		UPPER_LIMIT = 90 
		if (isSummer) {
			UPPER_LIMIT = 100
		}
		return temperature >= LOWER_LIMIT && temperature <= UPPER_LIMIT;
	}
```

### Problem 4
Given a non-negative number "num", return true if num is within 2 of a multiple of 10. 
Test Case 1:
```
near_ten(12) → true
```
Test Case 2:
```
near_ten(17) → false
```
Test Case 3:
```
near_ten(19) → true
```
Sample Solution:
```javascript
function nearTen(num) {
  // Calculate the remainder when the number is divided by 10.
  const remainder = num % 10;
  
  // Check if the remainder is within 2 of a multiple of 10.
  return remainder <= 2 || remainder >= 8;
}

```

### Problem 5
We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch each) and big bricks (5 inches each). Return true if it is possible to make the goal by choosing from the given bricks. This is a little harder than it looks and can be done without any loops. 
Test Case 1:
```
make_bricks(3, 1, 8) → true
```
Test Case 2:
```
make_bricks(3, 1, 9) → false
```
Test Case 3:
```
make_bricks(3, 2, 10) → true
```
Sample Solution:
```javascript
function makeBricks(small, big, goal) {
  // Calculate the maximum number of inches we can get from big bricks.
  const max = big * 5;
  
  // Check if it's possible to reach the goal using both big and small bricks.
  return max >= goal || (goal - max <= small && goal % 5 <= small);
}
```


