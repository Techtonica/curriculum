# Practicing Programming Fundamentals

### Projected Time
- Each peer activity should take 20 mins
- Each staff-led activity should take 40 mins

### Prerequisites
- Basic digital literacy and keyboard familiarity
- Experience reading step-by-step instructions
- Basic arithmetic and number sense
- Familiarity with true/false statements
- Exposure to pseudocode and flowcharts from prerequisite programming sessions

Helpful references include:
- [Pseudocode](https://github.com/Techtonica/curriculum/blob/main/practice/pseudocode.md)
- [Debugging](https://github.com/Techtonica/curriculum/blob/main/debugging/debugging.md)
- [GitHub](https://github.com/Techtonica/curriculum/blob/main/git/github-collaboration.md)

### Motivation
Programming fundamentals teach participants how to reason about problems before becoming overwhelmed by syntax. The focus is on explaining decisions, showing work, testing assumptions, recognizing patterns, decomposing tasks, and systematically debugging unexpected results. Programming fundamentals are the reasoning patterns used to translate a problem into testable steps, reusable logic, and explainable solutions.

These concepts support later work involving:
- JavaScript variables, data types, and expressions
- Conditionals, Boolean logic, and truth tables
- Loops and iteration
- Functions, parameters, return values, and scope
- Code testing and refactoring
- Git error messages and collaborative debugging
- Full-stack application behavior, where user input moves through logic, services, databases, and interfaces

### Objectives
- Break complex problems into smaller, manageable steps
- Explain their reasoning and show their work transparently
- Translate everyday situations into variables, expressions, conditions, and procedures
- Recognize patterns and abstract repeated solutions
- Evaluate Boolean expressions using AND, OR, and NOT
- Create and interpret truth tables
- Trace loops and identify termination conditions
- Explain how functions accept inputs and produce outputs
- Test solutions using multiple inputs
- Identify logical errors and debugging opportunities
- Read error messages and use them to guide troubleshooting
- Distinguish systematic debugging from random guessing
- Communicate technical discoveries to nontechnical audiences
- Identify knowledge gaps and ask focused questions

### Specific Things to Learn
- Arithmetic and number sense
  - Order of operations
  - Whole numbers, decimals, negative numbers, and absolute value
  - Fractions, percentages, ratios, remainders, and modulo
  - Binary and hexadecimal as number representations
  - Translating word problems into equations
- Algebraic thinking
  - Variables, expressions, formulas, and functions
  - Inputs, transformations, and outputs
  - Naming and tracking changing values
- JavaScript data and syntax
  - `let` and `const`
  - Strings, numbers, and booleans
  - Naming conventions
  - `console.log()`
  - Comments
  - Comparison operators: `===`, `!==`, `>`, `<`, `>=`, and `<=`
  - Logical operators: `&&`, `||`, and `!`
- Control flow and Boolean logic
  - `if`, `else if`, and `else`
  - Truth tables
  - Logical expressions
  - De Morgan’s Laws
  - Contradictory, unreachable, or incomplete conditions
- Loops and iteration
  - `for` loops and `while` loops
  - Counters and updates
  - Exit conditions
  - Infinite loops
  - Tracing repeated behavior
- Functions and decomposition
  - Defining and calling functions
  - Parameters and arguments
  - Return statements
  - Function scope and variable scope
  - Testing functions with different inputs
  - Refactoring repetitive or unclear logic
- Problem-solving and debugging
  - Reading problem specifications
  - Identifying expected versus actual behavior
  - Isolating one part of a problem
  - Testing one change at a time
  - Reading Git and programming error messages
  - Filling knowledge gaps through documentation and focused questions
- Technical communication
  - Explaining a solution step by step
  - Describing a bug without blaming the tool
  - Communicating technical ideas to nontechnical audiences
  - Showing evidence through examples, tests, notes, or screenshots

### Materials
Staff should introduce concepts using plain-language examples before showing JavaScript syntax. Participants should use the MDN and JavaScript.info resources to answer focused questions, compare documentation explanations, and identify missing knowledge during troubleshooting activities. GitHub documentation should be used when participants practice interpreting error messages or describing a version-control problem.
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) — Reference for JavaScript syntax, variables, functions, conditionals, and loops.
- [MDN JavaScript Grammar and Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types) — Reference for variables, values, and data types.
- [MDN Control Flow and Error Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) — Reference for conditionals, loops, and errors.
- [MDN Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) — Reference for parameters, return values, and scope.
- [MDN JavaScript Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators) — Reference for comparison and logical operators.
- [JavaScript.info](https://javascript.info/) — Beginner-friendly explanations and examples.
- [GitHub Docs: Troubleshooting Git](https://docs.github.com/en/get-started/learning-to-code/getting-started-with-git) — Reference for Git concepts and interpreting common workflow problems.
- [Khan Academy: Arithmetic and Pre-Algebra](https://www.khanacademy.org/math/arithmetic) — Practice resource for number sense, fractions, percentages, and expressions.
- [Khan Academy: Statistics and Probability](https://www.khanacademy.org/math/statistics-probability) — Supplemental practice for patterns, data, and reasoning.

### Independent Practice
Below are six activities to complete with a peer. Complete your choice of a single activity each day. At the end of each session, each partner should complete [the evaluation form](https://forms.gle/7bzY2mYdRbgTGyoe9).

**Activity 1: “Mystery Rule Investigation”** \
Each participant receives a set of inputs and outputs from an unknown system.

Example:

| Input | Output
|-----|-----
| 2 | 4
| 4 | 8
| 6 | 12
| 10 | 20

The participant must infer the rule, test it with a new input, explain the reasoning, and identify what additional information would help confirm the pattern.

The partner assesses whether the participant:
- Identifies patterns
- Explains evidence-based reasoning
- Tests a hypothesis
- Recognizes uncertainty or knowledge gaps
- Revises the explanation when new evidence appears

**Activity 2: “Cause-and-Effect Prediction Cards”** \
Partners will be given a scenario with an action and resulting change. In their breakout rooms, discuss your prediction of the final state and explains each change. More complex cards include conditions, repeated actions, and unexpected outcomes.

<details><summary>Class Scenario</summary>
A class begins with 18 students in attendance. Two students arrive late, one student leaves early, and three previously absent students join the next session. How many students are present after these changes?
</details>

<details><summary>Player Scenario</summary>
A player begins with a score of 20 points. They answer two questions correctly and earn 10 points for each correct answer. They then answer one question incorrectly and lose 5 points. What is the player’s final score?
</details>

<details><summary>Store Scenario</summary>
A store begins with 30 notebooks in inventory. On Monday, it sells 8 notebooks. On Tuesday, it receives a delivery of 15 notebooks. On Wednesday, it sells 6 notebooks. How many notebooks remain?
</details>

The partner assesses whether the participant:
- Traces events in the correct order
- Explains cause and effect
- Shows intermediate work
- Identifies where an unexpected result occurred
- Avoids guessing without evidence

**Activity 3: “Repair the Process”** \
Each participant receives a flawed everyday process, such as:

> To submit an assignment: open the document, submit it, check the file name, attach the file, click send, and confirm the correct course.

The participant must reorder the steps, identify missing steps, and explain what could go wrong.

The partner assesses whether the participant:
- Notices sequencing problems
- Identifies missing information
- Anticipates failure points
- Breaks the task into manageable steps
- Explains proposed improvements clearly

**Activity 4: “Knowledge Gap Interview”** \
One partner receives a task they cannot immediately complete, such as designing a rule for a library checkout system. Instead of solving it immediately, they must identify what information is missing and ask targeted questions.

Possible questions:
- How many items may a person borrow?
- What happens if an item is overdue?
- Are reference books treated differently?
- What counts as a valid membership?

The partner assesses whether the participant:
- Recognizes missing information
- Asks specific questions
- Avoids making unsupported assumptions
- Explains why each question matters
- Adjusts the proposed solution after receiving answers

**Activity 5: “Explain It to a Beginner”** \
Each participant receives a technical concept card, such as:
- A loop
- A function
- A variable
- A condition
- A debugging error
- A repeated process

They must explain the concept to their partner without using jargon, then use an analogy or everyday example.

The partner assesses:
- Accuracy
- Clarity
- Audience awareness
- Ability to use an example
- Ability to answer a follow-up question
- Ability to distinguish the concept from related concepts

**Activity 6: “Solution Comparison Conference”** \
Partners receive a problem with multiple possible solutions, such as organizing a queue, checking eligibility, or processing a list of items. Each participant develops a different plain-language approach, then compares the solutions.

They discuss:
- Which solution is clearest
- Which is easiest to change
- Which handles unusual cases
- Which steps repeat
- Which parts could be abstracted or reused

The partner assesses whether the participant:
- Explains tradeoffs
- Compares solutions thoughtfully
- Recognizes patterns
- Identifies edge cases
- Accepts and responds to feedback
- Revises their solution when appropriate

### Guided Practice
Below are six activities to be completed with staff, each day.

**Activity 1: “Design the Missing Rule” (Pattern Recognition and Reasoning)** \
Staff provide a partially completed system with several examples and ask participants to determine the missing rule. After proposing a rule, participants receive a new example that challenges or confirms their interpretation. They must explain what evidence supports their rule and revise it if necessary.

Objectives: pattern recognition, trial and error, articulating reasoning, identifying uncertainty, revising solutions.

**Activity 2: “System State Timeline” (Cause and Effect)** \
Staff describe a system that changes over time, such as a bank balance, game score, inventory count, or attendance list. Participants create a timeline showing each input, change, and resulting state. The group then compares predictions with the intended outcome and identifies where an error could have occurred.

<details><summary>Example 1: Bank Balance</summary>

**Starting balance:** $500

| Event | Change | New Balance
|-----|-----|-----
| Starting balance | — | $500
| Paycheck deposited | +$1,200 | $1,700
| Rent paid | −$900 | $800
| Groceries purchased | −$75 | $725
| Refund received | +$40 | $765

**Discussion:** Participants identify each transaction, show the intermediate balance, and determine where an incorrect result may have occurred.

</details>

<details><summary>Example 2: Game Score</summary>

**Starting score:** 0 points

| Event | Change | New Score
|-----|-----|-----
| Complete level 1 | +100 | 100
| Collect bonus | +50 | 150
| Lose a round | −25 | 125
| Complete level 2 | +200 | 325
| Use a penalty item | −75 | 250

**Discussion:** Participants explain which event caused each change and predict the final score if another level adds 150 points.
</details>

<details><summary>Example 3: Store Inventory</summary>

**Starting inventory:** 40 headphones

| Event | Change | Inventory
|-----|-----|-----
| Starting stock | — | 40
| Morning sale | −12 | 28
| Shipment arrives | +25 | 53
| Afternoon sale | −18 | 35
| Damaged items removed | −3 | 32

**Discussion:** Participants identify when inventory increased or decreased and determine whether the store needs to reorder.
</details>

<details><summary>Example 4: Class Attendance</summary>

**Starting attendance:** 24 students

| Event | Change | Present
|-----|-----|-----
| Session begins | — | 24
| Two late students arrive | +2 | 26
| One student leaves early | −1 | 25
| One student returns | +1 | 26
| Session ends | — | 26

**Discussion:** Participants distinguish between arriving, leaving, and returning, then explain the final attendance count.
</details>

Objectives: sequencing, showing work, cause-and-effect reasoning, tracing behavior, isolating problems.

**Activity 3: “The Broken Workflow” (Process Repair)** \
Staff present a flawed process for completing a real-world task, such as submitting an application or checking out a library book. The process contains missing steps, steps in the wrong order, and unclear instructions. Participants work together to identify the defects, explain the consequences, and produce a corrected version.

Objectives: problem decomposition, reading specifications, identifying logical errors, systematic troubleshooting, clear explanation.

**Activity 4: “Requirements Interview” (Knowledge Gaps and Questions)** \
Staff give participants a vague project request, such as “Create a system that manages appointments.” Before proposing a solution, participants must interview staff by asking questions about users, inputs, rules, exceptions, and desired outcomes. Staff then reveal additional requirements and ask participants to update their proposed approach.

Objectives: identifying knowledge gaps, asking focused questions, interpreting specifications, adapting to new information, communicating with nontechnical stakeholders.

**Activity 5: “Expected Versus Actual” (Logic and Debugging)** \
Staff provide several scenarios with an intended result and an actual result that does not match. Participants must compare the two, identify the likely source of the problem, and propose a test that would isolate it. They should explain why their test is useful rather than simply guessing a fix.

Objectives: debugging mindset, systematic testing, reading error information, isolating problems, explaining technical discoveries.

**Activity 6: “Build a Service Counter” (Functions and Abstraction)** \
Staff present a large task, such as processing a customer order or preparing a student report. Participants identify repeated operations and organize them into named reusable procedures. For each procedure, they identify the inputs, expected output, and at least two test cases.

Objectives: decomposition, abstraction, recognizing patterns, functions and parameters, testing, refactoring, explaining design decisions.
