# Step 1: Register as a Volunteer
Before doing anything else, you must [register as a volunteer](https://docs.google.com/forms/d/e/1FAIpQLSeW0mo-Dpsig70374UEPvzexpas-31Ost_HsFwm0kjNOxtbtg/viewform?c=0&w=1).

# Step 2: Read through and Agree to the Code of Conduct
Before opening an issue, commenting, etc you must read and agree to the [Code of Conduct](/CODE_OF_CONDUCT.md).

# Step 3: Finding an Issue to Work On

## External Hackathon Participants
- **Follow Step 1 and Step 2 above**
- If you are new to contributing to GitHub projects, review the [GSSoC guide](https://github.com/GSSoC24/Contributor/tree/main/gssoc-guidelines), read the [best practices](#best-practices) section below, contact Techtonica [program staff](https://techtonica.org/team/) or talk to a Techtonica mentor via Slack (in #mentors).
  - [Issues tagged with GSSoC](https://github.com/Techtonica/curriculum/issues?q=is%3Aissue%20is%3Aopen%20label%3Agssoc%20no%3Aassignee)
  - [Issues tagged with ODHack14](https://github.com/Techtonica/curriculum/issues?q=is%3Aissue%20is%3Aopen%20label%3AODHack14%20no%3Aassignee)
  - [Issues tagged with Hacktoberfest](https://github.com/Techtonica/curriculum/issues?q=is%3Aissue%20is%3Aopen%20label%3AHacktoberfest%20no%3Aassignee)
  - [Issues tagged with GHC](https://github.com/Techtonica/curriculum/issues?q=is%3Aissue%20is%3Aopen%20label%3AGHC%20no%3Aassignee)

## Techtonica Volunteers
Find any [unassigned open issue](https://github.com/Techtonica/techtonica.org/issues?q=is%3Aissue%20is%3Aopen%20no%3Aassignee).

## All Contributors
- If you find an issue that sounds interesting to you and you have the knowledge to complete it...
  - **Confirm no one is already assigned to it has in-progress work**
  - **Confirm no one has commented already asking to be assigned** - assignments are assigned to the first commenter
- Leave a comment stating the following:
  - [ ] Formally ask to be assigned to the issue (feel free to follow it up with a slack message).
  - [ ] Formally acknowledge that you agree to the [Code of Conduct](/CODE_OF_CONDUCT.md).
  - [ ] Include confirmation that you have filled out the [Volunteer Google Form](https://docs.google.com/forms/d/e/1FAIpQLSeW0mo-Dpsig70374UEPvzexpas-31Ost_HsFwm0kjNOxtbtg/viewform?c=0&w=1)
  - [ ] Include any clarification questions you may have after reading the description. Specific questions work better, e.g. "Which file should change?" rather than asking a broader question such as requesting "an explanation" or "more details"
- Once you have been assigned on the issue, **do not request assignment to any other issues until you have opened a Pull Request**. If you changed your mind and would rather work on a different one, comment on the originally assigned issue to request to be **unassigned**
- Create a pull request of the changes requested by completing the prompted pull request template.
- Review our [Style Guide](https://github.com/Techtonica/techtonica.org/wiki#links-to-styling-guides) to make sure your changes conform to it.

🎗️ _**Please note, all repo support will operate within U.S. Pacific Timezone.**_

## Working on your Issue
- Comment on the issue directly from the [TO-DO column](https://github.com/Techtonica/curriculum/projects/2), that means it is available, even if there's an "assignee". If you have a question (feel free to follow it up with a Slack message).
- In the issue, you should find a link for a lesson outline and for corresponding slides.
- People are welcome to team up on an issue. If you see someone is already assigned but you want to help, leave the other assignee a message on the issue about collaborating.
- Please note any time sensitive due dates or labels! Any amount of help is appreciated, but if the deadline approaches and you won't be able to complete it, please leave a comment about your progress and unassign yourself from the issue so someone else can pick it up. If you forked the repo, go ahead and make a pull request with what you have, and transfer ownership of a copied slideshow to info@techtonica.org.
- To **create an topic outline**, fork the repo or commit directly onto the main branch. [Here is a topic outline template that explains what we need for each section](./_templates/topic-outline.md).
- To **edit a slideshow**, you'll need to request edit permission by clicking View Only > Request Edit Access, or message info@techtonica.org. If you are logged into an account ending in @gmail.com, you can simply make a copy, edit, and transfer ownership to info@techtonica.org when you finish. Either way, save on top of the sample template used in the slide, and cut any slides you find unnecessary.
- To make a **video**, one effective solution has been to record your screen as you explain the lesson slides. An alternative can be a video found online that covers all the objectives of the lesson in a way suited to beginners.
- Here is an **example** of a great lesson trio: [MongoDB Slides](https://docs.google.com/presentation/d/1BvO6PrSpulHVSDNOkMaDZM-V7McmheLgm0Lg2PFae7k/edit#slide=id.p), [MongoDB Lesson Outline](/electives/databases/mongo-db.md), [MongoDB Video](https://drive.google.com/file/d/1022MSkPjfRyGAUQa2I-pQltpUn4Q1NJc/view).

## Completed Curriculum Work
Place a "completed" label on the issue once you've completed it, make a pull request to Techtonica/curriculum main, and leave comments about your work if you like.

## Check for dead links
1. Run `npm install` at the project root.
1. Run `npm run validate-links` to find potentially dead links.
1. Check links against [our list of false positives](./meta/false-dead-links.md) to weed out the real dead links that need fixing.
1. Fix links and submit a pull request.
1. Search & check links from github.com & codepen.io manually. These sites block bots, so we are unable to test them effectively with our tool.

## Best Practices
These best practices are very important when working on a development team. Having code reviews from a team means that there will potentially be multiple request for changes from several reviewers. It helps everyone in the code review to understand what has been addressed, iterated on, what remains outstanding, and even gives opportunity to provide any missing context to one another.

#### GitHub Issues
- Leave a comment to request an issue for assignment.
- Communicate status updates about work on issue frequently throughout each sprint week.
- Communicate any blockers or work dependencies on the issue why ensuring that relevant stakeholders are aware.
- Communicate when their work is complete with reference to relevant PRs.

#### Pull Request
When addressing requests for changes it is best practice to do so in a visible and tangible way. You can do this by:
- **Acknowledging** each request for change (i.e. feedback was marked with an emoji reaction to show its accepted).
- Provide a **written response** to the request for changes in one of the following ways:
  1. summary comment addressing each individual request for change stating how and where (the commit hash referenced) you made the change
  2. reply to each comments generated via GitHub in your generated request for change
  3. share an alternative thought with explanation of why you do not wish to implement the request for change or ask any clarifying questions
- Once actively stating how you've addressed a request for change alongside referencing the hash in which the change was made, **mark the comment as "resolved"**.
- Connect the GitHub issue being addressed in the “Development” section
- Assign yourself as the PR “Assignee”
- Request a staff, peer, and mentor reviewer
- The PR title should be descriptive enough to give an at a glance understanding of what you're working on

## Full Time Programs' Project Links:
- Week 1. Recipe Page ([phase 1](https://github.com/Techtonica/curriculum/blob/main/projects/recipe-page/phase-1-html-prompt.md) & [phase 2](https://github.com/Techtonica/curriculum/blob/main/projects/recipe-page/phase-2-css-prompt.md))
- Week 2. Recipe Page ([phase 3](https://github.com/Techtonica/curriculum/blob/main/projects/recipe-page/phase-3-bootstrap-prompt.md) and [phase 4](https://github.com/Techtonica/curriculum/blob/main/projects/recipe-page/phase-4-DOM-Manipulation.md))
- Week 3. Portfolio / Resume Page ([phase 1](https://github.com/Techtonica/curriculum/blob/main/projects/portfolio/portfolio-webpage-1.md), [phase 2](https://github.com/Techtonica/curriculum/blob/main/projects/portfolio/portfolio-webpage-2.md), [phase 3](https://github.com/Techtonica/curriculum/blob/main/projects/portfolio/portfolio-webpage-3.md))
- Week 4. [Games App](https://github.com/Techtonica/curriculum/blob/main/projects/js-html-games.md) (JavaScript)
- Week 5. [Games App](https://github.com/Techtonica/curriculum/blob/main/projects/react-game.md) (React)
- Week 6. [RESTful API](https://github.com/Techtonica/curriculum/blob/main/projects/rest-api-project.md)
- Week 7. [Weather App](https://github.com/Techtonica/curriculum/blob/main/projects/weather-app.md)
- Week 8. [Game/Quiz App](https://github.com/Techtonica/curriculum/blob/main/projects/week8GameREADME.md) (Testing Introduced)
- Week 9. [Eventonica](https://github.com/Techtonica/curriculum/tree/main/projects/eventonica-updated)
- Week 10. [Endangered Animals](https://github.com/Techtonica/curriculum/blob/main/projects/mern-pern-project.md)
- Week 11. 2 mini projects in 1 week! [Contact List](https://github.com/Techtonica/curriculum/blob/main/projects/pern-contact-list-app.md) and choice of [Weather App](https://github.com/Techtonica/curriculum/blob/main/projects/pern-weather-app.md) or [Game App](https://github.com/Techtonica/curriculum/blob/main/projects/pern-game-app.md)
- Week 12. [Blog App](https://github.com/Techtonica/curriculum/tree/main/projects/blog-app)
- Weeks 13 - 18. [Final Project](https://github.com/Techtonica/curriculum/tree/main/projects/final-project)
