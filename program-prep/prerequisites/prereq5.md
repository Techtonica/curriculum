# Prerequisites Session 5: Resilience + Programming Foundation

<!-- Program Staff Notes: 

**Week Theme:** Resilience + Programming Foundations
**Mindset Focus:** Resilience, persistence, frustration tolerance, learning from failure
**Technical Focus:** Programming basics (sequences, functions, loops, conditionals), debugging, problem decomposition
**Total Week Time Commitment:** ~5.5 hours (Independent Practice + Guided Practice combined)

**Context:** This is the moment when abstract concepts become concrete code. Participants will write their first programs using Karel, a beginner-friendly programming environment. Karel teaches core programming concepts without syntax complexity, allowing focus on logic and problem-solving. Critically, this week emphasizes resilience because programming *will* feel frustrating. Code won't work. Logic errors will happen. That moment of frustration—and how you respond—is where the real learning happens. This week normalizes struggle as part of the engineering process and teaches participants to debug, persist, and problem-solve collaboratively.
-->

Participants should have a basic understanding of the following foundational concepts ahead of consuming the topic outline:
- Comfort with basic logic and Boolean thinking (from Week 2)
- Access to a computer with a web browser and Python 3.x installed (or willingness to install)
- Access to Stanford Karel Reader: https://compedu.stanford.edu/karel-reader/docs/python/en/intro.html
- Basic Python syntax familiarity (function calls, indentation)
- Willingness to make mistakes and learn from them
- Growth mindset: belief that struggling is part of learning

## Table of Contents
- [Projected Time](#projected-time)
- [Prerequisites](#prerequisites)
- [Motivation](#motivation)
- [Objectives](#objectives)
- [Specific Things to Learn](#specific-things-to-learn)
- [Independent Practice](#independent-practice)
  - [Task 1: Karel World No.1 - "Clean the Room"](#task-1-karel-world-no1---clean-the-room-6090-minutes)
  - [Task 2: "Resilience Log"](#task-2-resilience-log-2030-minutes)
- [Guided Practice (In-Session: 2 hours)](#guided-practice-in-session-2-hours)
  - [Segment 1: Welcome & Session Overview](#segment-1-welcome--session-overview-5-minutes)
  - [Segment 2: Breakout Room Sharing](#segment-2-breakout-room-sharing-40-minutes)
  - [Segment 3: Group Debrief](#segment-3-group-debrief-15-minutes)
  - [Segment 4: Staff-Led Live Code Debugging](#segment-4-staff-led-live-code-debugging-35-minutes)
  - [Segment 5: Mini-Challenge - Predict What This Code Will Do](#segment-5-mini-challenge---predict-what-this-code-will-do-20-minutes)
  - [Segment 6: Resilience & Growth Mindset](#segment-6-resilience--growth-mindset-5-minutes)
  - [Segment 7: Q&A](#segment-7-qa-5-minutes)
- [Continued Learning](#continued-learning)

## Projected Time
**Independent Practice (Pre-Session): ~2.5 hours**
- Karel World No.1 - "Clean the Room": 60–90 minutes
- "Resilience Log": 20–30 minutes

**Guided Practice (In-Session): 2 hours**
- Welcome & Overview: 5 minutes
- Breakout Room Sharing (Karel Demos + Resilience Logs): 40 minutes
- Group Debrief: 15 minutes
- Staff Led Live Code Debugging: 35 minutes
- Mini-Challenge: Predict What This Code Will Do: 20 minutes
- Resilience & Growth Mindset: 5 minutes
- Q&A: 5 minutes

## Motivation
Programming is inherently frustrating at first. Your code won't do what you expect. You'll spend 10 minutes debugging only to realize you forgot indentation or a function call. You'll write logic that seems right but produces the wrong output. This is *normal* and *universal*—every engineer experiences this. The difference between people who become great engineers and people who quit is not talent; it's resilience. It's the ability to say, "That didn't work. Why? Let me try again." This week, you'll learn Python Karel, a beginner-friendly programming environment that teaches core programming concepts without overwhelming syntax complexity. You'll write Python code to control a robot, allowing focus on logic and problem-solving. These habits of persistence and debugging will carry you through harder challenges ahead. Resilience isn't about never struggling; it's about struggling, learning, and trying again.

## Objectives
By the end of this session, participants will:
- Write their first Python programs using Karel commands
- Understand that programming requires iterating, testing, and debugging
- Learn to read Python error messages and debug systematically
- Recognize frustration as a signal to pause, reflect, and try a different approach
- Understand that getting stuck is normal and universal among programmers
- Practice asking for help without shame
- See resilience as a core engineering skill
- Understand the connection between logical thinking (PrerequisiteWeek 2) and code execution

## Specific Things to Learn

**Technical Skills:**
- Python Karel commands: `move()`, `turn_left()`, `put_beeper()`, `pick_beeper()`, `front_is_clear()`, `beepers_present()`
- Sequential execution in Python (commands run in order)
- Understanding how Python code maps to robot behavior (cause and effect)
- Basic debugging: reading Python errors, testing commands, isolating problems
- Problem decomposition: breaking a task into smaller steps
- Function definition and calls in Python
- Reading and interpreting problem specifications
- Python indentation and syntax

**Core "Soft" Skills:**
- Recognizing and naming frustration without judgment
- Taking breaks when stuck (stepping away, then returning)
- Asking clarifying questions about the problem
- Persisting through errors and failed attempts
- Celebrating small wins (solved one part, moved forward slightly)
- Debugging mindset: systematic problem-solving, not random guessing
- Learning from mistakes: "What went wrong and why?"

## Independent Practice

_**🎗️ All independent practice tasks should be turned in no later than one hour ahead of the guided session's start. For example, if the guided session begins at 6pm, participant work should be turned in by 5pm.**_

### Task 1: Karel World No.1 - "Clean the Room" (60–90 minutes)
**Objective:** Write your first Python program. Experience the debugging process. Learn core programming concepts through doing.

**Background — What is Karel?**
Karel is a robot that lives in a grid world. You control Karel using Python commands. Karel can:

- **move()** — Move forward one square
- **turn_left()** — Turn left 90 degrees
- **put_beeper()** — Place a beeper (marker) on the current square
- **pick_beeper()** — Pick up a beeper from the current square
- **front_is_clear()** — Check if the path ahead is clear (returns True/False)
- **beepers_present()** — Check if there are beepers on the current square (returns True/False)

**The Task: "Clean the Room"**
Karel is a robot that lives in a grid world. Karel is in a room with scattered beepers. The room looks roughly like this:

The robot can:
- **move()** — Move forward one square
- **turn_left()** — Turn left 90 degrees
- **put_beeper()** — Place a beeper (marker) on the current square
- **pick_beeper()** — Pick up a beeper from the current square

Your job: Write commands to instruct Karel to do a task.

**The Task: "Clean the Room"**

Karel is in a room (at position 1, 1) that looks like this (simplified):

```plaintext
        1   2   3   4   5
    5   .   .   .   .   .
    4   .   *   *   *   .
    3   .   *   *   *   .
    2   .   *   *   *   .
    1   K   .   .   .   .
```

- K = Karel's starting position (1, 1)
- * = Beepers (trash) scattered in the room
- . = Empty spaces

**Your Goal:** Write a program that instructs Karel to:
1. Move through the room
2. Pick up all the beepers
3. Return to the starting position

**Your Challenge:** Write a Python program that instructs Karel to:
1. Move through the room
2. Pick up all the beepers (check if beepers are present before picking)
3. Return to the starting position

**Setup Instructions:**
1. **Access Karel:** Go to https://compedu.stanford.edu/karel-reader/docs/python/en/intro.html
2. **Set Up Python:** Follow the Stanford Karel Reader's setup guide to install the necessary files and run Karel in your Python environment
3. **Explore the "Lesson 1" or starter worlds** to understand how the environment works
4. **Write Your Program:** Create a Python file (e.g., `clean_room.py`) with your code

**Example Code Structure:**

```python
from karel.stanfordkarel import *

def main():
    # Your code here
    move()
    move()
    
    if beepers_present():
        pick_beeper()
    
    # Continue...
    
if __name__ == "__main__":
    main()
```

**Common Challenges (Normal!):**
- "ModuleNotFoundError: No module named 'karel'" → You need to set up the Karel files properly. Follow the Stanford Reader setup guide.
- "IndentationError: unexpected indent" → Python requires consistent indentation. Make sure all code inside functions is indented.
- "Karel picked up a beeper but I didn't expect it" → You called `pick_beeper()` at the wrong location. Debug by checking where Karel is before picking.
- "I don't know how to pick up all the beepers efficiently" → Check if beepers exist before picking. Use conditionals: `if beepers_present(): pick_beeper()`
- "This is taking forever" → Take a break! Come back with fresh eyes.

**Record a Video Explaining Your Thinking (5–10 minutes)**
Once you've solved the task (or spent 60+ minutes trying), record a recorded video explaining:

1. **What confused you?** Example: "I didn't understand how `if beepers_present():` works. I thought it meant Karel would automatically pick up beepers, but I had to call `pick_beeper()` explicitly."

2. **How did you solve it? (Or how did you approach it?)** Example: "I started by writing simple move commands to navigate the room. Then I added a conditional to check for beepers. Once I found a beeper, I called pick_beeper(). Then I looped through the room to find all beepers."

3. **Where did you get stuck? How did you respond?** Example: "I got an IndentationError and had to debug the spacing in my code. I looked at the example code structure and noticed my indentation was wrong. I fixed it and it worked."

4. **Explain how this task is related to programming:** Example: "This is programming because I had to give the computer exact instructions in Python. If I made a mistake, the program failed. It's like debugging: I had to figure out what went wrong and fix it."

**Free Resources:**
- **[Stanford Karel Reader - Python](https://compedu.stanford.edu/karel-reader/docs/python/en/intro.html)** (official source; includes lessons and example worlds — follow lessons 1-3 from the Karel Reader to understand basics)
- **YouTube - "Python Karel Introduction":** Search for "Stanford Karel Python tutorial" for video walkthroughs
- **[Python.org - "Python for Beginners"](https://www.python.org/about/gettingstarted/)** (if you need Python basics)
- **[Replit Karel (Optional Web-Based Alternative)](https://replit.com)** (if you prefer not to install locally)

**Submission:**
- Successfully complete the "Clean the Room" world (or document how far you got)
- Submit recorded video link explaining your thinking
- Include a note: "This was easy / medium / hard for me because..."
- Share your `clean_room.py` code file

### Task 2: "Resilience Log" (20–30 minutes)
**Objective:** Develop metacognitive awareness of frustration and build resilience practices.

**Instructions:**
As you work on the Karel task, track every moment of frustration or confusion. In a Google Doc, create a log with the following columns, but different content (below is simply an example):

| Moment | What Happened | Frustration Level (1-10) | How I Responded | What I Learned
|-----|-----|-----|-----|-----
| 1 | Karel moved but didn't pick up beeper | 6 | Paused, re-read the code, realized I forgot pick_beeper() | I need to check that all commands are in the right order
| 2 | I can't figure out how to pick up all beepers | 8 | Took a 5-minute break, then drew a map on paper | Breaking the problem into sections helps
| 3 | Turned left three times instead of once (by accident) | 4 | Laughed, then fixed it | Turn_left() is about rotation, not direction

**Columns Explained:**
- **Moment:** Number each frustration (Moment 1, Moment 2, etc.)
- **What Happened:** Describe the problem concisely
- **Frustration Level:** Rate 1–10 (1 = mild confusion, 10 = want to flip the computer)
- **How I Responded:** What did you do? (Took a break? Asked for help? Tried again? Looked at documentation? Talked to yourself?)
- **What I Learned:** What did you learn about the problem, the code, or yourself?

**Reflection Questions**
After completing the log, write 3–5 sentences addressing:
1. **Pattern Recognition:** "Looking back at my log, I notice that when I'm frustrated, I tend to ___. This helps / doesn't help because ___."
2. **What Worked:** "The strategy that helped me the most was ___ because ___."
3. **Growth Realization:** "Before this task, I thought frustration meant ___. Now I see it as ___."

**Submission:**
- Create a Google Doc with your resilience log
- Include all moments of frustration with the 5-column structure
- Add your reflection answers
- Share with program staff 

**Free Resources:**
- **["The Growth Mindset Workbook" (PDF excerpt)](https://www.mindsetworks.com/webstudy)** (free resources on reframing failure)
- **[TED Talk - "The Power of Believing You Can Improve" by Carol Dweck](https://www.youtube.com/watch?v=_X0mgOOSpLU)** (10 minutes; foundational for growth mindset)
- **[Podcast - "How to Fail" by Elizabeth Day](https://www.elizabethdayonline.com/howtofail)** (episodes on resilience and persistence; Spotify/Apple Podcasts)
- **Article - "Why Debugging Teaches Resilience" (Medium):** Search for this topic; many free articles on learning through struggle
- **[Mindfulness App - "Insight Timer"](https://insighttimer.com)** (free guided meditations on frustration and focus)

## Guided Practice (In-Session: 2 hours)

### Part 1: Welcome & Session Overview (5 minutes)
Programming isn't about getting it right on the first try. It's about iterating, testing, debugging, and trying again. That's not a failure mode; that's the process. This week is about resilience: your ability to face frustration, pause, reflect, and persist. That skill matters more than any code you'll write today.

<!-- Program Staff Talking Points:**
- "This is the moment we shift from theory to practice. You're about to write your first program. Some of it will work beautifully. Some of it won't. Both are essential."
- "You just tracked every moment of frustration in your resilience log. That practice—naming what's hard—is how you build resilience. You're already doing it."
-->

### Part 2: Breakout Room Sharing (40 minutes)
<!-- Program Staff Notes: 
Format: Divide participants into breakout groups of 4–5 (vary groups from previous weeks to build community).
-->

**Part A: Karel World Demos (20 minutes)**
<!-- Program Staff Notes: 
Copy/Paste Discussion Prompts in Zoom Chat:
- "Who took a different approach to solve this? Tell us about it."
- "Did anyone discover a command or pattern that surprised them?"
- "Who didn't finish the task? Where did you get stuck? That's totally okay—let's talk about it."
- "What made this easier or harder than you expected?"
-->
Have each participant share:
- A 1–2 minute screen share of their Karel solution (or as far as they got)
- One moment from their recorded video: What confused them? How did they solve it?

**Part B: Resilience Log Sharing (17 minutes)**
<!-- Program Staff Notes: 
Copy/Paste Discussion Prompts in Zoom Chat:
- "Who had a similar frustration? How did you handle it?"
- "Who took a break? Did it help?"
- "Did anyone use a strategy (drawing a map, writing it out, asking a friend) that worked?"
- "Looking at everyone's logs, what's the most common frustration?" (Likely: commands in the wrong order, forgetting a command, confusion about turn_left())

Facilitation Notes:
- Document common frustration points (these inform the staff-led portion)
- Celebrate persistence: "I love that you tried X different approaches"
- Normalize struggle: "Everyone got stuck. That's the point."
- Highlight growth moments: "Notice how you responded to frustration? That's resilience."

Tone: Frame debugging as detective work, not failure. "You're being scientists: form a hypothesis, test it, observe the results, adjust."
-->
Each participant shares:
- One frustration moment from their log and how they responded (1–2 minutes per person)
- One insight from their reflection (30 seconds per person)

### Part 3: Group Debrief (15 minutes)
Here's the reality: your code didn't work perfectly on the first try. Everyone's code was like that. That's not a sign you're bad; it's a sign you're learning.
<!-- Program Staff Talking Points:
- "Your Karel solutions were creative. I saw different approaches—some moved east-west in rows, some zigzagged, some did something I hadn't even thought of. There's rarely one 'right' solution."
- "Common frustration: turn_left(). People thought it meant 'turn towards the left' but it means 'rotate your body left.' Once you understood that, everything clicked. That's debugging."
- "Several people said their frustration level hit 8–9. But notice: you didn't quit. You took a break, tried a different approach, talked it through. That's resilience. That's what engineers do."

Prompt for Celebration:
- "Who felt proud when their code finally ran? That feeling—that's why engineers do this."
- "Who wants to tackle a harder Karel world after this session?" (Gauge interest for supplemental materials)

Frame for Next Part:
"Now we're going to dive into debugging. I'm going to write some code live, make mistakes intentionally, and show you how to fix it. Because debugging is a skill you'll use every single day as an engineer."

-->

### Part 4: Staff-Led Live Code Debugging (35 minutes)
**Objective:** Teach systematic debugging approaches. Show that mistakes are normal and fixable.

<!-- Program Staff Notes:
**Format:** Facilitator writes code in Karel (or pseudocode on screen), makes intentional errors, then debugs them live.
-->
**Demo 1: Missing Command (5 minutes)**

**Program Staff's Live Coding:**

Observe this broken code:

```plaintext
move()
move()
turn_left()
move()
// Missing pick_beeper() here
move()
```
<!-- Program Staff Talking Points:
"I wrote this code to move to a beeper and pick it up. But when I run it, Karel moves past the beeper without picking it up. What's wrong?"

Debugging:
- Runs the code and observes
- Pauses and re-reads the code
- Says: "I moved to the right location, but I never called pick_beeper(). That's the bug."
- Fixes it: Adds pick_beeper() in the right spot
- Runs again: Success

Talking Point (about Debugging):
- Step 1: Read the error or observe what happened. 
- Step 2: Compare it to what you expected. Step 3: Look for the difference. Step 4: Fix it.
-->

**Demo 2: Wrong Turn Logic (8 minutes)**

**Program Staff's Live Coding:**

Observe this code:

```plaintext
move()
turn_left()
move()
turn_left()
move()
```
<!-- Program Staff Talking Points:
"I want Karel to move right, then down, then left (like a zigzag). But when I run it, Karel ends up going in the wrong direction. What's wrong?"

Debugging
- Runs and observes
- Says: "I called turn_left() twice. That's a 180-degree turn. But I wanted a 90-degree turn." (or "I wanted to turn right, but turn_left() twice actually turns around")
- Explains: "turn_left() once = 90 degrees left. turn_left() three times = 90 degrees right (because 3 × 90 = 270, which is the same as -90)."
- Fixes it: Either remove one turn_left(), or add a third one, depending on the goal
- Runs again: Success

Talking Point: "Debugging means understanding what each command does. Once I understood turn_left(), I could see the mistake."
--->

**Demo 3: Logic Error (8 minutes)**

**Program Staff's Live Coding:**
We want Karel to move in a square (right, up, left, down) and pick up beepers at each corner. Here's the code:

```plaintext
move()
pick_beeper()
turn_left()
move()
pick_beeper()
turn_left()
move()
pick_beeper()
turn_left()
move()
pick_beeper()
turn_left()
```

But when I run it, Karel ends up in the wrong position. The logic seems right, but it's not working.

<!-- Program Staff Debugging & Talking Points:
- Runs and observes the path Karel takes
- Draws on screen or describes: "Karel moved right and picked up a beeper. Then turned left (now facing up) and moved up. But I'm confused about where the beepers are."
- Says: "I think I made an assumption about where the beepers are, but they're actually in different locations. Let me check the problem statement."
- Re-reads the problem and realizes the beepers are placed differently
- Adjusts the code accordingly

Talking Point: "Sometimes the bug isn't in the code; it's in your understanding of the problem. Read the problem carefully. Understand the world before you code."
-->

**Demo 4: Interactive Debugging (10 minutes)**

**Program Staff Presents Buggy Code:**

Observe this code and run it (with a bug):

```plaintext
move()
move()
turn_left()
move()
move()
turn_left()
turn_left()
turn_left()
move()
move()
move()
```

This code is supposed to navigate a specific world. But something's wrong. Your job: watch it run, spot the problem, and tell the group how to fix it.

<!-- Program Staff Notess:
**Participants Watch & Think:**
- Facilitator runs the code
- Pauses at key moments
- Asks: "What do you see? What went wrong?"

**Group Answers:**
- Let 2–3 people call out what they observe
- Ask: "How would you fix it?"
- Facilitate discussion on the fix
- Facilitator implements the fix and re-runs

**Talking Point:** "Debugging is teamwork. One person might spot something another misses. When you're stuck on your own code, show it to a peer. Fresh eyes help."
-->

### Part 5: Mini-Challenge - Predict What This Code Will Do (20 minutes)
**Objective:** Build predictive thinking—the ability to trace code execution in your head.

<!-- Program Staff Notes:
**Format:** Facilitator shows code. Participants predict the output without running it. Then facilitator runs it to verify.
-->
**Challenge 1: Simple Sequence (3 minutes)**

**Observe This Code:** Where does Karel end up? What direction is it facing?

```plaintext
move()
turn_left()
turn_left()
move()
```

**Participants Predict:**
- Give 2 minutes to think (can discuss in chat or with neighbor)
- Collect answers
- Run the code
- Discuss: "Who got it right? How did you think about it?"

<!--
Answer: Karel moved right, turned around (now facing left), moved left. Ends up at starting position facing left.
-->

**Challenge 2: Beeper Placement (5 minutes)**

**Observe This Code:** Where are the beepers placed? How many are there?

```plaintext
move()
move()
put_beeper()
turn_left()
move()
put_beeper()
turn_left()
turn_left()
turn_left()
move()
put_beeper()
```
**Participants Predict:**
- Sketch the world on paper or describe positions
- Discuss approaches: "How did you trace through this?"

<!-- Answer: Three beepers placed at different locations in the world.

Talking Point: "This is called 'tracing through code.' It's a crucial debugging skill. You read each line, predict what happens, verify, and move to the next line. If your prediction matches the output, great. If it doesn't, that's where the bug is."
-->

**Challenge 3: Complex with Multiple Turns (8 minutes)**

**Observe This Code:** At the end, where is Karel? What direction is it facing? How many beepers were placed?

```plaintext
move()
move()
turn_left()
turn_left()
turn_left()
move()
move()
put_beeper()
turn_left()
move()
turn_left()
turn_left()
move()
```

<!-- Program Staff Notes:
**Participants Predict:**
- This is harder; let them think and discuss (4–5 minutes)
- Facilitate discussion on strategy: "How do you keep track of direction?"
- Collect answers
- Run the code and verify

**Talking Point:** "If you get stuck tracing through code, write down Karel's position and direction after every few commands. That's a valid debugging technique."
-->

### Part 6: Resilience & Growth Mindset (5 minutes)
The code didn't work perfectly on the first try. That's not a failure; that's the process. Every programmer —from beginners to experts— writes code that doesn't work. Then they debug it. Your resilience log showed something powerful: when you got stuck, you didn't give up. You took a break, tried again, asked for help, looked at documentation. Those are the habits of successful engineers.
<!-- Program Staff Talking Points:
- "You wrote your first program. Some of you felt confident. Some of you felt frustrated. Both are completely normal."
- "Here's what I want you to remember: Frustration is temporary. Failure is feedback. Persistence is the skill. You have it."
- "Next session, we're going to write more complex code using loops. It'll be harder. You'll get stuck again. And you'll get unstuck, just like you did today. That's how you grow."
-->

### Part 7: Q&A (5 minutes)
Q: "Will I always struggle this much when I write code?" \
A: Struggle phases are normal. As you practice, you'll recognize patterns and debug faster. But even experts encounter code that takes time to debug.

Q: "Is there a shortcut to debugging?" \
A: Not really. You have to think through it. But you'll develop intuition over time.

Q: "What if I can't figure out what's wrong?" \
A: You ask for help. You take a break and come back. You use print statements or add comments. You Google the error message. You pair program with someone.

Q: "Do I need to memorize all the Karel commands?" \
A: No. You'll use them so often that they'll stick. In real programming, you reference documentation constantly.

## Continued Learning

**Karel Commands Practice**
1. `move()` — What it does, example, common mistakes
2. `turn_left()` — Explanation of rotation, why 3 turns ≠ turn right
3. `put_beeper()` — Placing a marker
4. `pick_beeper()` — Collecting a marker
5. (Optional: `if_beepers_present()`, `while_beepers_present()` for future use)

**Debugging Flowchart**
1. Step 1: Run your code
2. Step 2: What happened? (vs. what did you expect?)
3. Step 3: Read error message
4. Step 4: Trace through code line by line
5. Step 5: Spot the difference
6. Step 6: Fix it
7. Step 7: Test again

**Resilience Toolkit**
1. Signs you're frustrated (getting impatient, blaming the computer, wanting to quit)
2. What to do when frustrated: take a break, move your body, drink water, call a friend, go outside
3. Debugging when frustrated: pause first, don't debug when angry, go for a walk
4. Celebrating wins: completed a line of code? That's progress. Stuck but kept trying? That's resilience.

**Common Karel Mistakes & Fixes**
1. "Karel moved but didn't pick up the beeper" → Forgot pick_beeper() command
2. "Karel moved in the wrong direction" → Miscounted `turn_left()` calls
3. "My code runs but ends in the wrong place" → Check position step-by-step
4. "I don't understand the problem" → Re-read the problem. Draw it out. Visualize the world.

**Community Practices:**
- Use the #pre-applicant Slack channel to celebrate fixes, ask for synchronous and asynchronous help
- Celebrate mistakes: "I debugged this and learned X"
- Share debugging techniques: "I use pen and paper to trace through code"

**Challenging Extensions (for those who want more):**
- Explore loops (for loops, while loops) conceptually
- Harder Karel worlds (provided on Code.org or Stanford's site)
- Explore functions in Karel
- Try out ptimization: "Write the shortest code possible to solve this world"
