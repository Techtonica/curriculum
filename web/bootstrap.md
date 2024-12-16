# Bootstrap

### Projected Time

About 4 hours 45 minutes

- 15 minutes for video walkthrough of slides
- 30 minutes for Independent Practice
- 4 hours for Independent Practice & Challenge

### Prerequisites

- [HTML lesson](/web/html.md)
- [CSS lesson](/web/css.md)
- [UI/UX lesson](../ui-ux-design/ui-ux-design.md)

### Motivation

Bootstrap is a popular and easy-to-use front-end framework first released by Twitter (or X). Utilizing Bootstrap significantly reduces the amount of time spent styling your webpages, especially for mobile-development.

**Example of working websites that have used bootstrap**

Below are the examples of websites that have used bootstrap:

- [Involvio](https://involvio.com/)
- [Engine Yard](https://www.engineyard.com/)

### Objectives

**Participants will be able to:**

- Create a responsive layout using Bootstrap
- Design a website using the 12-column Grid system
- Inspect an HTML's box model using Chrome's developer tools

### Specific Things to Learn

- How to link to Bootstrap from a CDN within your HTML head tags
- How Bootstrap's 12-column grid system works - Containers - Rows & columns - Specifying screen widths
- How to quickly incorporate a Bootstrap element from the official Bootstrap docs

### Supplemental Materials

- [Things you can build using Bootstrap](https://bootstrapdocs.com/v3.3.5/docs/components/)
- [Interactive Bootstrap features](https://bootstrapdocs.com/v3.3.5/docs/javascript/)
- [Existing Bootstrap templates you can already use!](https://startbootstrap.com/template-categories/all/)
- [Quick video walkthrough](https://www.youtube.com/watch?v=no-Ntkc836w)

### Lesson

[Bootstrap (Video walkthrough of slides)](https://drive.google.com/file/d/1O8RqmTz1hp6YejulWuq45dyn_ycZX1aP/view?usp=sharing)

[Bootstrap (slides)](https://docs.google.com/presentation/d/17bEC3-xOEy8lt1BoT3hpQTABOUTKB7ueZeJQRiQ2YW0/edit#slide=id.g22b045fc2c_0_8)

### Things to Remember

- **Bootstrap is currently on version 4**
- **There is no need to download the Bootstrap files.** Simply use a CDN link as shown in the slides and the Bootstrap docs.
- **There is a** `bootstrap.css` **and a** `bootstrap.js` **.** The `bootstrap.css` file is what most people refer to when they talk about Bootstrap. The `bootstrap.js` file is only necessary when you want to make interactive components like drop-down menus, modals, and the like. In that case, you'll need to use `bootstrap.js` **in addition to** `bootstrap.css`.
- **The** `bootstrap.js` **file needs jQuery in order to work.** Make sure you've linked to the jQuery CDN **above** your link to the `bootstrap.js` CDN.

### Independent Practice

**Activity 1 - What Can Be Done with Bootstrap?**

This is an independent activity and pairs will not be assigned.

Spend 20 minutes exploring this link given in the "Supplemental Materials" section above: [Things you can build using Bootstrap](https://bootstrapdocs.com/v3.3.5/docs/components/). Make a list that includes some of the most useful components, your favorite components, or components you think would be really neat to add to a project.

Spend 10 minutes exploring this link given in the "Supplemental Materials" section above: [Interactive Bootstrap features](https://bootstrapdocs.com/v3.3.5/docs/javascript/). Add some of these features to the list you created in the first portion.

**Activity 2 - Your First Bootstrap Webpage!**

Techtonica staff will assign pairs.

1. Using your Terminal, navigate to your Desktop.

2. Create a new directory called `vegetables-webpage`.

3. Navigate to `vegetables-webpage`. Open the whole directory with `code .` .

4. Create a file called `vegetables.html`. It should automatically appear in the left sidebar in VS Code as an editable file.

5. Open [this lab exercise](https://www.teaching-materials.org/bootstrap-hosting-github/exercises/grid/grid_instructions) in a new tab by pressing `<CONTROL>` and clicking on the link. A selection box will appear. Click on "Open in new tab".

6. Open the link provided in the first bullet point in a new tab as well. Using the Quick Source Viewer Chrome extension you installed in the "Chrome Developer Tools" lesson, view the HTML and talk through the code with your pair partner. Can you explain what each section accomplishes? Once you feel satisfied that you understand what the code is doing, move on to the next step.

7. Copy the HTML you accessed in the previous step into `vegetables.html`. Save the file. Close the Chrome tab that you opened in Step 6 (the one you used the Chrome Quick Source Viewer extension on).

8. In a new tab, open `vegetables.html` in Chrome using one of the techniques you learned in the "HTML" lesson. It should look the same as the example you saw a moment ago. You'll refer back to this tab through this exercise as you add code and refresh this webpage.

9. Continue on with the tutorial you opened in Step 5 and see how far you can get. You'll likely make small bursts of progress using trial and error. That's OK! Be patient with yourself. Remember to stick to the 20-minute rule before asking a peer or instructor for help. Before clicking "Show Solution" at the bottom of the tutorial, please give this exercise a good-faith effort.

### Challenge

1. Did you specify in `vegetables.html` column widths for various screen sizes? If you didn't, please do so now.

2. Using online resources, add a Bootstrap modal window component to your Vegetables webpage. The modal window should display some content, and also open and close. Remember: which Bootstrap CDN link do you need to add before you can add interactive features?

### Check for Understanding

Form small groups and discuss - What is a grid system? - What is a responsive layout? - How to customize Bootstrap? - What can you build with Bootstrap? - Why use Bootstrap?
