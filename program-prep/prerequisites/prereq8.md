# Prerequisite Session 8: JavaScript + GitHub + Independence

Participants should have a basic understanding of the following foundational concepts ahead of consuming the topic outline:
- Comfort with JavaScript variables and conditionals
- Understanding of loops and functions from Week 3 (Karel)
- Access to a code sandbox (CodePen, Replit, or similar)
- Git client installed locally (or willingness to install: https://git-scm.com)
- Command line / terminal comfort (basic navigation)
- GitHub account with existing repository
- Completed [Prerequisites Session 7: Independence + JavaScript Basics](prereq7.md)

### Table of Contents
- [Projected Time](#projected-time)
- [Motivation](#motivation)
- [Objectives](#objectives)
- [Specific Things to Learn](#specific-things-to-learn)
- [Independent Practice](#independent-practice)
  - [Task 1: Simulate a GitHub Workflow with a Peer](#task-1-simulate-a-github-workflow-with-a-peer-75120-minutes)
  - [Task 2: Code Review Exercise](#task-2-code-review-exercise-3045-minutes)
- [Guided Practice (In-Session: 2 hours)](#guided-practice-in-session-2-hours)
  - [Part 1: Welcome & Session Overview](#segment-1-welcome--session-overview-5-minutes)
  - [Part 2: Breakout Room Sharing](#segment-2-breakout-room-sharing-45-minutes)
  - [Part 3: Group Debrief](#segment-3-group-debrief-10-minutes)
  - [Part 4: Staff-Led Version Control Concepts & How Git Enables Collaboration](#segment-4-staff-led-version-control-concepts--how-git-enables-collaboration-40-minutes)
  - [Part 5: Mini-Challenge - Resolve a Git Conflict Scenario](#segment-5-mini-challenge---resolve-a-git-conflict-scenario-20-minutes)
  - [Part 6: Collaboration & Independence in Team Contexts](#segment-6-collaboration--independence-in-team-contexts-10-minutes)
  - [Part 7: Q&A](#segment-7-qa-5-minutes)
- [Continued Learning](#continued-learning)

### Projected Time

**Independent Practice (Pre-Session): ~2.5 hours**
- JavaScript Sandbox Exercise No.2 - Loops + Functions: 75–120 minutes
- GitHub Onboarding Step 2 - Clone, Edit, Commit, Push: 45–60 minutes

**Guided Practice (In-Session): 2 hours**
- Welcome & Overview: 5 minutes
- Breakout Room Sharing (JS Functions + GitHub Workflow): 45 minutes
- Group Debrief: 10 minutes
- Staff-Led GitHub Workflow & Live Demo: 40 minutes
- Mini-Challenge: Fix Broken JavaScript Code: 20 minutes
- Independence in Engineering & Problem-Solving: 10 minutes
- Q&A: 5 minutes

### Motivation
In Prerequisite Session 7, you learned to read JavaScript. That works for small projects, but professional engineers use Git—a version control system—to manage code changes, track history, and collaborate with teams. Learning Git (the technology behind GitHub) means learning to commit changes (save snapshots), push to the remote repository (upload to GitHub), and pull changes (download from GitHub). Cloning a repository, making changes, committing and pushing them are the workflow all companies use. Using documentation to learn and solve problems, and asking for help after trying it yourself show independence and professional maturity.

### Objectives
By the end of this session, participants will:
- Write JavaScript functions and understand scope
- Use loops in JavaScript (for, while)
- Test functions in an online sandbox
- Understand and use Git version control locally
- Clone a GitHub repository to their computer
- Make changes to code and test them locally
- Commit changes with meaningful commit messages
- Push changes back to GitHub
- Document their process in a recorded or recorded video
- Practice independence: solving Git problems using documentation
- Understand the professional Git workflow
- See themselves as engineers using industry-standard tools
- Create and navigate a GitHub repository
- Upload files to GitHub manually (web interface)

### Specific Things to Learn

**Technical Skills:**
- JavaScript functions: `function`, parameters, return statements
- JavaScript loops: for loops and while loops
- Function scope and variable scope
- Testing functions: calling with different inputs
- Git basics: clone, add, commit, push, pull
- Commit messages: writing meaningful messages
- Local development: code editor, terminal, Git
- Understanding repository history: commit log
- Pushing to remote repository
- GitHub interface: commits, history, branches (intro)
- GitHub
  - Account creation and setup
  - Repositories
    - Creating (public/private options)
    - Structure and navigation
  - Uploading files via web interface
  - Writing a README file (markdown basics)

**Core "Soft" Skills:**
- Independence: using Git without hand-holding
- Troubleshooting: reading Git error messages
- Following technical documentation
- Documenting your process (recorded video)
- Initiative: exploring Git commands beyond the basics
- Professional communication: meaningful commit messages
- Ownership: your code, your repository, your learning

### Independent Practice

#### Task 1: Simulate a GitHub Workflow with a Peer (75–120 minutes)
**Objective:** Understand version control conceptually. See why teams use it. Practice collaboration and conflict resolution without Git CLI complexity.

**Background — What is Version Control and Why Does It Matter?**
Version control is a system that tracks changes to files over time. It answers questions like:
- Who changed this file?
- What did they change?
- When did they change it?
- Why did they change it?
- Can we revert to an earlier version?

In a team, version control lets multiple people work on the same project without overwriting each other's work. It's essential to professional software development.

You won't use Git commands this week. You'll simulate a version control workflow to understand the concepts.

**The Task: Collaborate on a Shared Document**
You and a peer will:
1. Create a shared document (Google Doc)
2. Simulate a version control workflow: create versions, make changes, merge them, resolve conflicts
3. Document what happens at each step

**Setup:**
1. **Find a partner:** Someone from the cohort you haven't worked with yet
2. **Create a Google Doc:** Title it "GitHub Simulation: [Your Names]"
3. **Choose a scenario:** What document are you collaborating on?
   - **Option A:** A restaurant menu (both of you add dishes)
   - **Option B:** A movie database (both add movie reviews)
   - **Option C:** A travel guide (both add city descriptions)
   - **Option D:** A meeting agenda (both add items)

**Scenario Walkthrough: Restaurant Menu Example**

<details><summary>Step 1: Initial Commit (Create Version 1)</summary>
  
Start with a simple menu:

```
RESTAURANT MENU - Version 1

Appetizers:
- Bruschetta - $8
- Calamari - $10

Main Courses:
- Pasta Carbonara - $16
- Grilled Salmon - $20

Desserts:
- Tiramisu - $7
- Chocolate Cake - $6
```

**Record:** "Initial menu created. This is our baseline."
</details>

<details><summary>Step 2: Both Make Changes (Create Version 2a and 2b)</summary>

**You decide:** "I'm going to add an appetizer and update prices"
- Change Bruschetta price from $8 to $9
- Add "Shrimp Saute - $12" to appetizers

**Your version (2a):**
```
RESTAURANT MENU - Version 2a

Appetizers:
- Bruschetta - $9 (UPDATED PRICE)
- Calamari - $10
- Shrimp Saute - $12 (NEW)

Main Courses:
- Pasta Carbonara - $16
- Grilled Salmon - $20

Desserts:
- Tiramisu - $7
- Chocolate Cake - $6
```

**Your peer decides:** "I'm going to add main courses and a dessert"
- Add "Risotto - $18" to main courses
- Add "Panna Cotta - $8" to desserts

**Peer's version (2b):**
```
RESTAURANT MENU - Version 2b

Appetizers:
- Bruschetta - $8
- Calamari - $10

Main Courses:
- Pasta Carbonara - $16
- Grilled Salmon - $20
- Risotto - $18 (NEW)

Desserts:
- Tiramisu - $7
- Chocolate Cake - $6
- Panna Cotta - $8 (NEW)
```

**Record:** "You made changes to version 1. Peer made different changes to version 1. Now we have two diverging versions."
</details>

<details><summary>Step 3: Merge the Versions (Resolve Conflicts)</summary>

**The Challenge:** How do you combine both changes? No changes overlap, so this is easy:

**Final Merged Version (3):**
```
RESTAURANT MENU - Version 3 (MERGED)

Appetizers:
- Bruschetta - $9 (from your version)
- Calamari - $10
- Shrimp Saute - $12 (from your version)

Main Courses:
- Pasta Carbonara - $16
- Grilled Salmon - $20
- Risotto - $18 (from peer's version)

Desserts:
- Tiramisu - $7
- Chocolate Cake - $6
- Panna Cotta - $8 (from peer's version)
```

**Record:** "We merged both versions. All changes coexist because they affected different parts."
</details>

<details><summary>Step 4: Conflict! Overlapping Changes</summary>

Now do another round where changes overlap:

**You decide:** "Update Tiramisu price from $7 to $8"

**Your version (4a):**
```
Desserts:
- Tiramisu - $8 (UPDATED)
- Chocolate Cake - $6
- Panna Cotta - $8
```

**Peer decides:** "Update Tiramisu description, keep price at $7"

**Peer's version (4b):**
```
Desserts:
- Tiramisu - $7 (Classic Italian dessert)
- Chocolate Cake - $6
- Panna Cotta - $8
```

**The Conflict:** Both changed Tiramisu, but differently. Which version is correct?

**Record:** "We have a CONFLICT. Both of us changed Tiramisu. How do we resolve this?"
</details>

<details><summary>Resolution Discussion</summary>
- You discuss: "What should Tiramisu be?"
- Option 1: Keep your price change ($8) and add peer's description
- Option 2: Keep peer's price ($7) and add description
- Option 3: Find a compromise

**Final Resolved Version (5):**
```
Desserts:
- Tiramisu - $8 (Classic Italian dessert)
- Chocolate Cake - $6
- Panna Cotta - $8
```

**Record:** "CONFLICT RESOLVED. We kept the price update ($8) and added the description. Both of us agreed this was the best version."
</details>

**Write-Up: Document Your Simulation (2–3 pages)**

In a Google Doc, answer:

**Part 1: Your Collaboration Story**
- What scenario did you choose?
- How many rounds did you do?
- Which changes were easy to merge? Which were hard?
- Did you have conflicts? If so, how did you resolve them?

**Part 2: Understanding Version Control**
- "Why did we create multiple versions instead of just editing one document?"
- "What would happen if one person's changes overwrote the other's?"
- "Why is it helpful to track who made what changes?"
- "In real programming, why would a team care about version control?"

**Part 3: Reflection**
- "What surprised you about collaboration?"
- "What's hard about merging changes?"
- "How is this simulation related to what real engineers do with Git?"
- "What's one thing you'd do differently next time?"

**Submission:**
- Shared Google Doc link (showing your simulation history)
- Write-up document with reflection and answers
- Screenshot showing your final merged version

**Free Resources:**
- **[Article - "An introduction to Git: what it is, and how to use it"](https://www.freecodecamp.org/news/what-is-git-and-how-to-use-it-c341b049ae61/)** (conceptual explanation)
- **[Atlassian - "Git Concepts"](https://www.atlassian.com/git/tutorials/what-is-version-control)** (clear explanations)

#### Task 2: Code Review Exercise (30–45 minutes)
**Objective:** Practice evaluating code critically. Provide constructive feedback. Understand what makes code "good."

**Background — What is Code Review?**
Code review prevents bugs and ensures quality. It's a critical professional skill. Code review is when engineers read each other's code before it's merged into the project. They ask:
- Does this code do what it's supposed to do?
- Is it clear and easy to understand?
- Could it be more efficient?
- Are there potential bugs?
- Does it follow the team's standards?

**The Task: Review Two Versions of Pseudo-Code**
You'll receive two different versions of the same program (pseudo-code, not JavaScript). Compare them. Evaluate which is better and why. Provide constructive feedback.

**Program: "Calculate Student Grades"**

<details><summary>Version A: Simple but Repetitive</summary>

```
Read student name
Read score 1
Read score 2
Read score 3
Read score 4
Read score 5

Calculate average:
  Add all scores
  Divide by 5

Check grade:
  If average >= 90: Print "A"
  Else if average >= 80: Print "B"
  Else if average >= 70: Print "C"
  Else if average >= 60: Print "D"
  Else: Print "F"

Print: [Name] has average [average] and grade [grade]
```
</details>

<details><summary>Version B: Better Structured</summary>

```
Function: GetScores()
  Create empty list: scores
  Repeat 5 times:
    Read score from user
    Add score to list
  Return scores

Function: CalculateAverage(scores)
  sum = 0
  For each score in scores:
    Add score to sum
  average = sum / number of scores
  Return average

Function: DetermineGrade(average)
  If average >= 90: Return "A"
  Else if average >= 80: Return "B"
  Else if average >= 70: Return "C"
  Else if average >= 60: Return "D"
  Else: Return "F"

Main Program:
  name = Read student name
  scores = GetScores()
  average = CalculateAverage(scores)
  grade = DetermineGrade(average)
  Print: [name] has average [average] and grade [grade]
```
</details>

**Your Task: Code Review**

<details><summary>Part 1: Compare the Versions</summary>
Create a comparison document (Google Doc). For each question, answer for both Version A and B:

1. **Clarity:** Is it easy to understand what this code does?
   - Version A: Simple to read top-to-bottom, but repetitive
   - Version B: More organized, but requires understanding functions

2. **Efficiency:** Does it avoid repetition?
   - Version A: Repetitive (reads 5 scores one by one, calculates grade with long if/else)
   - Version B: Uses loops and functions to avoid repetition

3. **Reusability:** Could you use this code again easily?
   - Version A: Hard to reuse (grade logic mixed with student input)
   - Version B: Easy to reuse (functions are independent)

4. **Maintainability:** If the requirements changed (e.g., 6 scores instead of 5, different grading scale), how hard would it be to update?
   - Version A: Hard (need to change multiple places)
   - Version B: Easy (change the loop or function)

5. **Potential Bugs:** Are there issues you notice?
   - Version A: If you want to grade 6 students, you'd have to rewrite the whole thing
   - Version B: You can call the functions 6 times (loop around the main program)
</details>

<details><summary>Part 2: Written Feedback</summary>
Write a brief review (1 paragraph each) for both versions
</details>

<details><summary>Part 3: Which Version Would You Choose?</summary>

Write 3–4 sentences:
- Which version is better for a professional team? Why?
- Which version is better for learning? Why?
- Are there cases where Version A would be preferable?
- What would you combine from both?
</details>

<details><summary>Part 4: Reflection</summary>

Answer:
- "What makes code 'good' in your opinion?"
- "What did this exercise teach you about writing code for others?"
- "As you move toward writing actual code, what will you prioritize: simplicity or structure?"
</details>

**Submission:**
- Google Doc with comparison, reviews, recommendation, and reflection
- Video (5 minutes) where you explain which version you'd choose and why

### Guided Practice (In-Session: 2 hours)

#### Part 1: Welcome & Session Overview (5 minutes)
This session, you're not learning Git commands. You're understanding the problem version control solves and the workflow teams use.By the end, you'll understand why Git exists and why every professional team uses it. Then learning the actual commands becomes logical — they're just tools for doing what you understand conceptually.
<!-- Program Staff Talking Points:
- "Last session, you learned to read and understand code. This week, you're learning to work with code in a team."
- "Most professional engineers don't work alone. They work with teams. Multiple people touching the same files, the same projects. How do you coordinate that without chaos?"
- "That's what version control solves. Git, GitHub, version control—it's all about enabling collaboration."
-->

#### Part 2: Breakout Room Sharing (45 minutes)

**Part A: Version Control Simulation Presentations (25 minutes)**
Have each pair share:
- Their scenario (menu, movie database, travel guide, etc.)
- How many rounds they went through
- One moment where changes merged smoothly
- One moment where there was a conflict

<!-- Program Staff Copy/Paste Discussion Prompts into Zoom Chat:
- "Whose scenario had the most conflicts? How did you resolve them?"
- "Was it helpful to track who made what changes? Why?"
- "If you were doing this with a real programming team (10 people), how would this get more complicated?"
- "What would be impossible to do manually that Git does automatically?"
-->

**Part B: Code Review Sharing (18 minutes)**
Each participant shares:
- Which version they preferred (A or B)
- One strength and one weakness of each version
- What surprised them about code review

<!-- Program Staff Copy/Paste Discussion Prompts into Zoom Chat:
- "Did everyone prefer the same version? If not, why the differences?"
- "What makes code 'professional' vs. 'amateur'?"
- "How is code review different from testing or debugging?"

Program Staff Listening & Notes:
- Note understanding of version control concepts
- Document any misconceptions (address in staff-led)
- Celebrate conflict resolution: "You worked through disagreement"
- Note code quality insights (professional thinking)

Tone: Frame collaboration and review as *professional norms*. "This is how real teams work."
-->

#### Part 3: Group Debrief (10 minutes)
Here's what I want you to see: version control isn't just a tool. It's a way of working that enables teams. Git, GitHub—they're tools. But the mindset is: I'm not working alone, I'm collaborating. My code needs to be clear for others. We need to track changes.
<!-- Program Staff Talking Points:
- "Your version control simulations showed something important: collaboration requires communication. When changes conflicted, you couldn't just pick one. You had to discuss, agree, decide. That's team work."
- "Your code reviews showed professional thinking. You evaluated code not just on 'does it work' but on 'is it maintainable, reusable, clear.' That's how senior engineers think."
- "In weeks 1–7, you've been learning individual skills: logic, problem-solving, reading code. Week 8 is where it becomes team work."

Prompt Celebration:
- "Who feels ready to learn actual Git now?" (Gauge readiness)
- "Who sees why version control matters?" (Gauge understanding)

Frame for Next Part:
"Now let's talk about what version control really is and why Git is designed the way it is. We're going to see how the concepts you just experienced translate into Git commands."
-->

#### Part 4: Staff-Led Version Control Concepts & How Git Enables Collaboration (40 minutes)
**Objective:** Connect the simulation to real version control. Explain Git concepts. Show why Git is structured the way it is.

**Demo 1: What is Version Control? (10 minutes)**
Version control is a system that answers these questions about your project:
- What changed?
- Who changed it?
- When did they change it?
- Why did they change it?
- Can we revert to an old version?

**Scenario: Two Programmers Without Version Control**

```
Programmer A: Working on main.js
Programmer B: Also working on main.js

Time 1:00 PM
A uploads their version (main.js)

Time 1:05 PM
B uploads their version (main.js)

Result: B's version overwrites A's. A's changes are lost forever.
```

**With Version Control:**

```
Time 1:00 PM
A makes changes, commits "Add login function"
B makes changes, commits "Add user validation"

System tracks both commits.
When they merge, the system combines both changes.
If something goes wrong, they can revert to any commit.
```

**Key Concepts:**
1. **Commit:** A snapshot of your code at a point in time with a message explaining what changed
2. **Branch:** Parallel version of the project (A works on login, B works on validation)
3. **Merge:** Combining two branches
4. **History:** Complete record of all commits (when, who, what)
5. **Conflict:** When two changes affect the same line (needs human decision)

<!-- Program Staff Talking Points: 
"Version control solves a fundamental problem: how do multiple people work on the same files without losing each other's work?"

Program Staff Interactive Element:
"In your simulation, you had versions 1, 2a, 2b, 3, etc. In Git, each of these is a commit. Every commit has:
- A unique ID
- A timestamp
- The author's name
- A message ('Added appetizers')
- The actual code/files at that point

So if you made a mistake and wanted to go back to version 2, Git can show you exactly what was there."
-->

**Demo 2: Commits, Branches, and Merging (12 minutes)**

**Flowchart of a Typical Git Workflow:**

```
Main Branch (production code)
    |
    o--o--o (commits: "Initial", "Add login", "Fix bugs")
         \
          \ Feature Branch (experimental code)
           \
            o--o--o (commits: "Add dark mode", "Style tweaks")
             \
              Merge back to main
              |
    o--o--o--o (commits combined)
```

**Explained:**
The main branch is where stable code lives. When you want to add a feature, you create a branch (parallel version). You make commits on that branch. Other people make commits on other branches. When ready, you merge branches back into main.

**Why This Matters:**
- **Safety:** You can experiment on a branch without breaking main
- **Clarity:** Each commit is a complete, tested change
- **History:** You can see the entire evolution of the project
- **Collaboration:** Multiple branches mean multiple people can work in parallel

**Conflict Scenario:**

```
Branch A: "Update login function"
Branch B: "Update login function" (different way)

When merging:
Git says: "Both branches changed login function. 
Programmer, you decide which version is correct."

Programmer reviews both, decides, merges.
```

<!-- Program Staff Talking Points:
"Conflicts aren't failures. They're Git saying 'Hey, two people changed the same thing. You need to decide what's right.' That's exactly what happened in your simulation."

Program Staff Interactive Element:
"You and your peer both changed the Tiramisu in your simulation. Git would do the same thing: flag the conflict, let you decide. That's why version control is powerful—it doesn't just overwrite. It forces you to be intentional."
-->

**Demo 3: Why Git is Designed This Way (10 minutes)**
Git is designed for one fundamental purpose: enable collaboration at scale.

**Git's Key Features (and Why):**

| Feature | Why It Matters |
|---------|---|
| **Commits with messages** | You can understand *why* a change was made, not just *what* changed |
| **Unique commit IDs** | You can reference any point in history. Easy to revert if needed. |
| **Branches** | Multiple people work independently. No stepping on each other's toes. |
| **Merge tools** | When branches come together, Git helps identify conflicts, not overwrites silently. |
| **Remote (GitHub)** | The project lives online. Accessible from anywhere. Acts as backup. |
| **History/Log** | Complete record of who changed what when. Accountability and learning. |

**Why Not Just Use Google Drive or Email?**

```
Google Drive:
✓ Easy to share
✗ Hard to track who changed what
✗ Hard to revert to old versions
✗ Merging changes is manual and error-prone

Email:
✓ Everyone has a copy
✗ Multiple versions floating around
✗ Easy to lose track of which is current
✗ Merging requires manual copy-paste

Git:
✓ Complete history
✓ Easy to see who changed what
✓ Merging is built-in
✓ One source of truth (the remote repository)
```

<!-- Program Staff Talking Points:
"Git was invented by Linus Torvalds (who created Linux) to manage thousands of programmers contributing to the same project. It's powerful because it solves real collaboration problems."

Program Staff Interactive Element:
"Think about your simulation. You and your peer had to manually merge changes, communicate about conflicts, track who did what. Git automates a lot of that. It still requires you to decide when there's a conflict, but it handles the tracking and combining."
-->

#### Part 5: Mini-Challenge - Resolve a Git Conflict Scenario (20 minutes)
**Objective:** Practice collaborative problem-solving. Practice conflict resolution. See that conflicts are normal and manageable.

**Challenge 1: Simple Non-Overlapping Changes (5 minutes)**

**Scenario:**

```
Programmer A commits: "Add email validation function"
Programmer B commits: "Add password strength checker"

Both worked on different parts of the codebase.
Git tries to merge. No conflicts. Merge succeeds automatically.
```

**Question:** "Will this merge succeed or fail? Why?"

<!--Program Staff Notes: 
- Answer: Succeed. They changed different files/functions. Git automatically combines them.
- Talking Point: "Most merges are simple. Different people changing different parts. Git handles these automatically."
-->

**Challenge 2: Same File, Different Functions (5 minutes)**

**Scenario:**

```
File: user.js

Programmer A changes:
  - Function: validateEmail() (lines 1-10)
  
Programmer B changes:
  - Function: validatePassword() (lines 15-25)

Same file, but different functions.
```

**Question:** "Will this merge successfully?"

<!--Program Staff Notes: 
- Answer: Yes. Git is smart enough to merge changes in different parts of the same file.
- Talking Point: "Git doesn't lock entire files. It can merge different changes within the same file if they don't overlap."
-->

**Challenge 3: True Conflict (5 minutes)**

**Scenario:**

```
Original code:
  let userAge = 18;

Programmer A changes to:
  let userAge = 21;  // Legal drinking age
  
Programmer B changes to:
  let userAge = 16;  // Driving age

Both changed the same line. Git can't decide.
```

**Question:** "How would you resolve this conflict?"

**Discussion:**
- "You'd look at why each programmer made their change"
- "Maybe the context is: what are we validating for?"
- "Maybe you need two variables: drivingAge and drinkingAge"
- "You talk to both programmers and decide together"

<!--Program Staff Notes: 
- Answer: Git flags the conflict. Programmers discuss and decide: use both ages, pick one, or restructure.
- Talking Point: "True conflicts require human judgment. But they're rare if people communicate about what they're working on."
-->

**Challenge 4: Merge Conflict with Clear Resolution (5 minutes)**

**Scenario:**

```
Original code:
  function greet(name) {
    console.log("Hello, " + name);
  }

Programmer A changes to:
  function greet(name) {
    console.log("Hello, " + name + "!");  // Added exclamation
  }

Programmer B changes to:
  function greet(name) {
    return "Hello, " + name;  // Changed to return instead of log
  }

Conflict: Both changed the function body.
```

**Question:** "How would you resolve this? What's the best outcome?"

<!--Program Staff Discussion Notes: 
- "Do we log or return?"
- "Maybe we need both: log AND return?"
- "Or maybe we need to understand the context: why did each person make their change?"

Best resolution: Combine both insights:
```javascript
function greet(name) {
  const greeting = "Hello, " + name + "!";
  console.log(greeting);
  return greeting;
}
```

Talking Point: "Conflicts, when resolved thoughtfully, often lead to better code. They force conversation and integration of multiple ideas."
-->

#### Part 6: Collaboration & Independence in Team Contexts (10 minutes)
**Objective:** Reflect on independence within a team. Show independence isn't isolation.

**Prompt 1:** "In your simulation, when you had a conflict, what did you do? Did you just pick your version, or did you negotiate?"
- Let 3–4 people answer
- Listen for: communication, compromise, mutual decision-making
- Affirm: "That's teamwork. That's professional."

**Prompt 2:** "How is independence different when you're working with a team?"
- Independence alone: "I figure things out by myself"
- Independence in team: "I figure things out, but I also listen to my teammates and integrate their ideas"
- Affirm: "Both are independence. One is solitary, one is collaborative."

**Prompt 3:** "As you move into the actual program and start working on team projects with Git, what's one thing you want to remember about version control?"
- Answers might include: "It's not scary," "Conflicts are normal," "Communicate before conflicts happen," "History is valuable"
- Have people state it aloud

<!-- Program Staff Talking Points:
"Version control is a tool, but it represents a mindset: we're working together. My code might need to merge with yours. I need to be clear about what I'm changing and why. I need to be open to your changes improving mine.

That's not just professional. That's a life skill. Collaboration requires clarity, respect, and willingness to integrate ideas.

You've practiced that this week—in your simulation and your code review. You did it without Git. Now, when you use actual Git, the tool will automate what you did manually. But the mindset stays the same: we're working together, and that's powerful."
-->

#### Part 7: Q&A (5 minutes)
Q: "When do we learn actual Git commands?" \
A: Next stage of the program. You have the foundation now.

Q: "Will Git be hard?" \
A: The commands are simple. Understanding why you're running them (which you do now) is the hard part. You have that.

Q: "What if I forget a Git command?" \
A: You reference documentation. Everyone does, even senior engineers.

Q: "Can I mess up my project with Git?" \
A: Yes, but Git is designed to be reversible. You can undo almost anything. That's why professionals trust it.

Q: "Is version control important if I'm coding alone?" \
A: Yes. Even solo, you benefit from history, being able to revert, and having a backup online.

Q: "Will I always need to use Git?" \
A: Yes, in any professional setting. It's non-negotiable.

Q: "What if I mess up a commit?" \
A: You can undo it. Worst case, you lose some work. It's recoverable.

Q: "Is JavaScript going to be hard in the program?" \
A: You have the basics. You'll build on them. It gets easier once syntax is familiar.

Q: "What if I still don't understand Git?" \
A: That's normal. You'll use it constantly in the program, and it'll click. Come to office hours if stuck.

Q: "Can I use GitHub for other projects?" \
A: Create repositories for personal projects. You're already a GitHub user.

Q: "What if I get really stuck on GitHub?" \
A: That's what office hours and Slack are for. GitHub has great docs too. Take a break and come back.


### Continued Learning
- **["You Don't Know JS Yet" (Free Book)](https://github.com/getify/You-Dont-Know-JS)** (deep dive into JavaScript)
- **[FreeCodeCamp - "The Complete JavaScript Course"](https://www.youtube.com/watch?v=PkZNo7MFNFg)** (full course)
- **[JavaScript.info - Advanced Topics](https://javascript.info)** (once comfortable with basics)
- **Coding Challenge Platforms:** Codewars, HackerRank, LeetCode (for more practice)

**GitHub**
1. Create account, create repository, upload files (step-by-step)
2. Repository structure explained
3. How to edit files on GitHub
4. README basics and markdown formatting

**Git Command**
1. `git clone` — Download a repository
2. `git status` — Check what changed
3. `git add` — Stage files
4. `git commit` — Save a snapshot
5. `git push` — Upload to GitHub
6. `git pull` — Download changes from GitHub
7. `git log` — View commit history
8. Common flags and options

**JavaScript Functions & Loops**
1. Function syntax: `function name(parameters) { return value; }`
2. Arrow functions (ES6): `const name = (parameters) => { return value; }`
3. For loop: `for (let i = 0; i < n; i++) { }`
4. While loop: `while (condition) { }`
5. Array methods: `push()`, `pop()`, `length`, `includes()`

**GitHub Workflow**
1. Step-by-step: clone → edit → commit → push
2. Understanding commit history
3. Reading diffs (what changed)
4. Common GitHub interface elements
5. How to view your contributions

**Debugging JavaScript: Strategy Guide**
1. Read the error message (it tells you what's wrong)
2. Use `console.log()` to trace execution
3. Verify variable values at each step
4. Check loop conditions (off-by-one errors)
5. Test with different inputs
6. Take breaks (fresh eyes help)

**Commit Message Best Practices**
1. Format: "Action + Description" (e.g., "Add function", "Fix bug", "Update README")
2. Examples of good vs bad messages
3. Why clear messages matter (team collaboration, future debugging)

**Independence Toolkit: Resources & Strategies**
1. How to read documentation (MDN, GitHub Docs, etc.)
2. How to search Stack Overflow effectively
3. When to ask for help (strategy, not shame)
4. How to ask good questions on Slack
5. Debugging strategies: systematic approach

**Community Practices:**
- Use the #pre-applicant channel for Git questions and solutions
- Celebrate first pushes: "Show off your first committed code!"
- Share debugging stories: "I got X error and here's how I fixed it"
- Peer code review: "Can someone review my code before I push?"

**Optional Challenges (for those who want more):**
- Explore GitHub's branches feature (create a feature branch)
- Try reverting a commit with `git revert`
- Create multiple commits with different messages
- Explore other people's repositories and understand their structure
- Try JavaScript challenges on Codewars or HackerRank

**Week 4 Reflection Prompt**
- How did independence feel this week? Exciting? Scary? Both?
- What's one thing you figured out on your own?
- What's one thing you asked for help with? Did asking for help feel okay?
- Compare your independence at the start of the program to now. What changed?
- What's one commitment you're making about using GitHub going forward?
- What question do you want to explore in the actual program?

**From Sandbox to Professional Tools: Your Engineering Journey**
- Connect each week's mindset (Curiosity → Ownership → Resilience → Independence) to real engineering
- See yourself as a developer: you've used professional tools, written code in multiple languages, stored work on GitHub

**Your Professional Profile: Getting Started**
- Your GitHub is the start of your professional portfolio
- Tips for keeping your GitHub clean and professional
- Ideas for projects to add to your portfolio
- How recruiters look at GitHub

**JavaScript in the Real World**
- Where JavaScript is used: web development, Node.js, React, Vue, etc.
- How JavaScript connects to what you'll learn in the program
- Career paths involving JavaScript
