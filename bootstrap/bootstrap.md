# Bootstrap

### Projected Time
30-45 minutes

### Prerequisites
- "HTML" lesson
- "CSS" lesson
- "UX/UI" lesson

### Motivation
Boostrap is a popular and easy-to-use front-end framework first released by Twitter.  Utilizing Bootstrap significantly reduces the amount of time spent styling your webpages, especially for mobile-development.  

### Objective
**Students will be able to** 
- Create a responsive layout using Bootstrap
- Design a website using the 12-column Grid system
- Inspect an HTML's box model using Chrome's developer tools

### Specific Things To Teach
- How to link to Bootstrap from a CDN within your HTML head tags
- How Bootstrap's 12-column grid system works
	- Containers
	- Rows & columns
	- Specifying screen widths
- How to quickly incoporate a Bootstrap element from the official Bootstrap docs

### Supplemental Materials
- [Official Bootstrap 3.3.5 Documentation](https://bootstrapdocs.com/v3.3.5/docs/)
- [Existing Bootstrap templates you can already use!](https://startbootstrap.com/template-categories/all/)
- [Quick video walkthrough](https://www.youtube.com/watch?v=no-Ntkc836w)

### Mini Lesson
[Bootstrap (Video walkthrough of slides)]

[Bootstrap (slides)](https://docs.google.com/presentation/d/17bEC3-xOEy8lt1BoT3hpQTABOUTKB7ueZeJQRiQ2YW0/edit#slide=id.g22b045fc2c_0_8)

### Things to Remember
- **Bootstrap v4 is still in beta, so stick to version 3.3.7 for now. 
- **There is no need to download the Bootstrap files.** Simply use a CDN link as shown in the slides and the Bootstrap docs.
- **There is a** `bootstrap.css` **and a** `bootstrap.js` **.**  The `bootstrap.css` file is what most people refer to when they talk about Bootstrap. The `bootstrap.js` file is only necessary when you want to make interactive components like drop-down menus, modals, and the like. In that case, you'll need to use `bootstrap.js` **in addition to** `bootstrap.css`.
- **The** `bootstrap.js` **file needs jQuery in order to work.** Make sure you've linked to the jQuery CDN **above** your link to the `bootstrap.js` CDN.  

### Independent Practice
- [Bootstrap lab exercise](curriculum/express/bootstrap-lab-exercise.md)

### Challenge
Using online resources, create a functional Bootstrap modal component. It should display some content, and also open and close.

### Check for Understanding
Students should be able to draw a wireframe diagram demonstrating how the 12-colum grid system work.  
