# Prerequisites Session 6: Loops + Resilience

Participants should have a basic understanding of the following foundational concepts ahead of consuming the topic outline:
- Completion of Prerequisite Session 5 (comfort with basic Karel commands)
- Understanding of programming basics (sequences, commands, debugging)
- Comfort with frustration and willingness to persist
- Access to a computer with web browser, Python 3.x, and Karel set up
- Access to Stanford Karel Reader https://compedu.stanford.edu/karel-reader/docs/python/en/intro.html
- Ability to video record and write reflections
- Willingness to pair with a peer and discuss challenges

## Table of Contents
- [Motivation](#motivation)
- [Objectives](#objectives)
- [Specific Things to Learn](#specific-things-to-learn)
- [Independent Practice](#independent-practice)
  - [Task 1: Karel World No.2 - "Maze Runner"](#task-1-karel-world-no2---maze-runner-75120-minutes)
  - [Task 2: "Resilience Partner Check-In"](#task-2-resilience-partner-check-in-3045-minutes)
- [Guided Practice (In-Session: 2 hours)](#guided-practice-in-session-2-hours)
  - [Part 1: Welcome & Session Overview](#part-1-welcome--session-overview-5-minutes)
  - [Part 2: Breakout Room Sharing](#part-2-breakout-room-sharing-45-minutes)
  - [Part 3: Group Debrief](#part-3-group-debrief-10-minutes)
  - [Part 4: Staff-Led Loops, Functions & Decomposition](#part-4-staff-led-loops-functions--decomposition-40-minutes)
  - [Part 5: Mini-Challenge - Refactor Messy Karel Code](#part-5-mini-challenge---refactor-messy-karel-code-20-minutes)
  - [Part 6: Resilience in Debugging & Problem-Solving](#part-6-resilience-in-debugging--problem-solving-10-minutes)
  - [Part 7: Q&A](#part-7-qa-5-minutes)
- [Continued Learning](#continued-learning)

## Projected Time

**Independent Practice (Pre-Session): ~2.5 hours**
- Karel World No.2 - "Maze Runner": 75–120 minutes
- "Resilience Partner Check-In": 30–45 minutes

**Guided Practice (In-Session): 2 hours**
- Welcome & Overview: 5 minutes
- Breakout Room Sharing (Maze Runner Demos + Partner Check-Ins): 45 minutes
- Group Debrief: 10 minutes
- Staff-Led Loops, Functions & Decomposition: 40 minutes
- Mini-Challenge: Refactor Messy Karel Code: 20 minutes
- Resilience in Debugging & Problem-Solving: 10 minutes
- Q&A: 5 minutes

## Motivation
If Prerequisite Session 5 introduced programming as step-by-step instructions, Session 6 teaches you how to write *smart* instructions. Python loops (`for`, `while`) let you repeat commands without rewriting them. Functions let you repackage logic for reuse. Together, these concepts transform programming from tedious line-by-line coding to elegant problem-solving. But they also introduce new complexity. Bugs become harder to trace. Logic becomes more abstract. This is where resilience deepens. You won't just bounce back from frustration; you'll use frustration as information. "My while loop isn't terminating correctly—what's wrong?" "I called this function but it didn't produce the output I expected—why?" These are sophisticated debugging questions that require persistence and systematic thinking. Additionally, this session emphasizes peer collaboration: checking in with a partner about struggles, learning from their approaches, and building psychological safety around vulnerability. By week's end, you won't just be a programmer; you'll be part of an engineering community that values growth, resilience, and mutual support.

## Objectives
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

## Specific Things to Learn

**Technical Skills:**
- For loops: when and how to use them
- While loops: conditions and termination
- Infinite loops: recognizing and fixing them
- Functions/procedures: defining and calling reusable code
- Function parameters: passing information into functions
- Problem decomposition: breaking large problems into functions
- Code refactoring: simplifying messy code
- Tracing through loops: predicting behavior

**Core "Soft" Skills:**
- Asking for peer feedback without shame
- Giving feedback on someone else's code
- Recognizing patterns and abstracting solutions
- Persisting through complex logic
- Learning from others' approaches
- Balancing confidence in your solution with openness to better ways
- Ownership of your learning and your code

## Independent Practice

### Task 1: Karel World No.2 - "Maze Runner" (75–120 minutes)
**Objective:** Apply loops and/or functions to solve a more complex problem. Manage increased complexity. Learn advanced debugging.

**Background:**
In Prerequisite Session 5, you solved simple sequencing problems. Now you'll solve a problem that *requires* loops or functions to do efficiently.

**The Task: "Maze Runner"**
Karel is in a maze. It starts at one location and needs to reach the goal (marked with a beeper). The maze has:
- Walls (boundaries that Karel can't cross)
- A start position (S)
- A goal position (G, marked with a beeper)

**Your Goal:** Write a program that instructs Karel to navigate from the start to the goal, picking up the beeper.

**Constraint:** The maze is too complex to solve with just sequential `move()` commands. You MUST use at least one loop or function.

**Example Maze Structure (ASCII):**

```plaintext
╔═══════════╗
║ S . . ╳   ║
║ ╳ ╳ . ╳ . ║
║ . . . . . ║
║ ╳ . ╳ ╳ G ║
╚═══════════╝
```

- S = Start
- G = Goal
- . = Open path
- ╳ = Wall


**Possible Approaches:**
1. **Simple Loop Approach:** Move forward in a straight line, loop until beeper is found
```python
def main():
    while not beepers_present():
        if front_is_clear():
            move()
```
2. **Wall-Following Algorithm:** Use a loop to follow walls until reaching the goal
```python
def main():
    while not beepers_present():
        if front_is_clear():
            move()
        else:
            turn_left()
```
3. **Function-Based Approach:** Define functions for common actions (move forward until wall, turn, etc.) then call them
```python
def move_forward():
    if front_is_clear():
        move()

def turn_right():
    for i in range(3):
        turn_left()

def main():
    while not beepers_present():
        move_forward()
        if not front_is_clear():
            turn_right()
```
4. **Hybrid Approach:** Combine loops and functions
```python
def main():
    for i in range(5):
        move()
    turn_left()
```

**Instructions:**
1. **Access Karel:** Use https://compedu.stanford.edu/karel-reader/docs/python/en/intro.html(Lesson 4-5 typically cover loops)
2. **Find or Create the Maze World:** Use the provided intermediate challenges or create your own
3. **Analyze the Problem:** Before coding, sketch the maze on paper. Identify:
  - Where you start
  - Where the goal is
  - Possible paths (if multiple)
4. **Plan Your Approach:** Decide: Will you use a loop? A function? Both? Write pseudocode.
```plaintext
While not at beeper:
  If can move forward:
    Move forward
  Else:
    Turn (strategy depends on wall layout)
Pick up beeper
```
5. **Implement in Python:** Write the actual code in Karel
6. **Test & Debug:** Run your code. If it doesn't work:
  - Check for infinite loops (does Karel get stuck?)
  - Trace through the loop logic
  - Re-read the problem
  - Adjust and test again
7. **Optimize:** Once it works, can you simplify it? Use fewer lines? Make it clearer?
8. **Record a Video Demo:** Show your working solution

**Video: Demonstrate & Explain (5–10 minutes)**

Record a Loom video showing:
1. **Run Your Code:** Screen share Karel running your program from start to goal as well as your Python code
2. **Explain Your Logic:** Describe:
  - What problem did you need to solve? (Navigate a maze)
  - What approach did you use? (Loops? Functions? Both?)
  - Why did you choose that approach?
  - Show your code and walk through it line by line (even if complex)
3. **Discuss Debugging:** Share:
  - What error messages did you encounter?
  - How did you debug infinite loops? (Added print statements? Changed the condition?)
  - What did you learn?
4. **Reflect:** "How is this different from Session 5? What made it harder or easier?"
**Free Resources:**

- **[Stanford Karel Reader - Python Loops](https://compedu.stanford.edu/karel-reader/docs/python/en/intro.html)** (Lessons 4-5 cover for loops and while loops)
- **[Python.org - "For Loops"](https://docs.python.org/3/tutorial/controlflow.html#for-statements)**
- **[Python.org - "While Loops"](https://docs.python.org/3/tutorial/controlflow.html#the-while-statement)**
- **[YouTube - "Python While Loops":** Search for beginner tutorials (3-5 minutes each)
- **[Real Python - "Python Loops"](https://realpython.com/loops/)** (comprehensive guide, free version available)
- **[Article - "Problem Decomposition"](https://www.teach.codeforces.com/?article=5)** (explains breaking problems into steps)

**Submission:**
- Screen record your maze solution
- Video record yourself explaining your code
- Note: "I used loops / functions / both because..."

### Task 2: "Resilience Partner Check-In" (30–45 minutes)
**Objective:** Build psychological safety and peer support. Learn from others' resilience practices. Deepen self-awareness about your own growth.

**Instructions:**

**Part A: Find Your Partner**
Find a partner (different from Prerequisite Session 5) via Slack. Reach out to them and schedule a 20–30 minute conversation (can be voice call, video, or text-based chat in Slack).

**Part B: Conduct the Interview**

**Opening (2 minutes):**
- "Hi! Thanks for doing this. We're checking in on resilience this week. I want to hear about your experience with the Karel maze challenge."

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

## Guided Practice (In-Session: 2 hours)

### Part 1: Welcome & Session Overview (5 minutes)
Last session, you wrote your first program and debugged it using Karel. You learned that struggle is normal and that persistence pays off. This session, you're going to write smarter programs using loops and functions. This is where programming becomes less 'do this, then this, then this' and more 'repeat this pattern' or 'reuse this logic.'
<!-- Program Staff Talking Points:**
- "You also did something powerful this week: you paired with a peer, talked about struggle, and learned from each other. That's how real engineering teams work. You're not just learning to code; you're learning to be part of a collaborative community."
- "Today's focus: Loops, functions, and decomposition. But underneath all of that: resilience. Because more complex code means more opportunities to get stuck. And by now, you know that getting stuck isn't the end; it's the beginning of learning."
-->

### Part 2: Breakout Room Sharing (45 minutes)

**Part A: Maze Runner Demos (25 minutes)**

<!--  Program Staff Notes:

Have each participant share:
- A 2-minute screen share or video showing their maze solution
- A brief explanation of their approach (loops? functions? both?)
- One debugging moment and how they fixed it

Copy/Paste Discussion Prompts in Zoom Chat:
- "Who used a loop? Who used a function? Who used both?"
- "Did anyone discover a clever approach?"
- "Who spent the most time debugging? What did you learn?"
- "Looking at different solutions: Did anyone solve the maze differently?"
-->

**Part B: Resilience Partner Check-In Sharing (18 minutes)**
Each participant shares:
- One thing their partner struggled with
- One strategy their partner used that they found interesting
- One reflection: "How did hearing about my partner's resilience affect me?" (1 minute per person)

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
-->

### Part 3: Group Debrief (10 minutes)
<!-- Program Staff Talking Points:

- "Your maze solutions were impressive. I saw different approaches—some used loops, some functions, some did something creative I haven't seen before. That's what I love about programming: there's usually more than one right answer."
- "Common debugging moment: infinite loops. This happened to almost everyone. And look—everyone fixed it. You recognized the pattern, figured out the issue, and corrected it. That's exactly what engineers do daily."
- "Your partner check-ins revealed something beautiful: you all struggled in similar ways, but you handled it differently. Some of you took breaks. Some of you pair-programmed. Some of you looked at documentation. All of these work. And knowing what works for others helps you build your own resilience toolkit."
- "Here's what I want to emphasize: You wrote a maze solver. A week ago, you didn't know how to code. Now you're writing programs that use loops and logic to navigate complex problems. That's extraordinary growth."


Prompt Celebration:
- "Who wants to continue with harder challenges after this program?" (Gauge interest)
- "Who's proud of themselves?" (Encourage hands up; celebrate out loud)
-->
Now we're going to deepen your understanding of loops and functions. You've used them intuitively. Now let's talk about what's happening under the hood and how to write even cleaner, smarter code.

### Part 4: Staff-Led Loops, Functions & Decomposition (40 minutes)
**Objective:** Formalize understanding of loops, functions, and code decomposition. Show that elegant solutions require strategic thinking.

**Demo 1: Loops Demystified — For vs While (8 minutes)**
You've been using loops to repeat commands. Let's talk about two types: for loops and while loops.

**For Loops — "Do this N times"**

```python
for i in range(4):
    move()
    turn_left()
```

Translation: "Repeat this block 4 times."
- Use when: You know exactly how many times to repeat
- Example: "Move forward 5 times." "Turn left 4 times to make a full rotation."

**Range Explained:**
- `range(4)` produces: 0, 1, 2, 3 (four values, starting from 0)
- `range(1, 5)` produces: 1, 2, 3, 4 (from 1 up to but not including 5)

**While Loops — "Keep doing this until a condition is false"**

```python
while(beepers_present()):
  pick_beeper()
  move()
```

Translation: "While there are beepers here, pick them up and move."
- Use when: You don't know how many times you'll repeat; you're waiting for something
- Example: "Keep moving until you hit a wall." "Pick up all beepers in this room."

**Tracing Through a Loop:**

```python
for i in range(3):
    move()
    put_beeper()
```

"Let's trace through this:
- Iteration 1: Move, put beeper
- Iteration 2: Move, put beeper
- Iteration 3: Move, put beeper
- Loop ends (reached 3 iterations)"

**Common Mistake: Off-by-One Errors**
I want to repeat something 5 times. In Python, I write `range(5)` (not `range(6)`). This produces 0, 1, 2, 3, 4—five values.

**Infinite Loops (What NOT to do):**

```python
while True:  # This is always true!
    move()
    # This will run forever!
```

Never use `while True` unless you have an explicit `break` statement to exit.

**How to Break Out of a Loop:**

```python
while True:
    if beepers_present():
        pick_beeper()
        break  # Exit the loop
    move()
```

Never use `while(true)` unless you have an explicit break condition.
<!-- Program Staff Led Interactive Element:
"I have a for loop that runs 10 times. But I only want it to run 7 times. How do I fix it?"
- Let participants call out: Change `range(10)` to `range(7)`
- "What if I want the loop to run 7 times but I don't know the exact number in advance? Should I use a for loop or a while loop?"
- Answer: While loop (if waiting for a condition)
-->

**Demo 2: Functions & Decomposition (12 minutes)**
Functions are reusable blocks of code. Define a function once and call it multiple times.

**Observe Without Functions (Messy):**

```python
def main():
    move()
    turn_left()
    move()
    turn_left()
    turn_left()
    turn_left()
    move()

    move()
    turn_left()
    move()
    turn_left()
    turn_left()
    turn_left()
    move()

    move()
    turn_left()
    move()
    turn_left()
    turn_left()
    turn_left()
    move()
```

<!-- Program Staff Talking Notes: 
I'm repeating the same pattern (move, turn left, move, three right turns, move) three times. That's tedious and error-prone. I should use a function.

**Example With Functions (Clean):**

```plaintext
def move_in_L_shape():
    move()
    turn_left()
    move()
    turn_left()
    turn_left()
    turn_left()
    move()

def main():
    move_in_L_shape()
    move_in_L_shape()
    move_in_L_shape()

if __name__ == "__main__":
    main()
```

Now the code is clear: 'Do this L-shaped movement three times.' Much simpler.
-->

**Functions with Parameters:**

```python
def move_n_steps(steps):
    for i in range(steps):
        move()

def main():
    move_n_steps(5)  # Move 5 times
    turn_left()
    move_n_steps(3)  # Move 3 times
```

With parameters, one function can do different things based on the input.

**Functions with Return Values:**

```python
def count_beepers_in_room():
    count = 0
    while beepers_present():
        pick_beeper()
        count += 1
    return count

def main():
    total = count_beepers_in_room()
    print(f"Found {total} beepers")
```

Functions can return data back to the caller.

**Decomposition (Breaking Problems into Functions):**
The real power of functions is decomposition: breaking a big problem into smaller, manageable pieces.

**Example: The Maze Runner**
Instead of writing one giant set of commands, I break it into functions:
```python
def move_forward_if_possible():
    if front_is_clear():
        move()

def turn_right():
    for i in range(3):
        turn_left()

def follow_left_wall():
    while not beepers_present():
        move_forward_if_possible()
        if not front_is_clear():
            turn_right()
```

Now I can read the main function and understand the high-level strategy without getting lost in details.

**Why This Matters:**
- **Readability:** Code is easier to understand
- **Reusability:** Use the same function multiple times
- **Debugging:** Easier to isolate problems
- **Maintenance:** If you need to change the logic, you change it once

<!-- Program Staff Led Interactive Element:
I have a complicated Karel task. It requires
  1. moving in a square pattern, 
  2. picking up beepers, and 
  3. turning at corners. 
Should I write one big block of code, or should I use functions?
- Let participants discuss
- Answer: Functions! Define a function for "pick up beepers in a line" or "make a turn at a corner"
-->

**Demo 3: Refactoring & Optimization (12 minutes)**

**Observe Messy Code:**

```plaintext
def main():
    move()
    if beepers_present():
        pick_beeper()
    move()
    if beepers_present():
        pick_beeper()
    move()
    if beepers_present():
        pick_beeper()
    move()
    if beepers_present():
        pick_beeper()
    move()
    if beepers_present():
        pick_beeper()
    turn_left()
    move()
    put_beeper()
    move()
    put_beeper()
    move()
    put_beeper()
    move()
    put_beeper()
```

This code works, but it's repetitive. How would you refactor it?

<!-- Program Staff Refactors:
I can see two patterns:
1. Move and pick beeper (repeats 5 times)
2. Move and put beeper (repeats 4 times)

I can write functions:

```python
def pick_beepers_in_line(count):
    for i in range(count):
        move()
        if beepers_present():
            pick_beeper()

def put_beepers_in_line(count):
    for i in range(count):
        move()
        put_beeper()

def main():
    pick_beepers_in_line(5)
    turn_left()
    put_beepers_in_line(4)
```

Talking Point: 
- Now the code is 10 lines instead of 25. It's clear what's happening. It's easy to modify. 
- Good code isn't necessarily clever code. It's code that's easy to read, maintain, and modify. Functions and loops help you write good code."

Interactive Element:
- Looking at this refactored code, what if I wanted to pick beepers 10 times instead of 5? What would I change?
- Answer: Change the argument from 5 to 10: `pick_beepers_in_line(10)`
- That's the power of functions. One change, everywhere that function is called gets updated.
-->

### Part 5: Mini-Challenge - Refactor Messy Karel Code (20 minutes)
**Objective:** Practice identifying patterns and using functions to simplify code.
**Format:** Facilitator presents messy code. Participants work in pairs or small groups to refactor it.

**Challenge Code (Given):**

```python
def main():
    move()
    move()
    turn_left()
    turn_left()
    turn_left()
    move()
    move()
    turn_left()
    turn_left()
    turn_left()

    move()
    move()
    turn_left()
    turn_left()
    turn_left()
    move()
    move()
    turn_left()
    turn_left()
    turn_left()

    move()
    move()
    turn_left()
    turn_left()
    turn_left()
    move()
    move()
    turn_left()
    turn_left()
    turn_left()

if __name__ == "__main__":
    main()
```

**Task 1: Identify the Pattern (3 minutes)**
Look at this code. What's repeating?
<!-- Answer: The entire block repeats 3 times -->

**Task 2: Write a Function (5 minutes)**
Write a function that captures this pattern
<!-- Expected answer:

```python
def move_and_turn():
    move()
    move()
    turn_left()
    turn_left()
    turn_left()
    move()
    move()
    turn_left()
    turn_left()
    turn_left()
```
-->

**Task 3: Refactor Using a Loop (5 minutes)**
Now rewrite the entire code using this function and a loop
<!-- Expected answer:

```python
def move_and_turn():
    move()
    move()
    turn_left()
    turn_left()
    turn_left()
    move()
    move()
    turn_left()
    turn_left()
    turn_left()

def main():
    for i in range(3):
        move_and_turn()

if __name__ == "__main__":
    main()
```
-->

**Task 4: Further Optimization (5 minutes)**
Notice that `turn_left()` three times = turn right. Can you optimize the function?
<!-- Expected answer:

```python
def turn_right():
    for i in range(3):
        turn_left()

def move_and_turn():
    for i in range(2):
        move()
    turn_right()
    for i in range(2):
        move()
```

Or even:

```python
def move_and_turn():
    move()
    move()
    turn_right()
    move()
    move()
```

Program Staff Led Group Discussion in Main Room:
- "Who found a different way to refactor?"
- "Which version is easiest to read?"
- "If you needed to modify this code later, which version would be easiest to change?"

Talking Point: "Refactoring is about making code cleaner, shorter, and more maintainable. It's a skill you'll practice throughout your programming journey. The goal isn't to write the shortest code; it's to write the clearest code."
-->

### Part 6: Resilience in Debugging & Problem-Solving (10 minutes)
**Objective:** Reflect on resilience as it applies to increasingly complex programming.

**Program Staff Facilitates Discussion:**

**Prompt 1:** This week's code was harder than last week. You used loops and functions. Did you get stuck more, less, or about the same?
<!-- Program Staff Notes:
- Let 3–4 people answer
- Listen for: differences in complexity, new types of bugs, how they handled harder problems
-->

**Prompt 2:** When you got stuck this time, what did you do differently than last week?
<!-- Program Staff Notes:
- Answers might include: took breaks sooner, asked for help faster, tried a different approach more quickly
- Affirm: "You're not just learning to code; you're learning to be better at learning."
-->

**Prompt 3:** Your partner check-in revealed something: other people struggled too, in similar ways. How does knowing that change the way you think about programming?
<!-- Program Staff Notes:
- Answers might include: less shame, more confidence, more willing to ask for help
- Affirm: "This is the culture we're building. We struggle together. We grow together."
-->

**Prompt 4:** "As we move forward into harder programming, what's one thing you want to commit to?"
<!-- Program Staff Notes:
- Answers might include: be patient with myself, ask for help sooner, take breaks, celebrate small wins
- Have people share commitments aloud (or in chat)
- Affirm: "These commitments are what make the difference. They're what separate people who persevere from people who give up."


Talking Point: "You're not going to hit a wall and suddenly start coding perfectly. You're going to hit walls and keep going. The code is going to get more complex. The bugs are going to get harder. And you're going to get better at all of it. That's what an engineer is."
--->

### Part 7: Q&A (5 minutes)
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

Q: "What's the difference between Python loops and Karel loops?" 
A: The syntax is slightly different, but the concept is the same. Python loops work the same way: repeat a block of code.

Q: "What if my loop runs forever?" \
A: You have an infinite loop. Check your condition. Make sure it will eventually become false. Add a `break` statement if needed.

## Continued Learning
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
- Pair programming practice: "Anyone want to mob-program solving a Karel challenge?"

**Challenging Extensions:**
- Introduce recursion (optional, advanced)
- Multi-dimensional arrays or complex data structures
- Longer Karel challenges from Code.org
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
