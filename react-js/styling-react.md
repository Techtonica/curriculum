# Styling in React

### Projected Time : 1 hr
- Lesson: 40 mins.
- Guided Practice: 20 mins.

### Prerequisites
- [CSS Lesson](/css/css)
- [Bootstrap Lesson](/bootstrap/bootstrap)
- [React Lesson](react)


### Motivation

Styling has been one of the building blocks of web development. Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. React only provides a virtual DOM, whereas the presentation part still lies with CSS.

### Objectives

- Styling in JS Framework.
- Inline styling and using external Stylesheet.
- Bootstrap in React.	 

### Specific Things To Learn

- Defining styles as objects.
- Importing stylesheets into react application.

### Materials

- [Video: Styling of React App in 3 different ways](https://www.youtube.com/watch?v=j5P9FHiBVNo) - Using external CSS, internal and CSS modules.
- [Video: Bootstrap in React](https://www.youtube.com/watch?v=wdbzLi0tWq0) - Bootstrap in React can be used using CDN or by installing the package. 

### Lesson

- [Slides: CSS in React ](https://drive.google.com/open?id=15oauTP4afibqMvNKW5XgVC1qraYUKxY-)

### Guided Practice

> #### Let's create a simple div, and style it using inline CSS and flexbox.  Then we will achieve same using External CSS and Bootstrap separately.

- First thing we need to do is create a react application.
	- Create a react app using create react app command. `npx create-react-app`.
    - This will create a simple react app , and now we will start making changes to this app.
	- First of all get rid of all the unnecessary stuff showing on DOM , remove all the lines in render of `App.js`. 
	- Now we create a simple div **parent div** which will contain few div as *child* elements.
	- After creating that , your ``App.js`` will look like this 
	 - ```
		import React from 'react';
		import './App.css';

		function App() {
  			return (
    				<div className="App">
      					{/* Start Parent Div */}
						  <div>
	  						{/* Start of Child Divs */}
							<div>Child Div 1</div>
							<div>Child Div 2</div>
							<div>Child Div 3</div>
							{/* End of Child Divs */}
	  					</div>
	 					{/* End of Parent Div */}
					</div>
  				);
		}

		export default App;
		```
 Now we will be adding CSS to this App to differentiate **div** and achieve this one by one using
 - Inline CSS 
 - External CSS file and
 - then by using Bootstrap.

 To Differentiate we will add background color simple padding and dividing **parent div** into *flex* box.

#### Note - To compare the changes among the 3 methods of CSS, create a separate react app.

1. Using Inline CSS 
    1. Let us give a background color and some margin on top and bottom to parent element and make its display as flex.  
	 > ``` <div style={ { margin:"10px 0", backgroundColor:"orange", display:"flex"}} > ``` 
    2. Now add ``background-color`` to each **child div** with some padding and flex basis.
	> ``` <div style={{flexBasis:"25%",padding:"10px",backgroundColor:"green"}}>Child Div 1</div> ``` 
	3. Your ``App.js`` will look like -

	```
       <div className="App">
	   		{{/* Start of Parent Div */}}
      		<div style={{margin:"10px 0",backgroundColor:"orange",display:"flex"}}>
			{{/* Start of Child Divs */}}  
			<div style={{flexBasis:"25%",padding:"10px",backgroundColor:"green"}}>Child Div 1</div>
			<div style= {{flexBasis:"25%",padding:"10px",backgroundColor:"red"}} >Child Div 2</div>
			<div style={{flexBasis:"25%",padding:"10px",backgroundColor:"blue"}}>Child Div 3</div>
	  		</div>
			{{/* End of Parent Div */}}  
		</div>
      ```
2. Using External CSS 
    1. Create an external CSS file and add a parent class with same styling as you did in Inline CSS.
	2. Create a class for each **child element**.
	3. Your CSS file will look like -
		- ```
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
	#### Note - CSS Selectors can be used as an alternative, instead of providing different classes to each child element. Background color can be added in different class to child *div* elements.
	- For Example - 
	 ```
		.parent div {
			flex-basis: 25%;
			max-width: 25%;
			padding: 10px;
		}

		.redColor {
		background-color: red;
	}
		.greenColor {
		background-color: green;
	}
		.blueColor {
		background-color: blue;
	}

	```
	4. Now we import this external file in ``App.js`` and add classes to **div**.
	 - > ``` import './external.css```
	-  > ``` <div className="parent"> </div> ```
	-  > ``` <div className="child1">Child Div 1 </div> ```
	   - Finally your `App.js` will look like 
	```
		import React from 'react';
		import './App.css';
		import './external.css'
		function App() {
  		return (
    	<div className="App">
			{/* Start of Parent Div */}
      		<div className="parent">
				{/* Start of Child Divs */}
				<div className="child1">Child Div 1</div>
				<div className="child2" >Child Div 2</div>
				<div className="child3">Child Div 3</div>
				{/* End of Child Divs */}
	  		</div>
			{/* End of Parent Div */}  
		</div>
  		);
	}

	export default App;

	```

3. Using Bootstrap
	1. Let's add Bootstrap CDN in index.html file.
	2. Create a row and make child **div** as `col-3`.
	3. Since Bootstrap has different colors, we have to add `backgroundColor` as Inline CSS to differentiate between child element **div**.
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


### Common Mistakes and their Correction

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
  
  - If the path provided for external CSS file or module in the JSX file is incorrect then react throws an error i.e it will not be able to build the webpack. The error will look like -
    - > Failed to compile.

	- > ./src/App.js
		Module not found: Can't resolve './css/external.css' in 'C:\Users\Ienovo\Desktop\GSSOC 20\newreactapp\src' 

- CamelCase is supported in ReactJS for CSS styles.
	- Using **class** instead of **className** gives warning.
	- If any inline style property is used as **two words** like **background-color**, you will encounter an error.  This is because these styles are not in a .css file. They are in JSX (Javascript extension for React), so it is actually a JS object; and JS cannot parse dashes. Also note the double curly-braces. The outer set of braces means “now instead of React JSX, what’s in these braces will be pure JavaScript.”  `style={}`. Then inside is a JS object `{backgroundColor: “red”}`.

	- > Incorrect Way - ``` <button style={{background-color:"red" }}> ```
	- > Correct Way   ``` <button style={{backgroundColor:"red"}} > ```

	
### Supplemental Materials
- [React Strap](https://reactstrap.github.io/) - Provides predefined components for React styled with Bootstrap.
  - Why to choose Reactstrap ?
    - Directly use components instead of  bootstrap typing classes and passing attributes as props.
	- Closely relate bootstrap to React.
	- Example - 
	> ``` <Button color="danger">Danger!</Button> ```

- [Styled Components](https://styled-components.com/docs/basics#getting-started) is the result of wondering how we could enhance CSS for styling React component systems. 
  - Why to choose Styled Components ?
    - No class name bugs: styled-components generates unique class names for your styles. You never have to worry about duplication, overlap or misspellings.
    - Simple dynamic styling: adapting the styling of a component based on its props or a global theme is simple and intuitive without having to manually manage dozens of classes.
	- Example 
	```	
	import styled from 'styled-components'
	const Button = styled.button`
	background: transparent;
  	border-radius: 3px;
  	border: 2px solid palevioletred;
  	color: palevioletred;
  	margin: 0 1em;
  	padding: 0.25em 1em;
	`
	```