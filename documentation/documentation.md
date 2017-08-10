# Documentation

### Projected Time
30-45 minutes

### Prerequisites
Knowledge of what uncommented HTML, CSS, and Javascript look like

### Motivation
To be able to effectively add comments to your code, either for your own reference or for collaborators.

### Objective
**Students will be able to** add documentation to their project via inline comments.

### Specific Things To Teach
- inline comments in HTML, CSS, JavaScript
- Markdown

### Materials

- [Wikipedia: Best coding practices: Commenting](https://en.wikipedia.org/wiki/Best_coding_practices#Commenting)

### Mini Lesson

Comments have been around as long as code.

Now, with version control (such as Git), their purpose has changed a little.

Comments exist to fill the gap between the information presented by variable names and the fuller information in official, formal documentation.

Question: what do you think a good function comment would include?

The best comments do these things:
- Are concise
- Explain things that aren't obvious from the code and its structure
- Give fuller context to the function or module
- Describe any work left (often marked by TODO or something similar)
- Give programmers the information they need to work without breaking things (including you, when you return to code-in-progress)

Comment format varies between programming languages.

HTML comments
```<!-- look like this -->```

In Javascript, a single-line comment
```// looks like this```.
The code will run, but that line will be skipped.
A multi-line comment
```/* looks like```
```this */ ```

For CSS, all comments ```/* look like this */```, whether on one line
```/* or on```
```two lines. */```

Single-line comment format can also be used at the end of a line of code for a single-line note.

```span {```
```  color: blue; // This is the CEO's fav color.```
```  font-size: 1.5em;```
```}```

Comments are also used during debugging - you can ensure a line of your file is skipped without having to delete and replace it.

Sublime Text's shortcut for commenting out a line is command + /, with the cursor on the line you want to comment out. This also usually works to remove the comment formatting. For blocks of text, highlight it and then use command + /.

### Common Mistakes / Misconceptions

Make sure your comments will make sense to someone with little context for what you were trying to do.

It's tempting to make "note-to-self"-style comments, especially early in a project. But both future collaborators and your future self will be grateful if you're very clear from the start.

Comments should document the present and occasionally the future, but they should not be used to describe history. That's what version control is for.

### Guided Practice

Write a function to iterate through a list. Now write a line or two of comment to describe what your function does and why you approached your code in the way you did. Compare your comments with others' and talk through the choices you made. What's most effective? What would you be glad to see in code you needed to edit or otherwise work with?

### Independent Practice

Do some research on guidance on comments from programmers writing online. What do you agree with? Do you think more experienced programmers need very different content in comments than programmers toward the beginning of their career?

### Challenge

Visit some code you've written before and reread it. Would it be faster to read it with comments? Add comments where you wish they were. Set a date in the future to revisit the code with comments and see if you understand your past self better with that in-line documentation there.

### Check for Understanding

Discuss when comments are appropriate. Now that you know about comments, is there code you wrote recently that would have benefitted from them? Is there code from someone else that you wish had more comments?

### Resources

- [w3schools on HTML comments](https://www.w3schools.com/html/html_comments.asp)
- [Mozilla on CSS comments](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments)
- [Digital Ocean on Javascript comments](https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-javascript)
- [Memorable (if not exactly educational) comments via Stack Overflow](https://stackoverflow.com/questions/184618/what-is-the-best-comment-in-source-code-you-have-ever-encountered)

