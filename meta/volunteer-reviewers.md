# Volunteer Assignment Reviewers Guide

Hello and thank you for volunteering your time to help review assignments. This is a huge help to the program because it frees up the onsite Apprentice Manager's time to pair and work with the apprentices directly.

# TL;DR

- Be on the lookout for Trello notification emails
- Review promptly or inform SEAM you can't
- Be respectful; encourage learning (this isn't production code you'll be paged for)
- Thanks!

Questions about this doc or process, please reach out to the current [Apprentice Manager (SEAM)](https://techtonica.org/team/) in Slack.

## Managing the Overall Workflow
We'll be using Trello to manage the tasks. You should receive an invite to the board using the email you use on our Slack instance. If no tickets are assigned to you, you don't have to do anything.

### Steps

1. You get a notification a task has been assigned (typically a batch of ~6 Pull Requests)
1. Move the card to in-progress and review them
1. Move the card to done!
1. You are off the hook until a new task is assigned to you (round robin)

## Assignment

When the participants turn in their work, I will assign folks and ping them on Slack. Typically it will be a link to the assignment and a batch of pull requests, usually around 6. You shouldn't spend more than 90 minutes on them. If it's taking you longer, let me know and I can reduce the batch size.

### Turnaround Time / Due Dates
In general, I will put a due date one week out for the ticket. If something in your work life or life life comes up and you don't think you'll be able to meet the due date, ping me ASAP on Slack so I can reassign the work.

## Code Reviewing: A Philopsophy

IMHO reviewing code is like reviewing someone's writing. Don't tell the writer what you would've done, review what they did on their terms and leave comments that let them make the best version of their implementation as they can.

### Tips

This is something I tell all reviewers, especially when reviewing code from less senior engineers.

- Avoid directive/command language. It takes extra time but adding "Did you try X?" or "I would suggest trying Y" works better than "Do X" or "Y is better than what you have"
  - [Example](https://speakerdeck.com/kkasprak/creating-an-inclusive-code-review-culture?slide=34)
- If unsure, ask questions rather than making assumptions
- If you suggest that something is a "best practice" or what's worked for you, take the time to say why (or link a blog that has said it better)
- Links to API docs are _really_ helpful!

## Reviewing a Single Pull Request

You shouldn't spend more than 15 minutes on any individual PR. If there are so many issues that this isn't possible, ping the SEAM on Slack.

### Expectations from the Code

At the start of the process, participants are just expanding on their JavaScript fundamentals, and it's not as important to comment on very specific aspects of their code, such as formatting, etc. These lists will evolve over time as the participants progress, but as of now these are where to focus your energy.

### Always Appreciated

- Point out what's looking good - use emojis or your own style!
- Links to helpful resources you've found valuable about concepts you see in the code, done well or less so
- Always include a high-level summary rather than _just_ line-level comments
- Suggestions for possible revisions
- If you were a senior engineer of the code author's team, you could offer to pair with them on an issue. Instead, since you can't encourage them to follow up with their assigned Pair of the Day, their mentor, or the SEAM to follow up on issues that reveal a conceptual misunderstanding of JavaScript.

### Important Facets

- The requirements of the assignment have been met
  - if anything is missing call it out in the comments in case they forgot
  - if it's not clear, ping the SEAM on Slack
- Naming: never too early to have clear variable and function names
- If the flow is confusing even after a re-read, worth mentioning that since most of the logic at this stage should be easy to follow
- Does what you see make you worried that the author of this code does not understand the **fundamentals** of JavaScript?

### Unimportant Facets (For Now)

- ES2015: for now, Classic ES5 is okay but it is okay if an ES2015 construct would make a big difference (add a link explaining the concept if you do)
- Style: we're not using linters yet so unless it's tough to read, try to ignore formatting
- Efficiency: unless someone is calling a function several times and not storing its value, we don't yet care very much about the best way to implement something
- Terseness: yes there are super fancy ways to run a 50 line function into an arrow function + ternary in ES2015 but it's okay to be verbose for now
- Lack of tests: that's okay for now although if they have some, suggesting any missing cases is good or providing positive feedback for the ones they have is good

## Finishing Up a Review

- Oce all the comments are done, approve the change and merge it into the SEAM fork
- Edit or comment in Trello that you have reviewed it
- Once you have finished reviewing the whole batch, move the Trello card to done!
- That's it!

Thanks again for your help.
