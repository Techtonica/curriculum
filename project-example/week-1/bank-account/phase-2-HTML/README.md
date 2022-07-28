# Modeling a bank account Phase-1

Write a program that creates an `account` object with the following characteristics:

- A `name` property.
- A `balance` property set to 0.
- A `deposit` method adding the (positive or negative) value passed as an argument to the account balance.
- A `describe` method returning the account description.
- A `transfer` method with two paramethers: the name of the account that will receive the transfer, and the amount of money to transfer.

### Test

- Create an account for Billy, Rosie, Jack and Jill
- Give each of the accounts a deposity on money
- Print a string describing the current amount of money on each account
- Transfer positive values between Billy and Jack and negative values between Rosie and Jack

### Extra

- Can you thing how a `credit` method should work?

(NOTE: this portion of the assignement will be in JS only, you will build upon it in the future to add HTML)

# Practice using HTML with your Bank Account Phase-2

The look and feel of your bank account is up to you, but make sure that you pratice this options:

- Insert an element after or before other element.
- Replace an element (for example each time someone do a transfer).
- Remove an element (if someone does a transfer in negative, how do you update the value of the balance).
- Show or hide an element (if someone doesn't have "money" hide the transfer money button).
- Add .addEventListener() to your buttons
- Select an element or list of elements

### Test

- At this point your buttons, list or forms should work with your JS file. If you want to prove your Event Listeners please add `console.log` method to them

### Extra

- Can you thing how Toggle an element should work?
