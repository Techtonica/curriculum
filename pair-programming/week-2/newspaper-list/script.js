const newspapers = [
  "https://www.nytimes.com",
  "https://www.washingtonpost.com",
  "http://www.economist.com"
];

let ul = document.createElement("ul");

document.getElementById("content").appendChild(ul);

newspapers.forEach(function (item) {
  let li = document.createElement("li");
  ul.appendChild(li);
  let a = document.createElement("a");
  li.appendChild(a);
  a.href = item;
  a.innerText = item;
});
