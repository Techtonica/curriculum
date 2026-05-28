# Job Seeker AI Session Week 5: AI for Productivity & Workflow Automation

## Prerequisites
- Completion of 1000+ hours of PERN full-stack development experience
- Completion of [Job Seeker AI Session Week 4: AI in Collaborative Development](../job-seeker-ai-session4.md)
- Familiarity with personal development workflows (daily tasks, repetitive processes, project management tools)
- Understanding of task automation basics (scripts, scheduled tasks, or similar concepts)
- A free account with at least one AI tool (ChatGPT, Claude, or similar)
- Optional: familiarity with GitHub CLI, npm/pip scripts, or similar automation tools

## Table of Contents
- [Motivation](#motivation)
- [Objectives](#objectives)
- [Specific Things To Learn](#specific-things-to-learn)
- [Independent Practice](#independent-practice)
- [Guided Practice](#guided-practice)
- [Supplemental Materials](#supplemental-materials)
- [Showing Up for Yourself During Session](#showing-up-for-yourself-during-session)

## Projected Timeline
- **Independent Practice:** 30 minutes
- **Guided Practice:** 45 minutes
- **Total Session Time:** 75 minutes

## Motivation
You spend roughly **40-50% of your development time** on repetitive tasks:
- Writing boilerplate code (routing, component structures, API endpoints)
- Formatting and refactoring code for consistency
- Writing test fixtures and mock data
- Searching documentation and examples
- Managing project organization (creating folders, initializing files)
- Responding to common questions in Slack or email

These tasks aren't intellectually challenging—but they consume energy and time that could go toward deeper work. This is where **workflow automation with AI** becomes powerful.

Here's the opportunity: AI can eliminate friction in your daily workflow. Instead of spending 15 minutes writing boilerplate, you spend 2 minutes prompting AI and adapting the result. Over time, this compounds into **hours saved per week**—hours you can spend on harder problems, learning, or simply having less stress.

**But here's the catch:** Optimizing too aggressively can be dangerous. If you automate away all the routine work without ensuring you understand what's happening, you risk:

- Becoming dependent on tools for basic skills
- Losing the context that prevents bugs
- Missing learning opportunities

You'll learn to:

1. **Identify automation opportunities** in your workflow without automating away learning
2. **Build small automation** that actually saves time
3. **Evaluate the tradeoff** between speed and understanding
4. **Document and maintain** automation over time
5. **Communicate your efficiency** in interviews and on teams

Strong productivity isn't flashy, but it's noticed. Engineers who ship more, learn faster, and stay unblocked are invaluable to teams.

## Objectives
By the end of this session, you will be able to:
1. **Audit your current workflow** to identify repetitive tasks suitable for AI-assisted automation.
2. **Build simple AI-powered workflow improvements** (scripts, prompts, templates) that save measurable time.
3. **Evaluate tradeoffs** between automation, speed, and learning for each task.
4. **Implement sustainable automation** that you'll actually maintain and refine.
5. **Measure productivity gains** to understand what automation is worth the effort.
6. **Articulate your approach to productivity** in interviews and team settings.

## Specific Things To Learn

### Workflow Analysis & Optimization
- **Identifying repetitive tasks:** Which tasks consume time and energy but require minimal thinking?
- **Time tracking and measurement:** How to quantify before/after productivity gains
- **Distinguishing automation from learning:** When to automate vs. when to do manually for skill development
- **Diminishing returns:** Understanding that not all automation is worth the effort to build
- **Context switching costs:** How automation reduces cognitive load and improves focus

### AI-Powered Productivity Tools
- **Prompt templates:** Standardized prompts you can reuse for common tasks
- **Simple scripts:** Using AI to generate shell scripts, npm scripts, or Python scripts for common workflows
- **Code generation templates:** Using AI to generate boilerplate quickly and consistently
- **Documentation and reference creation:** Using AI to build internal docs and quick references
- **GitHub CLI and automation:** Using AI to generate commands for common Git workflows
- **IDE automation:** Using AI tools integrated with your editor (GitHub Copilot, Cursor, etc.)

### Balancing Speed & Learning
- **When automation is healthy:** Routine tasks, known patterns, low-risk operations
- **When automation is problematic:** Critical thinking required, core skill development, security-sensitive operations
- **Incremental automation:** Starting with simple automation and building as you learn
- **Fallback and manual override:** Always maintaining the ability to do tasks manually if automation fails

### Sustainable Automation
- **Documenting your automation:** Explaining what each automation does and why
- **Testing automation:** Ensuring your automated workflows produce correct results
- **Refining over time:** Iterating on automation as your workflow changes
- **Sharing automation:** Contributing useful automations to your team or community
- **Maintenance burden:** Recognizing when automation becomes more expensive than the task itself

## Independent Practice

**Time Allocation:** 30 minutes

### Overview
You will work through **two focused activities**: auditing your current workflow to identify automation opportunities, and building one practical AI-powered productivity improvement. You'll measure the impact and reflect on sustainability.

### How to Show Up for Yourself, Prepared to Do the Work!
- **Complete both activities** below before the session.
- **Use a free AI tool** (ChatGPT, Claude, or similar) for Activity 2.
- **Document your work in a shared format** (Google Doc, Markdown file, Notion, or screenshots) so you can screen-share during guided practice.
- **Be ready to explain:**
  - One repetitive task you identified and how you'd automate it
  - The specific productivity gain you achieved or would achieve
  - One concern you have about automating too much and losing learning

### Activity 1: Workflow Audit & Automation Opportunity Identification (12 minutes)

**Objective:** Analyze your actual development workflow to find tasks that consume time without requiring deep thinking.

**Task:**
You'll track and categorize your development tasks, then identify automation opportunities.

**Step 1: List Your Repetitive Tasks (4 minutes)**
Think about your typical development day. What tasks do you repeat regularly? List 5-8 tasks:

Examples:
- Setting up a new React component (imports, component structure, exports)
- Writing API endpoint scaffolding (route, controller stub, error handling)
- Initializing a new feature branch and creating a pull request
- Writing unit test scaffolds
- Formatting code or running linters
- Searching documentation for common patterns
- Creating project folders and file structures
- Responding to similar questions in Slack/Discord
- Generating mock data for testing

**Deliverable:** Create a list in your document:

```plaintext
Repetitive Tasks in My Workflow:
1. Set up a new React component (includes imports, hooks setup, export)
2. Initialize a Git branch and create PR on GitHub
3. Write test scaffolds for new functions
4. Format and lint code before commit
5. Search MDN or Stack Overflow for common patterns
6. [etc]
```

**Step 2: Estimate Time Per Task (3 minutes)**
For each task, estimate how long it takes and how often you do it. Fill in a simple table:


Task | Time Per Instance | Frequency | Weekly Time Spent |
-----|------------------|-----------|-------------------|
React component setup | 5 minutes | 3x/week | ~15 minutes
Git branch + PR creation | 2 minutes | 1x/day | ~10 minutes
Test scaffolds | 8 minutes | 2x/week | ~16 minutes
Code formatting | 3 minutes | 3x/day | ~15 minutes
Pattern searching | 10 minutes | 4x/week | ~40 minutes
[etc]

**Deliverable:** Create this table in your document. Calculate weekly time spent per task. Note which tasks consume the most time overall.

**Step 3: Categorize Tasks (3 minutes)**
For each task, consider: **Is this a good candidate for automation?**

Use this framework:

```plaintext
Task: React Component Setup
Repetitiveness: High (3x/week, same structure every time)
Learning Value: Low (structure is standard, not developing new skills)
Risk Level: Low (if automation fails, I can do it manually)
Automation Suitability: ✓ GOOD CANDIDATE

---

Task: Pattern Searching
Repetitiveness: Medium (4x/week, but patterns vary)
Learning Value: Medium (sometimes I learn new approaches)
Risk Level: Low (reading docs, no risk of wrong output)
Automation Suitability: ? PARTIAL (Could automate common searches, but some require exploration)

---

Task: Debugging Complex Issues
Repetitiveness: Low (each bug is unique)
Learning Value: High (debugging teaches me about the system)
Risk Level: Medium (automation could miss subtle issues)
Automation Suitability: ✗ POOR CANDIDATE
```

**Deliverable:** Categorize each task as ✓ GOOD, ? PARTIAL, or ✗ POOR. Briefly explain your reasoning for 2-3 tasks.

**Step 4: Identify Your Top Automation Opportunity (2 minutes)**
Look at your "GOOD CANDIDATE" tasks. Which one would have the **biggest impact** if automated?

Consider:
- How much time would it save weekly?
- How easy would it be to automate?
- How confident are you in maintaining it?

**Deliverable:** Choose your top opportunity and write a 2-3 sentence summary:

```plaintext
My Top Automation Opportunity: React Component Setup

Why: I spend ~15 minutes/week on this. It's repetitive with a standard structure.
Impact: Saving 5 minutes per component × 3 components/week = 15 minutes saved weekly.
That's ~1 hour per month, or ~12 hours per year—worth the effort to automate.
```

### Activity 2: Build One Automation & Measure Impact (18 minutes)

**Objective:** Create a practical productivity tool using AI and measure its real-world impact.

**Task:**
You'll identify one specific workflow task, use AI to create automation, and test it to confirm it saves time.

**Choose your automation type:**

**Option A — Prompt Template for Code Generation:**
Build a reusable prompt template that you'll use repeatedly for a common task.

**Example:** Generating a React component with TypeScript

**Step 1: Define the Automation Need (2 minutes)**
Write a clear description of what you want to automate:

```plaintext
Task: Generate a new React component with TypeScript
Current process: I manually write component scaffolding, prop types, and exports
Desired: A prompt I can use repeatedly to generate this structure
```

**Step 2: Craft Your Reusable Prompt Template (4 minutes)**
Using your AI tool, create a prompt template you'll use repeatedly. Refine it until the output is something you'd actually use (not perfect, but useful):

```plaintext
Template Prompt:
"Generate a React component named [COMPONENT_NAME] with the following props:
[PROP_1: type], [PROP_2: type]

Include:
- TypeScript prop typing (interface)
- Component function with JSDoc comment
- Proper imports (React, any necessary libraries)
- Standard export

Output as a code snippet ready to paste."
```

**Test it:** Run the prompt through your AI tool with a specific example (e.g., "Button" component with onClick and label props).

**Deliverable:** Paste your prompt template and the AI output into your document. Note: "This output is [usable/needs refinement]. I would [use as-is / adjust by...]"

**Step 3: Measure Time Saved (5 minutes)**
Create a before/after comparison:

```plaintext
Before Automation (Manual):
- Open editor, type component structure: ~1 minute
- Add prop types: ~2 minutes
- Add imports and exports: ~1 minute
- Total: ~4 minutes per component

After Automation (Using Prompt Template):
- Write component name and props in prompt: ~30 seconds
- Run prompt: ~10 seconds
- Paste and adjust (if needed): ~30 seconds
- Total: ~1.5 minutes per component

Time Saved Per Component: ~2.5 minutes
Usage: 3 components/week → ~7.5 minutes/week saved
Annual Impact: ~6.5 hours saved/year
```

**Deliverable:** Create a before/after table showing your estimated time savings.

**Step 4: Test the Automation Realistically (4 minutes)**
Use your new automation on **one real task** (or simulate it):
- Open your prompt template
- Run it for a specific case
- Use the output in actual code (or note what you'd adjust)
- Time yourself (or estimate based on experience)

**Deliverable:** Add notes to your document:

```plaintext
Test Run Results:
- Template prompt: [X] minutes
- Output quality: [Excellent/Good/Needs Work]
- Adjustments needed: [List any edits you had to make]
- Would I use this again? [Yes/No/Maybe - why?]
- Actual time saved: [X] minutes (vs. estimated)
```

**Option B — Simple Script or Automation:**
Build a practical script or automated workflow that reduces friction in your development process.

**Example:** GitHub CLI script to create a new branch and initialize a PR

**Step 1: Define the Automation Need (2 minutes)**
Write a clear description:

```plaintext
Task: Create a new Git branch and open a GitHub PR
Current process: 
  git checkout -b feature/[name]
  ... make commits ...
  git push origin feature/[name]
  ... open GitHub manually ...
Current friction: Takes ~2 minutes of manual steps
```

**Step 2: Use AI to Generate the Script (4 minutes)**
Prompt your AI tool to generate a script that automates this:

```plaintext
"I want a bash script that:
1. Asks for a branch name
2. Creates and checks out a new branch with the name
3. After I'm done (I'll tell it when), commits my changes
4. Pushes to origin
5. Opens the GitHub PR creation page

I'm using GitHub CLI (gh). Write a script I can save as a shell script."
```

**Review the AI output.** Does it:
- Use correct syntax?
- Handle errors gracefully?
- Do what you actually need?

Ask AI to refine if needed.

**Deliverable:** Paste the AI-generated script into your document. Note: "This script [is usable / needs refinement]. I would [use as-is / adjust by...]"

**Step 3: Test and Measure Impact (5 minutes)**
Test your script in a safe way (or simulate it):
- Review the script logic
- Trace through it mentally or run it on a test repository
- Time yourself running through the steps

```plaintext
Before Automation (Manual):
- git checkout -b: ~10 seconds
- Make commits: (variable, not automated)
- git push: ~15 seconds
- Open GitHub PR page: ~30 seconds
- Fill in PR details: ~1 minute
- Total (excluding coding time): ~2 minutes

After Automation (Using Script):
- Run script and answer prompts: ~30 seconds
- Make commits: (same, not automated)
- Script handles push and opens PR: ~20 seconds
- Total: ~50 seconds

Time Saved Per PR: ~1 minute 10 seconds
Usage: 2-3 PRs/week → ~2-3 minutes/week saved
```

**Deliverable:** Create a before/after measurement showing time savings.

**Step 4: Document the Automation (4 minutes)**
Write a brief README for your script:

```plaintext
Script: auto-pr.sh

What it does:
- Creates a new branch with a given name
- After you're done coding, commits and pushes
- Opens GitHub PR creation page

How to use:
1. Save this script as ~/bin/auto-pr.sh
2. Run: chmod +x ~/bin/auto-pr.sh
3. Run: auto-pr.sh
4. Follow prompts

Maintenance:
- Test after GitHub CLI updates
- Adjust error handling if needed
```

**Deliverable:** Add your documentation to your document.

### Activity 2 Showcase Format (Continued)

**What to prepare for Zoom (Activities 1 & 2 Combined):**
1. **Your completed document** with both activities
2. **Plan to screen-share for 6-7 minutes** and narrate:
  - **Activity 1:** Show your workflow audit table, your top automation opportunity, and explain why you chose it
  - **Activity 2:** Show your automation (template or script), the before/after time measurement, and explain how you'd maintain it
3. **Be ready to answer:** "What's one task you *wouldn't* automate, and why?"

## Guided Practice

**Time Allocation:** 45 minutes
Program staff will facilitate interactive discussion and live demonstrations. Come ready to participate and share your productivity insights.

### Part 1: Workflow Optimization Principles & Tradeoffs (13 minutes)

**Presentation:**
Program staff will present a **framework for sustainable productivity automation**:

**The Automation Decision Tree:**
1. **Is this task repetitive?**
  - If no: Don't automate (one-off tasks waste automation effort)
  - If yes: Continue
2. **Does this task require learning or creative thinking?**
  - If yes: Consider manual work to build skills
  - If no: Good candidate for automation
3. **What's the cost-benefit?**
  - Effort to automate: [X hours]
  - Time saved per year: [Y hours]
  - Is Y > X? (If yes, automate; if no, reconsider)
4. **What's the maintenance burden?**
  - Will this automation stay relevant? (Does it depend on external changes?)
  - How often will I need to update it?
  - Is the maintenance cost acceptable?

**Participant Activity (10 minutes):**
Program staff will present **3-4 real workflow tasks** (varying in suitability for automation). You'll work in **small groups (3-4 people)** for 8 minutes to:
1. Apply the decision tree to each task
2. Decide: ✓ Automate / ? Maybe / ✗ Don't Automate
3. Explain your reasoning
4. Discuss: What would change your decision?

**Example tasks provided:**
- "Generate mock API responses for testing"
- "Set up a new project folder structure"
- "Debug a production issue"
- "Write a complex algorithm from scratch"

**Groups present findings** (program staff pick 1-2 groups to share).

**Wrap-Up (3 min):**
Synthesize themes. Clarify: **Automation isn't about doing everything; it's about choosing wisely.** Address misconceptions about productivity being purely about speed.

**How to Show Up for Yourself, Prepared to Do the Work!:**
- Come with Activity 1 in mind—you've already analyzed your workflow
- Participate actively in group discussion; don't just listen
- Think critically about each task: "Would I automate this?"
- Ask clarifying questions if the decision tree isn't clear

### Part 2: Live Automation Demo & Hands-On Building (16 minutes)

**Live Demonstration (7 minutes):**
Program staff will **live-build one automation** in front of the group, narrating their process:

**The Automation:** Generate a production-ready API endpoint stub

**What program staff will narrate:**
1. Define the task: "I write the same endpoint structure repeatedly"
2. Craft a prompt iteratively, showing the AI outputs
3. Refine the prompt until the output is useful
4. Document the prompt template for reuse
5. Measure: "This saves me ~3 minutes per endpoint × 5 endpoints/week = 15 min/week"

**Key points program staff will emphasize:**
- Prompts often need iteration (first try might not be perfect)
- Document your prompt so you can reuse it consistently
- Test the automation before committing to it
- Measure realistically—time includes context switching and adjustments

**Participant Hands-On Activity (9 minutes):**
You'll build **a small automation together with program staff guidance**. Steps:
1. **Choose a task** (program staff provide 2-3 options or use one from your Activity 2)
2. **Draft a prompt** using your AI tool (5 minutes)
3. **Test the output** (1 minute)
4. **Paste your prompt** in a shared document (program staff review 3-4 live)
5. **Program staff give feedback:** "This prompt could be improved by [suggestion]"

**How to Show Up for Yourself, Prepared to Do the Work!:**
- Work quickly—aim to have a working automation in 5 minutes
- Don't aim for perfection; good enough is good enough
- Engage with program staff feedback; ask clarifying questions
- Note one refinement you'd make based on feedback

### Part 3: Sustainability & Scaling Automation (16 minutes)

**Small Group Activity:**
You'll pair with **one peer** to review each other's independent practice work and discuss long-term automation strategies.

**Exchange:** Share your Activity 1 and Activity 2 documents.

**For Activity 1 (Workflow Audit) — 8 minutes per person:**
Peer review focuses on:
1. "Your workflow audit was thorough because [specific observation]. I noticed you identified [number] repetitive tasks."
2. "Your top automation opportunity ([task name]) makes sense because [reason]."
3. "I think another good candidate for your automation would be [idea] because..."
4. Question: "If you automated everything you identified, what skills might you lose?"

**For Activity 2 (Automation Building) — 8 minutes per person:**
Peer review focuses on:
1. "Your automation would save [X] minutes/week, which is significant because [reason]."
2. "The automation looks [easy/complex] to maintain because [reason]."
3. "One concern I'd have is [potential issue]. How would you handle that?"
4. Reflection question: "Would you actually use this automation in a month? What would make it stick or fade?"

**How to Show Up for Yourself, Prepared to Do the Work!:**
- Come with your completed independent practice document
- Listen actively to your peer's workflow and automation approach
- Offer specific, constructive feedback using the structure above
- Ask honest questions: "Would this actually work in practice?"
- Share one automation idea you hadn't considered before

## Supplemental Materials

### Automation & Workflow Tools

| Tool | Purpose | Free Tier | Best For |
|-----|-----|-----|-----|
| **GitHub CLI (gh)** | GitHub automation | Free, open-source | Automating Git, PR, and GitHub workflows
| **npm scripts** | JavaScript automation | Built-in (npm) | Running repetitive tasks in Node projects
| **Python scripts** | Python automation | Built-in (Python) | Writing custom automation in Python
| **Bash/Shell scripts** | System automation | Built-in (Unix/Linux/Mac) | General system-level automation
| **Make** | Task runner | Free, open-source | Organizing and running build tasks
| **Cursor IDE** | AI-powered editor | Free tier available | IDE-integrated automation and code generation

### Prompt Engineering for Productivity

| Resource | Type | Why It Matters | 
|-----|-----|-----|
| **[Prompt Templates for Developers](https://github.com/f/awesome-chatgpt-prompts) (search "developer")** | Guide | Reusable prompt patterns for common coding tasks | 
| **[OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)** | Reference | Best practices for crafting effective prompts | 

### Script & Automation Examples

| Resource | Type | Why It Matters | 
|-----|-----|-----|
| **[GitHub CLI Documentation](https://cli.github.com/manual/)** | Official Docs | Learn to automate GitHub workflows with gh | 
| **[Bash Scripting Guide](https://www.gnu.org/software/bash/manual/bash.html)** | Tutorial | Write shell scripts for automation | 
| **[npm Scripts Guide](https://docs.npmjs.com/cli/v8/using-npm/scripts)** | Official Docs | Use npm scripts for project automation | 
| **[Python Script Examples](https://realpython.com/run-python-scripts/)** | Tutorial | Common Python automation patterns |
| **[Make Tutorial](https://www.gnu.org/software/make/manual/)** | Guide | Organize tasks with Makefiles | 

### Workflow Analysis & Time Tracking

| Resource | Type | Why It Matters | 
|-----|-----|-----|
| **[Time Blocking Technique](https://en.wikipedia.org/wiki/Time_blocking)** | Productivity Method | Organize your day to minimize context switching | 
| **[Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique)** | Method | Break work into focused intervals; track time | 

### Balancing Automation & Learning

| Resource | Type | Why It Matters | 
|-----|-----|-----|
| **Automation vs. Learning** | Article | When to automate vs. when to learn manually | Search "automation stints learning" on dev blogs
| **[Deliberate Practice for Developers](https://en.wikipedia.org/wiki/Deliberate_practice)** | Guide | Maintaining learning while automating routine work | 
| **[Technical Debt & Automation](https://martinfowler.com/bliki/TechnicalDebt.html)** | Blog Post | When automation creates more problems than it solves | 

### Sustainable Automation & Maintenance

| Resource | Type | Why It Matters | 
|-----|-----|-----|
| **[Writing Maintainable Scripts](https://www.shellcheck.net/) (linting tool + guide)** | Guide | Best practices for automation you'll maintain | 
| **[Documentation for Automation](https://www.markdownguide.org/) (Markdown documentation)** | Best Practices | How to document your automation so you (and others) can use it |
| **[Version Control for Scripts](https://git-scm.com/)** | Guide | Tracking automation in Git for history and sharing | 
| **Error Handling in Automation: [Bash](https://www.gnu.org/software/bash/manual/bash.html#Pipelines) or [Python](https://docs.python.org/3/tutorial/errors.html)** | Tutorial | Making your automation robust and resilient | 

### Real-World Automation Examples

| Resource | Type | Why It Matters | 
|-----|-----|-----|
| **[GitHub CLI Use Cases](https://cli.github.com/manual/gh_repo_create)** | Examples | Real examples of automating with gh |
| **[Awesome Automation Scripts](https://github.com/alebcay/awesome-shell)** | Curated List | Community-shared automation for developers |
| **[Developer Productivity Tools](https://www.producthunt.com)** | Resource List | Popular tools for automation and workflow (search "developer productivity") |
| **Engineering Blog Automation Posts** | Case Study | How real teams automate workflows | Search "engineering automation" on Stripe, Vercel, or GitHub blogs

### Interview Prep: Talking About Productivity & Efficiency

| Resource | Type | Why It Matters | 
|-----|-----|-----|
| **"How Do You Stay Productive?"** | Interview Question | Common question; frame your AI usage naturally | Blind.com, interview prep blogs
| **[Behavioral Questions About Learning](https://www.indeed.com/career-advice/interviewing/behavioral-interview-questions)** | Reference | How to show you balance automation with growth | 

### Optional: Going Deeper

| Resource | Type | For Those Interested |
|-----|-----|-----|
| **[CI/CD Pipeline Automation](https://docs.github.com/en/actions)** | Advanced | Automating testing and deployment workflows | 
| **[Infrastructure as Code](https://www.terraform.io/) (example tool)** | Advanced | Automating infrastructure with code | 
| **[Custom GitHub Actions](https://docs.github.com/en/actions/creating-actions)** | Advanced | Building reusable automation for teams | 

## Showing Up for Yourself During Session

**Before the Session:**
- Complete both Activity 1 and Activity 2. Activity 1 (workflow audit) is essential; Activity 2 (building automation) is highly valuable.
- Have your AI tool open and ready for the hands-on building portion.
- If you've built automation before, bring notes on what worked and what didn't—you'll have great insights for peers.
- Think about: *What task do I do so often that I don't even think about it? Could that be automated?*

**During the Session:**
- In Part 1 (Optimization Principles), think through tasks you do regularly using the decision tree. Don't just listen—actively categorize.
- In Part 2 (Live Demo & Hands-On), work quickly and don't aim for perfection. The goal is to practice the *process* of building automation, not a flawless result.
- In Part 3 (Peer Review), be honest with your peer: "Would I actually use this?" Honesty helps them refine their thinking.
- Take notes on one automation idea you hadn't considered before, from either program staff or peers.

**After the Session:**
- Test your Activity 2 automation in a real workflow over the next week. Does it actually save time, or does it add friction?
- Refine your automation based on reality. First-draft automation is rarely perfect.
- Consider sharing your automation with your team or a learning group—feedback will help you improve it.
- Weeks 5 and 6 are the final stretch. Week 6 focuses on **career strategy** and using AI for long-term growth. Bring your productivity insights forward!

**Key Takeaway:**
Productivity isn't about working faster; it's about eliminating friction so you can focus on what matters. Use AI to automate the routine, then invest your energy in learning, problem-solving, and connecting with your team.
