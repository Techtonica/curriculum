# Project 1 - Recipe Page
### Phase 2 - Add styling with CSS

### Languages
- HTML
- CSS

### Frameworks
None

### Primary Goals
1. Learning to style HTML using CSS
2. Receiving and incorporating constructive feedback on a project

### Overview
In this project you will create a well-designed webpage that displays one of your favorite recipes. It will include the ingredients, the steps needed to make the dish, links to similar recipes, and at least one photo.

Phase 1 of the project involves coding the structure of your webpage using HTML. This includes the ingredients, the steps needed to make the dish, links to similar recipes, and at least one photo.

Phase 2 of the project involves adding styling and pizazz using CSS. This includes changing the font style, font size, colors, and significantly altering the layout.

Phase 3 of the project involves incorporating Bootstrap. You'll add a navigation bar and several other Bootstrap components of your choosing.

Phase 4 of the project involves incorporating jQuery. You'll add at least one interactive element of your choosing.

### Context
- You completed a basic HTML page in Phase 1
- You learned basic CSS syntax and rules in the intro lesson
- Let's style your HTML with CSS!

### Basic Requirements
1. Create a file tree for your Recipe Page project
2. Create a CSS file in the proper directory of your file tree
3. Link to your CSS file from within your HTML `<head>` tags
4. Change the background color of your webpage
5. Change the font and font color of your headings and paragraphs
6. Make the title, blurb, image and ingredients appear on the left, and the instructions appear on the right
7. Obtain a code review from Techtonica staff once you've fulfilled these requirements

## Setup Instructions
Use the Terminal for navigating around the file system and creating new folders and files. Refer to the lesson on [The Command Line Interface](https://github.com/Techtonica/curriculum/blob/master/command-line/command-line-interface.md) if you need guidance on using the Terminal.

When you get to the steps below that ask you to initialize a git repo and track files using git, refer to the lesson on [Git and Version Control](https://github.com/Techtonica/curriculum/blob/master/git-version-control/lesson-plan.md) if you need guidance.

1. Navigate to the `recipe-page` directory.  

If you have questions, do not disturb your colleagues until you have spent at least 20 minutes troubleshooting on your own. Be sure to format your question using the template we practiced in the [Asking Good Questions](https://github.com/Techtonica/curriculum/blob/master/asking-good-questions/asking-good-questions.md) lesson.  


## Lab Instructions  


### Starter Code
There is no starter code for this lab exercise.  


### Lab Exercise  

#### Part 1 - Create a file tree for your Recipe Page project

Using the Terminal, ensure you are in the `recipe-page` directory. Run the `ls` command. The only file you should see is `index.html`.

The CSS file needs to go in the `css` directory, which goes inside the `static` directory, which goes inside the `recipe-page` directory. So, the path to the CSS file should be: `recipe-page` > `static` > `css` > `styles.css`. Here's how to accomplish this:

1. Since `recipe-page` is the current working directory, create a new directory called `static` and then navigate to `static`. 
2. From within the `static` directory, create a directory called `css` and then navigate to `css`.

#### Part 2 - Create a CSS file in the proper directory of your file tree

1. Now that you're in the `css` directory, create the `styles.css` file. You can verify this worked by running the `ls` command.
2. Navigate back to the `recipe-page` directory. Use the Terminal shortcut to open this whole directory in Atom.
3. Navigate back to `techtonica-projects` to easily run all the git commands.
4. Run `git status`. You should see something similar to this:

![]()

> **PAUSE.** Obtain a code review from Techtonica staff.

Add and commit, making sure to write a descriptive commit message in the present tense, such as "Create project file tree and stylesheet."

#### Part 3 - Link to your CSS file from within your HTML `<head>` tags

1. Find the `styles.css` file in Atom. Add this small bit of CSS code to the file, then save the file. 

```
p {
  font-color: blue;
}
```

We're doing this so we can easily see if we've successfully connected `styles.css` to `index.html`. We'll know it worked if all of our paragraph text appears blue instead of the default black when we load `index.html` at the end of this step.

2. Now we need to link to `styles.css` from within `index.html`. Find the `index.html` file in Atom. Read the following code snippet and make sure you understand what it does. Then, copy and paste it into the `<head>` area of `index.html`, just below the `<meta>` tag.

```
<link rel="stylesheet" type="text/css" href="static/css/styles.css">
```

**Questions to Consider**
- What are `rel`, `type` and `href` called?
- What are `"stylesheet"`, `"text/css"` and `"static/css/styles.css"` called?
- Why do we use the filepath `"static/css/styles.css"`?

Open `index.html` in Chrome. The blurb under your title should be blue!

![Webpage after making paragraph text blue]()

When you're satisfied that `styles.css` is properly linked to `index.html`, run `git status`. Add and commit, making sure to write a descriptive commit message in the present tense, such as "Link stylesheet to index."


#### Part 4 - Change the background color of your webpage

If you want to change your paragraph text back to black from the temporary blue, do so now by simply deleting all the code in `styles.css`.

Now, write some CSS code in `styles.css` that will change the background color to any color you like! You can use [this color picker](http://htmlcolorcodes.com/color-picker/) to find the right hexadecimal color code.
- Keep in mind that readability is really important. It's very hard for most people to read screens that have really bright backgrounds (yellow, orange, red, pink) or really dark backgrounds (black, brown, navy).

Refresh `index.html` in Chrome by pressing `<COMMAND> + r`. Does your new background color show up?

![Image of webpage after adding blurb](https://github.com/Techtonica/curriculum/blob/master/_projects/recipe-page/screenshots/step4-blurb.png)  


#### Part 5 - Change the font and font color of your headings and paragraphs

Using the `<ul>` unordered list tags and the `<li>` list item tags, list the ingredients in the order that they will be used in the recipe. Be sure to include the amount you need of each ingredient! 

Refresh `index.html` in Chrome by pressing `<COMMAND> + r`.  


![Image of webpage after adding ingredients](https://github.com/Techtonica/curriculum/blob/master/_projects/recipe-page/screenshots/step5-ingredients.png)

> **PAUSE.** Obtain a code review from Techtonica staff.  


#### Part 6 - Add an ordered list of the steps required to make the dish

Using the `<ol>` ordered list tags and the `<li>` list item tags, list the steps that are involved in creating the dish. 

- If there are distinct parts to the recipe, such as "make frosting" and "make the cupcakes", feel free to use sub-headings and multiple ordered lists to clearly show which steps go with which parts of the recipe.

Refresh `index.html` in Chrome by pressing `<COMMAND> + r`.  


![Image of webpage after adding instructions](https://github.com/Techtonica/curriculum/blob/master/_projects/recipe-page/screenshots/step6-instructions.png)  


#### Part 7 - Add at least one image

Using the `<img>` image tag, add an image between the blurb and the list of ingredients.   


<pre>
This should be an image you find online. Do a Google search for "(name of dish) image", 
like "spaghetti image". Click on the "Images" tab in the upper left (it's just to the 
right of "All"). When you find an image you like, click on it to see a larger version. 
Then, click on the "View Image" button. Doing this will open a new tab that contains 
only the image. Copy the URL that appears in the search bar -- this is the URL you can 
use inside the `src` attribute of your `img` tag!
</pre>  


[Here's a short video that walks you through the steps given above](https://youtu.be/lTJWBagWE4c).  


1. You'll need to use the `src` attribute inside the `<img>` tag in order to specify the URL where the image is hosted.
2. Specify the width of the image to be 600px using the `"width"` attribute.

Underneath the image, include a photo credit that links to the source of the image. This just means to link to the main website that originally posted the image. It could be a food blogger's website or something similar. Hint: You'll need to use a combination of tags for this! You can find the URL of the image's owner by clicking on the "Visit" button instead of the "View Image" button:  


![Image of finding image owner's URL](https://github.com/Techtonica/curriculum/blob/master/_projects/recipe-page/screenshots/step7-photo-credit.png)  


![Image of webpage after adding image and photo credit](https://github.com/Techtonica/curriculum/blob/master/_projects/recipe-page/screenshots/step7-image.png)  


> **PAUSE.** Obtain a code review from Techtonica staff.  


#### Part 8 - Add links to similar recipes you found online

Place at least 2 links to similar recipes online underneath the recipe's instructions.

![Image of webpage after adding links to similar recipes](https://github.com/Techtonica/curriculum/blob/master/_projects/recipe-page/screenshots/step8-other-recipes.png)  


#### Part 9 - Put each section in its own `<div>`

Wrap each section (listed below) in its own pair of `<div>` tags:
1. The title and blurb
5. The list of ingredients
6. The list of steps required to make the dish
7. The image(s)
8. The external links to similar recipes

Make sure you maintain the proper levels of indentation after adding the `<div>` tags!

> **PAUSE.** Obtain a code review from Techtonica staff.

-----

### Questions to Consider
- What, if anything, was challening about this phase of the project?
- What did you enjoy the most while working on this phase of the project?
- What questions came to mind as you were working through the steps?
- If you were to explain to a bright child what you worked on during the phase, what would you tell them?

### Extensions
- thing
    
