# Styling in React

### Projected Time : 1 hr

- Lesson: 40 mins.
- Guided Practice: 20 mins.

### Prerequisites

- [CSS Lesson](/web/css.md)
- [Bootstrap Lesson](/web/bootstrap.md)
- [React Part 1 - Intro](./react-part-1-intro.md)

### Motivation

Styling has been one of the building blocks of web development. Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. React only provides a virtual DOM, whereas the presentation part still lies with CSS.

### Objectives

- Styling in React JSX.
- Inline styling and using external stylesheet.
- Bootstrap in React.

### Specific Things To Learn

- Defining styles as objects.
- Importing stylesheets into React application.

### Materials

- [Video: Styling of React App in 3 different ways](https://www.youtube.com/watch?v=j5P9FHiBVNo) - Using inline CSS, external CSS and CSS modules.
- [Video: Bootstrap in React](https://www.youtube.com/watch?v=wdbzLi0tWq0) - Bootstrap in React can be used using CDN or by installing the package.

### Lesson

- [Slides: CSS in React ](https://docs.google.com/presentation/d/15SRalCJq0HaZ7O8LIngmDVqxDSU0GBVzOhpF1Q0eQOw/edit#slide=id.g827758f8ad_0_333)

### Guided Practice

> #### Let's create a simple div, and style it using inline CSS and flexbox. Then we will achieve same using external CSS and Bootstrap separately.

- First, we need to create a React application. - Create a React app using create React app command. `npx create-react-app`.

  - This will create a simple React app , and now we will start making changes to this app. - First of all get rid of all the unnecessary stuff showing on DOM , remove all the lines in render of `App.js`. - Now we create a simple div **parent div** which will contain few div as _child_ elements. - After creating that , your `App.js` will look like this - ```
    import React from 'react';
    import './App.css';

        		function App() {

    return (
    <div className="App">
    {/_ Start Parent Div _/}
    <div>
    {/_ Start of Child Divs _/}
    <div>Child Div 1</div>
    <div>Child Div 2</div>
    <div>Child Div 3</div>
    {/_ End of Child Divs _/}
    </div>
    {/_ End of Parent Div _/}
    </div>
    );
    }

        		export default App;
        		```

    Now we will be adding CSS to this App to differentiate **div** and achieve this one by one using

- Inline CSS
- External CSS file and
- then by using Bootstrap.

To Differentiate we will add background color simple padding and dividing **parent div** into _flex_ box.

#### Note - To compare the changes among the 3 methods of CSS, create a separate React app.

1.  Using inline CSS

    1. Let us give a background color and some margin on top and bottom to parent element and make its display as flex.
       > `<div style={ { margin:"10px 0", backgroundColor:"orange", display:"flex"}} >`
    2. Now add `background-color` to each **child div** with some padding and flex basis.
       > `<div style={{flexBasis:"25%",padding:"10px",backgroundColor:"green"}}>Child Div 1</div>`
    3. Your `App.js` will look like -

    ```
    <div className="App">
    {/* Start of Parent Div */}
      <div style={{margin:"10px 0",backgroundColor:"orange",display:"flex"}}>
      {/* Start of Child Divs */}
        <div style={{flexBasis:"25%",padding:"10px",backgroundColor:"green"}}>Child Div 1</div>
    	<div style= {{flexBasis:"25%",padding:"10px",backgroundColor:"red"}} >Child Div 2</div>
    	<div style={{flexBasis:"25%",padding:"10px",backgroundColor:"blue"}}>Child Div 3</div>
      	</div>
    	{/* End of Parent Div */}
    </div>
    ```

2.  Using external CSS

    1.  Create an external CSS file and add a parent class with same styling as you did in inline CSS. 2. Create a class for each **child element**. 3. Your CSS file will look like - - ```
        .parent {
        margin: 10px 0;
        display: flex;
        width: 100vw;
        background-color: darkorange;
        }
        .child1 {
        flex-basis: 25%;
        max-width: 25%;
        padding: 10px;
        background-color: green;
        }
        .child2 {
        flex-basis: 25%;
        max-width: 25%;
        padding: 10px;
        background-color: red;
        }

            	  .child3 {
            		flex-basis: 25%;
            		max-width: 25%;
            		padding: 10px;
            		background-color: blue;
            	  }

        ```
        .

        `
        .parent div {
        ;
        ;
        ;
        }

        {
        ;
        }

        {
        ;
        }

        {
        ;
        }

        `
        .
        `
        `
        `

        `
        ;
        ;
        '
        {
        return (
         <div className="App">
        }
        	<div className="parent">
        }
        >
        >
        >
        }
        >

        >
        );
        }

        ;

        `
        ```

3.  Using Bootstrap
    1. Let's add Bootstrap CDN in index.html file.
    2. Create a row and make child **div** as `col-3`.
    3. Since Bootstrap has different colors, we have to add `backgroundColor` as inline CSS to differentiate between child element **div**.
    4. `App.js` will look like -
    - ```
      <div className="App">
      		{/* Start of Parent Div */}
          <div className="row mt-2 mb-2" style={{backgroundColor:"darkorange"}}>
      		    {/* Start of Child Divs */}
      			 <div className="col-3 p-2" style={{backgroundColor:"green"}}>Child Div 1</div>
      			 <div className="col-3 p-2" style={{backgroundColor:"red"}}>Child Div 2</div>
      			 <div className="col-3 p-2" style={{backgroundColor:"blue"}}>Child Div 3</div>
      			 {/* End of Child Divs */}
      		</div>
      		{/* End of Parent Div */}
      </div>
      ```

### Common Mistakes and Misconceptions

- Combining different classes based on certain state/props.

  - When a component is receiving a prop and depending upon the value of that prop the CSS is rendered.
  - Let us take a component say `ButtonComp` which returns a button and adds a class `btn-class` as default class to the button in the component. Now if the component receives a prop as `color`, then an additional `error` class should be added to the button in that component.
  - If color is received as prop by the component then **className** will be
    - > `className = "error btn-class"`
  - else
    - > `className = "btn-class"`
  - > **Incorrect Way** - `<button className = { "btn-class" + this.props.color ? "error" : ""}>ButtonComp </button>`
    - Reason - ClassName only accepts a single string. The `+` operator before `this.props.color` will try to parse it to integer value. Therefore it always takes the `true` value and displays error class.
  - > **Incorrect Way** - `<button className = { <button className = {this.props.color ? "error" : "" + "btn-class" }>ButtonComp </button>`
    - Reason - ClassName takes a single string. Hence in case if the component receives a prop as _color_ `error` class will be displayed whereas if the `color` prop is not received by the component then an empty string `""` `+` `btn-class` makes the className as `btn-class`.
    - But our requirement was to add `error` class along with `btn-class`.
  - > **Correct Way** - `<button className = {this.props.color ? "btn-class error" : "btn-class" }>ButtonComp </button>`
  - Or If we use backticks, same can be written as -
  - > **Correct Way** - `` <button className = {`btn-class ${this.props.color ? "error" : ""}`}>ButtonComp </button> ``

- Wrong path provided while importing CSS.

  - If the path provided for external CSS file or module in the JSX file is incorrect then React throws an error i.e it will not be able to build the webpack. The error will look like -

    - > Failed to compile.

      ```

      	- > ./src/App.js
      ```

- CamelCase is supported in React for CSS styles. - Using **class** instead of **className** gives warning. - If any inline style property is used as **two words** like **background-color**, you will encounter an error. This is because these styles are not in a .css file. They are in JSX (Javascript extension for React), so it is actually a JS object; and JS cannot parse dashes. Also note the double curly-braces. The outer set of braces means “now instead of React JSX, what’s in these braces will be pure JavaScript.” `style={}`. Then inside is a JS object `{backgroundColor: “red”}`.

      	- > **Incorrect Way** - ``` <button style={{background-color:"red" }}> ```
      	- > **Correct Way** -   ``` <button style={{backgroundColor:"red"}} > ```

### Supplemental Materials

- [React Strap](https://reactstrap.github.io/) - Provides predefined components for React styled with Bootstrap.

  - Why to choose Reactstrap ?
    - Directly use components instead of Bootstrap typing classes and passing attributes as props. - Closely relate Bootstrap to React. - Example - > `<Button color="danger">Danger!</Button>`

- [Styled Components](https://styled-components.com/docs/basics#getting-started) is the result of wondering how we could enhance CSS for styling React component systems.
  - Why to choose Styled Components ?
    - No class name bugs: styled-components generates unique class names for your styles. You never have to worry about duplication, overlap or misspellings.
    - Simple dynamic styling: adapting the styling of a component based on its props or a global theme is simple and intuitive without having to manually manage dozens of classes. - Example
      `` import styled from 'styled-components' const Button = styled.button` background: transparent; border-radius: 3px; border: 2px solid palevioletred; color: palevioletred; margin: 0 1em; padding: 0.25em 1em; ` ``
