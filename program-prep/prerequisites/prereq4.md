# Prerequisite Session 4: Logic + Ownership

## Prerequisite
- Completion of Session 3 (or comfort with Boolean logic: AND, OR, NOT)
- Understanding of true/false concepts
- Access to paper or digital tool for creating truth tables
- Ability to record videos with tools such as Loom or QuickTime Player
- Willingness to give and receive peer feedback
- Familiarity with basic set theory concepts (helpful but not required)

## Table of Contents
- [Motivation](#motivation)
- [Objectives](#objectives)
- [Specific Things to Learn](#specific-things-to-learn)
- [Independent Practice](#independent-practice)
  - [Task 1: Truth Table Construction](#task-1-truth-table-construction-6075-minutes)
  - [Task 2: "Debug My Logic" Peer Exercise](#task-2-debug-my-logic-peer-exercise-3045-minutes)
  - [Task 3: "Combine & Compare Logic" - Venn Diagrams](#task-3-combine--compare-logic---venn-diagrams-4560-minutes)
- [Guided Practice (In-Session: 2 hours)](#guided-practice-in-session-2-hours)
  - [Part 1: Welcome & Session Overview](#part-1-welcome--session-overview-5-minutes)
  - [Part 2: Breakout Room Sharing](#part-2-breakout-room-sharing-45-minutes)
  - [Part 3: Group Debrief](#part-3-group-debrief-10-minutes)
  - [Part 4: Staff-Led Logic Puzzles & Introduction to Conditionals](#part-4-staff-led-logic-puzzles--introduction-to-conditionals-40-minutes)
  - [Part 5: Ownership in Feedback Culture](#part-5-ownership-in-feedback-culture-15-minutes)
  - [Part 6: Q&A](#part-6-qa-5-minutes)
- [Supplemental Materials](#supplemental-materials)

## Projected Time

**Independent Practice (Pre-Session): ~2 hours**
- Truth Table Construction: 60–75 minutes
- "Debug My Logic" Peer Exercise: 30–45 minutes
- "Combine & Compare Logic" - Venn Diagrams: 45–60 minutes

**Guided Practice (In-Session): 2 hours**
- Welcome & Overview: 5 minutes
- Breakout Room Sharing (Truth Tables + Peer Feedback): 45 minutes
- Group Debrief: 10 minutes
- Staff-Led Logic Puzzles & Introduction to Conditionals: 40 minutes
- Ownership in Feedback Culture: 15 minutes
- Q&A: 5 minutes

## Motivation
Boolean logic is the DNA of programming. Every conditional (if/else), loop (while, for), and data filter you write is built on logical operators. This session takes the true/false thinking from Session 3 and goes deeper: How do complex logical expressions evaluate? How do you know if your logic is right? How do you catch bugs in your reasoning?

Additionally, this session emphasizes **ownership in feedback culture**. Giving and receiving feedback is how teams grow. But it requires vulnerability, clarity, and psychological safety. By practicing peer review of logic (low-stakes) in this session, participants build the muscle for high-stakes feedback later (code reviews). Ownership isn't just taking responsibility for your work; it's taking responsibility for helping others improve, and for being open when others help you.

## Objectives
By the end of this session, participants will:
- Understand truth tables and how they evaluate logical expressions
- Build confidence creating and reading truth tables
- Understand how logical operators combine (AND, OR, NOT) to create complex conditions
- Learn to debug logical errors by tracing through truth tables
- Understand set operations (union, intersection, difference) and Venn diagrams
- Practice giving and receiving constructive peer feedback
- Recognize ownership in feedback culture: giving clear feedback, receiving it without defensiveness
- Understand conditionals (if/else) as the practical application of Boolean logic
- See logic as the foundation of programming decision-making

## Specific Things to Learn

**Technical Skills:**
- Creating and reading truth tables
- Evaluating logical expressions (combinations of AND, OR, NOT)
- Identifying logical errors and debugging them
- Set operations: union (∪), intersection (∩), difference (-)
- Venn diagrams and their relationship to set operations
- Conceptual understanding of conditionals (if/else): how Boolean logic drives code decisions
- De Morgan's Laws (optional but recommended): NOT(A AND B) = NOT(A) OR NOT(B)

**Core "Soft" Skills:**
- Giving constructive peer feedback (specific, actionable, kind)
- Receiving feedback without defensiveness
- Asking clarifying questions when confused
- Taking responsibility for your own learning and your peer's learning
- Balancing confidence in your work with openness to improvement
- Communicating complex ideas clearly (explaining logic to peers)
- Ownership in collaborative environments

## Independent Practice
_**🎗️ All independent practice tasks should be turned in no later than one hour ahead of the guided session's start. For example, if the guided session begins at 6pm, participant work should be turned in by 5pm.**_

### Task 1: Truth Table Construction (60–75 minutes)
**Objective:** Master truth tables as a tool for evaluating and verifying logical expressions.

Create truth tables for 5 logical expressions. For each prompt:
1. Create the truth table (by hand or digital tool)
2. Record a video (3–5 minutes total) explaining it using tools such as QuickTime Player or 

**Simple AND**
A AND B

| A | B | A AND B
|-----|-----|-----
| T | T | T
| T | F | F
| F | T | F
| F | F | F

**Simple OR**
A OR B

**Combination with NOT**
(A AND B) OR NOT(C)

**Real-World Condition**
"You can ride a roller coaster if you're at least 48 inches tall AND at least 10 years old"
- Let A = "Height ≥ 48 inches" (true/false)
- Let B = "Age ≥ 10 years" (true/false)
- Expression: A AND B

**Complex Condition (Choose One)**
Option A: (A OR B) AND NOT(C)
Option B: "You can attend a movie if you have a ticket AND (the theater is open OR you have a streaming service)"

- Let A = "Has ticket", B = "Theater open", C = "Has streaming service"
- Expression: A AND (B OR C)

**For Each Expression:**
1. Draw or create the truth table showing all possible combinations of true/false for the variables
2. For complex expressions, show intermediate steps (e.g., if evaluating (A AND B) OR NOT(C), show the result of A AND B, then NOT(C), then the final OR)
3. Write a brief explanation (2–3 sentences) of what the expression means in plain English

**Recorded Video Instructions:**
Record a 5–10 minute video (you can do all 5 expressions in one video or separate videos). For each expression:
  - Show the truth table on screen
  - Walk through 2–3 rows, explaining how you evaluated the logic
  - Explain what the expression means in real-world terms (if applicable)
  - Answer: "Why is this truth table important? What does it tell us?"
  
**Free Resources:**
- **[Khan Academy - "Logic & Truth Tables"](https://www.khanacademy.org/computing/code-org/logic)** (interactive truth table builder)
- **[YouTube - "Truth Tables Explained"](https://www.youtube.com/watch?v=UU_H2e-lfXs)** (10 minutes, very clear)
- **[YouTube - "Boolean Logic & Truth Tables"](https://www.youtube.com/watch?v=gI-qXk7XojA)** (5 minutes, animated)
- **[Interactive Tool - "Truth Table Generator"](https://web.stanford.edu/class/cs103/tools/truth-table-tool/)** (Stanford; you can input an expression and it generates the table)
- **[Brilliant.org - "Boolean Algebra"](https://brilliant.org/courses/boolean-algebra)** (free intro course with interactive problems)
- **[YouTube - "De Morgan's Laws"](https://www.youtube.com/watch?v=r85EHpV2DmU)** (optional; explains NOT(A AND B) = NOT(A) OR NOT(B))

**Submission:**
Create a Google Doc or PDF with the following to share with program staff:
  - All 5 truth tables (images or text)
  - Explanations for each
  - Link to your recorded video(s)

### Task 2: "Debug My Logic" Peer Exercise (30–45 minutes)
**Objective:** Practice giving and receiving constructive feedback. Build ownership through peer accountability.

**Create a "Buggy" Truth Table (15–20 minutes)**
1. Choose one of the 5 truth tables you created in Task 1
2. Intentionally introduce 2–3 errors (incorrect true/false values in the truth table)
3. Write it up clearly (so a peer can read it)
4. Add a note: "This truth table has some mistakes. Can you find them?"

**Submit to a Peer (5 minutes)**
- Pair with a peer in Slack
- Send them your "buggy" truth table in a direct message
- Ask them to review it and identify the errors

**Review Your Peer's Truth Table (15 minutes)**
- Wait for your peer's buggy truth table to arrive
- Review it carefully
- Find the errors (should be 2–3)
- Provide feedback using this structure:

**Feedback Template:**
```text
Hi [Peer Name],
I reviewed your truth table for [expression]. Here's what I found:

What's Correct:
- [Note something they did right—maybe the structure is clear, or one row is perfect]

Errors I Found:
- Row [number]: You wrote [their answer], but I think it should be [correct answer] because [explain your reasoning]
- Row [number]: [same format]

Question for You:
- [Ask a clarifying question or suggest a strategy to double-check their work]

Thanks for sharing!
[Your Name]
```

**Respond to Your Peer's Feedback (5–10 minutes)**
- Read your peer's feedback carefully
- If they identified errors, thank them and explain what you learned
- If they said everything was correct, that's great! But ask them: "Was anything confusing about my explanation?"
- Reply in Slack with: "Thanks for reviewing my work! I appreciated [specific thing]. I learned [what you learned]."

**Document the Process (5 minutes)**
In a Google Doc, write 3–4 sentences answering:
  - What feedback did your peer give you?
  - What did you change or what did you learn?
  - What did it feel like to have someone review your work? (Anxious? Relieved? Defensive? All okay answers.)

**Free Resources:**
- **["How to Give Constructive Feedback" (Video)](https://www.youtube.com/watch?v=a_fI4H4bBQA)** (4 minutes)
- **[Article - "Radical Candor" by Kim Scott](https://www.radicalcandor.com/our-approach)** (explains caring feedback; this is optional but valuable)
- **[Growth Mindset Podcast - "Feedback Conversations"](https://www.grownups.ca/learn/main/podcast)** (search for feedback episodes)

**Talking Points for Reflection:**
- Feedback isn't criticism; it's collaboration.
- People who give you feedback trust you enough to be honest.
- People who receive your feedback are also being vulnerable.
- Mistakes in logic are opportunities to learn, not reasons to feel ashamed.

### Task 3: "Combine & Compare Logic" - Venn Diagrams (45–60 minutes)
**Objective:** Understand set operations (union, intersection, difference) and visualize them with Venn diagrams. Deepen understanding of how logic combines and filters.

**Part A: Review Set Operations Conceptually (15 minutes)**
Study the three basic set operations:

**1. Union (∪) — "OR"**
- Definition: All elements in A, all elements in B, or both
- Venn Diagram: Both circles are shaded
- Example: Students who play soccer OR basketball (includes students who play both)
- Logical equivalent: A OR B

**2. Intersection (∩) — "AND"**
- Definition: Only elements that are in both A AND B
- Venn Diagram: Only the overlapping middle section is shaded
- Example: Students who play soccer AND basketball (only those who play both)
- Logical equivalent: A AND B

**3. Difference (−) — "AND NOT"**
- Definition: Elements in A but not in B
- Venn Diagram: Only the left circle (not overlapping) is shaded
- Example: Students who play soccer BUT NOT basketball
- Logical equivalent: A AND NOT(B)

**Free Resources:**
- **[Khan Academy - "Sets & Venn Diagrams"](https://www.khanacademy.org/math/statistics-probability/probability-library/basic-set-ops/v/venn-diagrams)** (5-minute intro)
- **[YouTube - "Venn Diagrams for Set Operations"](https://www.youtube.com/watch?v=OMaRVfMdLls)** (8 minutes, clear examples)
- **[Interactive Venn Diagram Tool](https://www.venndiagram.com/)** (drag elements and see how sets change)

**Part B: Create Your Own Venn Diagrams (30–45 minutes)**
Create 3 Venn diagrams by hand or using a digital tool (Canva, Google Drawings, or even paint).

**Diagram 1: Union (A ∪ B)**
- Topic: "Fruits I Like" (Set A) and "Fruits My Friend Likes" (Set B)
- Example elements:
  - Only in A: Apple, Orange
  - In both: Banana, Blueberry
  - Only in B: Mango, Pineapple
- Shade the union (all three sections)
- Write: What does A ∪ B represent? (Answer: All fruits that either I like or my friend likes or both)

**Diagram 2: Intersection (A ∩ B)**
- Topic: "Languages I Speak" (Set A) and "Languages Used in Tech" (Set B)
- Example elements:
  - Only in A: Spanish, French
  - In both: English, Python (okay, Python isn't a spoken language, but it's used in tech!)
  - Only in B: JavaScript, Java
- Shade the intersection (only the middle)
- Write: What does A ∩ B represent? (Answer: Languages that I speak AND are used in tech)

**Diagram 3: Difference (A − B)**
- Topic: "Programming concepts I understand" (Set A) and "Concepts my study group asked for help on" (Set B)
- Example elements:
  - Only in A: Variables, Loops, Functions (things I understand but they didn't ask about)
  - In both: Truth tables, Logic (we both understand these)
  - Only in B: (nothing, because B is a subset of A)
- Shade the difference (only the left circle, excluding overlap)
- Write: What does A − B represent? (Answer: Concepts I understand but my study group didn't ask for help on—areas where I could mentor them)

**Submission:**
- Take photos or screenshots of your 3 Venn diagrams
- Paste into a Google Doc
- Write 2–3 sentences explaining each diagram

**Part C: Reflection — How Sets Connect to Logic & Coding (15 minutes)**
Answer these questions in a Google Doc (3–5 sentences each):
1. **"How are set operations (union, intersection, difference) similar to Boolean logic (OR, AND, NOT)?"**
<!-- 1. Example thinking: "Union is like OR because both include multiple options. Intersection is like AND because both require all conditions to be true..." -->
2. **"Where might you use set operations in real-world code?"**
<!-- 2. Example: "Filtering a list of users who are 18+ (Set A) OR have parental permission (Set B). That's the union of two sets." -->
3. **"If you were filtering a database of students, and you wanted to find students who are in the Junior class AND have taken AP Biology, which set operation would you use?"**
<!-- 3. Answer: Intersection (A ∩ B) -->

**Free Resources:**
- **[YouTube - "Sets in Real-World Applications"](https://www.youtube.com/watch?v=Cm_0jB8_MZs)** (6 minutes)
- **[Brilliant.org - "Set Theory Fundamentals"](https://brilliant.org/courses/set-theory-fundamentals/)** (optional deeper dive)

## Guided Practice (In-Session: 2 hours)

### Part 1: Welcome & Session Overview (5 minutes)
Truth tables are your verification tool. They let you check every possible scenario and know your logic is sound.

<!-- **Program Staff Talking Points:**
- "Last session, you warmed up on arithmetic and solved logic puzzles. Today, you're going deeper: How do we *prove* that logic is correct? How do we catch bugs in logical thinking? And how do we work as a team where giving feedback is normal?"
- "You also exchanged feedback with a peer on your truth tables. That took courage—showing your work and hearing critique. That's what ownership in a team looks like."
- "By the end of today, you'll understand conditionals (if/else)—the most fundamental building block of programming. And you'll see how Boolean logic powers every decision your code makes."
-->

### Part 2: Breakout Room Sharing (45 minutes)

**Truth Table Showcase & Recorded Video Screening (25 minutes)**

<!-- Program Staff Notes:
- Listen for confusion or misconceptions
- Celebrate clarity in explanations
- Note which expressions were hardest (these inform the staff-led portion)

Paste the Following Discussion Prompts into Zoom Chat:
- "Who created a truth table for a real-world scenario? Tell us about it."
- "Did anyone use different methods to verify their answer? What were they?"
- "What was the trickiest part of creating a truth table?"

-->

Each participant shares:
- One truth table they created (screen share or show image)
- Key insight from their recorded video (1–2 minutes per person)

**Peer Feedback Experience & Venn Diagrams (18 minutes)**
<!-- Program Staff Notes:
- Document feelings about feedback (anxiety, appreciation, defensiveness—all normal)
- Celebrate peer mentoring moments: "I love that you explained why you disagreed"
- Note which set operations are confusing (these inform the staff-led portion)

Paste the Following Discussion Prompts into Zoom Chat:
- "What did it feel like to receive feedback on your truth table?"
- "Who changed their work based on peer feedback? What did you change?"
- "Whose Venn diagram is the clearest? What made it easy to understand?"
- "Did anyone connect set operations to something you already understood?"

Set the Tone: Frame feedback as a gift. "People who review your work are investing in your growth. That's a sign of a strong team."

-->

Each participant shares:
- One piece of feedback they received from their peer (and how they responded)
- One Venn diagram they created (showing union, intersection, or difference)

### Part 3: Group Debrief (10 minutes)
<!-- Program Staff Talking Points:

- "Your truth tables were sophisticated. I saw expressions with three, four, even five variables. And you explained them clearly. That's how engineers communicate: show your work, explain your reasoning."
- "Your Venn diagrams showed that you understand the connection between sets and logic. That's the conceptual bridge between math and programming."
- "Your peer feedback was kind and specific. People didn't just say 'wrong'; they explained their thinking. That's the gold standard of feedback. We're building a culture where that's normal."
- "Some of you mentioned fear when sharing your work. That's real. But notice: you did it anyway. You took responsibility for your learning and showed it to someone else. That's courage."
-->

**Connection to Coding:**
Everything you practiced — truth tables, feedback, set operations — you'll do this constantly in a coding team. You'll write code, a peer will review it, you'll explain your logic, they'll suggest improvements. You'll receive feedback without taking it personally. You'll give feedback that helps rather than hurts. Those skills are learned now.

### Part 4: Staff-Led Logic Puzzles & Introduction to Conditionals (40 minutes)
**Objective:** Deepen understanding of logical thinking and introduce conditionals as the practical application of Boolean logic in code.

**Complex Logic Puzzles (15 minutes)**

**Puzzle A: The Three Switches (7 minutes)**
*"You're in a room with three light switches. One controls the light outside the room; the other two do nothing. You can flip switches as many times as you want while in the room, but once you leave, you can't go back in. You get only one chance to guess which switch controls the light. How do you do it?"*

<!-- Program Staff Notes & Talking Points:
- "What properties does the light have that you could observe?" (On/off, but also heat!)
- "What if you flip one switch, leave it on for a minute, then turn it off?"
- Solution: Flip switch 1 on for 1 minute, then off. Flip switch 2 on. Leave switch 3 off. Go outside. If light is on, it's switch 2. If light is off but warm, it's switch 1. If light is off and cool, it's switch 3.
- "You combined multiple clues: on/off (Boolean), and temperature. You thought like an engineer."
- "This puzzle has nothing to do with code syntax. But it's everything to do with how engineers think: try experiments, gather data, reason through possibilities."
-->

**Puzzle B: The Honest & Dishonest Tribes (8 minutes)**
*"You're at a fork in the road. One path leads to your destination; one leads to danger. Two guards stand at the fork. One always tells the truth; one always lies. You don't know which is which. You can ask only one question. What do you ask?"*

<!-- Program Staff Notes & Talking Points:
- "What property must your question have?" (It must give you the same answer regardless of who answers—truth-teller or liar)
- Solution: Ask either guard, "If I asked the other guard which path is safe, what would they say?" Then take the opposite path. (This works because: if you ask the truth-teller about the liar, they'll point to the wrong path. If you ask the liar about the truth-teller, they'll also point to the wrong path.)
- "You used logic to cancel out the uncertainty. That's debugging."
- "In logic puzzles and in code, you find the one question (or condition) that reveals the truth. Everything else is working backward from that."
--> 

**Introduction to Conditionals (IF/ELSE) — Conceptual (15 minutes)**
A conditional is a programming instruction that says: 'If this condition is true, do X. If it's false, do Y. In Boolean logic, we evaluate whether something is true or false. In code, conditionals *act* based on that evaluation."

**Example 1: Simple IF**

```plaintext
IF (age >= 18) THEN
  → Allow entry to the venue
END
```

In Boolean terms: age >= 18 is either true or false.
- If true: Enter
- If false: Don't enter

**Example 2: IF/ELSE**

```plaintext
IF (raining) THEN
  → Take an umbrella
ELSE
  → Don't take an umbrella
END
```

**Example 3: IF/ELSE IF/ELSE (Multiple Conditions)**

```plaintext
IF (score >= 90) THEN
  → Grade is A
ELSE IF (score >= 80) THEN
  → Grade is B
ELSE IF (score >= 70) THEN
  → Grade is C
ELSE
  → Grade is F
END
```

**Example 4: Nested Conditions (Combining Logic with AND/OR)**

```plaintext
IF (age >= 18 AND has_license) THEN
  → Can drive
ELSE
  → Cannot drive
END

IF (has_ticket OR has_streaming_service) THEN
  → Can watch the movie
ELSE
  → Cannot watch
END
```

**Interactive Element (10 minutes):**
Every time you use an app and see something change based on your action or data, a conditional just executed. If you clicked a button and a modal appeared, that's a conditional. If you logged in and your profile appeared, that's a conditional. Conditionals are how code makes decisions. And every conditional is built on Boolean logic. This is why truth tables matter.

**Scenario 1:** "A store charges $5 for shipping if order total is under $25, and free shipping if order total is $25 or more. Write the logic."

<!-- Answer 1:
IF (order_total >= 25) THEN
  → shipping = 0
ELSE
  → shipping = 5
END
-->

**Scenario 2:** "A app shows a "New User" badge if the account is less than 7 days old. Write the logic."

<!-- Answer 2:
IF (account_age < 7 days) THEN
  → Display "New User" badge
ELSE
  → Don't display badge
END
-->

**Scenario 3:** "A login system allows access if the user entered the correct password AND their account is not suspended. Write the logic."

<!-- Answer 3:
IF (password_correct AND NOT(account_suspended)) THEN
  → Allow login
ELSE
  → Deny login
END
-->


### Part 5: Ownership in Feedback Culture (15 minutes)
**Objective:** Reflect on what happened this week (exchanging peer feedback) and build a shared commitment to a feedback culture.

**Prompt 1:** "When you sent your peer a 'buggy' truth table and asked them to find errors, what did you feel?"
<!-- Program Staff Talking Points:
- Let 4–5 people share (30 seconds each)
- Listen for: vulnerability, trust, risk-taking
- Normalize feelings: "That took courage. Showing work that you know has mistakes? That's brave."
-->

**Prompt 2:** "When you received feedback from your peer, what went through your mind?"
<!-- Program Staff Talking Points:
- Let 4–5 people share
- Listen for: defensiveness, appreciation, learning
- Affirm: "The fact that you received feedback without making excuses—that's ownership. That's how teams grow."
-->

**Prompt 3:** "What does a strong feedback culture look like?"
Generate group norms together:
- Feedback is specific, not vague
- Feedback is kind, not harsh
- Feedback is about the work, not the person
- Receiving feedback doesn't mean you're bad; it means you're learning
- Giving feedback is an act of care, not criticism
- Everyone gives and receives feedback

**Commit as a Cohort:**
Let's commit to a feedback culture where:
- We ask for help without shame
- We give honest, specific feedback
- We receive feedback without defensiveness
- We see mistakes as learning opportunities
- We celebrate effort and growth, not just correct answers
<!-- Program Staff Talking Points:
Talking Point: "This isn't just about niceness. This is about how real engineering teams work. The best teams aren't the ones where everyone is perfect. They're the ones where people trust each other enough to be honest, and are confident enough to receive honesty."
-->

### Part 6: Q&A (5 minutes)
Q: "I still don't fully understand truth tables. Will we need to memorize them?" \
A: No memorization. We'll reference them. Understanding the concept (how logic combines) matters more than perfection. Keep practicing.

Q: "What if I get a conditional wrong in my code?"\
A: Welcome to programming. Every engineer writes bugs. You'll learn to debug using print statements, testing, and reasoning through the logic.

Q: "How do I know if my logic is correct?"\
A: Test it. Create a truth table. Walk through different scenarios. Ask a peer to review. These are your tools.

Q: "Is feedback always going to feel this scary?"\
A: It usually gets easier with practice. You'll build trust with your team. And you'll see that feedback helps you grow faster. 

### Supplemental Materials
**Week 2 Reflection Prompt**
- What's one arithmetic or logic concept that you now feel confident about?
- What's one concept that still feels confusing or unclear?
- How did ownership show up for you this week? (Showing your work, receiving feedback, taking responsibility for learning, etc.)
- How do you want to practice ownership in the coming weeks?
- What question do you want to ask in follow-up sessions?

**Arithmetic & Logic in Programming**
- Understand how order of operations applies to code
- Understand how Boolean logic drives conditionals
- Understand how set operations filter data
- Understand early examples in pseudocode (not real programming language, but showing structure)

**Recommended Optional Resources for Deeper Learning**
- **[Discrete Math for Computer Science](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/)** (MIT OpenCourseWare; optional, advanced)
- **[YouTube - "Crash Course - Logic & Philosophy"](https://www.youtube.com/watch?v=9BaF0FV7AKo)** (explores philosophy of logic; optional)
- **Podcast: "Stuff You Should Know - How Boolean Search Works":** (relates logic to real-world search engines)
- **[Interactive Game - "BoolSat"](http://www.csc.ncsu.edu/faculty/goddyn/BoolSat.html)** (game-ified Boolean satisfiability; fun and challenging)
