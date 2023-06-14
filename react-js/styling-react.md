# Styling in React

### Week 4 Keywords and Questions

- What is JSX and how is it different than HTML?
- What are syntactic differences between HTML and JSX?
- What are the two ways to add style to a component in React?
- How do you import stylesheets into React application?

### Prerequisites

- [CSS Lesson](/web/css.md)
- [React Part 1 - Intro](./react-part-1-intro.md)

### Motivation

Styling has been one of the building blocks of web development. Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. React only provides a virtual DOM, whereas the presentation part still lies with CSS.

### Objectives

- Styling in React JSX.
- Inline styling and using external stylesheet.

### Specific Things To Learn

- Defining styles as objects.
- Importing stylesheets into React application.

### Materials

- [Video: Styling of React App in 3 different ways](https://www.youtube.com/watch?v=j5P9FHiBVNo) - Using inline CSS, external CSS and CSS modules.

## Lesson

- Look through these [slides: CSS in React ](https://docs.google.com/presentation/d/15SRalCJq0HaZ7O8LIngmDVqxDSU0GBVzOhpF1Q0eQOw/edit#slide=id.g827758f8ad_0_333)

> Note: No need to watch any sections on React Bootstrap, since we've recently removed Bootstrap from the curriculum.

### Guided Practice

#### Let's create a simple div, and style it using inline CSS and flexbox. Then we will achieve the same using external CSS instead.

- Fork this [CodePen starter code](https://codepen.io/alodahl/pen/xxdrqbG) to your account and name it `Styling In React`.
- First of all get rid of all the unnecessary stuff showing on DOM , remove all the lines in render of `App.js`. - Now we create a simple div **parent div** which will contain few div as _child_ elements. - After creating that , your `App.js` will look like this -

```javascript
const App = () => {
  return (
    <div className="App">
      <div>
        <div>Child Div 1</div>
        <div>Child Div 2</div>
        <div>Child Div 3</div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

- Now we will be adding CSS to this App to differentiate the **div** elements and achieve this one by one using

  - Inline CSS
  - External CSS file

  To differentiate, we will add background color, simple padding and divide the **parent div** into _flex_ box.

  #### Note - To compare the changes among the 3 methods of CSS, create separate React apps.

  - Using inline CSS:

    1. Let us give a background color and some margin on top and bottom to parent element and make its display as flex.
       ```javascript
       <div style={{margin:"10px 0", backgroundColor:"orange", display:"flex"}} >
       ```
    2. Now add `backgroundColor` to each **child div** with some padding and flex basis.

    ```javascript
    <div
      style={{ flexBasis: '25%', padding: '10px', backgroundColor: 'green' }}
    >
      Child Div 1
    </div>
    ```

    3. Your `App.js` will look like:

       ```javascript
       <div className="App">
         {/* Start of Parent Div */}
         <div
           style={{
             margin: '10px 0',
             backgroundColor: 'orange',
             display: 'flex'
           }}
         >
           {/* Start of Child Divs */}
           <div
             style={{
               flexBasis: '25%',
               padding: '10px',
               backgroundColor: 'green'
             }}
           >
             Child Div 1
           </div>
           <div
             style={{
               flexBasis: '25%',
               padding: '10px',
               backgroundColor: 'red'
             }}
           >
             Child Div 2
           </div>
           <div
             style={{
               flexBasis: '25%',
               padding: '10px',
               backgroundColor: 'blue'
             }}
           >
             Child Div 3
           </div>
         </div>
         {/* End of Parent Div */}
       </div>
       ```

  - Using external CSS

    1.  In your CSS file in the CodePen, add a parent class with same styling as you did in inline CSS.
    2.  Create a class for each **child element**.
    3.  Your CSS file will look like - -

        ```css
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

    4.  Your `App.js` will look like:
        ```javascript
        return (
          <div className="App">
            {/* Start of Parent Div */}
            <div className="parent">
              {/* Start of Child Divs */}
              <div className="child1">Child 1</div>
              <div className="child2">Child 2</div>
              <div className="child3">Child 3</div>
            </div>
            {/* End of Parent Div */}
          </div>
        );
        ```

### Common Mistakes and Misconceptions

1. Avoid these mistakes when combining different classes based on certain state/props.

   - When a component is receiving a prop and CSS is rendered depending upon the value of that prop.
   - Let us take a component, say `ButtonComp`, which returns a button and adds a class `btn-class` as default class to the button in the component. Now if the component receives a prop as `color`, then an additional `error` class should be added to the button in that component.
     - If color is received as a prop by the component then `className = "error btn-class"`
     - else `className = "btn-class"`
   - > **Incorrect Way**
     ```javascript
     <button className={'btn-class' + props.color ? 'error' : ''}>
       ButtonComp{' '}
     </button>
     ```
     - Reason - ClassName only accepts a single string. The `+` operator before `props.color` will try to parse it to an integer value. Therefore it always takes the `true` value and displays the error class.
   - > **Incorrect Way**
     ```javascript
     <button className = { <button className = {props.color ? "error" : "" + "btn-class" }>ButtonComp </button>
     ```
     - Reason - ClassName takes a single string. Hence if the component receives a prop as _color_, the `error` class will be displayed, whereas if the `color` prop is not received by the component then an empty string `""` `+` `btn-class` makes the className `btn-class`.
       - However, our requirement was to add not only the `error` class but also `btn-class` when a `color` prop is received.
   - > **Correct Way**
     ```javascript
     <button className={props.color ? 'btn-class error' : 'btn-class'}>
       ButtonComp{' '}
     </button>
     ```
     Or if we use backticks, it can be written as -
   - > **Alternate Correct Way**
     ```javascript
     <button className={`btn-class ${props.color ? 'error' : ''}`}>
       ButtonComp{' '}
     </button>
     ```

2. Wrong path provided while importing CSS in your file structure.

   - If the path provided for external CSS file or module in the JSX file is incorrect then React throws an error, i.e. it will not be able to build the webpack. The error will look like -

     ```shell
     - > Failed to compile.
     - > ./src/App.js
     ```

3. Forgetting to use camelCase for CSS styles in React JSX.

   - Using **class** instead of **className** gives a warning.
   - If any inline style property is used as **two words** like **background-color**, you will encounter an error. This is because these styles are not in a .css file. They are in JSX (Javascript extension for React), so it is actually a JS object; and JS cannot parse dashes. Also note the double curly braces. The outer set of braces means “now instead of React JSX, what’s in these braces will be pure JavaScript.” `style={}`. Then inside is a JS object `{backgroundColor: “red”}`.

     - > **Incorrect Way**:

       ```javascript
         <button style={{background-color:"red" }}>
       ```

     - > **Correct Way**:
       ```javascript
         <button style={{backgroundColor:"red"}} >
       ```

### Supplemental Materials

More advanced CSS tools used in real life include:

- Organizing your CSS with [Sass](/electives/sass.md)

- [Materialize CSS](https://www.mockplus.com/blog/post/css-framework#Materialize-CSS) framework is slick and pretty widely used. They have a great "atomic" library of ready-to-use classes that are really well organized.

- [Tailwind CSS](https://www.mockplus.com/blog/post/css-framework#Tailwind-CSS) framework starts with a large set of classes out of the box that you can then customize.

- [Styled Components](https://styled-components.com/docs/basics#getting-started) is the result of wondering how we could enhance CSS for styling React component systems.
  - Why choose Styled Components?
    - No class name bugs: styled-components generates unique class names for your styles. You never have to worry about duplication, overlap or misspellings.
    - Simple dynamic styling: adapting the styling of a component based on its props or a global theme is simple and intuitive without having to manually manage dozens of classes.
    - Example
    ```javascript
    import styled from 'styled-components';
    const Button = styled.button`
      background: transparent;
      border-radius: 3px;
      border: 2px solid palevioletred;
      color: palevioletred;
      margin: 0 1em;
      padding: 0.25em 1em;
    `;
    render(<Button>Do something</Button>);
    ```
