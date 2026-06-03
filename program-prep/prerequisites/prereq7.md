# Prerequisites Session 7: Independence + JavaScript Basics

Participants should have a basic understanding of the following foundational concepts ahead of consuming the topic outline:
- Understanding of basic programming concepts (variables, conditionals, loops) from Prerequisite Weeks 2-3
- Access to a computer with web browser
- Comfort using online tools and following instructions
- Growth mindset: willingness to learn independently and ask for help
- Google account (for some resources) or ability to create free accounts
- Basic typing proficiency
- Completed [Prerequisites Session 6: Loops + Resilience](prereq6.md)

### Table of Contents
- [Projected Time](#projected-time)
- [Motivation](#motivation)
- [Objectives](#objectives)
- [Specific Things to Learn](#specific-things-to-learn)
- [Independent Practice](#independent-practice)
  - [Task 1: Trace and Predict JavaScript Behavior](#task-1-trace-and-predict-javascript-behavior-6090-minutes)
  - [Task 2: "What is JavaScript and Why Does It Matter?"](#task-2-what-is-javascript-and-why-does-it-matter-3045-minutes)
- [Guided Practice (In-Session: 2 hours)](#guided-practice-in-session-2-hours)
  - [Part 1: Welcome & Session Overview](#part-1-welcome--session-overview-5-minutes)
  - [Part 2: Breakout Room Sharing](#part-2-breakout-room-sharing-40-minutes)
  - [Part 3: Group Debrief](#part-3-group-debrief-15-minutes)
  - [Part 4: Staff-Led JavaScript Concepts Through Code Reading](#part-4-staff-led-javascript-concepts-through-code-reading-35-minutes))
  - [Part 5: Mini-Challenge - Find the Bug in JavaScript Code](#part-5-mini-challenge---find-the-bug-in-javascript-code-20-minutes)
  - [Part 6: Independence & Code Literacy as a Professional Skill](#part-6-independence--code-literacy-as-a-professional-skill-5-minutes)
  - [Part 7: Q&A](#part-7-qa-5-minutes)
- [Continued Learning](#continued-learning)

<!-- Program Staff Notes

**Week Theme:** Independence + Intro to JavaScript + GitHub
**Mindset Focus:** Independence, initiative, self-directed learning, problem-solving without immediate hand-holding
**Technical Focus:** JavaScript fundamentals (variables, conditionals, loops, functions), GitHub basics (account creation, repository management, git workflow), remote work etiquette
**Total Week Time Commitment:** ~5.5 hours (Independent Practice + Guided Practice combined)

**Context:** This is the moment when the training wheels come off. Participants have learned programming concepts, understood resilience and ownership, and built community with peers. Now they face the tools and workflows that professional engineers use daily: JavaScript (a mainstream programming language), GitHub (the industry standard for version control), and the independence required to navigate unfamiliar tools. This week emphasizes initiative—not waiting for someone to tell you exactly what to do, but exploring, experimenting, and solving problems on your own. Independence doesn't mean isolation; it means resourcefulness. When stuck, you'll know how to find help (documentation, peers, Stack Overflow). When confused, you'll know how to break the problem down and try a different approach. By week's end, participants will have written JavaScript code and pushed it to GitHub—real artifacts of their learning that they own and can share.
-->

### Projected Time

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

### Motivation
By this point, you've begun learning the basics of programming. You've begun learning programming basics, built resilience through managing frustration and debugging code, and practiced ownership and teamwork. Now you'll start learning JavaScript, which runs in every browser and enables website interactivity. You'll also learn to use GitHub, a code storage and collaboration platform. As an aspiring engineer, you'll explore documentation and try things out independently. When you get stuck, you'll ask questions. Practicing initiative—breaking down problems, searching for solutions, and trying again— is professional engineering. You're ready for it.

### Objectives
By the end of this session, participants will:
- Understand basic JavaScript syntax such as variables and conditionals to solve simple problems
- Create and navigate a GitHub repository
- Upload files to GitHub manually (web interface)
- Write a clear README to document their work
- Practice independence: exploring tools without complete hand-holding

### Specific Things to Learn

**Technical Skills:**
- JavaScript
  - Variables: `let`, `const`, naming conventions
  - Data types: strings, numbers, booleans
  - Conditionals: `if`, `else if`, `else`
  - Console output: `console.log()`
  - Comments in JavaScript: `//` and `/* */`
  - Comparison operators: `===`, `!==`, `>`, `<`, `>=`, `<=`
  - Logical operators: `&&`, `||`, `!`
- GitHub
  - Account creation and setup
  - Repositories
    - Creating (public/private options)
    - Structure and navigation
  - Uploading files via web interface
  - Writing a README file (markdown basics)

**Core "Soft" Skills:**
- Independent learning: exploring tools without complete step-by-step guidance
- Reading and following documentation
- Trial and error: trying something, observing what happens, adjusting
- Problem-solving: when stuck, breaking the problem down
- Initiative: taking ownership of your learning journey
- Digital citizenship: thoughtful GitHub profile and repository descriptions
- Communication: documenting your work clearly for others (and your future self)

### Independent Practice

#### Task 1: Trace and Predict JavaScript Behavior (60–90 minutes)
**Objective:** Learn to read and understand JavaScript code without writing it. Develop code literacy. Build confidence that programming logic is learnable.

**Background — Why Read Code?**
Professional engineers spend more time reading code than writing it. Before you write code, you need to understand it. Code literacy—the ability to read and understand what code does—is the foundation.

You won't write any code this week. You'll read code, trace through it step-by-step, predict what happens, then verify your prediction. This teaches you how programmers actually think.

**The Task: Analyze Four JavaScript Programs**
You will receive 4 simple JavaScript programs. For each one, you will:
1. Read the code carefully
2. Trace through it step-by-step (pretend you're the computer executing it)
3. Predict the output
4. Run it and verify your prediction
5. Write an explanation of what each part does

<details><summary>Program 1: Simple Variables and Output</summary>
  
```javascript
let name = "Alex";
let age = 22;
let city = "Portland";

console.log("My name is " + name);
console.log("I am " + age + " years old");
console.log("I live in " + city);
```
**Your Task:**
1. **Read it.** What happens first? What are the variables storing?
2. **Predict:** What will the console output be?
3. **Write your prediction:**
   ```
   Output will be:
   My name is Alex
   I am 22 years old
   I live in Portland
   ```
4. **Run it:** Paste the code into https://www.jsbin.com or open browser console (F12) and run it
5. **Verify:** Did your prediction match?
6. **Explain (write):** 
   - "Line 1-3: Create three variables storing information"
   - "Line 5-7: Use console.log() to print each piece of information"
   - "The `+` sign joins strings together"

</details>

<details><summary>Program 2: Variables and Conditionals</summary>

```javascript
let temperature = 75;

if (temperature > 85) {
  console.log("It's hot!");
} else if (temperature > 70) {
  console.log("It's warm and pleasant");
} else if (temperature > 50) {
  console.log("It's cool");
} else {
  console.log("It's freezing!");
}
```
**Your Task:**
1. **Read it.** What variable is created? What decisions are being made?
2. **Trace it:** Temperature is 75. Which condition is true?
   - Is 75 > 85? No
   - Is 75 > 70? Yes → execute this block
3. **Predict:** What will output?
4. **Run it and verify**
5. **Explain:**
   - "Variable stores temperature value"
   - "If/else if checks conditions in order"
   - "Only the first true condition executes"
   - "Temperature 75 matches the second condition"
</details>

<details><summary>Program 3: Loops (For Loop)</summary>

```javascript
console.log("Counting from 1 to 5:");

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("Done!");
```

**Your Task:**
1. **Read it.** What's the loop doing? What variable controls it?
2. **Trace it step-by-step:**
   - i starts at 1
   - Check: is i <= 5? Yes → print i (prints 1)
   - i becomes 2 (i++)
   - Check: is 2 <= 5? Yes → print 2
   - i becomes 3... (continue until i = 6)
   - Check: is 6 <= 5? No → exit loop
3. **Predict:** What's the full output?
4. **Run it and verify**
5. **Explain:**
   - "The loop repeats 5 times"
   - "Variable `i` tracks which iteration we're on"
   - "i++ means 'add 1 to i'"
   - "The loop stops when the condition is false"
</details>

<details><summary>Program 4: Loops with Conditionals</summary>

```javascript
let scores = [85, 92, 78, 95, 88];
let total = 0;

for (let i = 0; i < scores.length; i++) {
  let score = scores[i];
  
  if (score >= 90) {
    console.log(score + " - Excellent!");
  } else if (score >= 80) {
    console.log(score + " - Good");
  } else {
    console.log(score + " - Needs improvement");
  }
  
  total = total + score;
}

console.log("Total: " + total);
console.log("Average: " + (total / scores.length));
```

**Your Task:**
1. **Read it.** What is `scores`? (A list of numbers) What does the loop do?
2. **Trace the first iteration (i = 0):**
   - score = scores[0] = 85
   - Is 85 >= 90? No
   - Is 85 >= 80? Yes → prints "85 - Good"
   - total becomes 0 + 85 = 85
3. **Trace the second iteration (i = 1):**
   - score = scores[1] = 92
   - Is 92 >= 90? Yes → prints "92 - Excellent!"
   - total becomes 85 + 92 = 177
4. **Predict:** Full output (5 lines of feedback + total and average)
5. **Run it and verify**
6. **Explain:**
   - "The loop processes each score in the list"
   - "Each score is checked with if/else"
   - "total is updated each iteration"
   - "After loop finishes, we calculate the average"
</details>

**Write-Up: Document Your Analysis in a Google Doc (2–3 pages)**

**Part 1: Your Predictions vs Reality**
For each of the 4 programs, write:
- What you predicted
- What actually happened
- Did you match? If not, where were you wrong?

**Part 2: Key Concepts You Found**
Read through all 4 programs and answer:
- Where did you see **variables** being used? Write an example.
- Where did you see **conditionals** (if/else)? Write an example.
- Where did you see **loops**? Write an example.
- What does `console.log()` do? Why would a programmer use it?

**Part 3: Reflection**
Answer in 2–3 sentences each:
- "What was hardest about reading this code?"
- "What surprised you about how code works?"
- "Did anything make you more confident about programming? Why?"

**Submission:**
Share a Google doc link with staff with the following:
1. Answer all write up and reflection prompts
2. Share the outputs that you get when running each code snippet in your Google doc

**Free Resources:**
- **[JSBin (Run Code)](https://www.jsbin.com)** (paste code, run, see output)
- **[MDN - "JavaScript Basics"](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)** (reference)
- **[JavaScript.info - "Variables"](https://javascript.info/variables)** (detailed explanation)
- **[YouTube - "JavaScript for Beginners - Variables](https://www.youtube.com/watch?v=PkZNo7MFNFg)"** (4-hour course, watch intro section)

**Submission:**
- Google Doc with predictions, concept analysis, and reflection
- Include a screenshot of running code with output

#### Task 2: "What is JavaScript and Why Does It Matter?" (30–45 minutes)
**Objective:** Research and explain JavaScript conceptually. Develop ability to communicate about technology. Learn independence through documentation reading.

**The Task:**
Write a **1-page beginner's guide** to JavaScript. Imagine your audience is someone who's never programmed before. They want to know: What is this thing? Where is it used? Why would I learn it? Your guide should answer:

1. **What is JavaScript?** (2–3 sentences)
   - Plain English explanation
   - Not about syntax or code
   - Example: "JavaScript is a programming language that makes websites interactive"

2. **Where do you see JavaScript in the real world?** (3–4 examples)
   - Think about websites you use every day
   - Example: "When you click a button and something happens immediately (without the page reloading), that's probably JavaScript"
   - Other examples: shopping carts, autocomplete, interactive maps, animations, games in browsers, etc.

3. **What can JavaScript do?** (3–5 things)
   - Example: "Respond to user clicks and keyboard presses"
   - "Update the page without reloading"
   - "Calculate things and show results"
   - "Store information temporarily"
   - "Create animations and interactive experiences"

4. **Why would someone learn JavaScript?** (2–3 reasons)
   - Career opportunities
   - Building web projects
   - Understanding the internet
   - Creative expression

5. **One thing that surprised you** (1–2 sentences)
   - "I didn't realize JavaScript runs in every browser"
   - "I didn't know websites use JavaScript to respond to clicks so quickly"

**Format:**
- 1-Page Written (Google Doc or word processor)
- Share a video explanation (3–5 minutes)

**Free Resources:**
- **[MDN - "What is JavaScript?"](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics#what_is_javascript)**  (official intro)
- **[JavaScript.info - "What is JavaScript?"](https://javascript.info/intro)** (beginner-friendly)
- **[Khan Academy - "Intro to JS"](https://www.khanacademy.org/computing/computer-programming/programming-js/intro-to-programming/v/programming-intro)** (video)
- **[FreeCodeCamp Article: "What is JavaScript Used For? More Than You Realize."](https://www.freecodecamp.org/news/the-applications-of-javascript/)** (practical examples)

**Submission:**
- Your 1-page guide (any format)
- 3–5 minute video explaining JavaScript to someone who's never heard of it

### Guided Practice (In-Session: 2 hours)

#### Part 1: Welcome & Session Overview (5 minutes)
This week, we're shifting gears. You're not writing code yet. You're learning to read code, understand it, and talk about it. Professional engineers spend half their time reading code—either their own from months ago, or someone else's. Learning to read code is just as important as writing it.

<!-- Program Staff Talking Points:
- "You've spent weeks learning logic through flowcharts and pseudo-code. Now you're seeing that same logic in a real programming language: JavaScript."
- "The symbols look different. `let`, `const`, curly braces, arrows. But underneath, it's the same thinking you've been doing. Variables. Conditionals. Loops. You know these concepts."
- "By the end of today, you'll see that JavaScript isn't magic. It's just logic in a different format. And that takes the fear out of it."
-->

#### Part 2: Breakout Room Sharing (40 minutes)
**Format:** Divide participants into breakout groups of 4–5.

**Part A: Code Analysis Presentations (25 minutes)**
Have each participant share:
  - One program they analyzed (pick their favorite or most interesting)
  - What they predicted vs. what actually happened
  - One moment where their prediction was wrong and what they learned
  
<!-- Program Staff Copy/Paste Discussion Prompts into Zoom Chat:
- "Whose prediction was spot-on? What made you confident in your prediction?"
- "Who predicted wrong? Where did your thinking break down?"
- "Did anyone notice patterns across the 4 programs? (e.g., variables used the same way, loops structured the same, etc.)"
- "Which program was hardest to trace? Why?"
- "Did reading code change how you think about what programming is?"
-->

**Part B: "What is JavaScript?" Sharing (13 minutes)**
Each participant shares:
  - Their 1-page guide (read key points or show it)
  - One example of JavaScript they found in the real world
  - One thing that surprised them

<!-- Program Staff Copy/Paste Discussion Prompts into Zoom Chat:
- "Whose examples were most relatable?"
- "Did anyone discover a JavaScript use case you didn't expect?"
- "How would you explain JavaScript to your parents/friends?"

Program Staff Listening & Notes:
- Note which code concepts participants noticed (loops, variables, conditionals)
- Document misconceptions (address in staff-led segment)
- Celebrate analysis: "I love how you traced through that step-by-step"
- Build confidence: "You read and understood real JavaScript code"

Tone: Frame code reading as a skill, not magic. "You parsed actual code. That's a real engineering skill.
-->

#### Part 3: Group Debrief (15 minutes)
Here's what I want you to notice: the logic inside those JavaScript programs is the same logic you've been working with for weeks. Variables (storing information). Conditionals (if/else decisions). Loops (repeat until done). The syntax is new, but the thinking is familiar.
<!-- Program Staff Talking Points:
- "You read and traced four JavaScript programs. You predicted outputs. Some predictions matched; some didn't. That's learning. Every mismatch is data: it tells you where your understanding needs adjustment."
- "Your guides to JavaScript showed me something important: you can communicate about technology without using jargon. You explained variables, loops, and conditionals without those words. You just said what they do. That's professional communication."
- "Several of you mentioned that reading code felt less intimidating than you expected. That's because you have the foundation. You understand the concepts. The symbols are just a new way to write the same thinking."

Faciliation Celebration:
- "Who feels like they understand at least one of those programs?" (Raise hands)
- "Who's less scared of JavaScript now than when we started?" (Gauge confidence shift)

Frame for Next Part:
"Now let's talk about what's happening inside that code. We're going to break down JavaScript concepts: variables, conditionals, loops. Not to write it, but to understand it. And then we're going to practice reading broken code and fixing it."
-->



#### Part 4: Staff-Led JavaScript Concepts Through Code Reading (35 minutes)

**Objective:** Teach JavaScript concepts by analyzing code, not by syntax memorization. Show how concepts map to the logic participants already know.

**Demo 1: Variables in JavaScript (8 minutes)**
Let's look at variables in JavaScript. You've seen variables in the code you read.

**Comparison:**

| Concept | Flowchart | Pseudo-Code | JavaScript |
|---------|-----------|-------------|-----------|
| "Store a name" | [Box labeled "name"] | `name = "Alex"` | `let name = "Alex";` |
| "Store a number" | [Box labeled "age"] | `age = 22` | `let age = 22;` |

<details><summary>JavaScript Variable Code Snippet</summary>
  
```javascript
let name = "Alex";
let age = 22;
let isStudent = true;

console.log(name);    // Prints: Alex
console.log(age);     // Prints: 22
console.log(isStudent); // Prints: true
```

- `let` = "create a container to store information"
- The container has a name (`name`, `age`, `isStudent`)
- The container holds a value (`"Alex"`, `22`, `true`)
- We can use the container later by writing its name

</details>

<!-- Program Staff Talking Point:
In pseudo-code, you wrote `age = 22`. In JavaScript, it's `let age = 22;`. Same idea, different syntax. The `let` tells JavaScript 'create a new variable.' The semicolon ends the statement. But the logic is identical to what you've been doing.

Program Staff Interactive Element:
"In the code you read, find a variable. Tell me:
- What's its name?
- What value does it store?
- Where is it used?"

Example from Program 2:
```javascript
let temperature = 75;
// Name: temperature
// Value: 75
// Used: in the if statements to make decisions
```
-->

**Demo 2: Conditionals in JavaScript (10 minutes)**
Conditionals are if/else statements. You've drawn them as diamonds in flowcharts. Now let's see them as code.

<details><summary>Flowchart</summary>
  
```
◇ Is temperature > 85?
 /YES  NO\
[Hot]   [Not hot]
```
</details>

<details><summary>Pseudo-Code Snippet</summary>
  
```
If temperature > 85:
  Print "It's hot"
Else:
  Print "It's not hot"
```
</details>

<details><summary>JavaScript Code Snippet</summary>
  
```javascript
if (temperature > 85) {
  console.log("It's hot!");
} else {
  console.log("It's not hot");
}
```
</details>

<details><summary>Explanation</summary>
  
- `if ()` = check if something is true
- `(temperature > 85)` = the condition
- `{ }` = the code to run if true
- `else { }` = the code to run if false
</details>

<details><summary>Comparison Operators (the conditions)</summary>

```javascript
temperature > 85    // Greater than
temperature < 50    // Less than
temperature === 75  // Exactly equal (use ===, not ==)
temperature !== 70  // Not equal
temperature >= 80   // Greater than or equal
```
</details>

<!-- Program Staff Talking Point: 
"The syntax changed (curly braces, semicolons, ===), but the logic is the same as flowcharts. You check a condition. If true, do X. If false, do Y."

Program Staff Interactive Element:

"In Program 2 that you read, the code checked:
```javascript
if (temperature > 85) { ... }
else if (temperature > 70) { ... }
else if (temperature > 50) { ... }
else { ... }
```

Temperature was 75. Why did the code print 'It's warm and pleasant'?
- 75 > 85? No
- 75 > 70? Yes ← This one is true, so this code runs"

Let participants answer.
-->
**Demo 3: Loops in JavaScript (10 minutes)**
Loops repeat code. You've seen loops in flowcharts. Here they are in JavaScript.

<details><summary>For Loop (most common)</summary>

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Output:
// 1
// 2
// 3
// 4
// 5
```

**Breaking it down:**
- `for ()` = start a loop
- `let i = 1` = create a counter starting at 1
- `i <= 5` = continue looping while i is less than or equal to 5
- `i++` = add 1 to i each time
- `{ ... }` = code to repeat

**Step-by-step execution:**
```
Iteration 1: i = 1, is 1 <= 5? Yes → print 1
Iteration 2: i = 2, is 2 <= 5? Yes → print 2
Iteration 3: i = 3, is 3 <= 5? Yes → print 3
Iteration 4: i = 4, is 4 <= 5? Yes → print 4
Iteration 5: i = 5, is 5 <= 5? Yes → print 5
Iteration 6: i = 6, is 6 <= 5? No → exit loop
```
</details>

<details><summary>While Loop (simpler)</summary>

```javascript
let cookies = 5;

while (cookies > 0) {
  console.log("Eating a cookie");
  cookies--;  // Subtract 1
}
```

**Explanation:** While cookies remain, eat one. Each time, reduce cookies by 1. When cookies reach 0, stop."
</details>

<!-- Program Staff Talking Point: 
"Loops prevent you from writing the same code 100 times. Instead of 'print 1, print 2, print 3...' you write a loop. That's efficiency and elegance."

Program Staff Interactive Element:

"Look at Program 3 that you read:
```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

Why does it print 1, 2, 3, 4, 5 (not 0, 1, 2, 3, 4)?
- Because `i` starts at 1, not 0

Why does it stop at 5?
- Because the condition is `i <= 5`; when i becomes 6, the condition is false"
-->

#### Part 5: Mini-Challenge - Find the Bug in JavaScript Code (20 minutes)
**Objective:** Practice reading code critically. Find logical errors. Practice debugging without writing code.

<!-- Program Staff Facifilitation Notes: Staff presents buggy JavaScript code. Participants identify the problem. -->

**Challenge 1: Off-by-One Error (5 minutes)**

**Given Buggy Code:** What will this print? Is it what you'd expect?

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

**Analysis:**
- i starts at 0
- Prints: 0, 1, 2, 3, 4 (five numbers, starting from 0)
- Expected (maybe): 1, 2, 3, 4, 5

<!-- Program Staff Discussion Points:
- "If you wanted 1 through 5, what would you change?"
- Answer: Start at 1 or change condition to `i < 6` or change to `i <= 5`

Talking Point: "Off-by-one errors are one of the most common bugs in programming. Even experienced engineers make them. The fix is simple once you spot it."
-->

**Challenge 2: Infinite Loop (5 minutes)**

**Given Buggy Code:** What happens if you run this code?

```javascript
let cookies = 5;

while (cookies > 0) {
  console.log("Eating a cookie");
  // BUG: forgot to decrease cookies!
}
```

**Analysis:**
- cookies starts at 5
- Loop checks: cookies > 0? Yes (5 > 0)
- Print "Eating a cookie"
- Check again: cookies > 0? Yes (still 5, didn't change!)
- Infinite loop (never stops)

<!-- Program Staff Notes:
Fix:
```javascript
while (cookies > 0) {
  console.log("Eating a cookie");
  cookies--;  // Add this line
}
```

Talking Point: "Infinite loops happen when your exit condition never becomes false. Always check: does something change that makes the condition false?"
-->

**Challenge 3: Wrong Condition (5 minutes)**

**Given Buggy Code:** Person is 16 years old. What prints?

```javascript
let age = 16;

if (age > 18) {
  console.log("You can vote");
} else {
  console.log("You're too young");
}
```

**Analysis:**
- Check: age > 18? Is 16 > 18? No
- Go to else block
- Prints: "You're too young"
- This is correct behavior, but...

<!-- Program Staff Discussion Points:
- "What if we want people 16+ to drive? The condition `age > 18` is wrong."
- "Fix: change to `age >= 16`"

Talking Point: "Getting the condition right is crucial. You're checking: >= (greater than or equal) or > (greater than)? Off by one digit changes the logic."
-->

**Challenge 4: Condition with Multiple Checks (5 minutes)**

**Given Buggy Code:** What prints?

```javascript
let temperature = 72;
let isRaining = false;

if (temperature > 70 && isRaining) {
  console.log("Warm and rainy");
} else if (temperature > 70) {
  console.log("Warm and dry");
} else {
  console.log("Cold");
}
```

**Analysis:**
- Check: temperature > 70 && isRaining? Is 72 > 70? Yes. Is isRaining true? No. (AND needs both true)
- So: first condition is false
- Check: temperature > 70? Is 72 > 70? Yes
- Prints: "Warm and dry"
- This is correct!

<!-- Program Staff Discussion Points:
- "The `&&` means AND (both must be true)"
- "If you want OR (either one), you'd use `||`"
- "This code is actually working correctly. But understanding why takes careful reading."

Talking Point: "Learning to read code and trace through it is a superpower. You can debug anything once you master this."
-->

#### Part 6: Independence & Code Literacy as a Professional Skill (5 minutes)
Independence, as it applies to code, means: you can read documentation, you can analyze code, you can figure out what it does by tracing through it. You don't panic when you see syntax you don't recognize. You ask questions. You read carefully. You learn.
<!-- Program Staff Talking Points
- "This week, you became code-literate. You read JavaScript, understood it, and communicated about it. That's not a small thing. That's professional."
- "Many beginners think they need to write code immediately. But the best engineers read code first. They understand patterns. They learn from others' work. Then they write."
- "You've proven this week that you can do all of that."
-->

#### Part 7: Q&A (5 minutes)
Q: "Why JavaScript?" \
A: It's the language of the web. Every browser runs it. It's everywhere.

Q: "Do I need to memorize JavaScript?" \
A: No. You reference documentation constantly. Even senior engineers look up syntax.

Q: "What if I get really stuck on GitHub?" \
A: That's what office hours and Slack are for. GitHub has great docs too. Take a break and come back.

Q: "Can I work on my code locally (on my computer) instead of in a sandbox?" \
A: Yes! But that requires setup (installing Node.js, a code editor). We'll cover that later if interested or feel free to take the initiative to investigate and try this on your own (it's a good opportunity to practice resilience and mindfulness)

Q: "When do we start writing JavaScript?" \
A: Next session. You have the foundation now.

Q: "What if I still don't understand loops?" \
A: That's okay. You'll write them next week, and it'll click. Come to office hours if you want more explanation now.

Q: "Is this going to prepare me for the actual program?" \
A: Yes. You understand concepts. Syntax is just the vehicle for those concepts.


### Continued Learning

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
