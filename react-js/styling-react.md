# Styling in React

### Projected Time : 1 hr
- Lesson: 40 mins.
- Guided Practice: 20 mins.

### Prerequisites
- [CSS Lesson](../css/css.md)
- [Bootstrap Lesson](../bootstrap/bootstrap.md)
- [React Lesson](./react.md)


### Motivation

Styling has been one of the building blocks of web development. Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. React only provides a virtual DOM , whereas the presentation part still lies with CSS.

### Objectives

- Styling in JS Framework.
- Inline styling and using external Stylesheet.
- Bootstrap in React.	 

### Specific Things To Learn

- Defining styles as objects.
- Importing stylesheets into react application.

### Materials

- [Styling of React App in 3 different ways](https://www.youtube.com/watch?v=j5P9FHiBVNo) - Using external css, internal and css modules.
- [Bootstrap in React](https://www.youtube.com/watch?v=wdbzLi0tWq0) - Bootstrap in React can be used using CDN or by installing the package. 

### Lesson

- [Techtonica sildes: CSS in React ](https://drive.google.com/open?id=15oauTP4afibqMvNKW5XgVC1qraYUKxY-)

### Guided Practice

1. Inline And External CSS
  - App.js
    - Creating a simple div using and add custom styling to it.
    - ```
      <div className="my-div">
		<div style={{backgroundColor:"red"}}>Inner Div 1</div>
		<div style={{backgroundColor:"blue"}}>Inner Div 2</div>
		<div style={{backgroundColor:"green"}}>Inner Div 3</div>
	  </div>
      ```
  - CSS 
    - Make the *div* inside *my-div* class as flex box and add a little bit of padding.
    - ```
       .my-div
	   {
	     margin: 10px 0;
	     display: flex;
	     width: 100vw;
	     background-color: darkorange;
       }
      .my-div div
	  {
	   flex-basis: 25%;
	   max-width: 25%;
	   padding: 10px;
      }
      ```
2. Using Bootstrap
  - App.js
    - ```
	    <div className="row mt-2 mb-2" style={{backgroundColor:"darkorange"}}>
		<div className="col-3 p-2" style={{backgroundColor:"red"}}>Inner Div 1</div>
		<div className="col-3 p-2" style={{backgroundColor:"blue"}}>Inner Div 2</div>
		<div className="col-3 p-2" style={{backgroundColor:"green"}}>Inner Div 3</div>
		</div>
      ```


### Common Mistakes & Misconceptions

- Combining different classes based on certain state/props.
  - When a component is receiving a prop and depending upon the value of that prop the CSS is rendered.
  ```
	<button className = {this.props.color ? "error" : "" + "btn-class" }>ButtonComp </button>
  ```
  - If color is received as prop by the component then **className** will be 
    - > className = "error btn-class" 
  - else
    - > className = "btn-class"

- Wrong path provided while importing CSS.
  
  - If the path provided for external css file or module in the JSX file is incorrect then react throws an error i.e it will not be able to build the webpack.

- CamelCase is supported in ReactJS for CSS styles.
	- using **class** instead of **className** gives warning.
	- error encounters if any inline CSS property is used as **two words** like **background-color** because inline CSS is treated as an object in react.
	- > Incorrect Way - ``` <button style={{background-color:"red" }}> ```
	- > Correct Way   ``` <button style={{backgroundColor:"red"}} > ```

	
### Supplemental Materials
- [React Strap](https://reactstrap.github.io/) - Provides predefined components for React styled with Bootstrap.
- [Styled Components](https://styled-components.com/docs/basics#getting-started) is the result of wondering how we could enhance CSS for styling React component systems. 