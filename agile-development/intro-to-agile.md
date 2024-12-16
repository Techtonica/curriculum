# Intro to Agile

### Projected Time

- Part 1 - Introduction to Agile: 30-45 min
- Part 2 - Working in an Agile team (Scrum simulation game): 1-1.5 h

### Prerequisites

N/A

### Motivation

The benefits of Agile software development includes:

- Stakeholder Engagement
- Transparency
- Early and Predictable Delivery
- Predictable Costs and Schedule
- Allows for Change
- Focuses on Business Value
  [(seguetech.com)](https://www.seguetech.com/8-benefits-of-agile-software-development/)

**Which companies use agile development?**

- [LEGO](https://www.lego.com/en-us)
  - Use of agile development resulted in:
    - Better predictability
    - Higher Productivity
- [Cisco](https://www.cisco.com/)
  - Once Cisco started following the SAFe methodology, they got: - A 40% decrease in critical and major defects. - A 16% decrease in DRR (Defect Rejected Ratio). - A 14% improvement in DRE (Defect Removal Efficiency). - There is no more overtime, and the product increment is delivered on time.
    [(objectstyle.com)](https://www.objectstyle.com/agile/scaled-agile-success-story-lessons)

### Objectives

**Participants will be able to:**

- Explain why Agile became popular in the software development world
- Identify the difference between plan-driven and Agile development
- Understand Agile values and principles
- Name and understand at least 2 Agile methods and some technical and process-oriented tools

### Specific Things to Learn

- Definition of Agile
- Agile is an umbrella term
- Plan-driven vs. Agile development
- What is plan-driven development?
- The Stacey Complexity Model
- Characteristics and Challenges of plan-driven development
- How is Agile Different?
- Agile Manifesto
- Common Agile Methods and Practices
- Minimum Viable Product (MVP)

### Materials

- [Techtonica sildes: Agile Project Management](https://docs.google.com/presentation/d/1SdCigo6K4aW8p-SZRA0vdI6w628pwhjzf-oX8UKIhS8/edit#slide=id.p)
- [Blog Post: Manifesto for Agile Software Development(1 min read)](http://agilemanifesto.org/)
- [Video: Explaining Scrum in less than 120 seconds](https://www.youtube.com/watch?v=WxiuE-1ujCM)
- [Blog Post: What is a user story?(4 min read)](https://www.mountaingoatsoftware.com/agile/user-stories)
- [Blog Post: What Is a Kanban Board?(5 min read)](https://leankit.com/learn/kanban/kanban-board/)

### Definition of Agile

"Agile is the ability to both create and respond to change in order to succeed in an uncertain and turbulent business environment." - [Jim Highsmith](https://en.wikipedia.org/wiki/Jim_Highsmith) - co-author of the Agile Manifesto

More specifically, Agile is a set of values and principles, which describe a culture in which change is welcome ([and even seen as a competitive advantage](https://adamprescott.net/2013/02/05/a-late-change-in-requirements-is-a-competitive-advantage/)), and the customer is the focus of the work.

Agile advocates adaptive planning, iterative and incremental development, close collaboration with the customer, and cross-functional teams to build working software.

Agile values and principles, as outlined in the Agile Manifesto, underpin a lot of software development methods and practices, such as Scrum or Extreme Programming (XP).

### Agile is an umbrella term

Each agile methods has a slightly different approach for implementing the core values from the Agile Manifesto, just as many computer languages manifest the core features of object-oriented programming in different ways.

### Plan-driven(Waterfall) vs. Agile development

Agile and Waterfall are very different software development methodologies and are good in their respective way.

However, there are certain major differences highlighted below -

- Waterfall model is ideal for projects which have defined requirements, and no changes are expected.
- On the other hand, Agile is best suited where there is a higher chance of frequent requirement changes.
- The waterfall is easy to manage, sequential, and rigid method.
- Agile is very flexible and it possible to make changes in any phase.
- In Agile process, requirements can change frequently. However, in a waterfall model, it is defined only once by the business analyst.
- In Agile Description of project, details can be altered anytime during the SDLC process which is not possible in Waterfall method.

> Note: This comparison doesn’t imply that one is good and the other is bad --> both are “tools” and there is no such thing as a bad tool, just an inappropriate use of that tool.

### What is plan-driven development?

The idea behind plan-driven is that the better the planning and the better you understand the plan, the better the execution of the plan and the outcome.

Plan-driven development is often called sequential or waterfall -> because tasks are performed in a sequence.
E.g. you first write the requirements, you complete the design, you implement the design, then you do the testing and ship the product.

_What kind of projects/tasks are well suited for a sequential development?_

### The Stacey Complexity Model

**Stacey-diagram**

![](https://www.scrum-tips.com/wp-content/uploads/2016/02/Simple-vs-Complicated-vs-Complex-vs-Chaotic-2-pi.jpeg)
**Categories**

The Stacey complexity graph divides tasks into four different categories.

- **simple**: Simple tasks are well defined and easy to solve – you know exactly what you have to do and how you can do it. Use data from the past to predict the future, repeat what works well.
- **complicated**: It's not completely clear what you have to have to do and how to do it, needs some negotiation and compromise.
- **complex**: traditional management processes not very effective, the zone of high creativity, innovation.
- **chaotic**: very high levels of uncertainty and disagreement, traditional methods of planning, visioning and negotiation are insufficient. Fundamentally risky.

#### Dimensions of the diagram

- **Level of agreement (about requirements)** This dimension says something about the level of uncertainty of **WHAT** you have to do to complete the task.
- **Level of uncertainty (about technology)** The second dimension shows how uncertain your approach or technology is to finish a task (or build an application). Therefore it indicates the level of uncertainty of **HOW** you complete a task.

Sources / further reading:

- https://www.scrum-tips.com/2016/02/17/stacey-complexity-model/

_Describe step-by-step what needs to be done to prepare a cup of tea. (Baking a cake by following a recipe is another example to use). This should illustrate a defined process. Plot "making a cup of tea" on the Stacey graph._

_Taking a shower in a new hotel room is quite different from that. E.g. you have to figure out the dials, you have to experiment to find the right temperature. This illustrates an empirical process “apply, inspect & adapt” Plot "taking a shower" on the Stacey graph._

_Think about where software development projects sit on this graph? And why …?_

### Characteristics of plan-driven software development projects

- Distinct phases. You only move to the next phase when the preceding phase is completed and perfected.
- Long up-front planning phase before development begins. “Plan your work, work your plan”.
- [Big Design Up Front.](https://en.wikipedia.org/wiki/Big_Design_Up_Front)
- The person who creates the plan doesn't execute the plan.
- The measure of success: “I completed the work according to the plan”

### Challenges with plan-driven software development projects

- Real world problems are not sequential.
- The customer sees the product for the first time when the final product is delivered. (but clients often don't know what they want until they see it)
- Making changes late in the process can be expensive and time-consuming.
- Poor quality (if you run out of time, you have to cut things out at the end in the testing phase.

But, real projects rarely follow the sequential flow that the model proposes.

At the beginning of most projects, there is often a great deal of uncertainty about requirements and goals (see agreement axis in the Stacey graph).

### How is Agile different?

- **Adaptive planning** Agile follows a “just in time” approach to planning. We still plan, but instead of planning everything up front, we do it iteratively. This gives us lots of points to inspect where we are and adjust, which means we are flexible to respond to changes!

- **Iterative and incremental development** Iterative development means starting with something really simple (that provides value!) and adding to it incrementally over time.

- **Close collaboration** Agile development relies on close cooperation and collaboration between all team members and the customer.

- **Working software** A software development team’s focus is on producing working products. On projects using agile management methods, the only way to measure whether you are truly done with a product requirement is to produce the working product feature associated with that requirement. For software products, working software means the software meets what’s called the definition of done: at the very least, developed, tested, integrated, and documented.

- **Cross functional teams** Roles really blur on Agile projects. When done right, joining an Agile team is a lot like working in a mini-startup. People pitch in and do whatever it takes to make the project successful—regardless of title or role.

Agile principles: http://agilemanifesto.org/principles.html

### Agile Manifesto

- Read through [Manifesto for Agile Software Development](http://agilemanifesto.org/)

The Agile Manifesto is a formal proclamation of four key values and 12 principles to guide an iterative and people-centric approach to software development.

The four core values of agile software development as stated by the Agile Manifesto emphasize:

- Individuals and interactions over processes and tools
- Working software over comprehensive documentation
- Customer collaboration over contract negotiation
- Responding to change over following a plan

"That is, while there is value in the items on the right, we value the items on the left more."

### Common Agile Methods

- [Video: Explaining Scrum in less than 120 seconds](https://www.youtube.com/watch?v=WxiuE-1ujCM)
- [Wiki Article: eXtreme Programming (XP) (15 min read)](https://en.wikipedia.org/wiki/Extreme_programming)
- [Wiki Article: Feature Driven Development (FDD) (8 min read)](https://en.wikipedia.org/wiki/Feature-driven_development)

### Common Agile Practices

Process:

- [Blog Post: What is a user story? (4 min read)](https://www.mountaingoatsoftware.com/agile/user-stories)
- [Time-boxing](https://www.agilealliance.org/glossary/iteration)
- [Blog Post: What Is a Kanban Board? (5 min read)](https://leankit.com/learn/kanban/kanban-board/)

Technical:

- [Pair Programming (3 min read)](http://www.extremeprogramming.org/rules/pair.html)
- [Test Driven Development (TDD) (5 min read)](https://www.agilealliance.org/glossary/tdd/)
- [Refactoring (5 min read)](https://refactoring.com/)
- [Continuous Integration (CI) (Just the intro - 5 min read)](https://www.martinfowler.com/articles/continuousIntegration.html)
- Test automation

These are just a few examples, there is so much more. Explore Subway Map to Agile practices: https://www.agilealliance.org/agile101/subway-map-to-agile-practices/

### Minimum Viable Product (MVP)

Minimum Viable Product (MVP) is a concept from Lean Startup by Eric Reis, defined as an MVP as “the version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort.”[source](<https://www.agilealliance.org/glossary/mvp/#q=~(infinite~false~filters~(tags~(~'mvp))~searchTerm~'~sort~false~sortDirection~'asc~page~1)>)

Simply put, an initial version of a product with the minimum core features that will satisfy initial users.

Some benefits of MVP are:

- Allows a team to understand how customers actually interact with the product without fully developing the entire product.
- Provides a feedback loop to guide future deployment.
- Reduces implementation costs.
- Creates relationships with early adopters.

Further reading: [Minimum Viable Product by Agile Alliance](<https://www.agilealliance.org/glossary/mvp/#q=~(infinite~false~filters~(tags~(~'mvp))~searchTerm~'~sort~false~sortDirection~'asc~page~1)>)

### Common Agile Misconceptions

- Agile doesn't mean you don't need to plan
- We do Agile to develop software faster

## XP Simulation Game

If you have time play the XP game to illustrate the following concepts:

- Story planning and estimation
- Story prioritization based on user/business value
- Using a planning board
- Time-boxing and iterations
- Retrospective

All material and an outline of the game can be found and downloaded here: http://www.agilebelgium.be/xpgame/

## Personal Take-Aways

Incorporate the following in personal study:

- **Personal Kanban**
  https://kanbantool.com/personal-kanban-board (Create a personal Kanban board in Trello to track their work)
- **Personal retrospectives** - Inspect and Adapt: Set aside a time of the day to reflect on what went well, what didn't go well and what you can improve!

## Supplemental Resources

- [Blog post:Overview: What is Scrum?(1 min read) ](https://www.scrumalliance.org/about-scrum/overview)
- [Blog post: What is Kanban?(3 min read)](http://kanbanblog.com/explained/)
- [Glossary term: Time-boxing: What is an iteration(2 min read)](https://www.agilealliance.org/glossary/iteration)
- [Wiki Article: eXtreme Programming (XP)(15 min read)](https://en.wikipedia.org/wiki/Extreme_programming)
- [Wiki Article: Feature Driven Delopment (FDD)(8 min read)](https://en.wikipedia.org/wiki/Feature-driven_development)
- [Martin Fowler's blog: A website on building software effectively(3 min read) ](https://martinfowler.com/)
