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
  - Once Cisco started following the SAFe methodology, they got:
    - A 40% decrease in critical and major defects.
    - A 16% decrease in DRR (Defect Rejected Ratio).
    - A 14% improvement in DRE (Defect Removal Efficiency).
    - There is no more overtime, and the product increment is delivered on time.
[(objectstyle.com)](https://www.objectstyle.com/agile/scaled-agile-success-story-lessons)


### Objectives
**Participants will be able to:**

- Explain why Agile became popular in the software development world
- Identify the difference between plan-driven and Agile development
- Understand Agile values and principles
- Name and understand at least 2 Agile methods and some technical and process-oriented tools 

### Specific Things To Teach

### Definiton of Agile 

"Agile is the ability to both create and respond to change in order to succeed in an uncertain and turbulent business environment." - [Jim Highsmith](https://en.wikipedia.org/wiki/Jim_Highsmith) - co-author of the Agile Manifesto

More specifically, Agile is a set of values and principles, which describe a culture in which change is welcome ([and even seen as a competitive advantage](https://adamprescott.net/2013/02/05/a-late-change-in-requirements-is-a-competitive-advantage/)), and the customer is the focus of the work.

Agile advocates adaptive planning, iterative and incremental development, close collaboration with the customer, and cross-functional teams to build working software. 

Agile values and principles, as outlined in the Agile Manifesto, underpin a lot of software development methods and practices, such as Scrum or Extreme Programming (XP).

### Agile is an umbrella term

_insert picture_
	
_Do you recognize any of the methods or tools?_

Each agile methods has a slightly different approach for implementing the core values from the Agile Manifesto, just as many computer languages manifest the core features of object-oriented programming in different ways. 

### Plan-driven vs. Agile development

It’s helpful to introduce Agile principles by comparing them to the beliefs that drive plan-driven, sequential development (waterfall is one example)

Note: This comparison doesn’t imply that one is good and the other is bad --> both are “tools” and there is no such thing as a bad tool, just an inappropriate use of that tool. 

### What is plan-driven development? 

The idea behind plan-driven is that the better the planning and the better you understand the plan, the better the execution of the plan and the outcome.

Plan driven development is often called sequential or waterfall -> because tasks are performed in a sequence. 
E.g. you first write the requirements, you complete the design, you implement the design, then you do the testing and ship the product.

_What kind of projects/tasks are well suited for a sequential development?_

### The Stacey Complexity Model

Stacey-diagram 

_insert picture_

http://www.scalingtheheights.com/wp-content/uploads/2016/10/Stacey-diagram.png

__Categories__

The stacey complexity graph devides tasks into four different categories.

- __simple__: Simple tasks are well defined and easy to solve – you know exactly what you have to do and how you can do it. Use data from past to predict the future, repeat what works well. 
- __complicated__: It's not completely clear what you have to have to do and how to do it, needs some negotiation and compromise.
- __complex__: traditional management processes not very effective, zone of high creativity, innovation.
- __chaotic__: very high levels of uncertainty and disagreement, traditional methods of planning, visioning and negotiation are insufficient. Fundamentally risky. 

#### Dimensions of the diagram

- __Level of agreement (about requirements)__ This dimension says something about the level of uncertainty of __WHAT__ you have to do to complete the task. 
- __Level of uncertainty (about technology)__ The second dimension shows how uncertain your approach or technology is to finish a task (or build an application). Therefore it indicates the level of uncertainty of __HOW__ you complete a task.

Sources / further reading: 

- http://www.scalingtheheights.com/complexity-theory-stacey-diagram/
- https://www.scrum-tips.com/2016/02/17/stacey-complexity-model/


_Describe step-by-step what needs to be done to prepare a cup of tea. (Baking a cake by following a recipe is another example to use). This should illustrate a defined process. Plot "making a cup of tea" on the stacey graph._

_Taking a shower in a new hotel room is quite different from that. E.g. you have to figure out the dials, you have to experiment to find the right temperature. This illustrates an empirical process “apply, inspect & adapt” Plot "taking a shower" on the stacey graph._

_Think about where software development projects sit on this graph? And why …?_

### Characteristics of plan-driven software development projects

- Distinct phases. You only move to the next phase when the preceding phase is completed and perfected.
- Long up-front planning phase before development begins. “Plan your work, work your plan”. 
- [Big Design Up Front.](https://en.wikipedia.org/wiki/Big_Design_Up_Front) 
- The person who creates the plan doesn't execute the plan. 
- Measure of success: “I completed the work according to the plan” 

### Challenges with plan-driven software development projects

- Real world problems are not sequential.
- The customer sees the product for the first time when final product is delivered. (but clients often don't know what they want until they see it)
- Making changes late in the process can be expensive and time-consuming.
- Poor quality (if you run out of time, you have to cut things out at the end in the testing phase. 

But, real projects rarely follow the sequential flow that the model proposes. 

At the beginning of most projects there is often a great deal of uncertainty about requirements and goals (see agreement axis in the Stacey graph). 

### How is Agile different? 

- __Adaptive planning__ Agile follows a “just in time” approach to planning. We still plan, but instead of planning everything up front, we do it iteratively. This gives us lots of points to inspect where we are and adjust, which means we are flexibility to respond to changes!

- __Iterative and incremental development__ Iterative development means starting with something really simple (that provides value!), and adding to it incrementally over time.

- __Close collaboration__ Agile development relies on close cooperation and collaboration between all team members and the customer. 

- __Working software__ A software development team’s focus is on producing working products. On projects using agile management methods, the only way to measure whether you are truly done with a product requirement is to produce the working product feature associated with that requirement. For software products, working software means the software meets what’s called the definition of done: at the very least, developed, tested, integrated, and documented. 

- __Cross functional teams__ Roles really blur on Agile projects. When done right, joining an Agile team is a lot like working in a mini-startup. People pitch in and do whatever it takes to make the project successful—regardless of title or role.

Agile principles: http://agilemanifesto.org/principles.html 

### Agile Manifesto 

http://agilemanifesto.org/

The Agile Manifesto is a formal proclamation of four key values and 12  principles to guide an iterative and people-centric approach to software development. 

The four core values of  agile software development as stated by the Agile Manifesto emphasize:
- Individuals and interactions over processes and tools
- Working software over comprehensive documentation
- Customer collaboration over contract negotiation
- Responding to change over following a plan

"That is, while there is value in the items on the right, we value the items on the left more."

### Common Agile Methods
- [Scrum](https://www.youtube.com/watch?v=WxiuE-1ujCM)
- [eXtreme Programming (XP)](https://en.wikipedia.org/wiki/Extreme_programming)
- [Feature Driven Delopment (FDD)](https://en.wikipedia.org/wiki/Feature-driven_development)

### Common Agile Practices

Process:
- [User stories](https://www.mountaingoatsoftware.com/agile/user-stories)
- [Time-boxing](https://www.agilealliance.org/glossary/iteration)
- [Kanban board](https://leankit.com/learn/kanban/kanban-board/)
- [Retrospectives](http://finding-marbles.com/retr-o-mat/what-is-a-retrospective/)

Technical:
- [Pair Programming](https://www.versionone.com/agile-101/agile-software-programming-best-practices/continuous-integration/)
- [Test Driven Development (TDD)](https://www.versionone.com/agile-101/agile-software-programming-best-practices/test-first-programming/)
- [Refactoring](https://www.versionone.com/agile-101/agile-software-programming-best-practices/refactoring/)
- [Continious Integration (CI)](https://www.martinfowler.com/articles/continuousIntegration.html)
- Test automation 

These are just a few examples, there is so much more. Explore Subway Map to Agile practices: https://www.agilealliance.org/agile101/subway-map-to-agile-practices/ 

### Common Agile Misconceptions
- Agile doesn't mean you don't need to plan
- We do Agile to develop software faster

## XP Simulation Game 
If you have time play the XP game to illustrate the following concepts:

- Story planning and estimation
- Story prioritisation based on user/business value
- Using a planning board
- Time-boxing and iterations
- Retrospective 

All material and an outline of the game can be found and downloaded here: http://www.agilebelgium.be/xpgame/ 

## Personal Take-Aways

Incorporate the following in personal study: 

- __Personal Kanban__
https://kanbantool.com/personal-kanban-board (Create a personal Kanban board in Trello to track their work)
- __Personal retrospectives__ - Inspect and Adapt: Set aside a time of the day to reflect on what went well, what didn't go well and what you can improve! 

## Resources / Further reading

- [Agile Manifesto](http://www.agilemanifesto.org/principles.html)
- [Scrum](https://www.scrumalliance.org/why-scrum)
- [What is Kanban?](http://kanbanblog.com/explained/)
- [Martin Fowler's blog](https://martinfowler.com/) 
- [Finding Marbles blog - Corinna Baldauf](http://finding-marbles.com/)
