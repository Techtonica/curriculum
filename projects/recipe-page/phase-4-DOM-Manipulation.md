# Project - Incorporate JS DOM method into Recipe Page

The DOM (or Document Object Model) is a tree-like representation of the contents of a webpage - a tree of “nodes” with different relationships depending on how they’re arranged in the HTML document.

### Phase 3 - Incorporate JS DOM

### Languages

- HTML
- CSS
- Javascript

Hello everyone! 
We have a big goal for the EOW: we want to incorporate DOM Methods to your recipe page 
How excited are you about this? Let's use JS to make your website interactive. 

### Primary Goals

1. Learn how to access and manipulate elements using JS
2. Practice incorporating JS DOM methods

### Overview

You already have an HTML/CSS/JS project, but now you get surprise your users by adding some JS DOM methodsto make your website interactive! You'll add at least three interactive elements of your choosing.

### Use your creativity!
This is practice, so there's no right or wrong approach. 
You can add a strikethrough when someone clicks on an ingredient, add a button that will create a space for notes, have a mouse event that shows hidden content. Let's see some examples of what we can do:

#### 1. Adding Content
To add new elements to the page, we’ll need to use a three step process:
```
// First up, let's create a new list item and store it in a variable.
var newListItem = document.createElement('li');

// Now let's update the text content of that list item.
newListItem.textContent = 'Jalapenos';

// And finally, let's add that list item as a child of the ul.
document.querySelector('ul').appendChild(newListItem);
```
#### 2. Adding a check mark as an element to a list
To add checkbox to the page, we’ll need to use a this process
![Brute Force Approach to adding a checkbox](https://raw.githubusercontent.com/Yosolita1978/screenshoots/4500e48f91166d641138b3e61cc37a744ae60ffb/2023/H1/Screen%20Shot%202023-01-17%20at%204.09.48%20PM.png)

#### 3. Adding a strikethrough when someone clicks an element
The CSS rule to show HTML text as strikethrough is called `text-decoration: line-through`. You can add CSS rules to an element with a Class or ID. Remember that you can add a className to any element using DOM Manipalation with `yourelementname.className = "checked";`
![Brute Force Approach to adding a checkbox](https://raw.githubusercontent.com/Yosolita1978/screenshoots/4500e48f91166d641138b3e61cc37a744ae60ffb/2023/H1/Screen%20Shot%202023-01-17%20at%204.15.12%20PM.png)

#### 4. Adding a strikethrough when someone clicks an element inside a checkbox
You can add the strikethrough line at the user action of clicking a checkbox, like in the example. 
![Brute Force Approach to adding a checkbox](https://raw.githubusercontent.com/Yosolita1978/screenshoots/9a68557a9663f1f61ef8fc73c594579f3600b208/2023/H1/Screen%20Shot%202023-01-17%20at%204.42.59%20PM.png)
