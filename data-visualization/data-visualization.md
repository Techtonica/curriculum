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
- How to link to D3 from a CDN within your HTML?
- How D3 Library works to manipulate DOM?
- What are SVG (Scalable Vector Graphics) elements?

### Materials

- [Data Visualization Slides](https://drive.google.com/open?id=1qgFhrP5u70UgsTe_khB9nrUnlq-17zY4yjPzSphPCW8)
- [D3 official website](https://d3js.org)
- [D3 Tutorials](https://github.com/d3/d3/wiki/Tutorials)

### Mini Lesson

- Familiarize with D3 methods in updating DOM using [method chaining](http://alignedleft.com/tutorials/d3/chaining-methods)
  - Check out [Let's Make a Bar Chart](https://bost.ocks.org/mike/bar/)
  - This example uses familiar HTML elements like div to create a bar chart. We will go over the code in Guided Practice.

### Things to Remember

- Link D3 library JavaScript file in your HTML `<script src="https://d3js.org/d3.v4.min.js"></script>`
- We are using version 4 which has some changes in common D3 method implementations, e.g. d3.scale.linear -> d3.scaleLinear.
- Check out v4 [implementation](https://github.com/d3/d3/blob/master/CHANGES.md) for more details.

### Guided Practice
**Let's Make a Bar Chart (using div)**:
- Create a div with 'chart' class `<div class="chart"></div>` in the body of the webpage
- Now we will append other divs inside the "chart" div using D3
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
  // We feed in the data, dimensions and style using D3's methods
  d3.select(".chart")
    .selectAll("div")
    // data() method takes a data set and passes 'd' when chaining methods together
    .data(data)
    // enter() method matches the data being handed with the DOM elements by creating new elements
    .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .style("height", height + "px")
    .style("background-color", function(d) { return colors[data.indexOf(d)]; })
    .text(function(d) { return d; });
  ```
- The script above should render a horizontal bar chart that represents the values in `data = [4, 8, 15, 16, 23, 42]`

- This works but div elements are limited in their shape and positioning in the DOM
- We will use another element called [SVG (Scalable Vector Graphics)](https://www.tutorialspoint.com/html5/html5_svg.htm) introduced in HTML5 which is created for drawing paths, boxes, circles, text, and graphic images

**Let's Make Same Bar Chart (using SVG)**:
- Create an SVG tag `<svg></svg>` in the body of the webpage
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
// Create SVG element
// We will group each rect and corresponding text in a group (g)
const g = d3.select("svg")
    .attr("width", width)
    .attr("height", height * data.length)
    .selectAll("g")
    .data(data)
    .enter().append("g")
    .attr("transform", function(d, i) { return "translate(0," + i * height + ")"; });
  // Create each bar using rect and text elements
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
- You should see an identical chart but this time we used SVG elements (`<g>, <rect>, <text>`)
- Why should we use SVG instead of div? Because SVG elements are made for drawing graphics and easier to manipulate on a grid
  - For e.g. in order to change our bar chart from horizontal to vertical layout, we only need to tweak a few attributes using SVG (flip width and height)
```javascript
const g = d3.select("svg")
    .attr("height", width)
    .attr("width", height * data.length)
    .selectAll("g")
    .data(data)
    .enter().append("g")
    .attr("transform", function(d, i) { return "translate(" + i * height + ", " + (width - x(d)) + ")"; });
  g.append("rect")
   .attr("fill", function(d) { return colors[data.indexOf(d)]; })
   .attr("height", x)
   .attr("width", height);
  g.append("text")
   .attr("x", 0)
   .attr("y", height / 2)
   .attr("dy", ".35em")
   .text(function(d) { return d; });
```

### Challenge

- Text label for each bar in the vertical chart appears on top. Try to place them at the bottom of each bar by manipulating 'y' attribute in text element `.attr("y", ...)`.
- Create a pie chart using pie SVG element using our dataset. You can use this [example](https://bl.ocks.org/mbostock/3887235) to understand how D3's arc() method works.

### Check for Understanding

- How familiar are you with D3, its methods, and how it updates the DOM?
