# Data Visualization

### Projected Time
30-45 minutes

### Prerequisites
- "HTML" lesson
- "CSS" lesson
- "UX/UI" lesson
- "javascript" lesson
- "jQuery" lesson (method chaining)
- "functional-programming" lesson

### Motivation
To be able to create data visualization (charts, graphs) in our webpage. We will use [D3](https://d3js.org) JavaScript library to create visualization of our data.

### Objective
**Students will be able to**:
- Create visualization from data
- Use D3 methods in JavaScript to create DOM elements
- Learn about SVG and its elements

### Specific Things To Teach
- How to link to D3 from a CDN within your HTML
- How D3 Library works to manipulate DOM
- What are SVG (Scalable Vector Graphics) element

### Materials

- [Data Visualization Slides](https://drive.google.com/open?id=1qgFhrP5u70UgsTe_khB9nrUnlq-17zY4yjPzSphPCW8)
- [D3 official website](https://d3js.org)
- [D3 Tutorials](https://github.com/d3/d3/wiki/Tutorials)

### Mini Lesson

- Familiarize with D3 methods in updating DOM
  - Check out [Let's Make a Bar Chart](https://bost.ocks.org/mike/bar/)
  - This example uses familiar HTML elements like div to create a bar chart. We will go over the code in Guided Practice.

### Things to Remember

- Link D3 library JavaScript file in your HTML `<script src="https://d3js.org/d3.v4.min.js"></script>`
- We are using version 4 which has some changes in common D3 method implementations, e.g. d3.scale.linear -> d3.scaleLinear.
- Check out v4 [implementation](https://github.com/d3/d3/blob/master/CHANGES.md) for more details.

### Guided Practice
**Let's Make a Bar Chart (using div)**:
- Create a div with 'chart' class `<div class="chart"></div>` in the body of the webpage
- Now we will append other divs inside the "chart" div usind D3
- Add D3 in `<script>` tag, along with some dummy data (Note: *Don't forget to link D3 library prior to your `<script>` tag*):
  ```javascript
  const data = [4, 8, 15, 16, 23, 42];
  // define colors for each bar
  const colors = ["violet", "lightblue", "limegreen", "yellow", "orange", "red"];
  // max dimensions for each bar
  const width = 500,
        height = 16;
  // D3's linear scaling method to convert data into chart width proportion
  const x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width]);
  // D3 creating div elements using selection
  // We feed in the data, dimensions and style
  d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .style("height", height + "px")
    .style("background-color", function(d) { return colors[data.indexOf(d)]; })
    .text(function(d) { return d; });
  ```
- The script above should render a horizontal bar chart that represents the values in `data = [4, 8, 15, 16, 23, 42]`

- This is great, but div elements are limited in their shape and positioning in the DOM
- We will use another element called [SVG (Scalable Vector Graphics)](https://www.tutorialspoint.com/html5/html5_svg.htm) introduced in HTML5 which is created for drawing paths, boxes, circles, text, and graphic images

**Let's Make Same Bar Chart (using svg)**:
- Create an svg tag `<svg></svg>` in the body of the webpage
- Add D3 in your `<script>` tag along with the dummy data from above:
```javascript
// From above
const data = [4, 8, 15, 16, 23, 42];
const colors = ["violet", "lightblue", "limegreen", "yellow", "orange", "red"];
const width = 500,
      height = 16;
const x = d3.scaleLinear()
  .domain([0, d3.max(data)])
  .range([0, width]);
// Create svg elements
const g = d3.select("svg")
  .attr("width", width)
  .attr("height", height * data.length)
  .selectAll("g")
  .data(data)
  .enter().append("g")
  .attr("transform", function(d, i) { return "translate(0," + i * height + ")"; });
g.append("rect")
 .attr("fill", function(d) { return colors[data.indexOf(d)]; })
 .attr("width", x)
 .attr("height", height);
g.append("text")
 .attr("x", 0)
 .attr("y", height / 2)
 .attr("dy", ".35em")
 .text(function(d) { return d; });
```
- You should see an identical chart but this time we used svg elements (`<g>, <rect>, <text>`)

### Challenge

Students can try to do this other thing.


### Check for Understanding

Have students summarize to each other, make a cheat sheet, take a quiz, do an assignment, or something else that helps assess their understanding.
