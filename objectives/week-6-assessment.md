# Week 6 Assessment

## Topics

### Advanced JS

- Object-Oriented Programming (OOP)
  - Prototype & Class syntax
  - Inheritance
- Functional Programming (FP)
  - Array's `map` & `reduce`
  - [high-order functions](https://medium.com/functional-javascript/higher-order-functions-78084829fff4), aka functions that return functions
- Recursion
  - CSS Selector Code Challenge
- Promises
  - Fridge Teammate Code Challenge
- Jasmine testing
  - Pair Activity & Eventonica

### HTTP

- Common response status codes: 200, 201, 302, 404, 500
- Status code ranges, e.g. what are 4xx vs 2xx?
- Request format including headers
- Verbs: GET vs. POST

## Not Included

_Topics covered after Monday, 10 February 2020 are not included (e.g. JSON, REST, etc)_


## Example Questions

### OOP

#### Create a class `Day`
- Attribute `date`, a JS `Date` object
- Method isTechtonicaDay
  - returns `true` if M-F, `false` otherwise

#### Create a subclass of `Day` called `Holiday`
- `isTechtonicaDay` should return `true` regardless of day of week

Create an array of these objects to represent the week beginning with Sunday, 16 Feburary 2020.

```javascript
const sun; // = something
const week = [sun, mon, tue, wed, thu, fri, sat];

console.log(week.map((day) => day.isTechtonicaDay()));
// [false, false, true, true, true, true, false]
```
 

### FP

Write a high-order function (function that creates another function) called `pluck` that is very similar to our `extractProp` method from the previous assessment but that always retrieves the same property name.

```javascript
function createPlucker(propName) {
  // returns a function that takes in an array and
  //   returns an array of the values of each item's property named propName
}

const lengthPlucker = createPlucker('length');
const array = ['a', 'aa', 'aaa'];
lengthPlucker(array);
// => [1, 2, 3]

const namePlucker = createPlucker('name');
const objsWithNames = [{ name: 'Osito', age: 14 }, { name: 'Bella', age: 8 }];
namePlucker(objsWithNames);
// => ['Osito', 'Bella']
```

### Recursion

CSS selector exercise.

```javascript
class HtmlElement {
  constructor(tag, cssClass) {
    this.tag = tag;
    this.cssClass = cssClass || "";
    this.children = [];
  }
  addChild(childElement) {
    this.children.push(childElement);
  }
  findAllByClass(cssClass) {
    /* ????? */
  }
}

// build the DOM (this is verbose but you can see the HTML on the right)
const h1 = new HtmlElement("h1");
const div = new HtmlElement("div", "class1");
const p = new HtmlElement("p");
const a = new HtmlElement("a", "class2");
div.addChild(p);
div.addChild(a);

const img = new HtmlElement("img", "class2");

const body = new HtmlElement("body");
body.addChild(h1);
body.addChild(div);
body.addChild(img);

const html = new HtmlElement('html');
html.addChild(body);


html.findAllByClass("class1")
// => [div]

html.findAllByClass("class2")
// => [a, img]

html.findAllByClass("nonexistent")
// => []
```


### Promises

The `fetch` function provided by the browser returns a `Promise`. Its API looks like:

`fetch(url)` => Promise that resolves with the Response
This Response object has interesting properties like `status`.

- Write a function that takes an array of URLs
- the function should use `fetch` to request all these URL's immediately, not waiting for ay to finish before requesting the next
- Print the status code of each response as soon as it is known
- print "All 3 URL's fetched" when have all been retrieved

```javascript
const someUrls = [
  'http://osito.org/bonito', 
  'https://example.com/some/important/path',
  'https://twitter.com/TackToneEeka'
]

function fetchAllUrls(urls) { 
  // ....
}
```

### Jasmine Testing

Write Jasmine test cases for the function below. Think of all the possible cases you might need to test.

```javascript
function calculateAge(birthDate) {
    let msDiff = Date.now() - birthDate;
    let ageDate = new Date(msDiff);
    return Math.abs(ageDate.getFullYear() - 1970);
}

describe("calculateAge()", function() {

  it("should do something", function() {
    expect(true).toBe(true);
  });

});
```


