# Prerequisites Session 7: Independence + JavaScript Basics

Participants should have a basic understanding of the following foundational concepts ahead of consuming the topic outline:
- Understanding of basic programming concepts (variables, conditionals, loops) from Prerequisite Weeks 2-3
- Access to a computer with web browser
- Comfort using online tools and following instructions
- Growth mindset: willingness to learn independently and ask for help
- Google account (for some resources) or ability to create free accounts
- Basic typing proficiency
- Completed [Prerequisites Session 6: Loops + Resilience](prereq6.md)

- [Projected Time](#projected-time)
- [Motivation](#motivation)
- [Objectives](#objectives)
- [Specific Things to Learn](#specific-things-to-learn)
- [Independent Practice](#independent-practice)
  - [Task 1: JavaScript Sandbox Exercise No.1 - Variables + Conditionals](#task-1-javascript-sandbox-exercise-no1---variables--conditionals-6090-minutes)
  - [Task 2: GitHub Onboarding Step 1 - Create Your First Repository](#task-2-github-onboarding-step-1---create-your-first-repository-3045-minutes)
- [Guided Practice (In-Session: 2 hours)](#guided-practice-in-session-2-hours)
  - [Part 1: Welcome & Session Overview](#part-1-welcome--session-overview-5-minutes)
  - [Part 2: Breakout Room Sharing](#part-2-breakout-room-sharing-40-minutes)
  - [Part 3: Group Debrief](#part-3-group-debrief-15-minutes)
  - [Part 4: Staff-Led JavaScript Fundamentals](#part-4-staff-led-javascript-fundamentals-35-minutes)
  - [Part 5: Mini-Challenge - Predict the Output](#part-5-mini-challenge---predict-the-output-20-minutes)
  - [Part 6: Independence in Learning & Problem-Solving](#part-6-independence-in-learning--problem-solving-5-minutes)
  - [Part 7: Q&A](#part-7-qa-5-minutes)
- [Continued Learning](#continued-learning)

<!-- Program Staff Notes

**Week Theme:** Independence + Intro to JavaScript + GitHub
**Mindset Focus:** Independence, initiative, self-directed learning, problem-solving without immediate hand-holding
**Technical Focus:** JavaScript fundamentals (variables, conditionals, loops, functions), GitHub basics (account creation, repository management, git workflow), remote work etiquette
**Total Week Time Commitment:** ~5.5 hours (Independent Practice + Guided Practice combined)

**Context:** This is the moment when the training wheels come off. Participants have learned programming concepts (Karel in Python), understood resilience and ownership, and built community with peers. Now they face the tools and workflows that professional engineers use daily: JavaScript (a mainstream programming language), GitHub (the industry standard for version control), and the independence required to navigate unfamiliar tools. This week emphasizes initiative—not waiting for someone to tell you exactly what to do, but exploring, experimenting, and solving problems on your own. Independence doesn't mean isolation; it means resourcefulness. When stuck, you'll know how to find help (documentation, peers, Stack Overflow). When confused, you'll know how to break the problem down and try a different approach. By week's end, participants will have written JavaScript code and pushed it to GitHub—real artifacts of their learning that they own and can share.
-->

## Projected Time

**Independent Practice (Pre-Session): ~2 hours**
- JavaScript Sandbox Exercise No.1 - Variables + Conditionals: 60–90 minutes
- GitHub Onboarding Step 1 - Create Your First Repository: 30–45 minutes

**Guided Practice (In-Session): 2 hours**
- Welcome & Overview: 5 minutes
- Breakout Room Sharing (JS Demos + GitHub Repos): 40 minutes
- Group Debrief: 15 minutes
- Staff-Led JavaScript Fundamentals: 35 minutes
- Mini-Challenge: Predict the Output: 20 minutes
- Independence in Learning & Problem-Solving: 5 minutes
- Q&A: 5 minutes

## Motivation
By this point in the program, you've learned to code in Python using Karel. You've built resilience through frustration and debugging. You've learned ownership and how to work in teams. Now you're learning the tools that real engineers use every day. JavaScript is the language of the web—it runs in every browser and powers interactive websites. GitHub is where every professional engineer stores their code and collaborates with teams. Learning these tools independently—by exploring documentation, trying things out, asking questions strategically—is how you'll grow as an engineer. This week, the instructor won't hold your hand through every step. You'll be expected to figure some things out on your own. You'll hit roadblocks. That's the point. This is where you practice initiative: breaking problems down, searching for solutions, trying again. This is professional engineering. And you're ready for it.

## Objectives
By the end of this session, participants will:
- Write JavaScript code to solve simple problems (variables, conditionals)
- Understand JavaScript syntax and how it compares to Python
- Execute and test JavaScript code in an online sandbox
- Create and navigate a GitHub repository
- Upload files to GitHub manually (web interface)
- Write a clear README to document their work
- Practice independence: exploring tools without complete hand-holding
- Understand GitHub as the place where engineers store and share code
- See themselves as independent learners who can find resources and solve problems

## Specific Things to Learn

**Technical Skills:**
- JavaScript variables: `let`, `const`, naming conventions
- JavaScript data types: strings, numbers, booleans
- JavaScript conditionals: `if`, `else if`, `else`
- Console output: `console.log()`
- Comments in JavaScript: `//` and `/* */`
- Comparison operators: `===`, `!==`, `>`, `<`, `>=`, `<=`
- Logical operators: `&&`, `||`, `!`
- GitHub account creation and setup
- Creating a GitHub repository (public/private options)
- Uploading files via GitHub web interface
- Writing a README file (markdown basics)
- GitHub repository structure and navigation

**Core "Soft" Skills:**
- Independent learning: exploring tools without complete step-by-step guidance
- Reading and following documentation
- Trial and error: trying something, observing what happens, adjusting
- Problem-solving: when stuck, breaking the problem down
- Initiative: taking ownership of your learning journey
- Digital citizenship: thoughtful GitHub profile and repository descriptions
- Communication: documenting your work clearly for others (and your future self)

## Independent Practice

### Task 1: JavaScript Sandbox Exercise No.1 - Variables + Conditionals (60–90 minutes)
**Objective:** Write and test your first JavaScript code. Learn JavaScript syntax in an interactive environment.

**Background — What is JavaScript?**
JavaScript is the programming language of the web. It runs in every web browser. Unlike Python (which runs on servers and computers), JavaScript typically runs in browsers to make web pages interactive. You'll use JavaScript to create dynamic websites, handle user input, and control what happens on the page.

**Key Differences from Python:**
- Variables use `let` or `const` instead of direct assignment
- Conditionals use the same `if/else` logic but with different syntax
- Curly braces `{}` define code blocks instead of indentation
- Semicolons end statements (though JavaScript is forgiving about this)

**The Task: "Temperature Feedback System"**
Write a JavaScript program that:
1. Stores a temperature value in a variable
2. Uses conditionals to determine what feedback to give
3. Outputs the feedback using `console.log()`

**Your goal:** Write code that takes a temperature (in Fahrenheit) and returns appropriate feedback:
- Below 32°F: "Freezing! Stay warm."
- 32–50°F: "Cold. Bring a jacket."
- 51–70°F: "Cool. Light layer recommended."
- 71–85°F: "Warm. Comfortable weather!"
- Above 85°F: "Hot! Stay hydrated."

**Setup Instructions:**
1. **Choose a JavaScript Sandbox:** Pick one of these (all free, no account required for basic use):
  - **CodePen:** [https://codepen.io](https://codepen.io) (most beginner-friendly; visual feedback)
  - **Replit:** [https://replit.com](https://replit.com) (supports many languages; great for learning)
  - **JSFiddle:** [https://jsfiddle.net](https://jsfiddle.net) (classic; simple interface)
  - **CodeSandbox:** [https://codesandbox.io](https://codesandbox.io) (more advanced; good for projects)
2. **Start a New Project:** Create a new "pen" or project
3. **Write Your Code:** Use the template below as a starting point
4. **Test It:** Change the temperature variable and see the output
5. **Record a 2-Minute Demo:** Show your code and explain what it does


**Example Code Template:**

```javascript
// Temperature Feedback System

let temperature = 72; // Change this value to test

if (temperature < 32) {
  console.log("Freezing! Stay warm.");
} else if (temperature <= 50) {
  console.log("Cold. Bring a jacket.");
} else if (temperature <= 70) {
  console.log("Cool. Light layer recommended.");
} else if (temperature <= 85) {
  console.log("Warm. Comfortable weather!");
} else {
  console.log("Hot! Stay hydrated.");
}
```

**What to Do:**
1. Paste the template into your sandbox
2. Click "Run" or "Execute" to see the output in the console
3. Change the `temperature` value and run again to test different scenarios
4. Modify the code: maybe add another condition, or change the feedback messages
5. Once comfortable, record a 2-minute video explaining your code

**Common Issues (and How to Fix Them):**
- "Nothing happens when I click Run" → Look for a "Console" tab at the bottom; output appears there
- "I see an error message" → Read it carefully. It usually tells you what's wrong (missing bracket, typo, etc.)
- "My condition isn't working" → Double-check the operators: `===` (equals), `<` (less than), `>` (greater than)
- "I'm not sure what to write" → Start with the template. Change one thing. See what happens. That's how you learn.

**Video: Demonstrate & Explain (2–5 minutes)**
Record a video showing:
1. **Your Code:** Screen share your JavaScript code in the sandbox
2. **Run It:** Show it running with one temperature value, then change it and run again
3. **Explain:** Walk through your code line by line:
  - "Here I'm creating a variable `temperature` and setting it to 72"
  - "Then I have an if statement that checks if temperature is less than 32..."
  - "The console.log() prints the message to the console"
4. **Reflect:** "What was confusing about JavaScript compared to Python?" or "What did you understand immediately?"

**Free Resources:**
- **[MDN Web Docs - "JavaScript Basics"](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)** (official, comprehensive reference)
- **[JavaScript.info - "The JavaScript Language"](https://javascript.info)** (free, interactive course starting from basics)
- **[FreeCodeCamp - "JavaScript for Beginners"](https://www.youtube.com/watch?v=PkZNo7MFNFg)** (4-hour YouTube course)
- **[Codecademy - "Learn JavaScript"](https://www.codecademy.com/learn/introduction-to-javascript)** (free tier available)
- **[Khan Academy - "Intro to JavaScript"](https://www.khanacademy.org/computing/computer-programming/programming-js)** (free, interactive)
- **[W3Schools - "JavaScript Tutorial"](https://www.w3schools.com/js/)** (reference; good for looking up syntax)

**Submission:**
- Link to your sandbox (share the project URL)
- Share video explaining your code (2–5 minutes)
- Note: "JavaScript syntax felt ___ compared to Python because ___"

### Task 2: GitHub Onboarding Step 1 - Create Your First Repository (30–45 minutes)
**Objective:** Set up GitHub, create a repository, and upload your work. Understand GitHub as your professional portfolio.

**Background — What is GitHub?**
GitHub is where engineers store code and collaborate. It's like Google Drive for programmers. Every professional engineer has a GitHub profile that shows their projects. In this program, you'll use GitHub to track your work, practice version control, and build your portfolio.

**What You'll Do:**
1. Create a GitHub account
2. Create a repository named `techtonica-prerequisites`
3. Upload your JavaScript file to the repository
4. Write a README explaining what you learned
5. Share your repository link

**Setup Instructions:**

**Part A: Create a GitHub Account (5 minutes)**
1. Go to [https://github.com](https://github.com)
2. Click "Sign up"
3. Enter your email, create a password, choose a username. **Username tip:** Use something professional (you'll share this). Examples: `firstname-lastname`, `firstname1989`, or your name if available. Avoid numbers or special characters if possible.
4. Verify your email
5. Done! You now have a GitHub account.

**Part B: Create Your First Repository (10 minutes)**
1. Log in to GitHub
2. Click the "+" icon (top right) and select "New repository"
3. Fill in the form:
  - **Repository name:** `techtonica-prerequisites`
  - **Description:** "Prework for [Program Name] - JavaScript and GitHub practice"
  - **Public / Private:** Select "Public" (so you can share it and it shows on your profile)
  - **Initialize with a README:** Check this box (GitHub will create a README automatically)
4. Click "Create repository"
5. Done! You now have a repository.

**Part C: Upload Your JavaScript File (15 minutes)**
1. In your repository, click "Add file" → "Upload files"
2. Drag and drop your JavaScript file (or click to browse and select it)
  - You can copy your sandbox code into a text file and save it as `temperature-feedback.js`
  - Or take a screenshot of your code and upload that (not ideal, but acceptable)
3. Add a commit message: "Add temperature feedback system"
4. Click "Commit changes"
5. Your file is now on GitHub!

**Part D: Write a README (15 minutes)**
1. In your repository, click the pencil icon next to the README file (or click "README.md")
2. Edit the file to include:
  - **Title:** "JavaScript Prework - Week 4"
  - **Description:** What this project is about (2–3 sentences)
  - **What I Learned:** List 3–5 things you learned about JavaScript or GitHub
  - **How to Run:** "Open the JavaScript file in a code sandbox (CodePen, Replit, etc.) or a browser console"
  - **Questions I Still Have:** List 1–2 things you're curious about
3. Click "Commit changes"
4. Done!

**Common Issues:**
- "I can't find the upload button" → Look for "Add file" near the top of the repo
- "My README looks ugly" → GitHub uses markdown. Look up markdown syntax, or just write plain text and add line breaks
- "I don't know what to write in the README" → Just be honest: what did you learn? What confused you? That's enough.

**Submission:**
- Share your GitHub repository link with your code and README
- Share your GitHub username so program staff and peers can visit your profile

**Free Resources:**
- **[GitHub Docs - "Getting Started"](https://docs.github.com/en/get-started)** (official, comprehensive)
- **[GitHub Skills - "Introduction to GitHub"](https://skills.github.com)** (interactive, free course by GitHub)
- **[YouTube - "GitHub for Beginners"](https://www.youtube.com/watch?v=tYKLsBUruKA)** (15-minute overview)
- **[Markdown Guide](https://www.markdownguide.org)** (if you want to style your README nicely)
- **[FreeCodeCamp - "Git & GitHub for Beginners"](https://www.youtube.com/watch?v=RGOj5yH7evk)** (full tutorial)

## Guided Practice (In-Session: 2 hours)

## Part 1: Welcome & Session Overview (5 minutes)
This week, we're entering the real world of engineering. You're learning JavaScript, a language used by millions of engineers. You're learning GitHub, the platform where all professional code lives. And you're learning independence—how to learn when no one is holding your hand. Last week, you had Karel to guide you. This week, you have documentation, sandboxes, and your own problem-solving skills. That's a big shift. Some of it will feel hard. That's okay. Struggle is where growth happens.

<!-- Program Staff Talking Points:
- "By the end of today, you'll have code on GitHub. Real code. Real platform. You'll be able to share that with anyone and say, 'I built this.' That's powerful."
- "Let's dig in."
-->

### Part 2: Breakout Room Sharing (40 minutes)
**Format:** Divide participants into breakout groups of 4–5.

**Part A: JavaScript Code Demos (20 minutes)**
Have each participant share:
- Their 2-minute recorded video of their JavaScript code running (if prepared)
- OR screen share their CodePen/Replit sandbox showing the code and output
- Brief explanation: "What did you find confusing? What clicked?"

<!-- Program Staff Copy/Paste Discussion Prompts into Zoom Chat:
- "Who changed the code to test different values? What did you try?"
- "Did anyone add extra conditions or messages to the code?"
- "For those who found JavaScript confusing: what was the biggest difference from Python?"
- "For those who felt confident: why did this feel easier than expected?"
-->

**Part B: GitHub Repository Showcase (18 minutes)**
Each participant shares:
- Their GitHub repository link (share screen or paste link in chat)
- Quick walkthrough of their repository structure
- Their README: "What did you write about what you learned?"

<!-- Program Staff Copy/Paste Discussion Prompts into Zoom Chat:
- "Whose README is the clearest? What made it clear?"
- "Did anyone notice anything cool about GitHub that surprised you?"
- "How did it feel uploading your first code to GitHub?"
- "Who's proud of their repository being public on the internet?" (Celebrate!)

Program Staff Listening & Notes:
- Document common confusions with JavaScript (these inform the staff-led portion)
- Celebrate initiative: "I love that you figured that out on your own"
- Normalize struggle: "Everyone finds something confusing their first time"
- Build confidence: "Look at what you accomplished in just 90 minutes"

Tone: Frame independence as strength. "You didn't have a step-by-step guide, and you figured it out. That's exactly the skill engineers need."
-->

### Part 3: Group Debrief (15 minutes)
Here's what's remarkable: you've now written code in two languages (Python and JavaScript). You understand the core concepts transfer. You've stored code on GitHub. You're setting up the building blocks for a portfolio. You're not beginners anymore; you're developers.
<!-- Program Staff Talking Points:
- "Your JavaScript code was well-structured. I saw clear variable declarations, multiple conditions, and logical flow. That's solid foundational thinking."
- "Your README files showed self-awareness: 'Here's what I learned, here's what confused me, here's what I'm still curious about.' That's professional. That's how engineers document their work."
- "Independence showed up in different ways: some of you explored sandboxes without prompting, tried extra features, modified the code to test different scenarios. Others asked questions strategically in Slack. Both are forms of independence—taking initiative with the tools and resources available."

Faciliation Celebration:
- "Who's excited to keep going with JavaScript?" (Gauge interest)
- "Who was surprised at how much they could do in 90 minutes?" (Celebrate self-efficacy)

Frame for Next Part:
"Now let's deepen your JavaScript knowledge. We're going to talk about variables and conditionals more formally, then we'll do a prediction exercise where you trace through code. This is where you level up."
-->

### Part 4: Staff-Led JavaScript Fundamentals (35 minutes)
**Objective:** Formalize JavaScript concepts. Show common patterns and pitfalls. Build confidence and framework for problem-solving.

**Demo 1: Variables and Data Types in JavaScript (8 minutes)**
In Python, you just write `x = 5`. In JavaScript, it's slightly different. Let's understand why.

**Variables in JavaScript:**

```javascript
let temperature = 72;
let message = "Hello, World!";
let isRaining = true;

const PI = 3.14159;
```

**`let` vs `const`:**
- `let`: Variable that can change (mutable)
- `const`: Variable that cannot change (immutable)
- Rule of thumb: Use `const` by default. Use `let` only when you know the value will change.

**Why the distinction?** It prevents bugs. If you accidentally overwrite a constant, JavaScript throws an error. That's good—it helps you catch mistakes early.

**Data Types:**
- **Strings:** `"Hello"`, `'World'` (use quotes)
- **Numbers:** `42`, `3.14` (no quotes)
- **Booleans:** `true`, `false`
- **Null/Undefined:** Represent "no value" (we'll skip deep dive for now)

**Type Coercion (JavaScript's Quirk):**

```javascript
console.log("5" + 3);        // Output: "53" (string concatenation, not addition!)
console.log(5 + 3);          // Output: 8 (numeric addition)
console.log("5" === 5);      // Output: false (different types)
console.log("5" == 5);       // Output: true (JavaScript converts types)
```

JavaScript is flexible, sometimes too flexible. Always use `===` for comparison (strict equality), not `==`.

<!-- Program Staff Interactive Element:
"I'm going to show you some code. Predict what the output will be:

```javascript
let x = 10;
let y = "10";
console.log(x + y);
```

Will it be `20`, `"1010"`, or an error?"
- Let participants guess
- Answer: `"1010"` (string concatenation because `y` is a string)
- Explain: "JavaScript sees that one of the values is a string and converts the other one too."
-->

**Demo 2: Conditionals in JavaScript (10 minutes)**
Conditionals work the same way in JavaScript as Python: check a condition, execute code based on the result.

**JavaScript if/else:**

```javascript
let age = 16;

if (age >= 18) {
  console.log("You can vote.");
} else if (age >= 16) {
  console.log("You can drive.");
} else {
  console.log("You're too young.");
}
```

**Comparison Operators:**
- `===` Strict equality (use this!)
- `!==` Not equal
- `>` Greater than
- `<` Less than
- `>=` Greater than or equal
- `<=` Less than or equal

**Logical Operators:**
- `&&` AND (both must be true)
- `||` OR (at least one must be true)
- `!` NOT (reverses true/false)

**Examples:**

```javascript
let temp = 75;
let sunny = true;

if (temp > 70 && sunny) {
  console.log("Perfect day for a picnic!");
}

if (temp < 50 || raining) {
  console.log("Stay inside.");
}
```

**Ternary Operator (Shortcut):**

```javascript
let canVote = age >= 18 ? "Yes" : "No";
// Translation: if (age >= 18) canVote = "Yes"; else canVote = "No";
```

**Common Mistake: Assignment vs Comparison:**

```javascript
if (age = 18) {  // WRONG! This assigns 18 to age, not comparing
  console.log("Is 18 years old");
}

if (age === 18) {  // RIGHT! This compares age to 18
  console.log("Is 18 years old");
}
```

Always use `===` for comparison, not `=`. One equals sign assigns; three equals signs compares.

<!-- Program Staff Interactive Element:**

Share this code:

```javascript
let score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}
```

What will the output be?"
- Let participants predict
- Answer: "B" (because 85 is >= 80 and < 90)
--->

**Demo 3: Comments and Console Output (8 minutes)**
Good code tells a story. Comments and clear output help.

**Comments in JavaScript:**

```javascript
// Single-line comment: explains one line

/*
Multi-line comment:
Explains a block of code
Useful for longer explanations
*/

let temperature = 72; // Current temperature in Fahrenheit
```

**Why Comments?**
- Future you will forget what you wrote
- Teammates need to understand your code
- Comments explain the "why," not the "what" (code shows what)


**Console Output:**

```javascript
console.log("Hello, World!");
console.log("Temperature:", temperature);
console.log("Is it hot?", temperature > 85);
```

**Why log?**
- Debugging: see what values are at each step
- Testing: verify your code is doing what you expect
- Communication: show the user what happened

In real programming, you'll use console.log() constantly to debug. It's your best friend.

<!-- Program Staff Interactive Element:

"What will this output?

```javascript
let name = "Sarah";
let age = 22;

console.log("Name:", name);
console.log("Age:", age);
console.log("They are", age, "years old");
```

- Let participants predict
- Output:

```plaintext
Name: Sarah
Age: 22
They are 22 years old
```
--->

### Part 5: Mini-Challenge - Predict the Output (20 minutes)
**Objective:** Build predictive thinking. Develop ability to trace through code execution.

**Format:** Facilitator shows code. Participants predict output. Then facilitator reveals the answer.

**Challenge 1: Simple Variables (3 minutes)**

**Observe This Code:** What will the console output?

```javascript
let x = 10;
let y = 5;
let z = x + y;

console.log(z);
console.log(x);
console.log(y);
```

<!-- Program Staff Notes:
**Participants Predict:**
- Give 1 minute to think
- Collect answers: "Who thinks it outputs 10, 5, 15?"

**Answer:**

```plaintext
15
10
5
```

**Talking Point:** "You read the code line by line. Execute each line in your head. That's how debugging works."
-->

**Challenge 2: String Concatenation (4 minutes)**

**Observe This Code This Code:** What will the console output?

```javascript
let greeting = "Hello";
let name = "Alex";
let message = greeting + ", " + name + "!";

console.log(message);
```

<!-- Program Staff Notes:
**Participants Predict:**
- Discuss: "Is this string concatenation or addition?"
- Collect answers

**Answer:**

```plaintext
Hello, Alex!
```

**Talking Point:** "When you use `+` with strings, JavaScript concatenates (joins) them. It's one of JavaScript's quirks."
-->

**Challenge 3: Conditional Logic (6 minutes)**

**Observe This Code:** What will the console output? (Both lines)

```javascript
let score = 78;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}

console.log("Final grade determined.");
```

<!-- Program Staff Notes:
**Participants Predict:**
- Give 2 minutes to think
- Discuss: "Which condition is score 78 >= ?"

**Answer:**

```plaintext
C
Final grade determined.
```

**Talking Point:** "Trace through step by step. First condition: 78 >= 90? No. Second condition: 78 >= 80? No. Third condition: 78 >= 70? Yes! Execute that block."
-->

**Challenge 4: Complex Logic with Logical Operators (6 minutes)**

**Observe This Code:** What will the console output?

```javascript
let age = 16;
let hasLicense = true;
let isInsured = false;

if (age >= 16 && hasLicense && isInsured) {
  console.log("Can drive.");
} else if (age >= 16 && hasLicense) {
  console.log("Can drive with restrictions.");
} else {
  console.log("Cannot drive.");
}
```

<!-- Program Staff Notes:
**Participants Predict:**
- Give 2–3 minutes
- Discuss: "Check each condition with AND logic"

**Answer:**

```plaintext
Can drive with restrictions.
```

**Explanation:** "First condition: age >= 16 (true) && hasLicense (true) && isInsured (false). Since one part is false, the whole AND is false. Second condition: age >= 16 (true) && hasLicense (true). Both are true, so this executes."

**Talking Point:** "AND requires all parts to be true. OR requires at least one to be true. Understanding this is crucial for debugging conditionals."
-->

### Part 6: Independence in Learning & Problem-Solving (5 minutes)
When you got stuck on JavaScript syntax, you didn't give up. You looked at examples, tried again, searched for answers. That's independence. When you created your GitHub account and repository, you took ownership. You didn't wait for someone to do it for you. You did it. Independence doesn't mean you never ask for help. It means when you do ask, it's a strategic choice—you've tried on your own first. That's professional. As you move forward, hold this mindset: You have the ability to learn. You have access to resources. You have peers to learn from. Use all three.

<!-- Program Staff Talking Points
- "This week, you stepped into independence. You didn't have a Karel world telling you exactly what to do. You had documentation, sandboxes, and your own instincts."
- "Some of you felt confident from the start. Some of you felt lost initially, but figured it out. Both are independence. It's not about confidence; it's about resourcefulness."
-->

### Part 7: Q&A (5 minutes)
Q: "Why JavaScript?" \
A: It's the language of the web. Every browser runs it. It's everywhere.

Q: "Is JavaScript hard?" \
A: Different, not hard. Once you know Python, JavaScript syntax is just new symbols. The logic is the same.

Q: "Do I need to memorize JavaScript?" \
A: No. You'll reference documentation constantly. I do, and I've been coding for 20 years.

Q: "What if I get really stuck on GitHub?" \
A: That's what office hours and Slack are for. GitHub has great docs too. Take a break and come back.

Q: "Can I work on my code locally (on my computer) instead of in a sandbox?" \
A: Yes! But that requires setup (installing Node.js, a code editor). We'll cover that later if interested.

## Continued Learning

**JavaScript**
1. Variable declaration: `let`, `const` with examples
2. Data types: strings, numbers, booleans
3. Comparison operators: `===`, `!==`, `>`, `<`, `>=`, `<=`
4. Logical operators: `&&`, `||`, `!`
5. If/else/else if structure with examples
6. Common mistakes: `=` vs `===`, type coercion

**GitHub**
1. Create account, create repository, upload files (step-by-step)
2. Repository structure explained
3. How to edit files on GitHub
4. README basics and markdown formatting

**JavaScript vs Python Comparison**
1. Variables: Python `x = 5` vs JavaScript `let x = 5`
2. Conditionals: syntax comparison
3. Loops: for/while (both languages)
4. Functions: definition and calling
5. Common gotchas when switching languages

**Debugging JavaScript in the Console**
1. How to open browser console (Chrome, Firefox, Safari)
2. Reading error messages
3. Using `console.log()` to trace execution
4. Finding syntax errors vs logic errors

**Independence Toolkit: Resources for Stuck Moments**
1. MDN Web Docs (what to search for)
2. JavaScript.info (interactive tutorials)
3. Stack Overflow (how to search for answers)
4. GitHub Help docs (where to find solutions)
5. Slack #help-desk (asking peers)

**Community Practices:**
- Use the #pre-applicant channel for JavaScript questions and sharing repositories
- Celebrate first commits: "Show off your first GitHub repo!"
- Peer code review: "Can someone review my code?"
- Share debugging tricks: "I figured out X by doing Y"

**Optional Challenges (for those who want more):**
- Add more temperature ranges to the exercise
- Create a grade calculator (input score, output letter grade)
- Build a simple calculator (add, subtract, multiply, divide)
- Explore other JavaScript sandboxes and compare features
