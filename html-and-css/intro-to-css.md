# Intro to CSS

### Projected Time
1 hr

### Prerequisites
  - Students should have a basic understanding of Html structure
  - Students should understand ids and classes

### Motivation
I want to style my website.

### Objective
**Students will be able to**:
- know the 3 different ways to add CSS to a page
- change basic CSS properties
- understand the box model
- understand the basics of how CSS precedence works
- debug CSS in the browser using dev tools


### Specific Things To Teach
- How do we style our page?
	- inline styles
  - style tag
  - separate style sheet
- Basic style attributes
	- Color
		- changes the color
		- accepts hex and rgba values
	- Font
		- change the font of text
		- stored in the browser, if you want to use a fancier font link to it
	- Font Size
		- change the size of the text
		- Sizes can be in measurements
			- Pixels : when need to give a concrete size
			- EM : scalable to parent's font size
			- Percentage : scalable to 100%
	- Text Align
		- center
		- justify
		- left
		- right
	- Color
    - changes the text color
		- accepts hex and rgba values
  - Background-color
		- changes the background color of an element
		- accepts hex and rgba values
	- Border
		- can give border to different edges on the element
			- top
			- right
			- bottom
			- left
      - works in clockwise direction
		- width
		- style
			- dotted
			- solid
			- double
			- dashed
		- color
  - Cursor
  	- cursor automatically changes when you hover over a link, to a little hand
  	- can change the behavior
  	- change to a pointer (a pointy finger with a cartoon glove) with 'pointer'
- Box-Model
  - Html elements can be thought of as a series of boxes
  - display properties
    - block
      - always takes up full width
    - inline
    - flex
      - don't go too in depth, but mention it exists
    - inline-block
  - spacing and determining width of elements
    - element
    - padding
    - border
    - margin
      - can overlap, takes the larger value
      - doesn't work with inline elements
- Selection rules
  - In what order do rules apply?
  - You can select elements on the page and apply styles using:
    - Inline styles
    - Ids - `#my-id`
    - Classes - `.my-class`
    - Tags - `p`
    - Universal selector - `*`
  -  Rules apply from most to least specific:
    - Inline styles > Ids > Classes > Tags
- Demonstrate chrome dev tools
  - Show how to change styles in the browser for faster debugging
- General principles
    - Avoid inline styles whenever possible, they make Html messy
    - Use Ids rarely - use Ids if you have 1 specific tag you want to style
    - When in doubt, use a class - they are good for styling multiple tags
    - Use the universal selector for a style you want to apply to everything, like font-family

### Common Mistakes / Misconceptions


### Guided Practice
Adjust the width and height of the image you placed in your webpage.
Change the different text tags (headers, p, and span) to different font styles and colors.

### Independent Practice


### Challenge
