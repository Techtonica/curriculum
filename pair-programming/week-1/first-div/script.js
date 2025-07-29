document.getElementById("first-li").innerHTML = "I'm learning JS";

function addAnotherLi() {
  // creating new  li element

  const newLi = document.createElement("li");

  // and give it some content
  const newContent = document.createTextNode(
    "My favorite plate from my favorite restaurant is cheese pizza"
  );

  // add the text node to the newly created div
  newLi.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentUl = document.getElementById("unordered-list-three");
  
  currentUl.appendChild(newLi);
}