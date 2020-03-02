# Code liniting + es-lint Instructions

### Projected Time

10-15 minutes
- Lesson: 5-7 min
- Guided Practice: 5 min (Mock Project)
- Independed Practice: (Implement it with your projects)
- Check for Understanding: 1 min

### Prerquisites
Here are topics you must be comfortable with to get the maximum benefit out of this topic:

- [JavaScript](https://github.com/Techtonica/curriculum/blob/master/javascript/javascript-1.md)
- A project to follow along

### Motivation 

Linting is  a process of using a tool to automatically check your code for potential problems. There are several benefits for doing so for your code:
- **Highlighting potential errors and bad patterns.** Linters can perform advanced checks to uncover possible errors such as duplicate variables, unreachable code or invalid regular expressions. A warning from the linter will allow you to fix the errors before they even try to run the code.
- **Keeping your code style consistent.** It allow you to check you code style for issues like spacing, indentation and placement of braces. Once your team agrees on the coding style, linter can be configured accordingly and checked automatically.
- **Enforcing quality.** Well run projects have clear consistent coding conventions, with automated enforcement.If a linting tool is wired into your build process, you may simply prevent the project from starting or being committed into your repository if there are unfixed errors.
- **Time saving** At the end it'll only save your time from searching silly bugs and waiting for your Pull Request to be merged due to lack of inconsistency in code styly.