# Job Seeker AI Session Week 3: AI for Testing & Code Quality

## Prerequisites
- Completion of 1000+ hours of PERN full-stack development experience
- Familiarity with testing frameworks (Jest, Vitest, pytest, unittest, or similar)
- Experience writing unit tests and understanding concepts like assertions, test cases, and test structure
- Understanding of code coverage basics (lines covered, branches, functions)
- A free account with at least one AI tool (ChatGPT, Claude, or similar)
- Completion of [Job Seeker AI Session Week 2: AI for Debugging & Documentation](../job-seeker-ai-session2.md)

## TABLE OF CONTENTS

- [Motivation](#motivation)
- [Objectives](#objectives)
- [Specific Things To Learn](#specific-things-to-learn)
- [Independent Practice](#independent-practice)
- [Guided Practice](#guided-practice)
- [Supplemental Materials](#supplemental-materials)
- [Showing Up for Yourself During Session](#showing-up-for-yourself-during-session)

## Projected Time
- **Independent Practice:** 30 minutes
- **Guided Practice:** 45 minutes
- **Total Session Time:** 75 minutes

## Motivation
Testing is the safety net of development. Good tests catch bugs early, prevent regressions, and give you confidence to refactor. But writing comprehensive tests is **tedious and time-consuming**—and many developers skip it or write minimal tests.

This is where AI shines. AI can:
- Generate test cases rapidly
- Suggest edge cases you might miss
- Create test fixtures and mock data
- Identify coverage gaps

**But here's the catch:** AI-generated tests can be **superficial, incomplete, or incorrect**. AI might write tests that pass without actually validating behavior. It might miss security-critical edge cases. It might assume your code works correctly when it doesn't.

You'll learn to:
1. **Use AI to accelerate test writing** without blindly trusting generated tests
2. **Identify and fill gaps** in AI-generated test coverage
3. **Maintain code quality standards** even when AI assists
4. **Communicate your testing approach** in interviews

Strong testing skills—especially paired with critical AI usage—make you a standout engineer. Teams value developers who maintain code quality and can explain their testing strategy.

## Objectives
By the end of this session, you will be able to:
1. **Generate test cases with AI** by providing function signatures, requirements, and edge cases to consider.
2. **Evaluate AI-generated tests critically**, identifying weak assertions, missing edge cases, and assumptions that need verification.
3. **Analyze test coverage** (line coverage, branch coverage) and use AI to identify gaps and suggest improvements.
4. **Combine AI-generated and manual tests** to balance speed and thoroughness.
5. **Debug failing AI-generated tests**, understanding why they fail and whether the issue is in the test or the code.
6. **Articulate your testing philosophy** to teammates and interviewers, demonstrating how AI fits into your quality assurance process.

## Specific Things to Learn

### Test Generation with AI
- **Prompt structure for tests:** Specifying function behavior, inputs, expected outputs, edge cases
- **Test anatomy:** Setup, action, assertion—and how AI sometimes skips critical steps
- **Parameterized tests:** Using AI to generate multiple test cases efficiently
- **Mocking and fixtures:** Asking AI to generate mock data and test doubles
- **Error case testing:** Ensuring AI generates tests for failure modes, not just happy paths
- **Framework-specific syntax:** Getting AI to generate tests in your specific tool (Jest, pytest, etc.)

### Code Quality & Coverage Analysis
- **Coverage metrics:** Line coverage, branch coverage, function coverage—and what each means
- **Coverage gaps:** Using AI to identify which code paths aren't tested
- **Edge case thinking:** AI's common blind spots (null/undefined, empty collections, boundary values, dates, and times)
- **Assertion quality:** Strong assertions vs. weak assertions (e.g., `assert(result)` vs. `assert.equal(result.value, 42)`)
- **Test maintainability:** How AI-generated tests can become technical debt if not reviewed carefully
- **Security and robustness testing:** Cases AI often misses (injection attacks, type coercion, race conditions)

### Integration with Development Workflow
- **Test-driven development (TDD) with AI:** Writing tests before code, using AI to accelerate both
- **Regression testing:** Generating tests from real bugs you've fixed
- **Continuous integration:** Ensuring AI-generated tests work in your CI/CD pipeline
- **Documentation through tests:** Using tests as executable documentation of behavior
- **Balancing speed and quality:** When to rely on AI tests vs. when to write manually

## Independent Practice

**Time Allocation:** 30 minutes

### Overview
You will work through **two focused activities**: generating tests for a provided function with AI, evaluating and improving those tests, and analyzing code coverage gaps. You'll document your process and note what AI caught and what it missed.

### How to Show Up for Yourself, Prepared to Do the Work!
- **Complete both activities** below before the session.
- **Use a free AI tool** (ChatGPT, Claude, or similar).
- **Document your work in a shared format** (Google Doc, Markdown file, Notion, or screenshots) so you can screen-share during guided practice.
- **Be ready to explain:**
  - One test case AI generated that you thought was weak or incomplete
  - One edge case you had to add manually that AI missed
  - How you'd use this process on your current projects

### Activity 1: AI-Generated Test Cases & Coverage (18 minutes)

**Objective:** Generate tests with AI and evaluate their quality and coverage.

**Task:**
You'll be given a function to test. Your job is to:
1. Ask AI to generate comprehensive test cases
2. Evaluate the tests for quality and coverage
3. Identify gaps and generate additional tests
4. Document your findings

**Choose your language and function:**

<details><summary>Option A — JavaScript (Jest):</summary>

```javascript
// Calculate the total price of items in a shopping cart
// Applies discount if applicable
function calculateCartTotal(items, discountCode = null) {
  if (!Array.isArray(items) || items.length === 0) {
    return 0;
  }
  
  let total = 0;
  for (let item of items) {
    total += item.price * item.quantity;
  }
  
  // Apply discount codes
  if (discountCode === "SAVE10") {
    total *= 0.9; // 10% off
  } else if (discountCode === "SAVE20") {
    total *= 0.8; // 20% off
  } else if (discountCode === "FREESHIP") {
    total += 5; // Free shipping (adds $5 back)
  }
  
  return Math.round(total * 100) / 100; // Round to 2 decimal places
}
```
</details>

<details><summary>Option B — Python (pytest):</summary>

```python
# Calculate the total price of items in a shopping cart
# Applies discount if applicable
def calculate_cart_total(items, discount_code=None):
    if not isinstance(items, list) or len(items) == 0:
        return 0
    
    total = 0
    for item in items:
        total += item["price"] * item["quantity"]
    
    # Apply discount codes
    if discount_code == "SAVE10":
        total *= 0.9  # 10% off
    elif discount_code == "SAVE20":
        total *= 0.8  # 20% off
    elif discount_code == "FREESHIP":
        total += 5  # Free shipping (adds $5 back)
    
    return round(total, 2)
```
</details>

**Step 1: Request AI-Generated Tests (4 minutes)**

Paste your chosen function into your AI tool with this prompt:

```plaintext
"I need comprehensive test cases for this [JavaScript/Python] function. 
Please generate tests using [Jest/pytest] that cover:
- Normal cases (1-3 items with different prices)
- Edge cases (empty cart, no discount, invalid inputs)
- All discount codes
- Rounding behavior

Include setup, assertions, and test descriptions."
```

**Deliverable:** Copy the first 5-6 test cases (or all of them if fewer than 6) into your document.

**Step 2: Analyze the Generated Tests (5 minutes)**
For each test the AI generated, ask yourself:

1. **Is the assertion strong?** Does it actually verify the expected behavior?
  - Weak: `expect(result).toBeDefined()`
  - Strong: `expect(result).toBe(29.00)`
2. **Does the test setup make sense?** Are the test inputs realistic?
3. **What's being tested?** Can you articulate the behavior this test validates?

**Deliverable:** Create a table in your document:

```plaintext
| Test Name | What It Tests | Assertion Strength | Complete? |
|-----------|---------------|-------------------|-----------|
| Test 1    | Single item, no discount | Strong | ✓ |
| Test 2    | Empty cart | Moderate | ✓ |
| Test 3    | SAVE10 discount | Weak (just checks truthy) | ✗ |
| Test 4    | [etc] | | |
```

**Step 3: Identify Coverage Gaps (5 minutes)**
Ask yourself: **What behaviors are NOT tested by the AI-generated tests?**

Consider:
- What happens with negative prices? (Security/edge case)
- What if `discountCode` is an invalid string like "INVALID"?
- What if an item has 0 quantity?
- What if items have decimal prices that interact with rounding?
- What if the discount codes are lowercase (`"save10"` vs. `"SAVE10"`)?

**Deliverable:** Add a section "Coverage Gaps" to your document. List 2-3 edge cases or scenarios the AI missed, and explain why each is important:

```plaintext
Gap 1: Negative prices
Why it matters: Prevents invalid cart calculations; could affect refunds

Gap 2: Case-sensitive discount codes
Why it matters: Users might type lowercase; UX issue or bug?

Gap 3: Floating-point rounding edge cases
Why it matters: Prices are money; rounding errors compound
```

**Step 4: Generate Tests for One Gap (3 minutes)**
Pick one gap from Step 3 and ask AI to generate a test for it:

```plaintext
"Can you write a test for when [specific edge case]? 
For example, [provide an example]. 
The expected behavior is [describe what should happen]."
```

**Deliverable:** Paste the AI's generated test and add a note: "This test validates [specific behavior]."

**Step 5: Reflect on Test Quality (1 minute)**
Write a 2-3 sentence reflection:
- What was the biggest gap in the AI-generated tests?
- How would you describe "good" test coverage to someone who hasn't written tests before?
- Would these AI-generated tests catch a real bug if you introduced one?

### Activity 2: Code Quality & Test Maintainability (12 minutes)

**Objective:** Evaluate code quality implications of AI-assisted testing.

**Task:**
You'll examine an existing test suite and work with AI to improve it.

**Scenario:**
Below is a **poorly written test suite** (simulating careless AI output or bad test practices). Your job is to:
1. Identify quality issues
2. Ask AI to improve it
3. Compare the before/after

**Choose your language:**

<details><summary>Option A — JavaScript (Jest):</summary>

```javascript
// POORLY WRITTEN TESTS
test('function works', () => {
  const result = calculateCartTotal([{price: 10, quantity: 1}]);
  expect(result).toBeDefined();
});

test('discount', () => {
  expect(calculateCartTotal([{price: 100, quantity: 1}], 'SAVE10')).toBe(90);
  expect(calculateCartTotal([{price: 50, quantity: 2}], 'SAVE20')).toBe(80);
});

test('edge cases', () => {
  expect(calculateCartTotal([])).toBe(0);
  expect(calculateCartTotal(null)).toBe(0);
});
```
</details>

<details><summary>Option B — Python (pytest):</summary>

```python
# POORLY WRITTEN TESTS
def test_function_works():
    result = calculate_cart_total([{"price": 10, "quantity": 1}])
    assert result is not None

def test_discount():
    assert calculate_cart_total([{"price": 100, "quantity": 1}], "SAVE10") == 90
    assert calculate_cart_total([{"price": 50, "quantity": 2}], "SAVE20") == 80

def test_edge_cases():
    assert calculate_cart_total([]) == 0
    assert calculate_cart_total(None) == 0
```
</details>

**Step 1: Identify Quality Issues (3 minutes)**
Read through the tests and note quality problems:
- **Vague test names:** What does "function works" actually test?
- **Multiple assertions per test:** Each test should validate one behavior
- **Unclear setup:** What are the inputs testing?
- **Missing documentation:** Why are these edge cases important?

**Deliverable:** Create a "Quality Issues" list in your document:

```plaintext
Issue 1: Test name "function works" is too vague
Issue 2: "discount" test combines two different discount codes
Issue 3: No docstring explaining why these edge cases matter
Issue 4: [etc]
```

**Step 2: Ask AI to Improve the Tests (5 minutes)**
Paste the poor test suite and prompt:

```plaintext
"I have a test suite that needs improvement. Please refactor it to:
- Have descriptive test names that explain what's being tested
- One assertion per test (or clearly related assertions)
- Add comments explaining why each test case matters
- Group related tests logically
- Improve clarity and maintainability

Here are the tests: [paste tests]"
```

**Deliverable:** Paste the AI's refactored version into your document.

**Step 3: Compare & Evaluate (3 minutes)**
Look at the refactored tests. Ask yourself:
1. **Are the test names clearer?** Can someone reading the test name understand what's being tested without reading the code?
2. **Is the structure better?** Are related tests grouped? Is the logic easier to follow?
3. **Did the AI add helpful documentation?** Are there comments explaining *why* certain edge cases are tested?
4. **Would this be easier to maintain?** If you return to these tests in 6 months, would you understand them quickly?

**Deliverable:** Add a "Before/After Comparison" section:

```plaintext
Improvement 1: Test names
Before: "function works"
After: "should calculate cart total with single item no discount"
Impact: Much clearer what's being tested

Improvement 2: [etc]
```

**Step 4: One Quality Consideration (1 minute)**
Write a 1-2 sentence note: "The refactored tests are [better/worse/similar in] maintainability because..."

### Independent Practice Showcase Format

**What to prepare for Zoom:**
1. **Your completed document** with both Activity 1 and Activity 2
2. **Plan to screen-share for 5-6 minutes** and narrate:
  - **Activity 1:** Show the function being tested, 2-3 of the AI-generated tests, one coverage gap you identified, and one manually-written test you added
  - **Activity 2:** Show the "before" poor test suite, the AI-refactored version, and one specific improvement that stood out
3. **Be ready to answer:** "What's one thing you'll do differently when generating tests with AI in your projects?"

## Guided Practice

**Time Allocation:** 45 minutes
Program staff will facilitate interactive discussion and live demonstrations. Come ready to participate and learn from peers.

### Part 1: Test Generation Strategy & Quality Standards (13 minutes)

**Presentation:**
Program staff will present a **framework for test quality** and how to use AI responsibly:

**The Three Levels of Test Evaluation:**
1. **Does it run?** (Technical correctness)
  - No syntax errors
  - Correct imports/fixtures
  - Assertions are valid
2. **Does it test?** (Behavioral correctness)
  - Assertion validates the expected behavior
  - Input setup is realistic
  - Test name matches what's being tested
3. **Is it maintainable?** (Code quality)
  - Clear variable names and test names
  - Single responsibility (one behavior per test)
  - Documented edge cases
  - Doesn't duplicate other tests
  - Tests are in the correct file / directory with the correct naming conventions

**Participant Activity (10 minutes):**
Program staff will provide a **sample function** and present 3-4 AI-generated test cases (varying in quality). You'll work in **small groups (3-4 people)** for 8 minutes to:
1. Assign each test a score: ✓ (Strong) / ~ (Moderate) / ✗ (Weak)
2. For each test, articulate: "This test validates [specific behavior]"
3. Identify: "This test would catch a bug if [specific error occurred]"
4. Decide: "We would keep/refactor/replace this test because..."

**Example function provided:**

```javascript
function validatePassword(password) {
  if (password.length < 8) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/[0-9]/.test(password)) return false;
  return true;
}
```

**Example AI-generated tests (quality varies):**
- Test 1 (Weak): `expect(validatePassword("abc")).toBe(false);` // No assertion explanation
- Test 2 (Moderate): `expect(validatePassword("Password1")).toBe(true);` // Good case, but not clearly named
- Test 3 (Strong): `test('should reject passwords without uppercase letter', () => { expect(validatePassword("password1")).toBe(false); });` // Clear behavior, good naming

**Groups present findings to the room** (program staff pick 1-2 groups to share).

**Wrap-Up (3 min):**
Synthesize common themes. Clarify what makes a test strong vs. weak. Address misconceptions.

**How to Show Up for Yourself, Prepared to Do the Work!**
- Come with Activity 1 in mind—you've already evaluated AI tests
- Participate actively in group discussion
- Don't worry if your assessment differs from peers; differences spark learning
- Ask clarifying questions if the quality framework isn't clear

### Part 2: Live Coverage Analysis & Gap Identification (17 minutes)

**Live Demonstration (8 minutes):**
Program staff will analyze a **real code function** for test coverage, showing:

**The function** (displayed on screen):

```javascript
function processUserRegistration(email, password, agreeToTerms) {
  // Validate inputs
  if (!email || email.indexOf("@") === -1) {
    return { success: false, error: "Invalid email" };
  }
  
  if (!password || password.length < 8) {
    return { success: false, error: "Password too short" };
  }
  
  if (!agreeToTerms) {
    return { success: false, error: "Must agree to terms" };
  }
  
  // Save user (simulated)
  const userId = Math.random();
  return { success: true, userId };
}
```

**Program staff will narrate:**
1. Ask the group: "What test cases would you write?" (Collect in chat)
2. Show **a sample AI-generated test suite** (provided on screen)
3. Analyze coverage: "Which code paths are tested? Which are missed?"
4. Identify gaps: "What happens if [specific input]? Is that tested?"
5. Refine: Ask AI to generate a test for one missed edge case

**Key coverage paths to discuss:**
- Valid input (happy path)
- Invalid email (missing @, empty string, null)
- Invalid password (too short, empty, null)
- agreeToTerms false
- Multiple validation failures

**Program staff emphasize:**
- Coverage != completeness. Line coverage 80% doesn't mean the code is well-tested
- Edge cases are where bugs hide
- AI tends to test happy paths; you must push for error cases

**Participant Hands-On Activity (9 minutes):**
You'll analyze coverage for a **different function** (program staff provide 2-3 options). Steps:
1. **Choose a function** (provided by program staff)
2. **List the code paths** in the function (happy path, error cases, loops, conditions)
3. **Generate tests** for at least 3 different paths using your AI tool
4. **Evaluate coverage:** Which paths are tested? Which are missing?
5. **Share findings** in a shared document or chat (program staff spot-check 3-4)

**How to Show Up:**
- Work methodically—list code paths before generating tests
- Be specific about which code paths each test covers
- Don't aim for 100% coverage; just identify what's missing
- Engage with program staff feedback; ask clarifying questions if needed

### Part 3: Test Debugging & Peer Review (15 minutes)

**Small Group Activity:**
You'll pair with **one peer** to review each other's independent practice work.

**Exchange:** Share your Activity 1 and Activity 2 documents.

**For Activity 1 (Test Generation & Coverage) — 8 minutes per person:**
Peer review focuses on:
1. "Your analysis of AI-generated test quality was thorough because [specific observation]"
2. "I think you identified an important coverage gap: [gap name]. That's important because..."
3. "Your manually-written test for [edge case] was good because..."
4. Suggestion: "One more edge case to consider: [idea] because..."

**For Activity 2 (Test Maintainability) — 7 minutes per person:**
Peer review focuses on:
1. "The quality issues you identified—[issue name]—is exactly what I'd fix too because..."
2. "The AI refactoring improved [specific aspect] because..."
3. "Your comparison shows that [change] makes the tests clearer/harder to maintain because..."
4. Reflection question: "If you were code-reviewing these tests at work, would you approve them? Why or why not?"

**How to Show Up for Yourself, Prepared to Do the Work!**
- Come with your completed independent practice document
- Listen actively to your peer's testing approach—they might have caught edge cases you missed
- Offer specific feedback using the structure above
- Be open to suggestions; this is collaborative learning
- Share one insight you gained from the peer review

## Supplemental Materials

### Free Testing Frameworks & Tools

| Tool | Language | Free Tier | Best For|
|-----|-----|-----|-----|
| **Jest** | JavaScript | Free, open-source | Comprehensive testing; built-in coverage analysis
| **Vitest** | JavaScript | Free, open-source | Fast, modern alternative to Jest
| **pytest** | Python | Free, open-source | Comprehensive testing; flexible fixtures
| **unittest** | Python | Free, built-in | Python standard library; good for basics
| **Coverage.py** | Python | Free, open-source | Measure code coverage in Python
| **NYC** / **c8** | JavaScript | Free, open-source | Generate coverage reports for JavaScript

### Test Writing & AI Assistance

| Resource | Type | Why It Matters | 
|-----|-----|-----|
| **[Jest Testing Guide](https://jestjs.io/)** | Official Docs | Understand Jest best practices; reference for test syntax |
| **[pytest Documentation](https://docs.pytest.org/)** | Official Docs | Understand pytest fixtures, parametrization, assertions |
| **[Testing Best Practices](https://testing.googleblog.com/)** (Google Testing Blog) | Blog Post | Industry perspective on test quality and design |
| **[Test Pyramid Concept](https://martinfowler.com/bliki/TestPyramid.html)** | Article | Understand balance between unit, integration, E2E tests | 
| **[Unit Testing Best Practices](https://www.pluralsight.com/guides/unit-testing-best-practices)** | Pluralsight Guide | What makes a good unit test; naming, assertion strength | 

### Code Coverage Analysis

| Resource | Type | Why It Matters | 
|-----|-----|-----|
| **[Code Coverage Explained](https://www.softwaretestinghelp.com/code-coverage-tutorial/)** | Article | Line coverage, branch coverage, function coverage—what each means | 
| **[Coverage is Not Quality](https://martinfowler.com/bliki/TestCoverage.html)** | Blog Post | Why 100% coverage doesn't mean good tests | 
| **Branch vs. Line Coverage** | Detailed Guide | Understand why branch coverage is harder and more valuable | Search "branch coverage vs line coverage" on testing blogs
| **[Using NYC for Coverage Reports](https://github.com/istanbuljs/nyc)** | Tutorial | Analyze JavaScript test coverage; identify gaps | 
| **[Using Coverage.py for Python](https://coverage.readthedocs.io/)** | Tutorial | Generate coverage reports; understand coverage data | 

### AI-Assisted Test Generation

| Resource | Type | Why It Matters | 
|-----|-----|-----|
| **Prompting for Test Generation** | Guide (Reference Week 1 & 2 resources on prompting; apply to testing context)| Specific techniques for getting AI to generate useful tests | 
| **ChatGPT for Unit Testing** | Blog/Video (YouTube: search "ChatGPT unit testing tutorial") | Practical walkthrough of AI-assisted test writing | 

### Edge Cases & Boundary Testing

| Resource | Type | Why It Matters | 
|-----|-----|-----|
| **[Equivalence Partitioning](https://en.wikipedia.org/wiki/Equivalence_partitioning)** | Testing Technique | Group test cases into equivalence classes; ensure comprehensive coverage |
| **Testing Null, Undefined, Empty** | Best Practices: MDN (JS) / PEP docs (Python) | Common edge cases in JavaScript/Python | 

### Mocking, Fixtures & Test Data

| Resource | Type | Why It Matters | 
|-----|-----|-----|
| **[Jest Mocking Guide](https://jestjs.io/docs/manual-mocks)** | Official Docs | Mock functions, modules, and external dependencies | 
| **[pytest Fixtures](https://docs.pytest.org/en/stable/fixture.html)** | Official Docs | Reusable test setup; prevents duplication | 
| **[Factory Pattern in Tests](https://github.com/thoughtbot/factory_bot)** | Article | Generate realistic test data efficiently |  (Ruby example, but pattern applies everywhere)

### Test Maintainability & Refactoring

| Resource | Type | Why It Matters | 
|-----|-----|-----|
| **[Test Smell: A Quick Reference](https://testsmells.org/)** | Article | Recognize and fix common test code smells | 
| **[DRY in Tests](https://en.wikipedia.org/wiki/Don't_repeat_yourself)** | Best Practices | Avoid test duplication; maintain tests long-term | 

### Security & Robustness Testing

| Resource | Type | Why It Matters | 
|-----|-----|-----|
| **[OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)** | Reference | Common vulnerabilities to test for | 
| **[Input Validation Testing](https://owasp.org/www-community/attacks/xss/) (example: XSS testing)** | Best Practices | Testing user inputs for unexpected formats | 

### Test-Driven Development (TDD)

| Resource | Type | Why It Matters | 
|-----|-----|-----|
| **[TDD Best Practices](https://en.wikipedia.org/wiki/Test-driven_development)** | Article | Writing tests *before* code; using tests to guide design | 
| **[Red-Green-Refactor Cycle](https://www.youtube.com/watch?v=B2_SDHP7VZ0) (search for TDD video tutorials)** | Guide | TDD workflow; how AI can accelerate each phase | 

### Interview Prep: Talking About Testing

| Resource | Type | Why It Matters |
|-----|-----|-----|
| **"How Do You Approach Testing?"** | Interview Question | Common interview question; practice articulating your philosophy | Blind.com, interview prep blogs
| **Test Coverage Discussion** | Conversation Starter | Discuss tradeoffs: speed vs. quality, coverage goals | GitHub discussions, engineering blogs
| **Real-World Testing Scenarios** | Case Study | Study how teams balance AI-assisted testing with quality | Search company engineering blogs (Stripe, Vercel, GitHub, etc.)

### Optional: Going Deeper

| Resource | Type | For Those Interested| Link|
|-----|-----|-----|-----|
| **Property-Based Testing** | Advanced | Generate test cases automatically; ensures robustness | [Python](https://hypothesis.readthedocs.io/) or [JavaScript](https://fast-check.dev/)
| **Mutation Testing** | Advanced | Test the tests; ensure your assertions catch real bugs | [https://stryker-mutator.io/](https://stryker-mutator.io/)
| **Contract Testing** | Advanced | Test API contracts between services; relevant for fullstack | [https://pact.foundation/](https://pact.foundation/)

## Showing Up for Yourself During Session

**Before the Session:**
- Complete both Activity 1 and Activity 2. If time is tight, prioritize Activity 1 (test generation is the core skill).
- Have your testing framework documentation open (Jest or pytest) during the session.
- If you have a function from your own project you'd like to test, bring it as a backup example.
- Think about: *What's the difference between a test that passes and a test that's actually testing something?*

**During the Session:**
- In Part 1 (Test Quality Standards), pay close attention to the distinction between strong and weak tests—this is the foundation for evaluating AI output.
- In Part 2 (Coverage Analysis), trace through the code paths yourself as program staff walk through them. This mental exercise is how you develop coverage intuition.
- In Part 3 (Peer Review), listen for edge cases your peer identified that you missed. That's valuable learning.
- Take notes on specific edge cases discussed; you'll encounter similar patterns in your projects.

**After the Session:**
- Review your Activity 1 coverage gaps with fresh eyes. Can you write one test for each gap?
- Consider: "If I introduced a bug in the code I tested, would the AI-generated tests catch it?" This is the ultimate test of test quality.
- Week 4 builds on this foundation by exploring AI in **collaborative development**—keep your testing discipline sharp as you integrate with teams!
