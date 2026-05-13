# Software Development Lifecycle (SDLC)

### Projected Time

- Lesson reading and discussion: 60–75 minutes
- Guided Practice: 30–40 minutes
- Independent Practice: 30–45 minutes
- Check for Understanding: 15–20 minutes

### Prerequisites

- Basic familiarity with what software is (apps, websites, programs)
- A general idea of what a "developer" does day-to-day
- Comfort using common apps as a _user_ (e.g., WhatsApp, Instagram, a banking app)
- _Optional but helpful:_ exposure to version control concepts (what GitHub is for)

> You do **not** need to know how to code to start this lesson. SDLC is about _how teams build software_, not the code itself.

### Motivation

Imagine you and four friends decide to build a food delivery app to compete with DoorDash or Swiggy. Excited, you all start coding immediately. Two months later: nothing works together, the app crashes when more than 5 users try it, two of you built the same screen twice, and nobody remembers what features were supposed to be in version 1.

This is what happens when teams skip the **Software Development Lifecycle (SDLC)**.

SDLC is the **recipe** real software teams follow to build apps that actually work, ship on time, and don't collapse into chaos. Whether you become a frontend developer, backend engineer, QA tester, designer, or product manager — you will live inside the SDLC every single day.

**Why this matters for your career:**

- In nearly every interview, you'll hear: _"Walk me through how a feature gets built at your company."_ That is an SDLC question.
- Your daily standups, sprint planning, code reviews, and bug tickets are all SDLC activities.
- Google, Netflix, your local startup, and a 2-person team building a side project — all use SDLC. They just call the steps different names.

By the end of this lesson you'll understand the _big picture_ of how software gets made — so when you join your first real team, you won't feel lost in your first sprint.

### Objectives

By the end of this lesson, learners will be able to:

1. **Define** SDLC in their own words and explain why it exists.
2. **Identify** the six main phases of SDLC and describe what happens in each.
3. **Compare** at least two common SDLC methodologies (Waterfall vs. Agile) and give one situation where each is a good fit.
4. **Map** different roles (developer, QA, designer, PM) to the SDLC phases where they are most active.
5. **Recognize** which SDLC phase a real-world activity belongs to (e.g., _"writing user stories"_ → Requirements Analysis).

### Specific Things to Learn

- What SDLC means and why it exists
- The 6 core phases of SDLC and what happens in each:
  - Planning
  - Requirements Analysis
  - Design
  - Implementation (Development)
  - Testing
  - Deployment & Maintenance
- Common SDLC methodologies:
  - Waterfall (sequential)
  - Agile (iterative, adaptive) — including Scrum (sprint-based) and Kanban (flow-based)
  - A short look at DevOps and Spiral
- Stakeholders and roles in the SDLC:
  - Product Manager, Designer, Developer, QA/Tester, DevOps, End User
- Common artifacts produced during SDLC: user stories, wireframes, code, test cases, deployment scripts
- How SDLC connects to tools you'll use daily: Jira, Figma, GitHub, Slack, Datadog

### Materials

- This lesson outline and the embedded diagram
- A whiteboard, shared doc, or collaborative slide deck (Google Slides, Miro, FigJam) for mapping SDLC phases to team roles during the guided practice
- A real-world app the learner uses daily (WhatsApp, Instagram, a banking app, college portal) to anchor examples in
- Access to [Atlassian's SDLC overview](https://www.atlassian.com/agile/software-development/sdlc) (open during the lesson)
- A free [Jira](https://www.atlassian.com/software/jira/free) or [Trello](https://trello.com) account to explore a real backlog during guided practice
- A [GitHub](https://github.com) account to observe pull requests and issue tracking in the wild

### Lesson

#### Part 1: What is SDLC, really?

**SDLC = Software Development Lifecycle.** It's the step-by-step process a team follows to build software — from _"Hey, we should build an app for that"_ all the way to _"the app is live and we're fixing the bugs users reported yesterday."_

Think of it like cooking a meal for guests:

1. You decide what to cook → **Planning**
2. You check what ingredients you need → **Requirements**
3. You plan how the dish will look on the plate → **Design**
4. You actually cook → **Implementation**
5. You taste it before serving → **Testing**
6. You serve it, listen to feedback, and adjust the recipe for next time → **Deployment & Maintenance**

Software works the same way.

#### Part 2: The 6 Phases of SDLC

Let's use one running example throughout: **building a "Stories" feature for a social media app like Instagram.**

<img width="800" height="400" alt="SDLC phases as a continuous cycle" src="https://github.com/user-attachments/assets/4be77004-2d15-4a4f-9adf-95caa219c6f7" />

_The six phases of the SDLC as a continuous cycle ([Wikimedia Commons](https://commons.wikimedia.org/wiki/File:SDLC_-_Software_Development_Life_Cycle.jpg), CC BY-SA 4.0)_

**Phase 1 — Planning**

- The team asks: _Should we build this? Who is it for? What problem does it solve?_
- **Output:** project goal, rough timeline, budget.
- **In our example:** _"Users want to share short, disappearing content. Snapchat is winning here. We have 3 months and 5 engineers."_

**Phase 2 — Requirements Analysis**

- The team figures out _exactly_ what the feature must do.
- **Output:** a list of **user stories** like _"As a user, I want my story to disappear after 24 hours so I can share casual moments without it staying on my profile."_
- **Tools:** Jira, Notion, Confluence.
- **In our example:** Stories must support photos, videos up to 15 seconds, text overlays, and a view count.

**Phase 3 — Design**

- Designers create **wireframes** (rough sketches) and **mockups** (polished screens).
- Engineers decide the **architecture**: _Where will story files be stored? How will we delete them after 24 hours? Which database?_
- **Output:** Figma designs + system architecture diagrams.
- **In our example:** Designer creates the camera screen; engineer plans an AWS S3 bucket with auto-delete after 24 hours.

**Phase 4 — Implementation (Development)**

- Developers actually write the code.
- Frontend devs build the screens; backend devs build the APIs and database logic.
- **Tools:** VS Code, GitHub, Slack.
- **Output:** working code, merged via **pull requests** (a request to add new code to the project).
- This is the phase most beginners think _is_ software development. In reality, it's only ~30–40% of the lifecycle.

**Phase 5 — Testing (Quality Assurance / QA)**

- The team checks: _Does it work? Does it break under stress? Is it secure? Is it accessible?_
- **Types of testing:** unit tests, integration tests, manual testing, user testing.
- **Output:** bug reports, test results, sign-off to ship.
- **In our example:** QA discovers Stories crash on slow internet; devs fix it before launch.

**Phase 6 — Deployment & Maintenance**

- **Deployment:** the feature goes live to real users — usually gradually (first 1%, then 10%, then everyone). This is called a _rollout_.
- **Maintenance:** once live, the team monitors performance, fixes bugs, and adds improvements.
- **Tools:** AWS, Vercel, Datadog, Sentry.
- **In our example:** after launch, users report Stories don't load on older Android phones — the team patches it the next week.

> **SDLC is a cycle, not a finish line.** After Maintenance, new requests come in and the team plans the next feature — back to Phase 1.

#### Part 3: SDLC Methodologies (How teams _do_ the SDLC)

Different teams move through these 6 phases in different ways. Here are the two you must know:

**Waterfall** — Do each phase fully before starting the next.

- Plan everything → design everything → build everything → test everything → ship.
- **Good for:** projects where requirements truly won't change — government systems, medical devices, software that controls a satellite.
- **Bad for:** most modern apps. By the time you ship, the world has moved on.

**Agile** — Build in small chunks called **sprints** (usually 1–2 weeks). Each sprint goes through _mini-versions_ of every SDLC phase.

- Plan a small feature → design → build → test → ship → repeat.
- **Good for:** apps that evolve fast (Instagram, Uber, almost every startup).
- **Bad for:** projects where requirements truly cannot change after release.
- **Scrum** and **Kanban** are popular flavors of Agile.

**Other methodologies (just recognize the names for now):**

- **DevOps** — tightly couples development and deployment so code can ship multiple times a day.
- **Spiral** — used when there's lots of risk; emphasizes prototyping early.

#### Part 4: Roles in the SDLC

You're not going to do every phase yourself. You'll work with people. Here's who does what:

| Role                         | Most Active In                                |
| ---------------------------- | --------------------------------------------- |
| Product Manager (PM)         | Planning, Requirements                        |
| UX/UI Designer               | Design                                        |
| Frontend / Backend Developer | Implementation                                |
| QA Engineer / Tester         | Testing                                       |
| DevOps Engineer              | Deployment, Maintenance                       |
| End User                     | Provides feedback that loops back to Planning |

> Even as a junior developer, you'll touch _every_ phase — you'll attend planning meetings, read designs, write code, fix bugs found in testing, and respond to issues in production. The juniors who understand the full lifecycle (not just coding) get promoted faster.

### Common Mistakes & Misconceptions

**"SDLC is only for big companies."**
Even a solo developer building a side project follows SDLC — they just do it in their head. The moment you have _one_ teammate, you need to make it explicit.

**"Waterfall is always bad and Agile is always good."**
Both have a place. NASA still uses Waterfall-style processes for spacecraft software because you can't push a hotfix to a satellite mid-flight. Agile dominates web/mobile apps because flexibility wins there.

**"Testing happens at the end."**
In modern SDLC, testing happens _throughout_. Developers often write tests alongside their code, and in Test-Driven Development (TDD) they write a failing test before implementing the feature. QA tests every sprint, and automated tests run on every code push.

**"Once a feature is deployed, the work is done."**
Deployment is barely the halfway point. Maintenance and monitoring often take more total time than the original build.

**"SDLC = Agile."**
SDLC is the _what_ (the phases). Agile is _one_ of the _hows_ (a methodology to move through the phases). You can do SDLC with Waterfall, Agile, Spiral, or any other process.

**"As a developer, I only need to care about the coding phase."**
The opposite is true. The developers who understand product, design, testing, and deployment ship better software and get promoted faster.

### Guided Practice

_Work through this with an instructor or a peer._

**Scenario:** Your team is building a **"Save Frequent Payees"** feature for a banking app — users should be able to save merchants/people they pay often, so they don't have to type the account number every time.

Together, walk through what would happen in each phase. Fill in the table:

| Phase                    | What happens here? Who is involved? What's the output? |
| ------------------------ | ------------------------------------------------------ |
| Planning                 |                                                        |
| Requirements Analysis    |                                                        |
| Design                   |                                                        |
| Implementation           |                                                        |
| Testing                  |                                                        |
| Deployment & Maintenance |                                                        |

**Discussion questions:**

1. The bank's regulator demands that saved data must be encrypted in a specific format. Which phase handles that requirement?
2. Three weeks after launch, users complain the feature is hard to find. Which phase do you revisit, and what do you do?
3. If your team uses Agile, would you build _all_ of "Save Frequent Payees" in one sprint, or break it into smaller pieces? What pieces?

### Independent Practice

**Exercise 1 — Map It**

Pick an app you use every day (WhatsApp, Zomato, Netflix, your college portal — anything). Choose one specific feature inside it (e.g., WhatsApp's "Status," Netflix's "Continue Watching," Zomato's "Schedule for Later"). Write a one-paragraph description of what likely happened in **each of the 6 SDLC phases** to bring that feature to life. Aim for 200–300 words total.

**Exercise 2 — Methodology Match**

For each project, choose **Waterfall** or **Agile** and justify in 2 sentences:

1. A new mobile game for casual users
2. Software controlling a hospital's MRI machine
3. A fintech startup's MVP launching in 8 weeks
4. A government tax-filing portal
5. An internal HR dashboard for a 500-person company

**Exercise 3 — Spot the Phase**

For each activity, name the SDLC phase:

1. "We have 3 bug reports from production users this morning."
2. "Let's wireframe the checkout screen."
3. "Should we even build a desktop version, or stay mobile-only?"
4. "QA is running regression tests on the latest build."
5. "A developer is implementing the login feature."
6. "We're releasing version 2.3.0 to production tonight."
7. "We're decomposing this epic into user stories for the backlog."

### Check for Understanding

Answer in your own words. Aim for 1–3 sentences per question.

1. In your own words, what is SDLC and why do teams use it?
2. List the 6 phases of SDLC in order.
3. Give one real-world example where Waterfall would be a _better_ choice than Agile, and explain why.
4. Name three roles you'd find on a typical software team and which SDLC phase each is most active in.
5. Why is "Maintenance" considered part of the lifecycle and not the end of it?
6. A teammate says, _"We don't need to plan, let's just start coding."_ What's one risk you'd raise?
7. Match each tool to a phase: **Figma, Jira, GitHub, Datadog**.

**Quick self-check (true/false):**

- [ ] SDLC ends at deployment.
- [ ] Agile teams skip the design phase.
- [ ] User stories are produced during Requirements Analysis.
- [ ] Only large companies need SDLC.
- [ ] Testing only happens after all the code is written.

_(Answers: F, F, T, F, F)_

### Supplemental Materials

**Articles & Reading**

- [What is SDLC? — Atlassian](https://www.atlassian.com/agile/software-development/sdlc) — clean, beginner-friendly overview
- [Software Development Life Cycle — GeeksforGeeks](https://www.geeksforgeeks.org/software-development-life-cycle-sdlc/) — each phase broken down
- [Agile vs. Waterfall — Atlassian](https://www.atlassian.com/agile/project-management/waterfall-vs-agile) — methodology comparison

**Videos**

- [Software Development Life Cycle (SDLC) Explained — IBM Technology](https://www.youtube.com/watch?v=Fi3_BjVzpqk) — concise overview of the phases and purpose of the SDLC
- [Agile Methodology Explained — IBM Technology](https://www.youtube.com/watch?v=Z9QbYZh1YXY) — beginner-friendly introduction to Agile principles and workflows
- [A Day in the Life of a Software Engineer — Google Students](https://www.youtube.com/watch?v=QJ5QzWbrs6Q) — shows how planning, building, testing, and collaboration appear in real work

**For deeper exploration:**

- _The Phoenix Project_ by Gene Kim — a novel that teaches DevOps and SDLC through a story (highly recommended for absolute beginners)
- _Inspired_ by Marty Cagan — the product side of SDLC
- [Scrum in Under 10 Minutes (YouTube)](https://www.youtube.com/watch?v=TRcReyRYIMg)
- [Atlassian Agile Coach](https://www.atlassian.com/agile) — free, well-structured deep dives
- [The Twelve-Factor App](https://12factor.net/) — once you're comfortable, this is gold for the deployment phase

**For practice:**

- Contribute to an open-source project on GitHub — you'll experience real SDLC phases (issue → discussion → PR → review → merge → release)
- Shadow a sprint planning or sprint review meeting if your bootcamp or workplace allows
- Read a public engineering blog (Netflix Tech Blog, Stripe Engineering, GitHub Blog) — they describe SDLC in action

**Glossary refresher:**

- **Sprint** — a short development cycle, usually 1–2 weeks
- **Backlog** — the prioritized list of work to be done
- **User Story** — a short description of a feature from the user's perspective
- **Standup** — a daily 15-minute team sync
- **PR (Pull Request)** — a request to merge new code into the main project
- **Production** — the live environment that real users interact with
- **MVP (Minimum Viable Product)** — the smallest version of the product that delivers value
