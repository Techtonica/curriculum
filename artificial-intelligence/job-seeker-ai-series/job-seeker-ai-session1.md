# Job Seeker AI Session Week 1: Ethical AI & Prompting Foundations

### Prerequisites
- Completion of 1000+ hours of PERN full stack development experience
- Familiarity with basic software development workflows (debugging, code review, documentation)
- A free account with at least one AI tool (ChatGPT, Claude, or similar—details provided in resources)
- Basic understanding of ethical frameworks (no prior ethics coursework required; foundational concepts covered in this session)

### Table of Contents
- [Motivation](#motivation)
- [Objectives](#objectives)
- [Specific Things to Learn](#specific-things-to-learn)
- [Independent Practice](#independent-practice)
- [Guided Practice](#guided-practice)
- [Supplemental Materials](#supplemental-materials)
- [Showing Up for Yourself During Session](#showing-up-for-yourself-during-session)

### Projected Timeline
- **Independent Practice:** 30 minutes
- **Guided Practice:** 45 minutes
- **Total Session Time:** 75 minutes

### Motivation
As a software engineer entering the job market, you'll face the question: **"How do you use AI in your workflow?"** This is no longer optional. Employers are actively seeking engineers who can ethically leverage AI as a tool while maintaining code quality, security, and team trust.

The reality: AI is a powerful amplifier. It amplifies good practices *and* bad ones. Developers who understand **ethical AI use** and **prompt fundamentals** gain competitive advantages:

- **In interviews:** You can articulate thoughtful AI integration rather than sounding like you either reject or blindly trust AI.
- **On teams:** You become the person who knows how to use these tools responsibly, avoiding common pitfalls (hallucinated code, security risks, documentation gaps).
- **In your productivity:** Strong prompting saves hours. Weak prompting wastes time and compounds mistakes.

This topic outline establishes your foundation: ethical reasoning + technical prompting skills that you'll build upon across all six weeks.

### Objectives
By the end of this session, you will be able to:
1. **Articulate an ethical framework for AI tool use** in software development contexts, identifying when AI assistance is appropriate vs. problematic.
2. **Craft effective prompts** that yield high-quality, usable responses from AI tools by applying principle-based prompt engineering techniques.
3. **Evaluate AI-generated outputs critically**, identifying hallucinations, security risks, and limitations before integrating into production code.
4. **Communicate your AI usage** clearly to peers, interviewers, and team members in professional contexts.
5. **Recognize personal and organizational biases** in AI tooling and data, and consider mitigation strategies.

### Specific Things to Learn

#### Ethical Foundations
- **AI's role as a tool, not a substitute** for developer judgment and responsibility
- **Transparency vs. opacity:** When (and why) to disclose AI usage
- **Hallucination, bias, and limitation awareness:** What AI-generated code/documentation can get wrong
- **Organizational responsibility:** How your company's AI governance and data practices affect ethical use
- **Personal accountability:** The developer remains responsible for code quality, security, and correctness regardless of AI assistance

#### Prompting Fundamentals
- **Prompt anatomy:** Context, instruction, constraints, output format
- **Specificity matters:** Vague prompts yield generic/incorrect results; precise prompts yield usable outputs
- **Iterative refinement:** How to follow up, ask clarifying questions, and improve outputs
- **Role-playing and persona:** Using "Act as" prompts to steer AI toward domain-specific reasoning
- **Prompt anti-patterns:** Common mistakes (unclear context, conflicting instructions, unrealistic constraints)
- **Token/context limits:** Understanding that AI has memory limits and how to structure multi-turn conversations

#### Practical Developer Scenarios
- Prompting for code generation (with guardrails)
- Prompting for code explanation and debugging support
- Prompting for documentation and test case generation
- Prompting for research and learning assistance

### Independent Practice

**Time Allocation:** 30 minutes

#### Overview
You will complete a series of **self-guided prompting activities** that build from basic to advanced, documenting your decisions and results. Your goal is to experience firsthand how prompt quality directly impacts output quality, and to practice the ethical reasoning process before bringing questions to the guided session.

#### How to Show Up for Yourself, Prepared to Do the Work!
- **Complete all three activities below** before the session.
- **Use a free AI tool** (ChatGPT, Claude, Copilot, or similar—see resources).
- **Document your process in a shared format** (Google Doc, notion, markdown file, or screenshot) so you can screen-share and narrate your findings during the guided practice session.
- **Be ready to explain one specific moment** where you refined a prompt and noticed the output improve (you'll share this during the session).

#### Activity 1: Ethical Framework Application (10 minutes)
**Objective:** Ground yourself in the ethical considerations *before* prompting.

**Task:**
Read the following scenario (choose one):

**Option A - Code Generation:**
Your team is working on a feature to authenticate users. You decide to ask an AI tool to generate a password hashing function. Consider:
- Is it ethical to use AI-generated code for security-critical functionality? Why or why not?
- What checks would you perform before trusting this code in production?
- How would you document/disclose this in code review?

**Option B - Documentation:**
You have a complex algorithm that you implemented. Rather than writing documentation yourself, you ask an AI to document it. Consider:
- When is this appropriate? When is it not?
- What are the risks (inaccuracy, bias in explanation, dependency on AI for clarity)?
- If you use AI-generated docs, what's your responsibility before merging?

**Option C - Debugging:**
You're stuck on a bug. You copy your error stack trace into an AI tool and ask for help. Consider:
- What sensitive information might be in your code/logs?
- How do you know the AI's suggestion is correct vs. a reasonable-sounding hallucination?
- How would you verify and take responsibility for the fix?

**Deliverable:**
Write a **2-3 sentence response** to your chosen scenario that addresses:
1. One ethical consideration
2. One verification step you'd take
3. How you'd communicate this to your team

**Resource:** The [Techtonica AI Ethics module](../ai-for-learning.md) provides helpful frameworks. You can reference it, but your response should reflect *your* reasoning.

#### Activity 2: Prompt Refinement Sequence (15 minutes)
**Objective:** Experience how specificity, context, and constraints improve outputs.

**Task:**
You will write **three versions of a prompt** aimed at generating a debugging workflow for a common developer scenario. The AI task: *Help me troubleshoot why my API endpoint is returning a 500 error.*

**Version 1 - Vague Baseline (2 minutes):**
Write and execute this intentionally vague prompt:

```plaintext
"How do I fix a 500 error?"
```

Paste the AI response and note: *How generic or helpful is this? Could you act on it immediately?*

**Version 2 - Moderate Specificity (5 minutes):**
Refine your prompt by adding context. Rewrite it to include:
- The framework/stack you're using (e.g., "Node.js with Express")
- The specific endpoint (e.g., `/api/users` returning JSON)
- One detail about what you tried (e.g., "I checked the logs and see no error message")

Execute this version. Note the improvement.

**Version 3 - High Specificity (5 minutes):**
Refine again by adding:
- The exact error context (e.g., your last 3 log lines)
- Constraints for the response (e.g., "Suggest debugging steps before suggesting code changes")
- A specified output format (e.g., "List 5 things to check in priority order")

Execute this version. Compare outputs.

**Deliverable:**
Create a **comparison document** with three sections (one for each version). For each, include:
1. Your prompt (copy/paste)
2. The first 2-3 lines of the AI response
3. A 1-sentence note on whether this was actionable for you

#### Activity 3: Critical Evaluation & Hallucination Detection (5 minutes)
**Objective:** Practice spotting when AI gets it wrong.

**Task:**
Using your favorite AI tool, paste the following **intentionally buggy code snippet** and ask: *"What's wrong with this code?"*

**JavaScript Option:**
```javascript
function findUserById(userId) {
  const user = database.query(`SELECT * FROM users WHERE id = ${userId}`);
  return user;
}
```

**Python Option:**
```python
def calculate_average(numbers):
    total = 0
    for num in numbers:
        total += num
    average = total / len(numbers)
    return average
```

**Questions to Answer (in your document):**
1. **What did the AI identify as problems?** (Copy 1-2 sentences from the response.)
2. **What did it miss?** (The JavaScript has an SQL injection vulnerability; the Python function lacks division-by-zero handling.)
3. **Why might the AI have missed this?** (Consider: Is it obvious? Is it context-dependent? Does it require security knowledge?)
4. **What's one thing you'd verify before trusting AI-generated code review?** (Write 1-2 sentences.)

**Deliverable:**
Add a section to your comparison document answering these four questions.

#### Independent Practice Showcase Format
**What to prepare for Zoom:**
1. **Your comparison document** (Activities 1-3 in one file)
2. **Plan to screen-share for 2-3 minutes** and narrate:
  - One insight from Activity 1 (your ethical reasoning)
  - The specific moment in Activity 2 where you noticed prompt quality impacted output quality
  - One hallucination or miss the AI made in Activity 3

You won't present all details—just highlight the learning moments. Program staff will ask follow-up questions.

### Guided Practice

**Time Allocation:** 45 minutes

Program staff will facilitate interactive discussion and activities. Come ready to participate, ask questions, and engage with peers.

#### Part 1: Ethical Framework Debrief & Discussion (15 minutes)

**Activity:**
Staff will briefly present a **scaffolded ethical framework** for AI use in software development:
1. **Transparency:** Do I understand what the AI did? Can I explain it to others?
2. **Verification:** Have I checked this output against my knowledge and best practices?
3. **Accountability:** Am I willing to put my name on this code/doc if it fails?
4. **Context Awareness:** Does this tool have known limitations for this specific task?

**Participant Activity:**
You'll break into **small groups (3-4 people)** for 10 minutes and discuss:
- One scenario from Activity 1 (your ethical reasoning)
- A real situation *you've* faced where you weren't sure if AI assistance was appropriate
- How you'd present your thinking to a hiring manager or team lead

**Wrap-Up (5 min):**
Discuss common themes and clarify misconceptions. You'll hear diverse perspectives from peers.

**How to Show Up for Yourself, Prepared to Do the Work!**
- Come with your Activity 1 response ready to discuss
- Listen actively to peers—you'll learn from how others reasoned through the same scenario
- Ask clarifying questions if the ethical framework doesn't feel clear

#### Part 2: Live Prompt Refinement Workshop (20 minutes)

**Activity:**
Program staff will **live-code a prompting session** in front of the group, using a real developer scenario:

**Scenario:** *"I need to write a function that validates an email address, but I'm not sure of all the edge cases."*

**Step 1 (2 min):** Staff will ask participants to shout out what a **vague version** of this prompt might look like. (Collect responses in chat.)

**Step 2 (3 min):** Program staff will execute that vague prompt in real-time, showing the output, and ask: *"Is this what we needed? What's missing?"*

**Step 3 (5 min):** Program staff will **iteratively refine the prompt** based on participant suggestions, adding:
- Specific edge cases to consider (empty strings, special characters, international domains)
- Output format preference ("return a function" vs. "explain the logic")
- Constraints ("no regex" or "use a regex")

**Step 4 (5 min):** Show the final refined output. Discuss differences.

**Step 5 (5 min):** Participants will try this prompt pattern on a **different scenario** (program staff provide 2-3 options, pick one) in the chat:
- "I need to generate a test for a user login function"
- "I need documentation for a middleware component"
- "I need debugging help for a caching issue"

Program staff spot-check 3-4 participant prompts and give live feedback on specificity and clarity.

**How to Show Up for Yourself, Prepared to Do the Work!**
- Actively participate in chat suggestions during Step 1
- Pay attention to *why* program staff are refining the prompt (what's the reasoning?)
- When it's your turn (Step 5), apply the refinement pattern you observed
- Ask program staff to clarify if you're unsure why a specific addition improved the prompt

#### Part 3: Peer Prompt Review & Hallucination Catch (10 minutes)

**Small Group Activity:**
You'll pair with **one peer**.

**Exchange:** Share your Activity 2 comparison document (or the key sections). Each person has **5 minutes** to:
1. Review your peer's three prompt versions and responses
2. Spot one moment where the peer's refinement was particularly effective
3. Identify any outputs that seem questionable or hallucinated
4. Offer one suggestion for an even better version of their Version 3 prompt

**Feedback Format:** Use this structure (1 minute per person):
- "Your prompt evolution was strong because [specific example]"
- "I noticed this output might be risky because [reason]"
- "Next time, you could improve by [suggestion]"

**How to Show Up for Yourself, Prepared to Do the Work!**
- Come with your Activity 2 document ready to share
- Listen with curiosity to your peer's reasoning—they might have caught something you missed
- Ask questions if feedback isn't clear
- Be open to suggestions; this is low-stakes practice

### Supplemental Materials

#### Free AI Tools (All Free Tier Sufficient for This Course)

| Tool | Free Tier | Best For|
|-----|-----|-----|
| **ChatGPT** (openai.com) | 3 limited GPT-4 queries/month; unlimited GPT-3.5 | Accessible starting point; good general prompting
| **Claude** (claude.ai) | Generous free tier; 100K tokens/month | Thoughtful reasoning; good for ethics discussions
| **GitHub Copilot** (free for students/educators; free tier for others with limits) | Free tier available; limited queries | Developer-specific; inline code suggestions
| **Cursor** (cursor.sh) | Free tier with limited usage | IDE-integrated; practice prompting in context
| **Perplexity AI** (perplexity.ai) | Free tier | Research and learning; good for gathering context

**Recommendation:** For this course, ChatGPT (free tier) and Claude (free tier) are sufficient. No paid subscriptions required.

#### Prompt Engineering Resources

| Resource | Type | Why It Matters |
|-----|-----|-----|
| **[OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)** | Written Guide | Foundational techniques directly from the source |
| **[Anthropic Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-a-chatbot)** | Written Guide | Best practices for Claude-specific techniques |
| **[AI Prompt Engineering for Everyone](https://www.deeplearning.ai/courses/ai-prompting-for-everyone)** (DeepLearning.AI) | Free Video Course | Practical, code-focused examples; ~1 hour total |
| **[How to Prompt v0](https://vercel.com/blog/how-to-prompt-v0)** (Vercel AI Blog) | Blog Post | Developer-specific; practical scenarios |

#### Ethical AI in Software Development

| Resource | Type | Why It Matters |
|-----|-----|-----|
| **[Techtonica AI Ethics Module](https://github.com/Techtonica/curriculum/blob/main/artificial-intelligence/ai-for-learning.md)** | Curriculum | Comprehensive framework; covers bias, transparency, accountability | 
| **AI for Learning** (Techtonica) | Curriculum + Activities | Covers practical ML concepts and responsible AI use | Same as above
| **[Microsoft Responsible Principles and Approaches](https://www.microsoft.com/en-us/ai/principles-and-approach)** | Written Guides | Industry perspective on responsible AI; governance frameworks | 
| **[Stanford HAI (Human-Centered AI) Intro](https://hai.stanford.edu/news/what-ai-can-do-and-what-it-cannot-ai-ethics-101)** | Free Course | Broad perspective on AI's societal impact and ethics |

#### Hallucination, Bias, and Limitation Resources

| Resource | Type | Why It Matters |
|-----|-----|-----|
| **["Attention Is All You Need" Primer](https://www.youtube.com/watch?v=qaWMOYf4ik8)** | Video + Blog | Understand *why* LLMs hallucinate (technical depth optional) | 
| **[Advanced Prompt Engineering for Reducing Hallucination](https://medium.com/@bijit211987/advanced-prompt-engineering-for-reducing-hallucination-bb2c8ce62fc6)** | Blog Post | Real-world examples and detection strategies | 
| **[Are LLMs Good at Making Predictions?](https://www.lesswrong.com/posts/CkhJAxHeyFCg2EcET/are-language-models-good-at-making-predictions)** | Informal Guide | Humorous but practical—learn what not to do |

#### Interview & Communication Resources

| Resource | Type | Why It Matters |
|-----|-----|-----|
| **"How to Discuss AI Usage in Interviews"** | Blog/Guide | Frame your AI experience positively and honestly | Vercel blog, Y Combinator startup resources, or Blind.com community posts
| **[Behavioral Interview Questions](https://www.indeed.com/career-advice/interviewing/behavioral-interview-questions)** (Sample) | Reference | Practice articulating your decision-making process | 

#### Optional: Dive Deeper

| Resource | Type | For Those Interested |
|-----|-----|-----|
| **["On the Dangers of Stochastic Parrots"](https://arxiv.org/abs/2107.03374)** | Research Paper (accessible summary) | Academic perspective on LLM limitations |
| **[LangChain Prompting](https://python.langchain.com/docs/guides/rag/)** | Code Examples | If you want to build multi-step prompting workflows |

### Showing Up for Yourself During Session

**Before the Session:**
- Aim to complete all independent practice activities. If you run into time constraints, at minimum complete Activities 2 and 3.
- If you haven't used an AI tool before, spend 5 minutes exploring your chosen tool's interface (ChatGPT or Claude recommended).
- If any ethical scenario feels unclear, jot down a question to ask during Part 1 of guided practice.

**During the Session:**
- Cameras on if possible—this is interactive and benefits from seeing your peers.
- Mute your mic unless speaking (for audio clarity in the group session).
- Don't hesitate to ask program staff to clarify; everyone is learning together.
- Take notes on points that surprise you or feel relevant to your job search.

**After the Session:**
- You'll have access to session recording and notes (check email/Learning Platform).
- Use the resources in Supplemental Materials to explore topics deeper if interested.
- Week 2 will build on this foundation—keep your comparison document handy as reference.
