# Job Seeker AI Session Week 2: AI for Debugging & Documentation

## Prerequisites
- Completion of 1000+ hours of PERN full stack development experience
- Completion of [Job Seeker AI Session Week 1 (Ethical AI + Prompting Foundations)](../job-seeker-ai-session1.md), you should understand ethical frameworks and basic prompt refinement techniques
- Familiarity with debugging workflows (reading error messages, using browser/server dev tools, tracing execution)
- Comfort reading code in JavaScript or Python (examples provided in both languages)
- A free account with at least one AI tool (ChatGPT, Claude, or similar)

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
Debugging is one of the most time-consuming parts of development. Developers spend an average of **40-50% of their coding time debugging**, and much of that involves:
- Reproducing the error
- Isolating the root cause
- Searching for solutions online
- Testing fixes

**AI can dramatically accelerate this process**—but only if you know how to use it effectively. Similarly, documentation is often **deferred or minimal** because it feels tedious to write. AI can generate solid first drafts, freeing you to focus on accuracy and clarity.

This session, you'll learn to:
1. **Prompt AI for debugging help** without blindly trusting suggestions
2. **Generate high-quality documentation** that reflects your actual code behavior
3. **Verify and refine outputs** before they reach production or team members
4. **Communicate your debugging process** in interviews (showing how you problem-solve)

Teams value engineers who debug efficiently and document clearly. Mastering AI-assisted debugging and documentation makes you more productive *and* more hireable.

## Objectives
By the end of this session, you will be able to:
1. **Use AI as a debugging partner** by providing effective context (error messages, code snippets, attempted solutions) and iteratively refining prompts to isolate root causes.
2. **Generate documentation with AI** (API docs, function descriptions, README sections) and edit for accuracy, tone, and completeness.
3. **Evaluate AI-generated debug suggestions** critically, distinguishing between reliable insights and plausible-sounding but incorrect solutions.
4. **Create reproducible debugging scenarios** that you can share with AI tools to get actionable help.
5. **Articulate your debugging process** to interviewers and teammates, showing how AI fits into your problem-solving workflow.

## Specific Things to Learn

### Debugging with AI
- **Providing effective debugging context:** Error messages, stack traces, relevant code sections, what you've already tried
- **Iterative debugging:** Following up on AI suggestions, testing them, reporting results, and refining next steps
- **Red flags in AI debugging suggestions:** Hallucinated functions, outdated syntax, solutions that don't match your stack
- **When to trust AI vs. when to verify:** Understanding AI's limitations in complex, context-specific bugs
- **Rubber duck debugging enhanced:** Using AI as a sounding board to explain your code and spot logic errors
- **Documentation through debugging:** How to capture your debugging journey for future reference and team knowledge

### Documentation Generation with AI
- **Prompt structure for docs:** Specifying audience, format, depth, and technical level
- **Generating API documentation:** Using AI to create function signatures, parameter descriptions, return values, examples
- **README and onboarding docs:** AI assistance for project setup, configuration, troubleshooting sections
- **Code comments and docstrings:** Using AI to explain complex logic while maintaining code clarity
- **Editing AI-generated documentation:** Checking for accuracy, outdated assumptions, missing edge cases
- **Documentation as reference for debugging:** Good docs help you and your team debug faster

### Practical Integration
- Recording debugging sessions (screenshots, stack traces) to share with AI and team members
- Comparing your manual debugging notes to AI suggestions
- Combining AI documentation with examples and edge cases
- Balancing AI-generated content with your own expertise and voice

## Independent Practice
**Time Allocation:** 30 minutes

### Overview
You will work through **two focused activities**: debugging a real code problem with AI assistance, and generating documentation for a code sample. You'll document your process, evaluate outputs, and note what worked and what didn't.

### How to Show Up for Yourself, Prepared to Do the Work!
- **Complete both activities** below before the session.
- **Use a free AI tool** (ChatGPT, Claude, or similar).
- **Document your work in a shared format** (Google Doc, Markdown file, Notion, or screenshots) so you can screen-share during guided practice.
- **Be ready to explain:**
  - One moment where the AI's debugging suggestion surprised you or helped you see the problem differently
  - One thing the AI-generated documentation got wrong that you had to fix
  - How you'd use this process on your current job search projects

### Activity 1: AI-Assisted Debugging (18 minutes)
**Objective:** Experience using AI as a debugging partner while maintaining critical evaluation.

**Task:**
You'll receive a **buggy code sample** (below). Your job is to:
1. Paste the code into your AI tool with a debugging prompt
2. Evaluate the AI's suggestions
3. Refine your prompts iteratively if needed
4. Document your debugging journey

**Choose your language:**

<details><summary>Option A — JavaScript:</summary>

```javascript
// User service for managing user accounts
function getUserById(userId) {
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ];
  
  for (let i = 0; i <= users.length; i++) {
    if (users[i].id === userId) {
      return users[i];
    }
  }
  
  return null;
}

// Test cases
console.log(getUserById(1));  // Should return Alice
console.log(getUserById(2));  // Should return Bob
console.log(getUserById(4));  // Should return null
```
</details>

<details><summary>Option B — Python:</summary>

```python
# User service for managing user accounts
def get_user_by_id(user_id):
    users = [
        {"id": 1, "name": "Alice", "email": "alice@example.com"},
        {"id": 2, "name": "Bob", "email": "bob@example.com"},
        {"id": 3, "name": "Charlie", "email": "charlie@example.com"},
    ]
    
    for i in range(len(users) + 1):  # BUG: should be range(len(users))
        if users[i]["id"] == user_id:
            return users[i]
    
    return None

# Test cases
print(get_user_by_id(1))  # Should return Alice
print(get_user_by_id(2))  # Should return Bob
print(get_user_by_id(4))  # Should return None
```
</details>

**Step 1: Initial AI Prompt (3 minutes)**
Copy your chosen code snippet and paste it into your AI tool with this prompt:

```plaintext
"I have a bug in this [JavaScript/Python] code. When I run the test cases, something goes wrong. Can you help me identify what's broken and why?"
```

**Deliverable:** Copy the AI's response (first 3-4 sentences) into your document.

**Step 2: Evaluate the AI's Response (3 minutes)**
Ask yourself:
- Did the AI identify the bug?
- Is its explanation clear?
- Does it explain *why* this is a bug?
- Does it suggest a fix?

**Deliverable:** Add a note: "AI identified: [yes/no] | Explanation clarity: [clear/unclear] | Root cause explained: [yes/no]"

**Step 3: If the AI Missed the Bug, Refine Your Prompt (5 minutes)**
If the AI didn't catch it, try a more specific prompt:

```plaintext
"I think the problem is related to array iteration. My test case for getUserById(4) is causing an error. Can you look at my loop and tell me what's wrong?"
```

Or ask the AI to run the code mentally:

```plaintext
"Trace through this code step-by-step for getUserById(1). What happens in each iteration of the loop?"
```

**Deliverable:** Paste your follow-up prompt and the AI's response.

**Step 4: Verify the Fix (3 minutes)**

Once the AI has identified the bug, ask:

```plaintext
"Can you write the corrected version of this function?"
```

Copy the corrected code. Mentally verify it matches the expected behavior.

**Deliverable:** Paste the corrected code and add a 1-sentence note: "This fix addresses the bug by..."

**Step 5: Document Your Takeaway (2 minutes)**
Write a 2-3 sentence reflection:
- What was the hardest part of getting the AI to identify the bug?
- What kind of prompting worked best?
- Would you trust this AI-suggested fix in production without further testing? Why or why not?

**Deliverable:** Add your reflection to your document.

### Activity 2: AI-Generated Documentation (12 minutes)
**Objective:** Generate documentation with AI and practice evaluating accuracy.

**Task:**
You'll generate API documentation for a function, then critique and improve it.

**Choose your language and function:**

<details><summary>Option A — JavaScript (Express Route):</summary>

```javascript
async function updateUserEmail(req, res) {
  const { userId } = req.params;
  const { newEmail } = req.body;
  
  if (!newEmail.includes("@")) {
    return res.status(400).json({ error: "Invalid email format" });
  }
  
  const user = await User.findByIdAndUpdate(
    userId,
    { email: newEmail },
    { new: true }
  );
  
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  
  return res.json({ message: "Email updated successfully", user });
}
```
</details>

<details><summary>Option B — Python (FastAPI Route):</summary>

```python
async def update_user_email(user_id: int, new_email: str):
    """Update a user's email address."""
    if "@" not in new_email:
        raise ValueError("Invalid email format")
    
    user = await User.find_by_id(user_id)
    if not user:
        raise ValueError("User not found")
    
    user.email = new_email
    await user.save()
    return {"message": "Email updated successfully", "user": user}
```
</details>

**Step 1: Generate Initial Documentation (4 minutes)**

Prompt your AI tool:

```plaintext
"Generate API documentation for this [JavaScript/Python] function. Include:
- Description
- Parameters (with types)
- Return values
- Possible errors
- Example usage

Use Markdown format."
```

**Deliverable:** Copy the full documentation output into your document.

**Step 2: Evaluate for Accuracy (4 minutes)**
Read through the AI-generated docs and check:
1. **Parameters:** Are all parameters listed? Are types correct?
2. **Return values:** Does it accurately describe what the function returns?
3. **Error cases:** Did it catch all the errors the function could return?
4. **Accuracy:** Are there any inaccuracies or assumptions the AI made?

**Deliverable:** Create a checklist in your document:

```plaintext
☐ All parameters listed correctly
☐ Return values accurate
☐ Error cases mentioned
☐ Example is correct and helpful
☐ Any inaccuracies? [List them]
```

**Step 3: Refine the Documentation (3 minutes)**
If the AI missed anything or got something wrong, prompt it to improve:

```plaintext
"The documentation looks good, but I want to add:
- A note about email validation (it only checks for '@')
- A mention that this requires authentication
- An example of an error response

Can you revise?"
```

**Deliverable:** Paste the revised documentation.

**Step 4: Compare & Reflect (1 minute)**
Add a final note: "The AI-generated docs were [80%/60%/40%] accurate. I had to fix [list 1-2 things]. Next time, I would..."

### Independent Practice Showcase Format

**What to prepare for Zoom:**
1. **Your completed document** with both Activity 1 and Activity 2
2. **Plan to screen-share for 4-5 minutes** and narrate:
  - **Activity 1:** Show the buggy code, your first prompt, the AI's response, and the moment you realized if the AI caught the bug or missed it
  - **Activity 2:** Show one piece of AI-generated documentation, point out one thing it got right and one thing it got wrong

3. **Be ready to answer:** "How confident would you be using AI-generated docs or fixes in your actual project?"

## Guided Practice

**Time Allocation:** 45 minutes
Program staff will facilitate interactive discussion and live demonstrations. Come ready to participate and learn from peers' experiences.

### Part 1: Debugging Strategy Debrief (12 minutes)

**Discussion:**
Program staff will present a **structured debugging process** that incorporates AI:
1. **Isolate the problem:** Narrow down to the smallest reproducible case
2. **Gather context:** Error messages, stack traces, what you've tried, expected vs. actual behavior
3. **Frame your question:** Write a specific prompt that includes all context
4. **Evaluate the response:** Does it match your understanding? Test it mentally or in code
5. **Iterate:** If the suggestion doesn't work, explain what happened and ask for a refined approach
6. **Verify:** Always test fixes before shipping

**Participant Activity (8 minutes):**
Program staff will share **2-3 debugging scenarios** (different from Activity 1). You'll work in **pairs** to:
- Read the scenario
- Discuss: "What would be a good AI prompt for this?"
- Craft a sample prompt together
- Share your prompt in chat (program staff will review 3-4)

**Example scenario:** *"My function works fine locally but fails in production with a timeout error. The logs show no message."*

Your pair would discuss: *What context should we give the AI? Error messages? Code? What we've tried?*

**Wrap-Up (4 min):**
Program staff will review selected participant prompts, highlight what made them effective, and clarify common pitfalls (e.g., "not enough context," "too vague," "assuming AI knows your stack").

**How to Show Up for Yourself, Prepared to Do the Work!**
- Come with your Activity 1 document ready to reference
- Be active in pair discussion—don't just listen
- If you're uncertain about your prompt, ask; everyone is learning
- Note one thing that surprised you about the debugging process

### Part 2: Documentation Workshop — Live Demo & Hands-On (18 minutes)

**Live Demonstration (8 minutes):**
Program staff will **live-generate documentation** for a moderately complex function, narrating their process:

**The function** (provided on screen):

```javascript
// JavaScript Example
function calculateSubscriptionDiscount(basePrice, planType, isLongTerm) {
  if (planType === "premium" && isLongTerm) {
    return basePrice * 0.8;  // 20% off
  } else if (planType === "premium") {
    return basePrice * 0.9;  // 10% off
  } else if (isLongTerm) {
    return basePrice * 0.85; // 15% off
  }
  return basePrice;
}
```

**What program staff will narrate:**
1. Craft an initial prompt to generate docs
2. Show the AI's output
3. Identify one thing that's inaccurate (e.g., "The AI said 'premium with long-term = 15% off' but it's actually 20%")
4. Refine the prompt to fix it
5. Compare the revised version

**Key points program staff will emphasize:**
- AI docs are a starting point, not final
- Always verify against actual code behavior
- Edge cases are easy for AI to miss
- You should feel empowered to edit and improve

**Participant Hands-On Activity (10 minutes):**
You'll generate documentation for a **different function** (program staff provide 2-3 options). Steps:
1. **Choose a function** (provided by program staff or use one from your own project if applicable)
2. **Generate initial documentation** using your AI tool (use a refined prompt based on the live demo)
3. **Copy the output** into a shared document (Google Doc, Notion, or paste in chat)
4. **Review for accuracy** (1-2 minute check)
5. **Program staff will spot-check** 3-4 participant submissions and give live feedback

**How to Show Up for Yourself, Prepared to Do the Work!**
- Choose a function quickly and get started
- Use the prompt structure from the live demo
- Don't aim for perfection—this is practice
- If your AI output looks off, note it; program staff might use your example to teach
- Engage with feedback—ask clarifying questions if needed

### Part 3: Debugging + Documentation Integration & Peer Feedback (15 minutes)

**Small Group Activity:**
You'll pair with **one peer** to review each other's independent practice work.

**Exchange:** Share your Activity 1 and Activity 2 documents.

**For Activity 1 (Debugging) — 5 minutes per person:**
Peer review focuses on:
1. "Your initial prompt was effective because [reason]"
2. "I noticed the AI [missed/caught] the bug. That was [good/surprising] because..."
3. "Your reflection about trusting AI fixes was thoughtful because..."
4. One suggestion: "Next time, you could improve by..."


**For Activity 2 (Documentation) — 5 minutes per person:**

Peer review focuses on:

1. "The AI-generated docs handled [X] well"
2. "I think the AI missed [Y] in the docs"
3. "Your edits/corrections were good because..."
4. One suggestion: "If you encountered this function in a real project, I'd also ask the AI to..."

**How to Show Up for Yourself, Prepared to Do the Work!**
- Come with your complete independent practice document
- Listen actively to your peer's debugging and documentation journey
- Offer specific, constructive feedback using the structure above
- Ask clarifying questions if something isn't clear
- Be open to suggestions; this is collaborative learning

## Supplemental Materials

### Free Tools & Platforms

| Tool | Purpose | Free Tier | Best For
|-----|-----|-----|-----
| [**ChatGPT**](openai.com) | AI chatbot | 3 GPT-4 queries/month; unlimited GPT-3.5 | General debugging & documentation
| [**Claude**](claude.ai) | AI chatbot | Generous free tier; 100K tokens/month | Detailed explanations; good for tracing logic
| **GitHub Copilot** | IDE integration | Free tier with limits; free for students | Inline code suggestions; debugging hints
| [**Cursor IDE**](cursor.sh) | AI-powered IDE | Free tier available | IDE-integrated debugging
| [**Stack Overflow**](stackoverflow.com) | Q&A community | Free | Finding solutions others have debugged
| [**MDN Web Docs**](mdn.mozilla.org) | Reference | Free | JavaScript/Web API documentation reference

### Debugging-Specific Resources

| Resource | Type | Why It Matters |
|-----|-----|-----|
| **[Debugging Strategies with AI](https://vercel.com/blog/ai-debugging)** (Vercel Blog) | Blog Post | Practical approach to AI-assisted debugging |
| **Using ChatGPT for Debugging** | YouTube | Visual walkthrough of the debugging process | Search "ChatGPT debugging tutorial" on YouTube (multiple creators)
| **Error Message Interpretation Guide ([Python](https://docs.python.org/3/tutorial/errors.html) or [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors))** | Reference | How to read and extract meaning from error messages |
| **[Rubber Duck Debugging](https://en.wikipedia.org/wiki/Rubber_duck_debugging)** (Concept) | Article | AI as a modern take on explaining code to debug it |
| **[Debugging Node.js Applications](https://vercel.com/guides/debugging-nodejs)** | Vercel Guide | Backend debugging strategies |
| **[Python Debugging with pdb](https://docs.python.org/3/library/pdb.html)** | Tutorial | Understanding Python's debugger (works with AI help) |

### Documentation Generation & Best Practices

| Resource | Type | Why It Matters | 
|-----|-----|-----|
| **[API Documentation Best Practices](https://swagger.io/resources/articles/best-practices-in-api-design/)** | Guide | What makes good API docs (reference for evaluating AI output) | 
| **[JSDoc Documentation Guide](https://jsdoc.app/)** | Reference | Format for documenting JavaScript functions | 
| **[Python Docstring Conventions (PEP 257)](https://peps.python.org/pep-0257/)** | Reference | Format for documenting Python functions | 
| **[Writing Good Documentation](https://documentation.divio.com/)** (Divio) | Essay | Framework for thinking about documentation types | 
| **[Auto-generating Docs from Code](https://swagger.io/tools/swagger-ui/)** | Tutorial | Tools like Swagger/OpenAPI can generate docs (AI-friendly) | 
| **Documentation Examples on GitHub** | Reference | Search for well-documented projects to see examples | GitHub > explore > filter by language > look at README and docs/ folder

### Stack Traces & Error Handling

| Resource | Type | Why It Matters |
|-----|-----|-----|
| **[Understanding JavaScript Stack Traces](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)** | Article | How to read and use stack traces when debugging | 
| **[Python Traceback Guide](https://docs.python.org/3/tutorial/errors.html)** | Tutorial | How to interpret Python error messages and tracebacks |
| **[Error Boundaries & Debugging in React](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)** | React Docs | Best practices for catching and debugging errors in React |

### Prompt Engineering for Debugging & Documentation

| Resource | Type | Why It Matters |
|-----|-----|-----|
| **[Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)** (OpenAI) | Reference | Techniques for specific prompts (summarization, debugging) |
| **Prompting for Code Analysis** | Article | Specific prompt patterns for code-related tasks | Search "prompting for code analysis AI" or reference Week 1 resources
| **Multi-turn Conversations with AI** | Guide | How to iterate and refine prompts over multiple turns | Covered in AI tool documentation (ChatGPT, Claude guides)

### Interview Prep: Talking About Your Debugging Process

| Resource | Type | Why It Matters | 
|-----|-----|-----|
| **[Behavioral Interview Questions](https://www.indeed.com/career-advice/interviewing/behavioral-interview-questions)** (Sample) | Reference | Practice articulating your problem-solving approach |
| **"Walk Me Through Your Debugging Process"** | Blog/Guide | How to answer this common interview question | Search on Blind.com or interview prep blogs; multiple perspectives available
| **System Design & Debugging Discussions** | Video | Engineering leaders discussing debugging approaches | YouTube: search "engineering debugging interview"

### Optional: Going Deeper

| Resource | Type | For Those Interested|
|-----|-----|-----|
| **[How Debuggers Work](https://www.freecodecamp.org/news/debugging-guide/)** | Tutorial | Understanding the tools behind AI debugging suggestions |
| **[Test-Driven Development](https://en.wikipedia.org/wiki/Test-driven_development)** | Article | Writing tests alongside debugging | 
| **[Observability & Logging Best Practices](https://opentelemetry.io/docs/)** | Guide | How good logging makes debugging (with or without AI) easier |

## Showing Up for Yourself During Session

**Before the Session:**
- Complete both Activity 1 and Activity 2. If time is tight, prioritize Activity 1 (debugging is often more urgent).
- Have your AI tool open and ready for the guided practice workshop.
- If you're using a function from your own project for Activity 2, that's great—bring it as a backup option.

**During the Session:**
- In Part 1 (Debugging Strategy), listen for the **iterative process**—this is the most important takeaway.
- In Part 2 (Documentation Workshop), type along with program staff as they live-generate docs. Don't just watch.
- In Part 3 (Peer Feedback), be specific and kind. You're both learning.
- Take notes on feedback your peer gives you; it's valuable for Week 3 and beyond.

**After the Session:**
- Revisit your Activity 2 documentation with fresh eyes; you'll likely spot more improvements now.
- Look back at Week 1's prompt refinement skills—debugging prompts follow the same principles (context + specificity = better output).
- Week 3 builds on this foundation by adding **testing** to the mix. Keep your debugging and documentation practices sharp!
