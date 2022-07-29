// Made a div
const div = document.createElement("div");

// added class Flower to it
div.classList.add("Flower");

// appended this div to body of html
document.body.appendChild(div);

// made an unordered list with any three items
const myList = `
<ul>
    <li>Rose</li>
    <li>Sunflower</li>
    <li>Lily</li>
</ul>    
`;

// Added Mylist to class Flower using innerHTML property
div.innerHTML = myList;

// Created an image and added class & attributes[src, width, height, alt]
const img = document.createElement("img");
img.src =
  "https://upload.wikimedia.org/wikipedia/commons/f/fb/Carabao_mangoes_%28Philippines%29.jpg";
img.height = 250;
img.width = 250;
img.classList.add("fruit");
img.alt = "mango";
div.appendChild(img);

// A little animation [on doubleclicking on image it toggles]
function toggleIt() {
  img.classList.toggle("round");
}

img.addEventListener("dblclick", toggleIt);
