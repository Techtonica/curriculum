# Project - Incorporate JS DOM method into Recipe Page

The DOM (or Document Object Model) is a tree-like representation of the contents of a webpage - a tree of “nodes” with different relationships depending on how they’re arranged in the HTML document.

### Phase 3 - Incorporate JS DOM

### Languages

- HTML
- CSS
- Javascript

Hello everyone!
We have a big goal for the EOW: we want to incorporate DOM Methods into your recipe page
How excited are you about this? Let's use JS to make your website interactive.

### Primary Goals

1. Learn how to access and manipulate elements using JS
2. Practice incorporating JS DOM methods

### Overview

You already have an HTML/CSS/JS project, but now you get to surprise your users by adding some JS DOM methods to make your website interactive! You'll add at least three interactive elements of your choosing.

### Use your creativity!

This is practice, so there's no right or wrong approach.
You can add a strikethrough when someone clicks on an ingredient, add a button that will create a space for notes, have a mouse event that shows hidden content. Let's see some examples of what we can do:

#### 1. Adding Content

To add new elements to the page, we’ll need to use a three-step process:

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
![Brute Force Approach to adding a checkbox](https://raw.githubusercontent.com/Techtonica/curriculum/af027e9524fff7abab62e65705f8d3427424c7d9/projects/pr-screenshot/pr-dommanipulation1.png)

#### 3. Adding a strikethrough when someone clicks an element

The CSS rule to show HTML text as strikethrough is called `text-decoration: line-through`. You can add CSS rules to an element with a Class or ID. Remember that you can add a className to any element using DOM Manipulation with `yourelementname.className = "checked";`
![Brute Force Approach to adding a checkbox](https://raw.githubusercontent.com/Techtonica/curriculum/af027e9524fff7abab62e65705f8d3427424c7d9/projects/pr-screenshot/pr-dommanipulation2.png)

#### 4. Adding a strikethrough when someone clicks an element inside a checkbox

You can add the strikethrough line at the user action of clicking a checkbox, like in the example.
![Brute Force Approach to adding a checkbox](https://raw.githubusercontent.com/Techtonica/curriculum/af027e9524fff7abab62e65705f8d3427424c7d9/projects/pr-screenshot/pr-dommanipulation3.png)
