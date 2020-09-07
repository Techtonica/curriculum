# Destructuring in JavaScript

## Projected Time

About 25-30 minutes

- 10 min for destructuring
- 20 min for examples

## Destructuring

Destructuring syntax is shorthand that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

It also works in the other direction to create values.

## Why it is useful?

- Makes your code shorter and less repetitive
- Even if you don't like it at first, you'll see it in example code so you need to understand it

## Examples

### Simple Object

Given this `car` object we can destructure its properties into variables.

```javascript
const car = {
  type: 'Tesla',
  color: 'White'
};

const { type, color } = car;
type  // => 'Tesla'
color // => 'White'
```

#### Same Code Without Destructuring

```javascript
const type = car.type;
const color = car.color;
```

### Arrays

Split a String into a 2-length array.

```javascript
const str = 'Michelle+TaLea';
const [p1, p2] = str.split('+');
p1; // => 'Michelle'
p2; // => 'TaLea'
```

#### Same Code Without Destructuring

```javascript
const pair = str.split("+")'
const p1 = pair[0];
const p2 = pair[1]'
```

### Object Literal

This may be the most powerful and useful of them all. It can be used on the right-hand side of assignment as well.

```javascript
const name = "Kisha"'
const volunteer = { name }'
volunteer.name // => 'Kisha''
```

#### Same Code Without Destructuring

```javascript
const volunteer = {
  name: name
};
```

### Object Literal as Function Parameters

Using the same syntax as the last example, we can now pass in an object as an argument and just destructure the properties we need off of it right in the parameter list.

```javascript
function reportAge({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}

const child = {
  name: 'Suzie',
  age: 5
};
reportAge(child);

reportAge({ name: 'Michelle Obama', age: 56 });
```

#### Same Code Without Destructuring

```
function reportAge(person) {
  const name = person.name;
  const age = person.age;
  console.log(`${name} is ${age} years old.`);
}
```

## Independent Practice

### Nested Object

Rewrite the following code using destructuring to reduce repetition.

```javascript
const request = {
  body: {
    username: 'hello',
    password: '1234'
  }
};

const username = request.body.username;
const password = request.body.password;
console.log(username);
console.log(password);
```

### Console Log Trick

```javascript
const myVar = true;
console.log({ myVar });
```

What is the output? Why does that happen?

(Hint: write the same code without destructuring that produces the same output)

## Additional Materials

- [Destructuring Quiz](https://javascript.info/destructuring-assignment)
