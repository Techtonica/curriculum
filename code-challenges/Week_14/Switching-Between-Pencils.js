/*

When coloring a striped pattern, you may start by coloring each square sequentially, meaning you spend time needing to switch coloring pencils. Create a function where given an array of colors cols, return how long it takes to color the whole pattern. It takes 1 second to switch between pencils. It takes 2 seconds to color a square. Only change coloring pencils if the next color is different to the color before it. Return a number in seconds.

Examples: 
// There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
// You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
// 10 + 4 = 14
color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14

colorPatternTimes(["Blue"]) ➞ 2

colorPatternTimes(["Red", "Yellow", "Green", "Blue"]) ➞ 11

colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]) ➞ 13 

*/
