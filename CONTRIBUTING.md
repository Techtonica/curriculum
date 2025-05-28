# Step 0

1. Before doing anything else, you must [register as a volunteer](https://docs.google.com/forms/d/e/1FAIpQLSeW0mo-Dpsig70374UEPvzexpas-31Ost_HsFwm0kjNOxtbtg/viewform?c=0&w=1)

# Step 0.5

1. Before opening an issue, commenting, etc you must read and agree to the [Code of Conduct](/CODE_OF_CONDUCT.md).

# Step 1

## Step 1: GSSoC Participants

- **Follow Step 0 and Step 0.5 above**
- If you are new to how to contribute to GitHub projects, review the GSSoC guide or talk to a mentor (M) in Slack
- Review the [Issues tagged with GSSoC](https://github.com/Techtonica/curriculum/issues?q=is%3Aissue%20is%3Aopen%20label%3Agssoc%20no%3Aassignee)
- If you find one that sounds interesting to you and you have the knowledge to complete it...
  - **Confirm no one is already assigned to it**
  - **Confirm no one has commented already asking to be assigned** - assignments are assigned to the first commenter
- Leave a comment asking to be assigned
  - Include confirmation that you have filled out the Volunteer Google Form
  - also include any clarification questions you may have after reading the description
  - specific questions work better, e.g. "Which file should change?" rather than asking a broader question such as requesting "an explanation" or "more details"
- Once you have been assigned on the issue, **do not request assignment to any other issues until you have opened a Pull Request**. If you changed your mind and would rather work on a different one, comment to request to be **unassigned**
- Create a pull request of the changes requested
  - Review our [Style Guide](_templates/) to make sure your changes conform to it
  - If you are new to how to contribute to GitHub projects, review the GSSoC guide or talk to a mentor (M) in Slack

## Step 1: Other Volunteers

1. Find any unassigned open issue in [our backlog](https://github.com/Techtonica/curriculum/projects/2)
1. Read it over. If you have questions or would like to work on it, leave a comment indicating your interest
1. One of our admins will assign it to you within 48-72 business hours (U.S. Pacific Timezone)

**Get started:**

- Choose an issue from the [TO-DO](https://github.com/Techtonica/curriculum/projects/2) column that seems right for you & message Techtonica staff. If you know someone connected to Techtonica, they may be able to add you to our slack channel.
- In the issue, you should find a link for a lesson outline and for corresponding slides.
- If it is in the ["TO-DO"](https://github.com/Techtonica/curriculum/projects/2) column, that means it is available, even if there's an "assignee".
- To **create an outline**, fork the repo or commit directly onto the main branch. [Here is a topic outline template that explains what we need for each section](./_templates/topic-outline.md).
- To **edit a slideshow**, you'll need to request edit permission by clicking View Only > Request Edit Access, or message info@techtonica.org. If you are logged into an account ending in @gmail.com, you can simply make a copy, edit, and transfer ownership to techtonicaorg@gmail.com when you finish. Either way, save on top of the sample template used in the slide, and cut any slides you find unnecessary.
- To make a **video**, one effective solution has been to record your screen as you explain the lesson slides. An alternative can be a video found online that covers all the objectives of the lesson in a way suited to beginners.
- Here is an **example** of a great lesson trio: [MongoDB Slides](https://docs.google.com/presentation/d/1BvO6PrSpulHVSDNOkMaDZM-V7McmheLgm0Lg2PFae7k/edit#slide=id.p), [MongoDB Lesson Outline](/electives/databases/mongo-db.md), [MongoDB Video](https://drive.google.com/file/d/1022MSkPjfRyGAUQa2I-pQltpUn4Q1NJc/view).

**While working:**

- Comment in the issue if you have a question, or send a slack message.
- People are welcome to team up on an issue. If you see someone is already assigned but you want to help, leave the other assignee a message on the issue about collaborating.
- Please note the **due date**! Any amount of help is appreciated, but if the deadline approaches and you won't be able to complete it, please leave a comment about your progress and unassign yourself from the issue so someone else can pick it up. If you forked the repo, go ahead and make a pull request with what you have, and transfer ownership of a copied slideshow to techtonicaorg@gmail.com.

**Completed curriculum:**

- Place a "completed" label on the issue once you've completed it, make a pull request to Techtonica/curriculum main, and leave comments about your work if you like. Grazie Mille!!

**Check for dead links:**

1. Run `npm install` at the project root.
1. Run `npm run validate-links` to find potentially dead links.
1. Check links against [our list of false positives](./meta/false-dead-links.md) to weed out the real dead links that need fixing.
1. Fix links and submit a pull request.
1. Search & check links from github.com & codepen.io manually. These sites block bots, so we are unable to test them effectively with our tool.
