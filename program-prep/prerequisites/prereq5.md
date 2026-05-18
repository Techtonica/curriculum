# Prerequisites Session 5: Resilience + Programming Foundation

<!-- Program Staff Notes: 

**Week Theme:** Resilience + Programming Foundations
**Mindset Focus:** Resilience, persistence, frustration tolerance, learning from failure
**Technical Focus:** Programming basics (sequences, functions, loops, conditionals), debugging, problem decomposition
**Total Week Time Commitment:** ~5.5 hours (Independent Practice + Guided Practice combined)

**Context:** This is the moment when abstract concepts become concrete psuedocode. Participants will write their first instances of pseudocode, a beginner-friendly programming exercise teaching core programming concepts without syntax complexity, allowing focus on logic and problem-solving. Critically, this week emphasizes resilience because programming *will* feel frustrating. Code won't work. Logic errors will happen. That moment of frustration—and how you respond—is where the real learning happens. This week normalizes struggle as part of the engineering process and teaches participants to debug, persist, and problem-solve collaboratively.
-->

Participants should have a basic understanding of the following foundational concepts ahead of consuming the topic outline:
- Comfort with basic logic and Boolean thinking (from Week 2)
- Willingness to make mistakes and learn from them
- Growth mindset: belief that struggling is part of learning
- Completed [Prerequisite Session 4: Logic + Ownership](../prereq4.md)

### Table of Contents
- [Projected Time](#projected-time)
- [Motivation](#motivation)
- [Objectives](#objectives)
- [Specific Things to Learn](#specific-things-to-learn)
- [Independent Practice](#independent-practice)
  - [Task 1: Write Pseudo-Code Instructions for a Maze](#task-1-write-pseudo-code-instructions-for-a-maze-6090-minutes)
  - [Task 2: "Resilience Log"](#task-2-resilience-log-2030-minutes)
- [Guided Practice (In-Session: 2 hours)](#guided-practice-in-session-2-hours)
  - [Part 1: Welcome & Session Overview](#part-1-welcome--session-overview-5-minutes)
  - [Part 2: Breakout Room Sharing](#part-2-breakout-room-sharing-40-minutes)
  - [Part 3: Group Debrief](#part-3-group-debrief-15-minutes)
  - [Part 4: Staff-Led Introduction to Flowcharts](#part-4-staff-led-introduction-to-flowcharts-35-minutes)
  - [Part 5: Mini-Challenge - Debug Pseudo-Code Instructions](#part-5-mini-challenge---debug-pseudo-code-instructions-20-minutes)
  - [Part 6: Resilience, Precision in Problem-Solving, & Growth Mindset](#part-6-resilience-precision-in-problem-solving--growth-mindset-5-minutes)
  - [Part 7: Q&A](#part-7-qa-5-minutes)
- [Continued Learning](#continued-learning)

### Projected Time
Independent Practice (Pre-Session): ~2.5 hours
Guided Practice (In-Session): 2 hours

### Motivation
Programming is inherently frustrating at first. Your code won't do what you expect. You'll spend 10 minutes debugging only to realize you forgot indentation or a function call. You'll write logic that seems right but produces the wrong output. This is *normal* and *universal*—every engineer experiences this. The difference between people who become great engineers and people who quit is not talent; it's resilience. It's the ability to say, "That didn't work. Why? Let me try again." This week, you'll learn pseudocode, a beginner-friendly programming exercise that teaches core programming concepts without overwhelming syntax complexity. You'll work on logic and problem-solving. These habits of persistence and debugging will carry you through harder challenges ahead. Resilience isn't about never struggling; it's about struggling, learning, and trying again.

### Objectives
By the end of this session, participants will:
- Write their first programmatic pseudocode
- Understand that programming requires iterating, testing, and debugging
- Recognize frustration as a signal to pause, reflect, and try a different approach
- Understand that getting stuck is normal and universal among programmers
- Practice asking for help without shame
- See resilience as a core engineering skill
- Understand the connection between logical thinking (PrerequisiteWeek 2) and code execution

### Specific Things to Learn

**Technical Skills:**
- Sequential execution (commands run in order)
- Understanding how pseudocode maps to actual behavior (cause and effect)
- Basic debugging: understanding errors, thingking through commands, isolating problems
- Problem decomposition: breaking a task into smaller steps
- Reading and interpreting problem specifications

**Core "Soft" Skills:**
- Recognizing and naming frustration without judgment
- Taking breaks when stuck (stepping away, then returning)
- Asking clarifying questions about the problem
- Persisting through errors and failed attempts
- Celebrating small wins (solved one part, moved forward slightly)
- Debugging mindset: systematic problem-solving, not random guessing
- Learning from mistakes: "What went wrong and why?"

### Independent Practice

_**🎗️ All independent practice tasks should be turned in no later than one hour ahead of the guided session's start. For example, if the guided session begins at 6pm, participant work should be turned in by 5pm.**_

### Task 1: Write Pseudo-Code Instructions for a Maze (60–90 minutes)

**Background — What is Pseudo-Code?**
Pseudo-code is instructions written in plain English (or any language), not in programming syntax. It describes *what* to do without requiring you to know any programming language. Programmers use pseudo-code to plan before writing actual code. Note, "Task 2" will be dependent upon this work, read that task before beginning Task 1.

Example:

```plaintext
Start at entrance of maze
Repeat until cheese is found:
  If path is clear ahead:
    Move forward
  Else:
    Turn left
Pick up cheese
Exit maze
```

**The Task: "Navigate a Maze to Get Cheese"**
You have a maze (physical or drawn). There's cheese somewhere in it. Write pseudo-code instructions that tell someone (or a robot) how to navigate from start to cheese.

**Setup Instructions:**

1. **Create or Print a Maze:**
  - Draw one on paper (simple 5x5 grid with walls)
  - Use an online maze generator to print or draw a replication of what's generated
  - Or describe a real-world maze (classroom layout, hallway, etc.)
2. **Mark the Maze:**
  - Mark START position
  - Mark CHEESE position
  - Mark WALLS clearly
3. **Write Your Pseudo-Code:**
Start with this template:

```plaintext
START at [location]

Repeat until [condition is met]:
  If [something is true]:
    [action]
  Else:
    [different action]

[final action]
END
```

4. **Example Pseudo-Code:**

```plaintext
START at entrance (bottom left)

Repeat until cheese is found:
  If there is a path to the right:
    Move right
  Else if there is a path forward:
    Move forward
  Else if there is a path to the left:
    Move left
  Else:
    Turn around

Pick up cheese
Return to start
END
```

5. **Test Your Instructions:**
  - Give your pseudo-code to a peer
  - They follow it **exactly** like a robot (no interpreting, no shortcuts)
  - Do they reach the cheese?
  - If not, where did your instructions fail?

**Common Issues (and What They Teach):**
- "Your instructions were ambiguous" → Precision matters; computers can't guess
- "You forgot to tell me what to do in X situation" → You need to handle all cases
- "I got stuck in a loop" → Your exit condition wasn't clear
- "You said 'go forward' but I don't know how many steps" → Specificity is crucial

**Write-Up: Explain Your Thinking in a Google Doc (2 pages)**
1. **What maze did you create/use?** (Describe it or paste a screenshot)
2. **Your pseudo-code:** (Paste your full instructions)
3. **What happened when your peer tested it?**
  - Did they reach the cheese?
  - Where did instructions fail (if at all)?
  - What was ambiguous?
4. **How you'd fix it:**
  - What would you change to make instructions clearer?
  - What cases did you not anticipate?
5. **Reflection:**
  - What was hardest about writing instructions in plain English?
  - How is this related to programming?
  - What did you learn about clarity and precision?

**Free Resources:**
- [Maze Generator (to create mazes)](https://www.mazegenerator.net)
- ["Algorithms Unplugged" (free book, Chapter 1)](https://www.csunplugged.org) (code-free algorithm teaching)
- [Khan Academy - "Algorithms"](https://www.khanacademy.org/computing/computer-science/algorithms) (scroll to "Intro" level)
- **Article - "Pseudo-Code: How to Write It":** Search "writing pseudo-code for beginners" (many free blog posts)

**Submission:**
- Google Doc with image/photo of your maze, a description, pseudo-code, peer feedback, and reflection

#### Task 2: "Resilience Log" (20–30 minutes) 
**Objective:** Develop metacognitive awareness of frustration and build resilience practices. A resilience log is a private record of your experience with challenge. It's not graded. It's not perfect. It's honest. You're documenting what you felt, what you did when stuck, and what you learned.

**Instructions:**
As you work on the maze task, track every moment of frustration or confusion. In a Google Doc, create a log with the following columns, but different content (below is simply an example):

| Moment | What Happened | Frustration Level (1-10) | How I Responded | What I Learned
|-----|-----|-----|-----|-----
| 1 | Psuedocode was incomplete | 6 | Paused, re-read the pseudocode, realized I forgot a step | I need to check that all instructions are in the right order
| 2 | I can't figure out how to navigate all turns | 8 | Took a 5-minute break, then drew a map on paper | Breaking the problem into sections helps
| 3 | Turned left three times instead of once (by accident) | 4 | Laughed, then fixed it | instructions about turning left is about rotation, not direction

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

### Guided Practice (In-Session: 2 hours)

#### Part 1: Welcome & Session Overview (5 minutes)
Programming isn't about getting it right on the first try. It's about iterating, testing, debugging, and trying again. That's not a failure mode; that's the process. This week is about resilience: your ability to face frustration, pause, reflect, and persist. That skill matters more than any code you'll write today.

<!-- Program Staff Talking Points:**
- "This week, we're learning the foundations of programming without writing any code. That might sound strange, but it's how professionals actually start: they plan in pseudo-code before they type a single line."
- "You just wrote instructions in plain English. That's what programming is: giving computers very clear, very specific instructions. The language changes (Python, JavaScript, etc.), but the thinking is the same."
- "Today, we're going to look at your instructions, talk about what makes them good or unclear, and learn the patterns programmers use to solve problems."
- "By the end of today, you'll understand sequences, loops, and conditionals—not by memorizing definitions, but by seeing them in the pseudo-code you wrote."
-->

#### Part 2: Breakout Room Sharing (40 minutes)
<!-- Program Staff Notes: 
Format: Divide participants into breakout groups of 4–5 (vary groups from previous weeks to build community).
-->

**Part A: Pseudo-Code Presentations (25 minutes)**
<!-- Program Staff Notes: 
Copy/Paste Discussion Prompts in Zoom Chat:
- "Who took a different approach to solve this? Tell us about it."
- "Did anyone discover a command or pattern that surprised them?"
- "Who didn't finish the task? Where did you get stuck? That's totally okay—let's talk about it."
- "What made this easier or harder than you expected?"

Copy/Paste Discussion Prompts in Zoom Chat:
- "Whose instructions were the clearest? What made them clear?"
- "Who had to rewrite their instructions after peer testing? What changed?"
- "Did anyone use words like 'repeat,' 'if,' or 'while'? That's programming thinking!"
- "What was the hardest part to explain in plain English?"
- "Did anyone discover a pattern (e.g., 'always turn left' or 'follow the wall')? That's algorithmic thinking."

Facilitation Notes:
- Document common frustration points (these inform the staff-led portion)
- Celebrate persistence: "I love that you tried X different approaches"
- Normalize struggle: "Everyone got stuck. That's the point."
- Highlight growth moments: "Notice how you responded to frustration? That's resilience."
-->

Have each participant share:
- Their maze (draw it on screen, show photo, or describe it)
- Their pseudo-code (read it aloud)
- One moment where their peer got confused or stuck

**Part B: Resilience Log Sharing (13 minutes)**
<!-- Program Staff Notes: 
Tone: Frame pseudo-code as *problem-solving communication*, not coding. "You're learning to think like an engineer."

Discussin Prompts to copy and paste: 
- "Who found it frustrating to be precise? That's normal—precision is hard."
- "Who felt satisfied when their peer finally understood the instructions?"
- "What did you learn about communication this week?"

Facilitator Listening & Notes:
- Document which concepts participants naturally used (loops, conditionals, sequences)
- Note common struggles: ambiguity, edge cases, unclear language
- Celebrate clarity: "I love how specific you were about turning"
- Normalize struggle: "Everyone struggles with precision at first"
-->
Each participant shares:
- One frustration moment from writing their pseudocode and how they responded (1–2 minutes per person)
- One insight from their reflection (30 seconds per person)

#### Part 3: Group Debrief (15 minutes)
Here's what I want you to notice: you didn't write Python or JavaScript. You wrote instructions in English. And that's enough to teach the core concepts. The programming language is just the tool. The thinking is what matters.
<!-- Program Staff Talking Points:
"Your pseudo-code showed real programming thinking. I heard loops ('repeat until'), conditionals ('if/else'), and sequences (ordered steps). You didn't use those terms, but you were using those concepts."
"Your peer testing revealed something important: what's clear in your head isn't always clear to someone else. That's why engineers write clear code—so teammates can understand it."
"Several people mentioned frustration with being precise. That's exactly right. Programming requires precision. And it's hard. But that's the skill you're building: the ability to communicate clearly, step by step."

Prompt for Celebration:
- "Who feels more confident about what programming actually is?" (Raise hands)
- "Who's surprised that precision and clarity are the hard parts, not syntax?"

Frame for Next Part:
Now we're going to visualize your thinking using flowcharts. A flowchart is a diagram that shows the flow of logic. It's another way to write pseudo-code—using pictures instead of words.

-->

#### Part 4: Staff-Led Introduction to Flowcharts (35 minutes)
**Objective:** Teach flowchart notation. Show how flowcharts represent the same logic as pseudo-code. Demonstrate decomposition.

**Demo 1: Flowchart Basics (10 minutes)**
A flowchart uses shapes to represent different types of steps:
- **Rectangle** = Action (something the robot does)
- **Diamond** = Decision (a yes/no question)
- **Arrow** = Direction of flow
- **Oval** = Start or End"

**Making Tea**

```plaintext
        ┌─────┐
        │START│
        └──┬──┘
           │
        ┌──▼──────────────────┐
        │Boil water in kettle │
        └──┬───────────────────┘
           │
        ┌──▼──────────────────┐
        │Pour water in cup    │
        └──┬───────────────────┘
           │
        ┌──▼──────────────────┐
        │Add tea bag to cup   │
        └──┬───────────────────┘
           │
        ┌──▼──────────────────┐
        │Wait 3 minutes       │
        └──┬───────────────────┘
           │
        ┌──▼──────────────────────────┐
        │Remove tea bag; add milk/honey│
        └──┬───────────────────────────┘
           │
        ┌──▼─────┐
        │Drink! ☕│
        └──┬─────┘
           │
        ┌──▼──────┐
        │ END     │
        └─────────┘
```

Each rectangle is an action. Arrows show the order. This is the same as saying: 'Boil water. Pour water in cup. Add tea bag. Wait. Remove bag. Drink.'

**Demo 2: Adding Decisions (12 minutes)**
Now let's add a decision. A diamond asks a yes/no question.

**Making Toast**

```plaintext
        ┌─────┐
        │START│
        └──┬──┘
           │
        ┌──▼────────────────┐
        │Put bread in toaster│
        └──┬─────────────────┘
           │
        ◇──What darkness level?
       /│\
    Light│Medium│Dark
     /   │      \
    ┌▼──┐ ┌▼──┐ ┌▼──┐
    │Set│ │Set│ │Set│
    │2  │ │5  │ │8  │
    └┬──┘ └┬──┘ └┬──┘
     │     │     │
     └──┬──┴──┬──┘
        │
    ┌──▼──────────┐
    │Press button │
    └──┬───────────┘
       │
    ◇──Toast ready?
   /NO  YES\
  ┌▼──────┐ └─────────────┐
  │Wait 5s│              │
  │more   │              │
  └───────┘              │
      │                  │
      │        ┌────────▼────┐
      │        │Remove toast │
      │        └────────┬────┘
      │                 │
      └─────────────────┘
           │
        ┌──▼──────┐
        │ END ☕  │
        └─────────┘
```

The diamond asks a question. If the answer is YES, follow the YES arrow. If NO, follow the NO arrow. This is how we represent conditionals (if/else) in a flowchart.

<!-- Program Staff Talking Point:** "A flowchart and pseudo-code say the same thing, just in different formats. Pseudo-code is words. Flowcharts are pictures. Both help you think through logic before coding.-->

**Demo 3: Loops in Flowcharts (8 minutes)**
How do we show repetition? We loop back.

**Eating Cookies**

```plaintext
        ┌──────┐
        │ START│
        └───┬──┘
            │
    ┌───────▼────────┐
    │Take cookie jar │
    └───┬────────────┘
        │
    ┌───▼──────────────────┐
    │  Cookies in jar?     │
    └───┬────────┬─────────┘
        │YES     NO
        │        │
    ┌───▼──────┐ │
    │Eat cookie│ │
    └───┬──────┘ │
        │        │
    └───┴────────┤
        │        │
    ┌───▼──────────────┐
    │ Put jar away     │
    └───┬──────────────┘
        │
    ┌───▼──────┐
    │   END    │
    └──────────┘
```

The diamond asks: 'Cookies in jar?' If YES, eat a cookie, then loop back and ask again. If NO, stop. This is a loop—repeat until a condition is false.

Loops are how we avoid writing the same instruction 100 times. Instead of 'Eat cookie. Eat cookie. Eat cookie...' we write 'Repeat: If cookies exist, eat cookie.'

<!-- Program Staff Interactive Element:
"Let's convert one of your pseudo-code instructions into a flowchart together. Who wants to share their maze instructions?"
- Have a volunteer share their pseudo-code
- Facilitator draws a flowchart on screen/whiteboard based on their instructions
- Ask: "Does this flowchart match your pseudo-code?"
- Discuss: "What's different? What's the same?"
--> 

#### Part 5: Mini-Challenge - Debug Pseudo-Code Instructions (20 minutes)
**Objective:** Practice finding and fixing errors in instructions. Understand debugging as logical problem-solving.

<!-- Program Staff Note about Format: staff presents broken pseudo-code. Participants identify what's wrong and how to fix it. -->

**Challenge 1: Ambiguous Instructions (5 minutes)**

**Given Broken Pseudo-Code:** What's wrong with these instructions? Will someone successfully navigate a maze?

```plaintext
Start at entrance
Move forward
Turn left
Move forward
Pick up cheese
End
```

**Discussion:**
- "How many steps forward? Where exactly is the cheese?"
- "What if there's a wall ahead?"
- "What does 'left' mean if you've already moved?"

<!-- Program Staff Answer: The instructions are too vague. They don't handle what happens if there's a wall, don't specify distances, don't explain what to do if the cheese isn't where you expect.

**Better Version:**

```plaintext
Start at entrance
Repeat until cheese is found:
  If there's a path ahead:
    Move forward one step
  Else:
    Turn left
    
Pick up cheese
End
```

Talking Point: "Debugging means finding where the instructions fail and making them clearer. This is exactly what programmers do when code doesn't work."
-->

**Challenge 2: Missing Conditions (5 minutes)**

**Given Broken Pseudo-Code:** What could go wrong with these instructions?

```plaintext
Start at entrance
Move forward
Move forward
Move forward
Pick up cheese
End
```

**Discussion:**
- "What if there's a wall after 1 step?"
- "What if cheese isn't at 'forward 3 steps'?"

<!--  Program Staff Answer: The instructions assume a specific path with no obstacles. They don't check conditions.

Better Version:

```plaintext
Start at entrance
Repeat:
  If path is clear ahead:
    Move forward
  Else:
    Turn left
    
  If cheese is here:
    Pick up cheese
    End
```

-->

**Challenge 3: Infinite Loop (5 minutes)**

**Given Broken Pseudo-Code:** What happens if someone follows these instructions?

```plaintext
Repeat:
  Move forward
  Turn left
```

**Discussion:**
- "Will they ever stop?"
- "What's missing?"

<!-- Program Staff Answer: There's no exit condition. The loop never ends (infinite loop).

Better Version:

```plaintext
Repeat until cheese is found:
  If path is clear:
    Move forward
  Else:
    Turn left
    
Pick up cheese
End
```
-->

#### Part 6: Resilience, Precision in Problem-Solving, & Growth Mindset (5 minutes)
The pseudocode didn't work perfectly on the first try. That's not a failure; that's the process. Every programmer — from beginners to experts — writes pseudocode (and yes even code!) that doesn't work. Then they debug it. Your resilience log showed something powerful: when you got stuck, you didn't give up. You took a break, tried again, asked for help, looked at documentation. Those are the habits of successful engineers.
<!-- Program Staff Talking Points:
- "This week, you experienced something programmers experience constantly: the frustration of being imprecise."
- "You wrote instructions in English. Your peer followed them exactly. If something was ambiguous, they got stuck."
- "That's not a failure. That's learning. You discovered that clarity matters more than cleverness."
- "Resilience this week isn't about bouncing back from frustration. It's about leaning into frustration as feedback. Your peer's confusion told you exactly where to be clearer."
- "As you move into actual programming languages, you'll have the same experience: the computer follows your instructions exactly. If they're unclear or wrong, it fails. The skill is learning to debug—to read the error, identify the issue, and fix it."
- "You're building that skill right now."
- "Here's what I want you to remember: Frustration is temporary. Failure is feedback. Persistence is the skill. You have it."
- "Next session, we're going to write more complex code using loops. It'll be harder. You'll get stuck again. And you'll get unstuck, just like you did today. That's how you grow."
-->

#### Part 7: Q&A (5 minutes)

Q: "Is pseudo-code a real programming language?" \
A: No, it's a planning tool. Programmers use it before writing actual code to think through logic.

Q: "Will we learn actual code next week?" \
A: Yes. You now understand the thinking. Next, we'll learn the syntax (the symbols and rules of a language).

Q: "Why do we spend time on pseudo-code if we're eventually coding?" \
A: Because the logic is what matters. Any language can express the same logic. Understanding logic first makes learning syntax easier.

Q: "Is being this precise always necessary?" \
A: Yes, for code. For everyday instructions, you can be casual. But computers can't guess.

Q: "What if my pseudo-code is 'wrong'?" \
A: There's no one right pseudo-code. If it works (your peer reaches the cheese), it's good. If it fails, debug it.

Q: "Will I always struggle this much when I write code?" \
A: Struggle phases are normal. As you practice, you'll recognize patterns and debug faster. But even experts encounter code that takes time to debug.

Q: "Is there a shortcut to debugging?" \
A: Not really. You have to think through it. But you'll develop intuition over time.

Q: "What if I can't figure out what's wrong?" \
A: You ask for help. You take a break and come back. You use print statements or add comments. You Google the error message. You pair program with someone.

### Continued Learning

**Debugging Flowchart**
1. Step 1: Work through your pseudocode
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
4. Celebrating wins: completed a success pseudocode write up? That's progress. Stuck but kept trying? That's resilience.

**Community Practices:**
- Use the Slack channel to celebrate fixes, ask for synchronous and asynchronous help
- Celebrate mistakes: "I debugged this and learned X"
- Share debugging techniques: "I use pen and paper to trace through code"

**Challenging Extensions (for those who want more):**
- Explore loops (for loops, while loops) conceptually
- Try out optimization: "Write the shortest pseudocode possible to solve a task"
