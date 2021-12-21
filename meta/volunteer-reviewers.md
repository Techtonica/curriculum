# Volunteer Assignment Reviewers Guide

Hello and thank you for volunteering your time to help review assignments. This is a huge help to the program because it frees up staff's time to pair and work with the participants directly.

# TL;DR on the Process

- Be on the lookout for Trello notification emails
- Review promptly or inform SEAM you can't
- Be respectful; encourage learning (remember this isn't production code you'll be paged for)
- Thanks!

Questions about this doc or process, please reach out to staff (https://techtonica.org/team/) on Slack.

## Managing the Overall Workflow

We'll be using Trello to manage the tasks. You should receive an invite to the board using the email you use on our Slack instance. If no tickets are assigned to you, you don't have to do anything.

### Steps

1. You get a notification a task has been assigned (typically a batch of ~4 Pull Requests)
1. Review the assignment complexity and see if your schedule permits finishing it by the due date
1. If so, reply on the card that you can do it (or that you won't be able to this time -- no hard feelings!)
1. Move the card to in-progress and review them
1. If the item is a Pull Request, review using GitHub's commenting UI
1. If it's not a PR, you can add your comments to Trelllo and the SEAM will handle sending them to the code author
1. Add a high-level 👍👎 for each assignment so the SEAM can see at a glance if there are any issues to address
1. Move the card to done!
1. You are off the hook until a new task is assigned to you (round robin)
1. Thank you!!!

### Turnaround Time / Due Dates

In general, I will put a due date one week out for the ticket. If something in your work life or life life comes up and you don't think you'll be able to meet the due date, ping me ASAP on Slack so I can reassign the work.

## Code Reviewing: A Philopsophy

IMHO reviewing code is like reviewing someone's writing. Don't tell the writer what you would've done, review what they did on their terms and leave comments that let them make the best version of their implementation as they can.

### Tips

This is something I tell all code reviewers on my teams, especially when reviewing code from less senior engineers.

- Never just leave line-level comments. Always include a high level written comment on the whole submission even if you choose "approve" in the workflow. Just use an emoji if you don't have anything specific to add.
- If they did something clever in the code or you learned something, let them know! Positive comments go a long way
- Avoid directive/command language. It takes extra time but adding "Did you try X?" or "I would suggest trying Y" works better than "Do X" or "Y can do this in less lines of code"
  - [Example](https://speakerdeck.com/kkasprak/creating-an-inclusive-code-review-culture?slide=34)
- If unsure, ask questions rather than making assumptions
- If you suggest that something is a "best practice" or what's worked for you, take the time to say why (or link a blog that has explained it). This is because having to navigate contradicting opinions, while a realistic part of an engineer's life, mostly just slows down learning at this stage
- Links to API docs are _really_ helpful!

## Reviewing a Single Pull Request

You shouldn't spend more than 20 minutes on any individual review. If there are so many issues that this isn't possible, ping the SEAM on Slack. For example, a submission is riddled with issues, don't feel compelled to comment on every issue you are saying. You can simply add feedback saying there are a lot of issues and escalate it to the SEAM.

### Expectations from the Code

At the start of the process, participants are just expanding on their JavaScript fundamentals, and it's not as important to comment on very specific aspects of their code, such as formatting, etc. These lists will evolve over time as the participants progress, but as of now these are where to focus your energy.

### Always Appreciated

- **Always include a high-level summary** rather than _just_ line-level comments
- Point out what's looking good - use emojis or your own style!
- If you learned something you'd never seen, that's worth a comment! (it helps make it clear learning is never done)
- Links to helpful resources you've found valuable about concepts you see in the code
- Suggestions for possible revisions
- If you were a senior engineer on the code author's team, you could offer to pair with them on an issue. Instead, since you are unable to do this, encourage them to follow up on significant misunderstandings with their assigned Pair of the Day, their mentor, or the SEAM.

### Important Facets

## Grading Level 0

- **The requirements of the assignment have been met**
  - if anything is missing call it out in the comments
  - if it's not clear if something covers the requirements, leave a comment indicating your question and the participant can discuss later with the SEAM
  - if anything about the assignment description is unclear to you, ping the SEAM
- Does what you see make you worried that the author of this code does not understand the **fundamentals** of JavaScript?
- Naming: never too early to have clear variable and function names
- If the flow is confusing even after a re-read, that is worth mentioning at any level. Coupling it with a small, concrete suggestion to improve readability is helpful as well (vs something big like "rewrite all of this using OOP")
- If their Pull Request has extraneous content, comment but try to ignore (including committing all of node_modules)

## Grading Level 1

In addition to lower levels, also check in on:

- The Pull Request itself
  - Does it have a good name and description?
  - Is it clean and only has changes related to the project?
  - Are all files that should be ignored ignored? (e.g. node_modules)
- Did they repeat simple code that could be extracted into a function?
- Did they write out some logic where a standard method already exists? (e.g. looping to find an element in an array instead of using [Array.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find).

## Grading Level 2

At this stage, they should be comfortable with JavaScript

- Are they sticking with idiomatic JavaScript constructs? Now is a good time to mention newer ES2015 features
  - (add a link explaining the concept if you do)
- Terseness: now is the level where you can say there is a way to replace a 50 line function with an arrow function + ternary in ES2015
- Some test coverage: by now they should be including some unit test cases. Suggesting any missing cases is always useful.
- Favor less line-level comments and instead higher-level areas to improve, such as design

## Grading Level Z

At this stage, they should have built a lot of practiced skills.

- Review this code exactly as you would an intern on your team
- **Look for elective opportunities**
  - Add suggestions for where they could go deeper on any areas
  - e.g. could they meta-program repetition (like their own mini-framework)
  - Maybe a library you've used could help do something - recommend they look at its source code

### Unimportant Facets (regardless of Level)

- Style nits
  - We're not using linters yet
  - If the formatting is so unusual it makes it's tough to read, please comment
  - When we want style to strictly matter we're going to enforce a standard programmatically
- Absolute Efficiency: unless something is blatantly inefficient we don't yet care very much about the best way to implement something

## Summary

See the workflow above or ping the SEAM on Slack if you have any questions!
