# Step 1: Register as a Volunteer
Before doing anything else, you must [register as a volunteer](https://docs.google.com/forms/d/e/1FAIpQLSeW0mo-Dpsig70374UEPvzexpas-31Ost_HsFwm0kjNOxtbtg/viewform?c=0&w=1).

# Step 2: Read through and Agree to the Code of Conduct
Before opening an issue, commenting, etc you must read and agree to the [Code of Conduct](/CODE_OF_CONDUCT.md).

# Step 3: Finding an Issue to Work On

## External Hackathon Participants
- **Follow Step 1 and Step 2 above**
- If you are new to contributing to GitHub projects, review the [GSSoC guide](https://github.com/GSSoC24/Contributor/tree/main/gssoc-guidelines), [program staff](https://techtonica.org/team/), or talk to a Techtonica mentor via Slack (in #mentors).
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
- Please note any time senstive due dates or labels! Any amount of help is appreciated, but if the deadline approaches and you won't be able to complete it, please leave a comment about your progress and unassign yourself from the issue so someone else can pick it up. If you forked the repo, go ahead and make a pull request with what you have, and transfer ownership of a copied slideshow to info@techtonica.org.
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
