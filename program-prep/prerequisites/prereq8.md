# Prerequisite Session 8: JavaScript + GitHub + Independence

Participants should have a basic understanding of the following foundational concepts ahead of consuming the topic outline:
- Completion of Session 7 (JavaScript basics, GitHub account setup)
- Comfort with JavaScript variables and conditionals
- Understanding of loops and functions from Week 3 (Karel)
- Access to a code sandbox (CodePen, Replit, or similar)
- Git client installed locally (or willingness to install: https://git-scm.com)
- Command line / terminal comfort (basic navigation)
- GitHub account with existing repository
- Completed [Prerequisites Session 7: Independence + JavaScript Basics](prereq7.md)

## Table of Contents
- [Projected Time](#projected-time)
- [Prerequisites](#prerequisites)
- [Motivation](#motivation)
- [Objectives](#objectives)
- [Specific Things to Learn](#specific-things-to-learn)
- [Independent Practice](#independent-practice)
  - [Task 1: JavaScript Sandbox Exercise No.2 - Loops + Functions](#task-1-javascript-sandbox-exercise-no2---loops--functions-75120-minutes)
  - [Task 2: GitHub Onboarding Step 2 - Clone, Edit, Commit, Push](#task-2-github-onboarding-step-2---clone-edit-commit-push-4560-minutes)
- [Guided Practice (In-Session: 2 hours)](#guided-practice-in-session-2-hours)
  - [Segment 1: Welcome & Session Overview](#segment-1-welcome--session-overview-5-minutes)
  - [Segment 2: Breakout Room Sharing](#segment-2-breakout-room-sharing-45-minutes)
  - [Segment 3: Group Debrief](#segment-3-group-debrief-10-minutes)
  - [Segment 4: Staff-Led GitHub Workflow & Live Demo](#segment-4-staff-led-github-workflow--live-demo-40-minutes)
  - [Segment 5: Mini-Challenge - Fix Broken JavaScript Code](#segment-5-mini-challenge---fix-broken-javascript-code-20-minutes)
  - [Segment 6: Independence in Engineering & Problem-Solving](#segment-6-independence-in-engineering--problem-solving-10-minutes)
  - [Segment 7: Q&A](#segment-7-qa-5-minutes)
- [Continued Learning](#continued-learning)

## Projected Time

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

## Motivation
In Prerequisite Session 7, you wrote JavaScript and uploaded it to GitHub manually. That works for small projects, but professional engineers use Git—a version control system—to manage code changes, track history, and collaborate with teams. Learning Git (the technology behind GitHub) means learning to commit changes (save snapshots), push to the remote repository (upload to GitHub), and pull changes (download from GitHub). This session feels more technical, and it is. But it's also the moment when you start working like a real engineer. When you clone a repository, make changes, commit them, and push them, you're using the exact workflow that powers companies like Google, Meta, and every startup. By the end of this week, you'll have hands-on experience with the tools professional engineers use daily. You'll be ready to collaborate on real projects. You'll have proven independence: you can learn, use documentation, solve problems, and ask for help strategically. That's not just programming skill; that's professional maturity.

## Objectives
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

## Specific Things to Learn

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

**Core "Soft" Skills:**
- Independence: using Git without hand-holding
- Troubleshooting: reading Git error messages
- Following technical documentation
- Documenting your process (recorded video)
- Initiative: exploring Git commands beyond the basics
- Professional communication: meaningful commit messages
- Ownership: your code, your repository, your learning

## Independent Practice

### Task 1: JavaScript Sandbox Exercise No.2 - Loops + Functions (75–120 minutes)
**Objective:** Apply loops and functions in JavaScript. Deepen problem-solving skills. Build confidence with more complex code.

**Background:**
In Prerequisite Session 7, you wrote a temperature feedback system with conditionals. Now you're adding loops and functions—the tools that turn code into elegant solutions.

**The Task: "Number Analyzer"**
Write JavaScript functions that:
1. Analyze an array of numbers
2. Calculate statistics (sum, average, max, min)
3. Use loops to iterate through the numbers
4. Return results and display them with `console.log()`

**Your Goal:** Create functions that can answer questions like:
- "What's the sum of these numbers?"
- "What's the average?"
- "What's the largest number?"
- "What's the smallest number?"

**Setup Instructions:**
1. Choose a JavaScript sandbox (CodePen, Replit, JSFiddle, etc.)
2. Create a new project
3. Use the template below as a starting point
4. Test your code with different arrays
5. Record a 5-minute demo

<!--
**Example Code Template:**

```javascript
// Number Analyzer

// Array of numbers to analyze
let numbers = [5, 12, 8, 23, 15, 7, 19];

// Function to calculate the sum
function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];  // Add each number to the sum
  }
  return sum;
}

// Function to calculate the average
function calculateAverage(arr) {
  let sum = calculateSum(arr);  // Reuse the sum function!
  let average = sum / arr.length;
  return average;
}

// Function to find the maximum
function findMax(arr) {
  let max = arr[0];  // Start with the first number
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Function to find the minimum
function findMin(arr) {
  let min = arr[0];  // Start with the first number
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Call the functions and display results
console.log("Array:", numbers);
console.log("Sum:", calculateSum(numbers));
console.log("Average:", calculateAverage(numbers));
console.log("Max:", findMax(numbers));
console.log("Min:", findMin(numbers));
```
-->

**What to Do:**
1. Paste the template into your sandbox
2. Click Run and observe the output
3. Modify the `numbers` array and test again
4. Try adding more functions (e.g., count how many numbers are even, find the median, etc.)
5. Experiment: change a loop, see what breaks, fix it
6. Record a 5-minute demo

**Common Issues:**
- "My function doesn't return what I expect" → Trace through the loop step by step. Log intermediate values: `console.log("Current sum:", sum)`
- "I don't understand array indexing" → Arrays start at 0: `arr[0]` is the first element, `arr[1]` is the second, etc.
- "My loop is going out of bounds" → Check the condition: `i < arr.length` (not `i <= arr.length`)
- "I'm overwhelmed by the template" → Start with just one function. Write the simplest version. Test it. Then add more.

**Video: Demonstrate & Explain (5 minutes)**
Record a video showing:
1. **Run Your Code:** Show the console output with sample numbers
2. **Change the Array:** Modify the `numbers` array and re-run to show functions adapting to different inputs
3. **Walk Through a Function:** Narrate through one function line by line:
  - "Here I initialize `sum` to 0"
  - "Then I loop through each number"
  - "For each number, I add it to the sum"
  - "Finally, I return the sum"
4. **Explain Key Concepts:**
  - What's a function? (Reusable block of code)
  - What's a parameter? (Input to the function)
  - What's a return statement? (Output from the function)
  - How do loops help? (We don't have to write separate code for each number)
5. **Reflect:** "What was challenging? What clicked?"

**Free Resources:**
- **[JavaScript.info - "Functions"](https://javascript.info/function-basics)** (interactive, comprehensive)
- **[MDN - "Functions"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)** (official reference)
- **[MDN - "Loops and Iteration"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)** (detailed guide)
- **[FreeCodeCamp - "JavaScript Functions Tutorial"](https://www.youtube.com/watch?v=FOD408a0EzQ)** (20-minute YouTube video)
- **[Codecademy - "JavaScript Functions"](https://www.codecademy.com/learn/introduction-to-javascript)** (free tier)

**Submission:**
- Link to your sandbox (CodePen, Replit, etc.)
- Record a video explaining your code (5 minutes)
- Note: "I found ___ most challenging, and here's how I solved it"

### Task 2: GitHub Onboarding Step 2 - Clone, Edit, Commit, Push (45–60 minutes)
**Objective:** Learn the Git workflow. Use Git locally to manage code changes. Understand version control.

**Background — What is Git and Why It Matters?**
Git is version control software. It tracks changes to files over time. GitHub is where you store Git repositories online. When you use Git, you:
1. Clone a repository (download it to your computer)
2. Make changes locally
3. Commit changes (save a snapshot with a message)
4. Push changes (upload to GitHub)

This is the professional workflow. Every engineer uses this.

**Setup Instructions:**

**Part A: Install Git Locally (5 minutes)**

If you don't have Git installed:
1. Go to https://git-scm.com/download
2. Choose your operating system (Windows, Mac, Linux)
3. Download and install (use default settings if unsure)
4. Verify installation: Open terminal/command prompt and type `git --version`. If it shows a version number, you're good!

**Part B: Configure Git (5 minutes)**
1. Open terminal/command prompt
2. Run these commands (replace with your info):

```shellscript
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

This tells Git who you are when you make commits.

**Part C: Clone Your Repository (10 minutes)**
1. Go to your GitHub repository (the one you created in Session 7: `techtonica-prerequisites`)
2. Click the green "Code" button
3. Copy the HTTPS link (looks like: `https://github.com/yourusername/techtonica-prerequisites.git`)
4. Open terminal/command prompt
5. Navigate to where you want to store your code (e.g., `cd Desktop` or `cd Documents`)
6. Run: `git clone https://github.com/yourusername/techtonica-prerequisites.git`. This downloads a copy of your repository to your computer
7. Navigate into the folder: `cd techtonica-prerequisites`
8. You're now in your local repository!

**Part D: Make Changes Locally (15 minutes)**
In your repository folder, create a new JavaScript file:
1. Use a text editor (VS Code, Sublime Text, Notepad++, or even Notepad)
2. Name it: `number-analyzer.js`
3. Paste your number analyzer code into this file
4. Save it. Verify it's there: In terminal, type `ls` (Mac/Linux) or `dir` (Windows). You should see `number-analyzer.js` listed

**Part E: Stage, Commit, and Push (15 minutes)**

1. **Stage your changes:** This tells Git: "I want to save this file."

```shellscript
git add number-analyzer.js
```

2. **Commit your changes:** This saves a snapshot with a message explaining what you did.

```shellscript
git commit -m "Add number analyzer functions"
```

3. **Push to GitHub:** This uploads your changes to GitHub (makes them visible on the website).

```shellscript
git push origin main
```

4. **Verify:** Go to your GitHub repository in the browser. Refresh. You should see `number-analyzer.js` there!

**Understanding the Workflow:**

```plaintext
Local Computer          GitHub (Remote)
    |                        |
    |-- git clone ---------> (copy repo)
    |                        |
    |-- make changes         |
    |   (edit files)         |
    |                        |
    |-- git add             |
    |-- git commit          |
    |-- git push ----------> (upload changes)
    |                        |
```

**Common Issues:**
- "Fatal: Not a git repository" → Make sure you're in the correct folder (the one you cloned)
- "Permission denied" → You might need to set up SSH keys. For now, use HTTPS (what we did above)
- "Everything up to date" → Your changes didn't commit. Make sure you used `git add` first.
- "I can't see my changes on GitHub" → Refresh the page. Make sure you pushed (`git push`).

**Video: Demonstrate Your Process (5 minutes)**

Record a video showing:
1. **Clone Step:** Screen share terminal showing `git clone` command and the repo being downloaded
2. **Local Edits:** Show creating/editing a file in your code editor
3. **Git Commands:** Show running:
  - `git status` (shows what changed)
  - `git add filename`
  - `git commit -m "message"`
  - `git push origin main`
4. **Verification:** Go to GitHub website and show the updated repository
5. **Reflect:** "What was confusing about Git? What clicked?"

**Free Resources:**
- **[GitHub Docs - "Git Basics"](https://docs.github.com/en/get-started/using-git)** (official guide)
- **[GitHub Skills - "Introduction to GitHub"](https://skills.github.com)** (interactive course, covers git basics)
- **[Pro Git Book (Free)](https://git-scm.com/book/en/v2)** (comprehensive, readable)
- **[YouTube - "Git & GitHub for Beginners"](https://www.youtube.com/watch?v=tYKLsBUruKA)** (20-minute overview)
- **[Atlassian - "Git Tutorial"](https://www.atlassian.com/git/tutorials)** (practical, free)

**Submission:**
- Link to your GitHub repository
- Record a video showing your git workflow (5 minutes)
- Note: "The scariest part was ___, but I figured it out by ___"

## Guided Practice (In-Session: 2 hours)

### Part 1: Welcome & Session Overview (5 minutes)
This is the week where everything comes together. You've learned programming concepts. You've built resilience. Now you're using professional tools.
<!-- Program Staff Talking Points:
- "Today, you're learning Git—version control. This is how every engineer manages code. When you push code to GitHub, you're doing what engineers at Google, Meta, and Apple do daily."
- "Session 7 felt like introduction. Session 8 feels like the real deal. You're going to clone repositories, make changes, commit, and push. By the end, you'll have a workflow you can use for any project."
- "Independence reaches its peak this week. If something goes wrong with Git, you won't have a step-by-step guide. You'll have documentation and your problem-solving skills. That's intentional. That's professional development."
-->

### Part 2: Breakout Room Sharing (45 minutes)

**Part A: JavaScript Functions & Sandbox Demos (22 minutes)**
Have each participant share:
- Their recorded video showing their number analyzer functions running
- Quick explanation of one function they're proud of

<!-- Program Staff Copy/Paste Discussion Prompts into Zoom Chat:
- "Who added extra functions beyond the template (e.g., count even numbers, find median)?"
- "Did anyone reuse one function inside another, like we did with average using sum?"
- "What was hardest about writing functions? What clicked?"
- "For those with loops: did you trace through the loop step-by-step to understand it?"
-->

**Part B: Git Workflow & GitHub Push (21 minutes)**
Each participant shares:
- Their recorded video showing the git workflow (clone → edit → commit → push)
- Their GitHub repository showing the new commits

<!-- Program Staff Copy/Paste Discussion Prompts into Zoom Chat:
- "Who's excited that their code is now tracked on GitHub?"
- "Did anyone run into errors with Git? How did you solve it?"
- "What command felt most powerful to you?"
- "Did anyone look at the commit history on GitHub? Notice how it tracked your changes?"

Program Staff Listening & Notes:
- Document common Git errors (these inform the staff-led portion)
- Celebrate successful commits: "You just used industry-standard tools"
- Normalize struggle: "Git errors are universal—everyone encounters them"
- Build confidence: "You cloned, edited, committed, and pushed. That's a real engineer workflow."

Tone: Frame Git as professional empowerment. "You're not just writing code; you're managing it professionally."
-->

### Part 3: Group Debrief (10 minutes)
Here's what's remarkable: you've now written code in two languages, used version control, stored code on GitHub, and proven you can learn independently. You're not beginners anymore; you're developers with real tools and workflows.
<!-- Program Staff Talking Points:
- "Your JavaScript functions showed sophisticated thinking. You used loops to iterate, conditionals to compare, and functions to package logic. You're thinking like engineers."
- "Your Git workflows were clean. I saw meaningful commit messages, successful pushes, and visible changes on GitHub. That's professional practice."
- "Independence showed up in different ways this week: some of you figured out Git errors on your own, others asked Slack strategically and learned from peers. Both are professional."

Prompt Celebration:
- "Whose commit history are they most proud of?" (Show GitHub)
- "Who feels ready to use GitHub for more complex projects?" (Gauge confidence)

Frame for Next Part:
"Now let's deepen your Git and JavaScript knowledge. We're going to do a live GitHub workflow demo, then tackle a debugging challenge. This is where you level up."
-->

### Part 4: Staff-Led GitHub Workflow & Live Demo (40 minutes)
**Objective:** Formalize Git concepts. Show professional workflow. Demonstrate debugging in Git and JavaScript.

**Demo 1: Git Workflow Deep Dive (12 minutes)**
Let's talk about the full Git workflow and what each command does.

**The Three Stages of Git:**

```plaintext
Working Directory      Staging Area          Repository (Local)
(Your Files)           (git add)             (git commit)
    |                      |                      |
    | -- git add --------> |                      |
    |                      | -- git commit ----> |
    |                                             |
    |                                             | -- git push ---> GitHub (Remote)
```

**Each Stage Explained:**
1. **Working Directory:** Your computer. Where you edit files.
2. **Staging Area:** The files you've told Git to track (via `git add`).
3. **Repository:** The saved history of your code (via `git commit`).
4. **Remote (GitHub):** The cloud version (via `git push`).


**The Commands:**

**`git status`:**
- Shows which files changed, which are staged, which are committed
- Always safe to run; it just reports status


```shellscript
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to stage changes)
        modified:   number-analyzer.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        new-file.js
```

Translation: "You changed `number-analyzer.js` but haven't staged it. You have a new file `new-file.js` that Git doesn't know about."

**`git add <filename>`:**
- Stages a file: tells Git "I want to include this in my next commit"
- Can stage multiple files: `git add file1.js file2.js`
- Stage all changes: `git add .`

**`git commit -m "message"`:**
- Creates a snapshot of your code with a message
- Message describes what you changed (for future you and your team)
- Every commit is a point you can return to

**`git push origin main`:**
- Uploads your commits to GitHub
- `origin` = the remote location (GitHub)
- `main` = the branch (usually your main code branch)

**Good Commit Messages:**
- "Add number analyzer functions" ✅ (clear, describes change)
- "Fix bug in loop" ✅ (specific, actionable)
- "wip" ❌ (unclear, unhelpful)
- "AHHH THIS WORKS NOW" ❌ (emotional, not professional)
- "Updated code" ❌ (vague, doesn't say what changed)

Your commit message is a note to your future self and your teammates. Be kind to them. Write clear messages.

<!--Program Staff Interactive Element:*

"I'm going to make a change to a file and show you the git workflow. Watch what happens at each stage."

- Show terminal: `git status` (shows modified file)
- Edit a file and save
- Show terminal: `git status` (shows the change)
- Run `git add filename`
- Show terminal: `git status` (now shows staged)
- Run `git commit -m "Add new function"`
- Show terminal: `git log` (shows commit history)
- Run `git push origin main`
- Show GitHub: the new commit appears

Questions to Participants:
- "Why do we need both `git add` and `git commit`?" → You can make multiple changes and group them logically. One `git add .` + `git commit` = one logical unit.
- "What if I commit something by accident?" → You can undo commits, but we'll cover that later. For now, just be careful.
-->

**Demo 2: GitHub Interface & Commit History (10 minutes)**
Let's explore GitHub's interface. Your commits live here.

**On GitHub Repository Page:**
1. **File List:** Shows all files in your repository
2. **Commits History:** Click "Commits" to see all your commits. Each commit shows: message, author, date, hash (unique identifier)
3. **Code:** Click on a file to see its content
  - Green highlights = additions
  - Red highlights = deletions
4. **Pull Requests & Branches:** (Intro only for now)

**Understanding Commit History:**
Here's a commit. The message says 'Add number analyzer functions.' The author is you. The date is today. If you click on this commit, you can see exactly what changed.

**Why This Matters:**
- **Accountability:** Everyone can see who changed what and when
- **Debugging:** You can find when a bug was introduced by looking at commits
- **Collaboration:** Teammates can see your progress
- **Professional:** This is what real engineers use

**Interactive Element:**
Look at your own repository's commit history on GitHub. Click one of your commits. You'll see the changes highlighted in green (additions) and red (deletions). This is how GitHub shows you what you changed.
**Demo 3: Common Git Mistakes & How to Fix Them (10 minutes)**

**Program Staff Shows Common Errors:**

**Error 1: Forgot to `git add`**
```shellscript
$ git commit -m "Add new function"
On branch main
nothing to commit, working tree clean
```

Translation: "Nothing is staged. You forgot `git add`."

**Fix:** Run `git add filename`, then `git commit -m "message"` again.

**Error 2: Typo in Commit Message**

```shellscript
$ git commit -m "Add nuber analyzer"  # Typo: "nuber" instead of "number"
```

**Fix:** For the most recent commit only:

```shellscript
git commit --amend -m "Add number analyzer"
```

This replaces the most recent commit message.

**Error 3: Tried to Push but Got an Error**

```shellscript
$ git push origin main
error: failed to push some refs to 'origin'
hint: Updates were rejected because the remote contains work that you do not have locally
```

Translation: "Someone else (or a different computer) pushed changes that you don't have yet."

**Fix:** Pull first, then push:

```shellscript
git pull origin main
git push origin main
```

**Error 4: "Permission denied" or "Authentication failed"**

Translation: "GitHub doesn't recognize you."

**Fix:** You need to set up authentication. For now, use personal access tokens or SSH keys (we'll cover later if needed).

Git errors look scary, but they're usually telling you exactly what's wrong. Read the error message. It's usually right.

**Demo 4: Undoing Changes (5 minutes)**
Sometimes you make a mistake. Git lets you undo.

**Undo Uncommitted Changes:**

```shellscript
git checkout filename  # Revert to last commit
```

**Undo a Commit (keep changes):**

```shellscript
git reset HEAD~1  # Undo most recent commit, keep changes locally
```

**Undo Everything (last resort):**

```shellscript
git reset --hard HEAD~1  # Undo most recent commit AND lose changes
```

These are powerful commands. Use them carefully. For now, just know they exist. If you need them, ask for help or check the docs.

### Part 5: Mini-Challenge - Fix Broken JavaScript Code (20 minutes)
**Objective:** Debug JavaScript code. Use problem-solving strategies. Prove independence.

**Format:** Facilitator presents broken JavaScript code. Participants work in pairs or individually to fix it.

**Challenge 1: Logic Error (5 minutes)**

**Given Broken Code:**

```javascript
function findEven(arr) {
  let evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {  // This checks if number is even
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(findEven(numbers));
```

**What's the problem?** (There isn't one! It's actually correct. This is a teaching moment.)

**Actually, here's the REAL broken version:**

```javascript
function findEven(arr) {
  let evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 = 0) {  // BUG: Using = instead of ==
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(findEven(numbers));
```

**Task:** Identify and fix the bug.

<!-- **Answer:** Change `if (arr[i] % 2 = 0)` to `if (arr[i] % 2 === 0)` -->

**Explanation:** `=` assigns; `===` compares. We want to compare, not assign.

**Challenge 2: Off-by-One Error (5 minutes)**

**Given Broken Code:**

```javascript
function sumFirstN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumFirstN(5));  // Should be 1+2+3+4+5 = 15
```

**What's the problem?** (Again, this is actually correct!)

**REAL broken version:**

```javascript
function sumFirstN(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {  // BUG: Starts at 0, includes n+1 extra iteration
    sum += i;
  }
  return sum;
}

console.log(sumFirstN(5));  // Outputs 15, but sum includes 0
```

**Task:** Identify and fix the bug.

<!-- **Answer:** The loop should be `for (let i = 1; i <= n; i++)` (start at 1, not 0)

**Explanation:** The sum is technically correct (0+1+2+3+4+5 = 15), but conceptually, we want 1+2+3+4+5. Starting at 0 is an off-by-one error.
-->

**Challenge 3: Missing Return Statement (5 minutes)**

**Given Broken Code:**

```javascript
function doubleNumbers(arr) {
  let doubled = [];
  for (let i = 0; i < arr.length; i++) {
    doubled.push(arr[i] * 2);
  }
  // BUG: Forgot to return!
}

console.log(doubleNumbers([1, 2, 3]));  // Outputs: undefined
```

**Task:** Identify and fix the bug.

<!-- **Answer:** Add `return doubled;` before the closing brace

**Explanation:** Without a return statement, the function returns `undefined` (the default). We need to explicitly return the result.

-->

**Challenge 4: Complex Logic (5 minutes)**

**Given Broken Code:**

```javascript
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello World"));  // Should be 3 (e, o, o)
```

**What's the problem?** (This is actually correct!)

**Discussion:**
- "Does this look right to you?"
- "Try running it. What's the output?"
- "Is it what you expected?"

This is a working function. The teaching point: sometimes code works perfectly, and you should verify that by testing.

Debugging involves reading the code, predicting what should happen, running it, observing the output, and comparing. If prediction matches output, great! If not, there's a bug. Always test your code.

### Part 6: Independence in Engineering & Problem-Solving (10 minutes)
**Objective:** Reflect on independence as a core engineering skill. Prepare for the transition from training to real projects.

**Facilitator Facilitates Discussion:**

**Prompt 1:** "This week was about independence—learning Git, writing functions, using professional tools. How do you feel about your independence as a learner and engineer?"
- Let 4–5 people answer (1 minute each)
- Listen for: confidence, nervousness, pride, questions
- Affirm: "Independence is a skill. You're building it right now."

**Prompt 2:** "When you got stuck on Git or JavaScript this week, what did you do?"
- Answers might include: looked at docs, asked Slack, tried a different approach, took a break
- Affirm: "That's professional problem-solving. Stuck doesn't mean you're bad; it means you're at the edge of learning."

**Prompt 3:** "What's the difference between where you started (Week 1) and where you are now?"
- This is a reflection on growth
- Listen for: learning languages, using real tools, confidence, skills
- Celebrate: "Look at the journey you've taken."

**Prompt 4:** "As you move into the actual program after this prework, what's one thing you want to commit to?"
- Answers might include: ask for help sooner, take breaks, debug systematically, celebrate small wins
- Have people state their commitment aloud

<!-- Program Staff Talking Points:

"Independence isn't about doing everything alone. It's about being resourceful, asking for help strategically, and knowing how to find answers. You've demonstrated all three this week.

You looked at documentation when confused. You asked Slack when stuck. You tried different approaches and learned from failure. That's professional.

As you move into the actual program, hold this: You have the ability to learn. You have access to resources (docs, Google, peers, instructors). You have proven you can use all three. That's not just a programming skill; that's a life skill.

Engineers face problems no one has solved before. That's the whole job. The difference between a junior engineer and a senior engineer isn't that the senior knows everything; it's that the senior knows how to figure things out. You're learning that skill right now."
-->

### Part 7: Q&A (5 minutes)
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

## Continued Learning
- **["You Don't Know JS Yet" (Free Book)](https://github.com/getify/You-Dont-Know-JS)** (deep dive into JavaScript)
- **[FreeCodeCamp - "The Complete JavaScript Course"](https://www.youtube.com/watch?v=PkZNo7MFNFg)** (full course)
- **[JavaScript.info - Advanced Topics](https://javascript.info)** (once comfortable with basics)
- **Coding Challenge Platforms:** Codewars, HackerRank, LeetCode (for more practice)

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
- Reflect on: Week 1 (digital literacy) → Week 2 (logic) → Week 3 (programming in Python) → Week 4 (JavaScript + GitHub)
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
