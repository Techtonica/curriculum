# Activity : Error Detective (Week 3-4)

**Duration:** 60 minutes  
**Focus:** Understanding error messages, reading stack traces, systematic debugging

## Learning Objectives

- Read and interpret browser console errors
- Understand common JavaScript error types (TypeError, ReferenceError, SyntaxError)
- Practice systematic debugging approaches
- Learn to use `console.log()` strategically

## Setup

Provide participants with intentionally broken code containing 5-8 different types of errors.

## Exercise Structure

### Part 1: Error Identification (20 min)

Participants receive broken code with multiple errors:

```javascript
// Broken Shopping Cart Code
let cart = {
  items: [],
  total: 0
};

function addItem(name, price, quantity) {
  let item = {
    name: name,
    price: price,
    quantity: quantiy // Typo error
  };

  cart.items.push(item);
  updateTotal();
}

function updateTotal() {
  cart.total = 0;
  for (let i = 0; i <= cart.items.length; i++) {
    // Off-by-one error
    cart.total += cart.items[i].price * cart.items[i].quantity;
  }
}

function removeItem(itemName) {
  cart.items = cart.items.filter((item) => (item.name = itemName)); // Assignment instead of comparison
}

function applyDiscount(discountPercent) {
  cart.total = cart.total * (1 - discountPercent / 100);
  return cart.total.toFixed(2);
}

// Test calls
addItem('Apple', 1.5, 3);
addItem('Banana', 0.75, 5);
console.log(calculateTax()); // Function doesn't exist
removeItem('Apple');
console.log(cart.totle); // Typo
```

**Task:**

1. Run the code and document each error message
2. Categorize errors (syntax, reference, type, logic)
3. Explain what each error means in plain English

### Part 2: Debugging Process (25 min)

Participants work through a systematic debugging checklist:

1. **Read the error** - What is it telling you?
2. **Locate the line** - Where is the problem?
3. **Understand the context** - What should happen vs. what is happening?
4. **Form a hypothesis** - What do you think is wrong?
5. **Test the fix** - Make one change and test

Participants must document their process for each error:

- Error message received
- Hypothesis about the cause
- Fix applied
- Result of the fix

### Part 3: Strategic Console Logging (15 min)

Participants add strategic `console.log()` statements to debug logic errors that don't throw exceptions.

**Checkpoint Questions:**

- What should you log before a calculation?
- How do you verify data structure contents?
- When should you log function parameters?

## Deliverables

- Debugging journal documenting each error and fix
- Working, corrected code
- List of 5 debugging strategies learned

## General Facilitation Notes

### Pair Programming Roles

- **Driver:** Types and implements fixes
- **Navigator:** Reads errors, suggests strategies, documents process

Switch roles every 15-20 minutes.

### Assessment Criteria

Participants demonstrate proficiency by:

- Reading error messages accurately
- Following systematic debugging steps
- Using appropriate tools (console, DevTools, logs)
- Explaining problems clearly
- Knowing when and how to ask for help

### Extension Challenges

For pairs who finish early:

1. Add comprehensive error handling to the code
2. Create test cases that would have caught these bugs
3. Write a debugging guide for future participants
4. Intentionally break the code in new ways for other pairs to fix

### Reflection Questions

After the activity:

1. What was the most challenging error to debug? Why?
2. What tools or strategies were most helpful?
3. How did you know when you needed help?
4. What would you do differently next time?
5. What error have you seen before that makes more sense now?
