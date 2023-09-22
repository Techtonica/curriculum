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

acorns_party(30, false) → false
acorns_party(50, false) → true
acorns_party(70, true) → true

	Needs sample solution


### Problem 2 

Given a number n, return true if n is in the range 1..10, inclusive. Unless outside_mode is true, in which case return true if the number is less or equal to 1, or greater or equal to 10.

in1to10(5, false) → true
in1to10(11, false) → false
in1to10(11, true) → true

	Needs sample solution


### Problem 3

The squirrels in Palo Alto spend most of the day playing. In particular, they play if the temperature is between 60 and 90 (inclusive). Unless it is summer, then the upper limit is 100 instead of 90. Given an int temperature and a boolean is_summer, return true if the squirrels play and false otherwise.

squirrel_play(70, false) → true
squirrel_play(95, false) → false
squirrel_play(95, true) → true

	function squirrel_play(temperature, isSummer) {
		LOWER_LIMIT = 60 
		UPPER_LIMIT = 90 
		if (isSummer) {
			UPPER_LIMIT = 100
		}
		return temperature >= LOWER_LIMIT && temperature <= UPPER_LIMIT;
	}


### Problem 4
Given a non-negative number "num", return true if num is within 2 of a multiple of 10. 
near_ten(12) → true
near_ten(17) → false
near_ten(19) → true

	Needs sample solution


### Problem 5
We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch each) and big bricks (5 inches each). Return true if it is possible to make the goal by choosing from the given bricks. This is a little harder than it looks and can be done without any loops. 

make_bricks(3, 1, 8) → true
make_bricks(3, 1, 9) → false
make_bricks(3, 2, 10) → true

Needs sample solution


