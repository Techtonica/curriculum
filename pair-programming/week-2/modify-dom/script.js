let fruits = ["Apple", "Banana", "Strawbery"];

let bodyEle = document.querySelector("body");

bodyEle.style.backgroundColor = "blue";
bodyEle.style.color = "white";

let div = document.createElement("div");
document.body.appendChild(div);

function getFruits(fruits) {
  let ul = document.createElement("ul");
  div.appendChild(ul);

  for (let item in fruits) {
    console.log(fruits[item]);
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = fruits[item];
  }
}

getFruits(fruits);
