// Code samples for use as JS reference

const myVariable = 1;

console.log(`Value of myVariable is ${myVariable}`);

if (myVariable < 10) {
  console.log("< 10");
} else if (myVariable === 10) {
  console.log("=== 10");
} else {
  console.log("> 10");
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let j = 0;
while (j < 10) {
  console.log(j);
  j++;
}

function myFunc1(param1) {
  return param1 * 7;
}

myFunc1(8);

const myFunc2 = (param1, param2) => {
  return param1 + param2;
};

myFunc2(5, 3);

let emptyArray = [];
let myArray = ["one", "two"];
myArray.push("hello");
myArray.pop();
myArray[0] = "goodbye";
console.log(myArray.length);

const obj = {
  prop1: "value1",
  prop2: "value2"
};
obj.prop1 = "new value";
