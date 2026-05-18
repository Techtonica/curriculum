# Prerequisites Session 6: Loops + Resilience

Participants should have a basic understanding of the following foundational concepts ahead of consuming the topic outline:
- Completion of Prerequisite Session 5 
- Understanding of programming basics (sequences, commands, debugging)
- Comfort with frustration and willingness to persist
- Ability to video record and write reflections
- Willingness to pair with a peer and discuss challenges
- Completed [Prerequisites Session 5: Resilience + Programming Foundation](../prereq5.md)

### Table of Contents
- [Motivation](#motivation)
- [Objectives](#objectives)
- [Specific Things to Learn](#specific-things-to-learn)
- [Independent Practice](#independent-practice)
  - [Task 1: Design a Flowchart for a More Complex Problem](#task-1-design-a-flowchart-for-a-more-complex-problem-75120-minutes)
  - [Task 2: "Resilience Partner Check-In"](#task-2-resilience-partner-check-in-3045-minutes)
- [Guided Practice (In-Session: 2 hours)](#guided-practice-in-session-2-hours)
  - [Part 1: Welcome & Session Overview](#part-1-welcome--session-overview-5-minutes)
  - [Part 2: Breakout Room Sharing](#part-2-breakout-room-sharing-45-minutes)
  - [Part 3: Group Debrief](#part-3-group-debrief-10-minutes)
  - [Part 4: Staff-Led Translating Flowcharts to Pseudo-Code](#part-4-staff-led-translating-flowcharts-to-pseudo-code-40-minutes)
  - [Part 5: Mini-Challenge - Find and Fix Errors in Pseudo-Code](#part-5-mini-challenge---find-and-fix-errors-in-pseudo-code-20-minutes)
  - [Part 6: Decomposition & Independence in Problem-Solving](#part-6-decomposition--independence-in-problem-solving-10-minutes)
  - [Part 7: Q&A](#part-7-qa-5-minutes)
- [Continued Learning](#continued-learning)

### Projected Time
- Independent Practice (Pre-Session): ~2.5 hours**
- Guided Practice (In-Session): 2 hours

### Motivation
If Prerequisite Session 5 introduced programming as step-by-step instructions, Session 6 teaches you how to write *smart* instructions. Loops (`for`, `while`) let you repeat commands without rewriting them. Functions let you repackage logic for reuse. Together, these concepts transform programming from tedious line-by-line coding to elegant problem-solving. But they also introduce new complexity. Bugs become harder to trace. Logic becomes more abstract. This is where resilience deepens. You won't just bounce back from frustration; you'll use frustration as information. "My while loop isn't terminating correctly—what's wrong?" "I called this function but it didn't produce the output I expected—why?" These are sophisticated debugging questions that require persistence and systematic thinking. Additionally, this session emphasizes peer collaboration: checking in with a partner about struggles, learning from their approaches, and building psychological safety around vulnerability. By week's end, you won't just be a programmer; you'll be part of an engineering community that values growth, resilience, and mutual support.

### Objectives
By the end of this session, participants will:
- Understand loops (for loops, while loops) and when to use each
- Write programs that use loops to reduce repetition
- Understand functions and decomposition (breaking problems into smaller, reusable pieces)
- Debug looping logic and identify infinite loops
- Recognize patterns in problems and apply loops or functions to solve them
- Practice resilience in the context of more complex code
- Learn from peers' approaches and strategies
- Understand that smart code is often code that looks simple (because it abstracts complexity)
- Build psychological safety and peer support in a learning community

### Specific Things to Learn

**Technical Skills:**
- For loops: when and how to use them
- While loops: conditions and termination
- Infinite loops: recognizing and fixing them
- Functions/procedures: defining and calling reusable code
- Function parameters: passing information into functions
- Problem decomposition: breaking large problems into functions
- Refactoring: simplifying messy logic
- Tracing through loops: predicting behavior

**Core "Soft" Skills:**
- Asking for peer feedback without shame
- Giving feedback on someone else's code
- Recognizing patterns and abstracting solutions
- Persisting through complex logic
- Learning from others' approaches
- Balancing confidence in your solution with openness to better ways
- Ownership of your learning and your code

### Independent Practice

#### Task 1: Design a Flowchart for a More Complex Problem (75–120 minutes)
**Objective:** Create flowcharts for a multi-step process. Practice decomposition (breaking problems into smaller parts). Learn how functions work through decomposition.

**Background — What is Decomposition?**
Decomposition means breaking a big, complicated problem into smaller, simpler pieces. Each piece is easier to solve. Then you combine the pieces.

Example:
**Big problem:** "Design a restaurant ordering system"

**Broken down:**
1. Check if restaurant is open
2. Take customer's order
3. Prepare food
4. Deliver to customer
5. Take payment

In programming, each small piece becomes a **function** (a reusable block of code).

**The Task: Choose One and Create a Detailed Flowchart**

**Option A: "Video Game — Level Progression"**
A player starts a video game level. The flowchart should show:
- Start the level
- Player encounters obstacles (repeat until level is complete)
- If player defeats obstacle → move to next
- If player loses → restart or game over
- If player completes all obstacles → win the level
- Offer to play next level

**Option B: "Restaurant Ordering System"**
A customer enters a restaurant. The flowchart should show:
- Greet customer
- Seat customer
- Present menu
- Take order (repeat for each course)
- Prepare and serve food
- Take payment
- Thank customer and goodbye

**Option C: "School Day Schedule"**
A student's day from arrival to dismissal. Flowchart shows:
- Arrive at school
- Repeat for each class period:
  - Go to classroom
  - Attend class
  - Turn in assignments
  - Go to next class
- Repeat for each break:
  - Eat and socialize
- Leave school
- Go home

**Option D: Create Your Own**
Any multi-step process: cooking a meal, getting ready for a date, building a Lego set, planning a trip, etc.

**Instructions:**
1. **Choose your scenario**
2. **Break it into steps** (on paper):
  - What's the first thing that happens?
  - What decisions get made?
  - What repeats?
  - When does it end?
3. **Create a detailed flowchart:**
  - Use ovals for START and END
  - Use rectangles for actions
  - Use diamonds for decisions (yes/no questions)
  - Use arrows to show flow
  - Label everything clearly
4. **Identify patterns** (mini-functions):
  - What steps repeat?
  - What steps are similar?
  - Could you group any steps under a name?

Example: In "Video Game," you could create a mini-function called "Fight Obstacle" that happens repeatedly.

5. **Document your process** (in writing):
  - Describe your scenario
  - Paste/draw your flowchart
  - List the decisions (diamonds)
  - List the loops (places where it repeats)
  - Identify "mini-functions" (groups of steps that repeat)

**Video Game Level**

```plaintext
┌──────────┐
│  START   │
│ Level 1  │
└────┬─────┘
     │
┌────▼─────────────────┐
│ Initialize player    │
│ health = 100         │
└────┬─────────────────┘
     │
◇────Obstacles remaining?
│YES │NO
│    │
│  ┌─▼─────────────────┐
│  │  You won! Play    │
│  │  next level?      │
│  └─┬──────────────┬──┘
│    │YES           │NO
│    │              │
│  ┌─▼──────┐     ┌─▼──┐
│  │Level 2 │     │ END │
│  └────────┘     └─────┘
│
┌─▼──────────────────┐
│ Fight next         │
│ obstacle          │
└─┬───────────┬─────┘
  │           │
  │      ┌────▼────────┐
  │      │ You lose     │
  │      │ health = 0   │
  │      │ Game over?   │
  │      └──┬────────┬──┘
  │         │YES     │NO
  │         │     ┌──▼──────┐
  │         │     │ Restart │
  │         │     │ level   │
  │         │     └─┬───────┘
  │         │       │
  │         │   ┌───▼──────┐
  │         │   │ Re-init   │
  │         │   │ health=100│
  │         │   └────┬──────┘
  │         │        │
  │      ┌──▼────┐  │
  │      │  END  │◄─┘
  │      └───────┘
  │
  └────────────────┘
        │
    ◇───Health > 0?
    │YES  │NO
    │    (goes to "You lose" above)
    │
 ┌──▼──────────┐
 │ Next        │
 │ obstacle    │
 └──┬──────────┘
    │
    └──────────────────┘
         (loop back)
```

**Video: Demonstrate & Explain (5 minutes)**
Record a video showing:
1. **Your Scenario:** Describe what process you're diagramming
2. **Your Flowchart:** Show it on screen or camera
3. **Walk Through:**
  - Show the START
  - Point to decisions (diamonds): "Here the system asks a question"
  - Point to loops: "Here it repeats"
  - Point to END
4. **Decomposition:** "I identified these repeating patterns that could be mini-functions:
  - [Pattern 1]
  - [Pattern 2]"
5. **Reflect:** "What was hardest about diagramming a complex process? What did you learn?"

**Free Resources:**
- **[Lucidchart - Free Flowchart Tool](https://www.lucidchart.com):** (create flowcharts online; free tier)
- **[Draw.io (Diagrams.net)](https://www.diagrams.net):** (free, no account needed)
- **[Figma](https://www.figma.com)**: (free tier; can create flowcharts)
- **Article - "Flowchart Symbols":** Search "flowchart symbols and meanings" (many free guides)
- **[YouTube - "How to Convert Psuedocode Into Flowchart"](https://youtu.be/NMUn5vIethI?si=rDNRWZJxq1qsyyio):** (8-minute tutorial)

**Submission:**
- Google Doc with:
  - Description of your scenario
  - Your flowchart (image, link, or ASCII drawing)
  - List of decisions (diamonds)
  - List of loops (where it repeats)
  - Identified mini-functions (repeating patterns)
- Video record yourself explaining your solution (5 minutes)
- Note: "The hardest part was ___ because ___" or "I used loops / functions / both because..."

#### Task 2: "Resilience Partner Check-In" (30–45 minutes)
**Objective:** Build psychological safety and peer support. Learn from others' resilience practices. Deepen self-awareness about your own growth.

**Instructions:**

**Part A: Find Your Partner**
Find a partner (different from Prerequisite Session 5) via Slack. Reach out to them and schedule a 20–30 minute conversation (can be voice call, video, or text-based chat in Slack).

**Part B: Conduct the Interview**

**Opening (2 minutes):**
- "Hi! Thanks for doing this. We're checking in on resilience this week. I want to hear about your experience with the  maze challenge."

**Section 1: The Struggle (8 minutes)**
- "What did you struggle with most on the maze challenge?"
- "How long did you spend on this? Did you take breaks?"
- "What went through your head when you got stuck?"

**Section 2: The Breakthrough (7 minutes)**
- "What helped you get unstuck?"
- "Was there a moment when something clicked? Tell me about it."
- "Did you use any strategies from Session 5 (resilience log) on this task?"

**Section 3: Growth & Reflection (5 minutes)**
- "What did you learn about yourself this week?"
- "How are you different now than you were at the start of the program?"
- "What's one thing you're proud of?"

**Part C: Document the Conversation**
In a Google Doc, write 1–2 pages answering:

**Summary of What Your Partner Said:**
1. What was their biggest struggle?
2. How did they overcome it?
3. What are they proud of?

**What You Learned From Them:**
1. What approach did they use that you hadn't thought of?
2. How did their resilience practices compare to yours?
3. What will you try, inspired by them?

**About Your Own Resilience:**
1. How did their experience affect how you think about your own struggle?
2. Did you feel less alone knowing they also struggled? How?
3. What's one thing you want to do differently next time you get stuck?

**Submission:**
- Submit your documented conversation in a Google Doc
- Include summary, learnings, and reflection (1–2 pages)
- Share link with program staff

**Free Resources:**
- **["Active Listening Techniques"](https://www.mindful.org/mindful-guides-to-active-listening/)** (short guide on how to listen well)
- **"Empathy in Tech Teams" (Article):** Search for this; many free articles on peer support in engineering
- **[Podcast - "Brené Brown on Vulnerability"](https://brenebrown.com/podcasts/unlocking-us)** (episodes on building connection through honesty)

### Guided Practice (In-Session: 2 hours)

#### Part 1: Welcome & Session Overview (5 minutes)
Flowcharts let you see the whole problem at once. You can spot where things repeat (loops), where decisions matter (conditionals), and where the process might break down.
<!-- Program Staff Talking Points:
- "Last week, you learned that precision matters. You wrote instructions and learned from peer feedback when they got confused."
- "This week, you're tackling bigger, more complex problems. You can't just write a simple list anymore. You need a structure. That structure is a flowchart."
- "You also learned something critical: breaking big problems into smaller pieces. That's decomposition. In programming, each small piece becomes a function—reusable code you don't have to rewrite."
- "By the end of today, you'll understand why programmers break problems apart. You'll see that every complex program is really just simple pieces combined."
-->

#### Part 2: Breakout Room Sharing (45 minutes)

**Part A: Flowchart Presentations (25 minutes)**

<!--  Program Staff Notes:

Have each participant share:
- Their scenario (video game, restaurant, school day, etc.)
- Their flowchart (screen share, photo, or describe it)
- One complex decision or loop they included
- One "mini-function" (repeating pattern) they identified

Copy/Paste Discussion Prompts in Zoom Chat:
- "Whose flowchart is easiest to follow? What made it clear?"
- "Did anyone discover a place where the flowchart could get stuck? How would you fix it?"
- "Who identified the most repeating patterns (mini-functions)?"
- "Looking at everyone's flowcharts: are there any similarities in structure across different scenarios?"
-->

**Part B: Resilience Partner Check-In Sharing (18 minutes)**
Each participant shares:
- One thing their partner struggled with
- One strategy their partner used that they found interesting
- One insight they gained from the conversation

<!-- Copy/Paste Discussion Prompts in Zoom Chat:
- "Who had a similar experience to their partner?"
- "Did anyone discover a strategy they want to try?"
- "How did it feel to hear that others also struggled?"
- "What's the most interesting difference between how you and your partner approached resilience?"

Program Staff Listening & Notes:
- Document different loop/function approaches (these inform the staff-led portion)
- Note which debugging techniques were most effective
- Listen for themes in resilience (taking breaks, getting help, stepping away, etc.)
- Celebrate vulnerability: "I appreciated you sharing how hard this was"
- Build community: "Notice how many people got stuck in the same places? That's universal. You're not alone."
- Normalize complexity: "Complex problems require complex flowcharts—that's okay"

Tone: Frame flowcharts as *powerful tools for thinking*, not just diagrams. "Look at how much you can communicate with shapes and arrows.
-->

#### Part 3: Group Debrief (10 minutes)
<!-- Program Staff Talking Points:
- "Your flowcharts showed sophisticated thinking. You broke complex processes into steps. You included decisions. You showed loops. You're thinking like engineers."
- "Several of you identified repeating patterns (mini-functions). That's the key insight. A video game's 'Fight Obstacle' isn't written 50 times. It's written once as a function and called 50 times. That's what makes code efficient and maintainable."
- "Your partner check-ins revealed something important: you're all struggling in similar ways. The universality of struggle means it's not personal; it's just part of learning."
- "Here's what I want you to see: Weeks 1–3 gave you building blocks (curiosity, ownership, resilience, programming concepts). Weeks 4–5 teach you to combine those blocks. You're learning to think systematically about complex problems."

Prompt Celebration:
- "Who wants to continue with harder challenges after this program?" (Gauge interest)
- "Who's proud of themselves?" (Encourage hands up; celebrate out loud)
-->
Now let's talk about how flowcharts translate into programming. We're going to see how the structures you drew (loops, conditionals, functions) become actual code. And we're going to practice debugging by finding errors in pseudo-code.

#### Part 4: Staff-Led Translating Flowcharts to Pseudo-Code (40 minutes)
**Objective:** Identify how flowcharts become pseudo-code become real code. Teach decomposition as function-creation. Demonstrate how loops and conditionals work in flowchart form.

**Demo 1: Flowchart → Pseudo-Code Translation (12 minutes)**
A flowchart is a visual. Pseudo-code is words. Code is syntax. They all say the same thing—just in different formats.

**Simple Example: Making Tea**

**Flowchart:**

```plaintext
START
  ↓
[Boil water]
  ↓
[Pour in cup]
  ↓
[Add tea bag]
  ↓
[Wait 3 min]
  ↓
[Remove bag]
  ↓
[Drink]
  ↓
END
```

**Pseudo-Code:**

```plaintext
Start
Boil water
Pour water in cup
Add tea bag to cup
Wait 3 minutes
Remove tea bag
Drink tea
End
```

**Actual Code (JavaScript — shown for reference):**

```javascript
function makeTea() {
  boilWater();
  pourWater();
  addTeaBag();
  wait(3);
  removeTeaBag();
  drinkTea();
}
```

Same logic. Different formats. The flowchart shows flow visually. Pseudo-code describes it in words. Code writes it in a language the computer understands.

<!-- Program Staff Interactive Element:
"Take one of your flowcharts. Convert the first few steps into pseudo-code. What do you notice about how they translate?"
-->

**Demo 2: Conditionals in Three Formats (10 minutes)**

**Flowchart with Decision:**

```plaintext
◇ Is it raining?
 /NO  YES\
[Sunny] [Rainy]
  |       |
[Wear    [Bring
 hat]     umbrella]
  |       |
  └──┬──┘
     ↓
  [Leave]
```

**Pseudo-Code:**

```plaintext
Check: Is it raining?
If yes:
  Bring umbrella
Else:
  Wear hat
Leave house
```

**Actual Code:**

```javascript
if (isRaining === true) {
  bringUmbrella();
} else {
  wearHat();
}
leaveHouse();
```

The flowchart shows decision with a diamond. Pseudo-code uses 'if/else.' Code uses `if () { } else { }`.

<!-- Program Staff Talking Point: "Whether you draw a flowchart, write pseudo-code, or write code, the logic is the same. You're just changing the format. Learning format is easier than learning logic. You already know the logic."
-->

**Demo 3: Loops in Three Formats (10 minutes)**

**Flowchart with Loop:**

```plaintext
[Get cookie jar]
  ↓
◇ Cookies remaining?
 /NO  YES\
 |  [Eat cookie]
 |      ↓
 └──────┘ (loop back)
   ↓
[Put jar away]
```

**Pseudo-Code:**

```plaintext
Get cookie jar
Repeat while cookies remain:
  Eat one cookie
Put jar away
```

**Actual Code:**

```javascript
function eatCookies(jar) {
  while (jar.cookiesRemaining > 0) {
    eatCookie();
    jar.cookiesRemaining--;
  }
  putJarAway();
}
```

The flowchart shows a loop by having the arrow go back. Pseudo-code uses 'repeat while.' Code uses `while () { }`.

<!-- Program Staff Talking Point: "Loops save you from writing the same instruction 100 times. Imagine writing 'Eat cookie. Eat cookie. Eat cookie...' 100 times. A loop does it with 3 lines."
-->

**Demo 4: Decomposition as Functions (8 minutes)**
Decomposition means identifying repeating patterns and turning them into reusable pieces (functions).

**Video Game**
Your flowchart might show "Fight Obstacle" happening 10 times. In code:

**Without Decomposition (tedious):**

```plaintext
// All the fighting logic written 10 times
Fight obstacle 1 (initialize health, check damage, etc.)
Fight obstacle 2 (initialize health, check damage, etc.)
Fight obstacle 3 (initialize health, check damage, etc.)
...
```

**With Decomposition (elegant):**

```javascript
function fightObstacle(obstacle) {
  // Fight logic once
  setHealth(100);
  while (health > 0 && obstacle.alive) {
    takeDamage();
    inflictDamage();
  }
  return health;
}

// Call the function 10 times
for (let i = 1; i <= 10; i++) {
  fightObstacle(obstacle[i]);
}
```

By creating a `fightObstacle()` function, we write the logic once and reuse it. That's decomposition. That's what makes code clean and maintainable.

<!-- Program Staff Interactive Element:Look at your flowchart. Identify one thing that repeats. How would you turn that into a mini-function?"
- Example: "My restaurant flowchart has 'Take Order' happening multiple times (for each course). That would be a function: `takeOrder()` called 3 times."
-->

#### Part 5: Mini-Challenge - Find and Fix Errors in Pseudo-Code (20 minutes)
**Objective:** Debug pseudo-code. Practice reading instructions critically. Find logical errors (not just typos).

<!--Program Staff Notes on Format: Facilitator presents flawed pseudo-code. Participants identify problems and suggest fixes.
-->

**Challenge 1: Missing Exit Condition (5 minutes)** What's wrong with this loop? Will it ever end?

**Given Broken Pseudo-Code:**

```plaintext
Start video game
Repeat:
  Fight obstacle
  Obstacle defeated?
    If yes: Continue to next obstacle
    If no: Game over
End
```

**Reflection Prompts:**
- "What happens after you defeat all obstacles?"
- "There's no exit condition for the main loop"
- "The loop says 'repeat' forever, but there's nothing stopping it"


<!-- Program Staff Answer: The main loop never ends because there's no check for "all obstacles defeated." The code should be:

```plaintext
Start video game
Repeat while obstacles remain:
  Fight obstacle
  Obstacle defeated?
    If yes: Remove from list, continue
    If no: Game over
        End game
If all obstacles defeated:
  You won!
End
```

Talking Point: "Infinite loops are a common bug. You need a clear exit condition."
-->

**Challenge 2: Ambiguous Condition (5 minutes)**

**Given Broken Pseudo-Code:** What's wrong with the condition 'customer wants food'? How do you check that?

```plaintext
Start restaurant ordering
Repeat while customer wants food:
  Describe menu item
  Customer decides to order?
    If maybe: Ask again
    If yes: Add to order
    If no: Skip item
End
```

**Reflection Prompt:**
- "How do you know if a customer wants food?"
- "'Wants food' is not a clear yes/no question"
- "Better condition: 'Does customer want to order more?'"


<!-- Program Staff Answer: The condition is too vague. Better:

```plaintext
Start restaurant ordering
Repeat:
  Describe menu item
  Customer wants this item?
    If yes: Add to order
    If no: Skip
  Customer wants to order more?
    If yes: Continue
    If no: End ordering
End
```

Talking Point: "Conditions must be checkable. Yes/no questions. Not vague feelings."
-->

**Challenge 3: Wrong Decomposition (5 minutes)**

**Given Code Structure:** How would you decompose this? What's the repeating pattern?

```plaintext
Fight Obstacle 1
  Set health = 100
  Check damage
  Reduce health
  Check if defeated
  
Fight Obstacle 2
  Set health = 100
  Check damage
  Reduce health
  Check if defeated
  
Fight Obstacle 3
  Set health = 100
  Check damage
  Reduce health
  Check if defeated
```

<!-- Program Staff Answer: Create a function:

```plaintext
Function: FightObstacle(obstacle)
  Set health = 100
  Repeat while not defeated:
    Check damage
    Reduce health
  Return result

Main:
  For each obstacle:
    FightObstacle(obstacle)
```
Now you write the fighting logic once and call it three times, instead of writing it three times.
-->

#### Part 6: Decomposition & Independence in Problem-Solving (10 minutes)
**Objective:** Reflect on decomposition as a professional skill. Connect to independence and resilience.
- **Prompt 1:** "This week, you broke complex problems into smaller pieces. Why is that valuable?"
<!-- Program Staff Facilitation Notes:
- Let 3–4 people answer
- Listen for: easier to understand, less overwhelming, can focus on one piece at a time
- Affirm: "That's exactly why engineers decompose problems."
-->
- **Prompt 2:** "When you created a flowchart, you had to make decisions: What's a separate step? What's a loop? When did you get stuck?"
<!-- Program Staff Facilitation Notes:
- Answers might include: unclear where to split, struggling with exit conditions, too many decisions
- Affirm: "Those are hard decisions. Professional engineers debate this constantly."
-->
- **Prompt 3:** "You've now gone from pseudo-code (words) to flowcharts (pictures) to imagining how they'd become code. How has your thinking changed since Week 3?"
<!-- Program Staff Facilitation Notes:
- This is a reflection on growth
- Listen for: more confidence, understanding logic matters more than syntax, seeing connections between concepts
- Celebrate: "Look at the journey."
-->
- **Prompt 4:** "As you move into actual programming, what's one thing you want to remember from this week?"
<!-- Program Staff Facilitation Notes:
- Answers might include: break problems down, clarity matters, loops prevent repetition, functions are your friends
- Have people state it aloud
-->

Decomposition is one of the most valuable skills an engineer can have. Every professional programmer breaks problems down. They don't write one giant function. They create many small functions and combine them.
<!-- Program Staff Talking Points:

"This week, you practiced decomposition without code. You drew flowcharts. You identified repeating patterns. You saw how complex problems become manageable when you break them apart.

Independence this week means: you can take a complicated problem, analyze it, and break it down systematically. You don't need someone to tell you how. You ask yourself: What repeats? What are the key decisions? What's the main flow?

That skill will serve you in programming and beyond. It's how you tackle any complex problem."
-->

#### Part 7: Q&A (5 minutes)

Q: "Are flowcharts used in real programming?" \
A: Yes. Professionals use them to plan before coding. Very common.

Q: "Will we learn to code next?" \
A: Yes. You've learned the thinking. Next, you'll learn the syntax (the language).

Q: "What if my decomposition is different from someone else's?" \
A: Both could be right. There are multiple valid ways to break down a problem.

Q: "Is it bad if my flowchart has many loops and branches?" \
A: No. Complex problems have complex flowcharts. That's okay.

Q: "Do I need to be perfect with flowcharts before moving to code?" \
A: Flowcharts are tools for thinking, not final products. Imperfect is fine. Use them to clarify, then build on that clarity.

Q: "Why do we even need functions if loops do the same thing?" \
A: Functions are about organization and reusability. Loops repeat. Functions package logic. Both are necessary.

Q: "Will I use loops and functions in real programming?" \
A: Yes, absolutely. Every program you write will use them. They're fundamental.

Q: "What if I don't understand the difference between for and while loops?" \
A: For = known repetitions. While = unknown repetitions (waiting for a condition). With practice, it clicks.

Q: "Is my code bad if I don't refactor it?" \
A: Not bad, just not optimized. As you practice, you'll recognize patterns faster and refactor as you go.

Q: "What if I can't figure out how to decompose a big problem?" \
A: Break it into baby steps. Define a function for each step. Combine them. That's decomposition.

Q: "What if my loop runs forever?" \
A: You have an infinite loop. Check your condition. Make sure it will eventually become false. Add a `break` statement if needed.

### Continued Learning
- **[Podcast - "Code Newbie"](https://www.codenewbie.org/podcast)** (stories of people learning to code)
- **[Khan Academy - "Algorithms & Data Structures"](https://www.khanacademy.org/computing/computer-science/algorithms)** (intro to algorithmic thinking)
- **[YouTube - "Big-O Notation Explained"](https://www.youtube.com/watch?v=v4cd1O4zkGw)** (optional; introduces code efficiency)
- **Coding Challenge Platforms:**
  - **[Codewars**](https://www.codewars.com)**: Gamified coding challenges in multiple languages
  - **[HackerRank](https://www.hackerrank.com)**: Problem-solving with feedback
  - **[LeetCode**](https://leetcode.com)**: Interview-style problems (harder; optional)

**Loops Practice**
1. For loops: syntax, when to use, examples
2. While loops: syntax, when to use, examples
3. Common mistakes: off-by-one errors, infinite loops
4. How to debug a loop: trace through iterations

**Functions & Decomposition Guide**
1. Defining a function: syntax, naming conventions
2. Calling a function: arguments and return values
3. Decomposition strategy: breaking big problems into functions
4. When to create a function vs. when to use a loop
5. Examples of good vs. bad decomposition

**Refactoring Checklist**
1. Look for repeated code → Can it be a loop?
2. Look for patterns → Can it be a function?
3. Count lines → Is this section doing multiple things? (Consider breaking it up)
4. Ask: Could someone else read this easily? If no, refactor.
5. Test after refactoring to ensure nothing broke

**Common Loop Bugs & Fixes**
1. Infinite loops: how to recognize and fix
2. Off-by-one errors: why they happen and how to debug
3. Incorrect loop condition: what to look for
4. Loop variable not updating: common mistakes

**Tracing Through Functions Practice Sheet**
5 functions with calls to trace (predict output without running)

**Community Practices:**
- Post in the #pre-applicants channel for peer feedback on refactoring
- Celebrate clean code: "I refactored this and saved 5 lines!"
- Share debugging victories: "I found an infinite loop by adding print statements"
- Pair programming practice: "Anyone want to mob-program solving the independent practice challenge?"

**Challenging Extensions:**
- Introduce recursion (optional, advanced)
- Multi-dimensional arrays or complex data structures
- Challenge: "Write the most elegant solution to this problem"

**Week 3 Reflection Prompt**
- What's one program you wrote this week that you're proud of?
- What was the hardest moment? How did you overcome it?
- How did loops or functions change the way you think about programming?
- What did you learn about yourself through the resilience check-in with your partner?
- What's one commitment you're making as you move forward into harder programming?
- What question do you want to explore in future sessions?

**From Frustration to Resilience: Your Engineering Mindset"**
- Prompt: "When you started this week, how did you feel about programming? Now? What changed?"
- Reflect on: struggles, breakthroughs, support from peers, your own resilience
- Optional share: Share your essay in a Slack channel for community learning
- Provided as Google Doc template
