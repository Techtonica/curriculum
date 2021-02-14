# Data Visualization

### Projected Time

8 hours (1 full day)

### Prerequisites

- [HTML](/web/html.md)
- [CSS](/web/css.md)
- [UI/UX](/ui-ux-design/ui-ux-design.md)
- [JavaScript](/javascript)
- [jQuery](/web/jquery.md) (especially on method chaining)
- [Functional Programming](/functional-programming/FP.md)

### Motivation

Data visualization's benefits are numerous. It can provide new insights by simplifying complex data, revealing new patterns, and generally making data easier and more interesting for the everyday user. Charts and graphs are powerfully enriching analytic tools for business.

Just as there are many different ways to visualize a single set of data, there are also a number of great open-source libraries to leverage. D3.js is covered more extensively in the slides and presentation; a few other ones to explore are chart.js, processing.js, pygal (python), and ember-charts (built with Ember.js and d3.js). For JavaScript libraries choices, [D3](https://d3js.org) is the most known and popular choice due to its power and flexibility; and we will use it to create data visualization (charts, graphs) in the guided activity and independent practice here.

Companies like [Fidelity](https://www.fidelity.com/) and [Strava](https://www.strava.com/features) use charts and graphs to monitor financial, medical, and geographical data for the user. The products of [Datadog](https://www.datadoghq.com/product/), [Carto](https://carto.com/), and [Plot.ly](https://plot.ly/) revolve around data visualizations for site dashboards.

### Objectives

**Participants will be able to:**:

- Become more familiar with publically available data sets
- Gain some experience determining how to select data to visualize
- Learn about several common tools and open-source libraries for visualization
- Utilize one (or several) tools to display data in a compelling and meaningful way
- Use D3 methods in JavaScript to create DOM elements
- Learn about SVG and its elements

### Specific Things to Learn

- How to search for, select, and use a publically available data set
- Different ways to visualize data and their best/typical use cases
- How to link to D3 from a CDN within your HTML?
- How does the D3 library work to manipulate DOM?
- What are SVG (Scalable Vector Graphics) elements?

### Materials

- [Data Visualization Slides](https://docs.google.com/presentation/d/1Vzx0eyKt0jNQq70pnAeDQ5X1qOPdjIzCgujSp6dd_1U/edit?usp=sharing)
- [Let's Make a Bar Chart (20min read)](https://bost.ocks.org/mike/bar/).
  - Note: uses version 3 of D3, so if you try to follow along as written, you will either need to import v3, or modify the code as in the guided practice below.

### Lesson

- Read through lesson slides [Data Visualization](https://docs.google.com/presentation/d/1Vzx0eyKt0jNQq70pnAeDQ5X1qOPdjIzCgujSp6dd_1U/edit?usp=sharing).
- Familiarize with D3 methods in updating DOM using [method chaining](http://alignedleft.com/tutorials/d3/chaining-methods).
- Check out [Let's Make a Bar Chart](https://bost.ocks.org/mike/bar/). It uses familiar HTML elements like `div` to create a bar chart. We will go over the code in Guided Practice.

### Things to Remember

- Link D3 library JavaScript file in your HTML `<script src="https://d3js.org/d3.v5.min.js"></script>`.
- We are using version 5 which has some changes in common D3 method implementations, e.g. d3.scale.linear -> d3.scaleLinear.
- Check out v5 [change notes](https://github.com/d3/d3/blob/master/CHANGES.md) for more details.
- The same set of data can convey very different meanings depending on how it's displayed (w/r/t granularity, dimensionality, type, detail).

### Guided Practice

#### Let's Make a Bar Chart (using div)

- Start with a fresh html document with D3 imported, and optionally include the styling from [Let's Make a Bar Chart](https://bost.ocks.org/mike/bar/).
  - Make sure not to include the manually created chart, as that's what we'll be generating programmatically below, using an update version of the code from the walkthrough.
- Take an html document (new/empty or an existing one) and create a div with 'chart' class, <div class="chart"></div>, in the body.
- Now we will append other divs inside the "chart" div using D3.
- Add D3 in `<script>` tag, along with our chart data in an array (Note: _Don't forget to link D3 library prior to your `<script>` tag_):

```javascript
const data = [4, 8, 15, 16, 23, 42];

const width = 500;
// D3's linear scaling method to convert data into chart width proportion
const x = d3
  .scaleLinear()
  .domain([0, d3.max(data)])
  .range([0, width]);

// D3 creating div elements using selection
// We feed in the data, dimensions and style using D3's methods
d3.select('.chart')
  .selectAll('div')
  // data() method takes a data set and passes 'd' when chaining methods together
  .data(data)
  // enter() method matches the data being handed with the DOM elements by creating new elements
  .enter()
  .append('div')
  .style('width', function (d) {
    return x(d) + 'px';
  })
  .text(function (d) {
    return d;
  });
```

- Open up your HTML file in a web browser and see what happens!
- The script above should render a horizontal bar chart that represents the values in `data = [4, 8, 15, 16, 23, 42]`
- This works, but depends on our manual CSS. Instead, let's `style` it using D3.

#### Style with D3 rather than CSS

- Remove the manual style block.
- Add to the end of the d3 select chain.

```javascript
   .style("background-color", "steelblue")
   .style("color", "white")
   .style("padding", "3px")
   .style("margin", "1px")
   .style("font", "10px sans-serif")
   .style("text-align", "right")
```

#### Make it rainbow

- Rather than having all the bars the same color, let's make the chart rainbow-colored.
- First, add an array of the colors we want to use.

```javascript
const colors = ['violet', 'lightblue', 'limegreen', 'yellow', 'orange', 'red'];
```

- Now, modify the `background-color` style to pass a function instead of a constant value. The function's first parameter is the data item, and the second is the index.

```javascript
   .style("background-color", function(d, i) { return colors[i] })
```

```javascript
   .style("background-color", function(d, i) { return colors[i] })
```

The above all works fine, but div elements are limited in their shape and positioning in the DOM.

Now that we have done this once in a `div`, we're going to look at doing it another way. We will use another element called [SVG (Scalable Vector Graphics)](https://www.tutorialspoint.com/html5/html5_svg.htm) introduced in HTML5 which is created for drawing paths, boxes, circles, text, and graphic images. Today, we won't be learning the ins and outs of vector graphics--all we need is to learn what SVG stands for and learn enough d3 methods that manipulate SVGs to make a graph appear on your webpage.

- Create an SVG tag `<svg></svg>` in the body of the webpage (remove the chart `div`).
- Add D3 in your `<script>` tag (same as before).
- Replace all of the JavaScript with this code block below. It contains the same dummy data as the code block from above, but uses `d3.select("svg")` and builds up the chart using `svg` methods this time.

```javascript
// From above
const data = [4, 8, 15, 16, 23, 42];
const colors = ['violet', 'lightblue', 'limegreen', 'yellow', 'orange', 'red'];
const width = 500,
  height = 16,
  margin = 3;
const x = d3
  .scaleLinear()
  .domain([0, d3.max(data)])
  .range([0, width]);
// Create SVG element
// We will group each rect and corresponding text in a group (g)
const g = d3
  .select('svg')
  .attr('width', width)
  .attr('height', (height + margin) * data.length)
  .selectAll('g')
  .data(data)
  .enter()
  .append('g')
  .attr('transform', function (d, i) {
    return 'translate(0,' + i * (height + margin) + ')';
  });
// Create each bar using rect and text elements
g.append('rect')
  .attr('fill', function (d, i) {
    return colors[i];
  })
  .attr('width', x)
  .attr('height', height);
g.append('text')
  .attr('x', 1)
  .attr('y', height / 2)
  .attr('dy', '.35em')
  .style('font', '10px sans-serif')
  .attr('fill', 'white')
  .text(function (d) {
    return d;
  });
```

- Check it out in your browser again.
- You should see an identical chart (except for label positioning) but this time we used SVG elements (`<g>, <rect>, <text>`).
- Why should we use SVG instead of div? Because SVG elements are made for drawing graphics and easier to manipulate on a grid.

**Let's flip our SVG chart**:

- For example, in order to change our bar chart from horizontal to a vertical layout, we only need to tweak a few attributes using SVG (flip width and height and adjust the translate coordinates). Change the bottom part of the code block to:

```javascript
const g = d3
  .select('svg')
  .attr('height', width)
  .attr('width', (height + margin) * data.length)
  .selectAll('g')
  .data(data)
  .enter()
  .append('g')
  .attr('transform', function (d, i) {
    return 'translate(' + i * (height + margin) + ',' + (width - x(d)) + ')';
  });
// Create each bar using rect and text elements
g.append('rect')
  .attr('fill', function (d, i) {
    return colors[i];
  })
  .attr('height', x)
  .attr('width', height);
g.append('text')
  .attr('x', 1)
  .attr('y', height / 2)
  .attr('dy', '.35em')
  .style('font', '10px sans-serif')
  .attr('fill', 'white')
  .text(function (d) {
    return d;
  });
```

### Independent Practice

**More Practice with SVG & D3.js**

- The text label for each bar in the vertical chart appears on top. Try to place them at the bottom of each bar by manipulating 'y' attribute in text element `.attr("y", ...)`.
- Create a pie chart using pie SVG element using our dataset. You can use this [example](https://bl.ocks.org/mbostock/3887235) to understand how D3's arc() method works.

### Challenge

**An Activity Aimed at Revealing Meaning through Data**

1. Select a data set that interests you!

- There are a few suggested publically available sets linked in the `Materials` section above, but feel free to select others beyond those.
- Questions to consider: Why did you select that set? (looks interesting? seems generally complete? has many dimensions? etc.)

2. Review the dataset you selected. Consider questions you might want to answer through it, and determine what columns/subsets of the set you would need to use in order to gain insights into those questions.

3. Determine what visualization(s) would be most meaningful to answer your question using your data.

- The `Materials` section has some resources that might be useful for this.

4. Select an open-source tool to create one or two meaningful charts/graphs. Embed your visualization(s) on a webpage.

- Focus both on learning the tools and thinking through what you want to present and show through the data. If the chart/graph type you selected does not work, it's totally ok to go back to step 3 (or any of the above steps).
- D3.js was covered in the lecture and may be a good choice for this.
- Chart.js is another very accessible option.

5. Present to the cohort or a peer and discuss the process you went through to create meaning and stories through data!

### Check for Understanding

- Which tools and open-source libraries are used for data visualization?
- Which imports and methods from D3.js would you use to set up a new D3.js visualization or update the DOM?
- What attributes are customizable for a chart or graph? List some.
- What types of charts and graphs are used for data visualization?
- Which one would you pick to visualize in the following scenarios?
  · Comparing values.
  · Analyzing trends.

### Supplemental Materials

#### Tools and libaries

- [D3 official website](https://d3js.org)
- [D3 Tutorials](https://github.com/d3/d3/wiki/Tutorials)
- [Other popular open-source tools for visualization](https://sonalake.com/latest/popular-open-source-javascript-frameworks-for-data-visualisation/)

#### Some suggestions for data sources

- [Data.gov](https://www.data.gov/)
- [Kaggle](https://www.kaggle.com/datasets)

#### Resources on how best to visualize data

- [Data Visualization – How to Pick the Right Chart Type?](https://eazybi.com/blog/data_visualization_and_chart_types/)
- [Data Visualization 101: How to Choose the Right Chart or Graph for Your Data](https://blog.hubspot.com/marketing/types-of-graphs-for-data-visualization)

#### For inspiration and related reading

- [storytelling with data](http://www.storytellingwithdata.com/)
- [Hackernoon: Top 150 medium articles related to Big Data, Data Science and Data Visualization](https://hackernoon.com/top-150-medium-articles-related-with-big-data-data-science-and-data-visualization-803773728ff7)
