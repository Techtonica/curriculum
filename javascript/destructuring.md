# Mini-lesson on Destructuring

## Projected Time :

About 25-30 minutes
- 10 min for destructuring
- 20 min for examples

## Prerequisites :

Here are the topic that should be understood before this topic:
- Javascript 7
[Learn javascript](https://www.codecademy.com/catalog/language/javascript)

## Destructuring :

Destructuring simply implies breaking down a complex structure into simpler parts. In JavaScript, this complex structure is usually an 
object or an array. With the destructuring syntax, you can extract smaller fragments from arrays and objects. Destructuring syntax can be
used for variable declaration or variable assignment.

## Why it is useful?

There are two big advantages of using destructuring. The first one is that your code more readable. If you destructure an object at the
top of a function or code block, it is clear to the reader what variables you are going to use.
The second plus is performance. Destructuring encourages programmers to put object properties in local variables before using them,
which can improve application performance. Especially if you are accessing those variables multiple times, maybe in a loop, it is more
efficient if the variables are locally defined.

## Examples :

### Example 1 ->

Destructuring an two element array into two named variables.

**Code with destructuring -**

`let { type, color } = car;`

**Code without destructuring -**

`let type  = car.type;`
`let color = car.color;`

### Example 2 ->

Destructuring items out of a nested object.

**Code with destructuring -**

`let { username, password, email } = req.body;`

**Code without destructuring -**

`let username = req.body.username;`
`let password = req.body.password;`
`let email    = req.body.email;`

## Check for Understanding :

Open the given below link and solve the questions related to destructuring that helps them to test the understanding .
[Practice of destructuring questions](https://stackoverflow.com/questions/tagged/destructuring)

