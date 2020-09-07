# JavaScript

## Projected time

About 30-45 minutes
Lesson: 10 min
Guided Practice:15 min
Check for Understanding:20 min

## Prerequisites

There is not touch prerequisites for learning JavaScript. Here are some of the prerequisite for learning JavaScript:

+ Basic programming knowledge. Knowledge of core Java sufficient.

+ You should have knowledge of HTML. Check [HTML tutorials here.](https://github.com/Techtonica/curriculum/blob/main/web/html.md)

### Motivation

Why it is worth learning JavaScript?

+ **Implement Client-Side Scripts:** The web developers can easily write custom client-side scripts in JavaScript, and integrate the scripts seamlessly into HTML. They can further use JavaScript to make the web pages interactive, respond to users instantaneously, and create richer user interfaces, without less server interaction and reduces server load.
+ **Responsive Web Design:** Most developers nowadays adopt responsive web design to make a website accessible and look good across multiple browsers, devices and browsers.The developers must use JavaScript to optimize web pages for mobile devices.
+ **Google AMP Project:** Google has initiated the Accelerated Mobile Pages (AMP) project to create websites that deliver richer user experience across varying mobile devices. Google has combined several optimization techniques to increase the loading speed of mobile web pages directly.The programmers have to use JavaScript while optimizing websites for mobile devices with AMP.
[For more reference](https://medium.com/@mindfiresolutions.usa/how-important-is-javascript-for-modern-web-developers-2854309b9f52)

## Lesson
React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.
React works in declarative code.
[For more reference](https://github.com/Techtonica/curriculum/tree/main/react-js)

1. [Tutorial Using slide](https://www.slideshare.net/asllani94/introduction-to-react-js-63948385)

##### Example
1. **React Component Example**
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Faisal Arkan" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
`name="Faisal Arkan"`will give value into `{props.name}` from `function Welcome(props)` and returning a component that has given value by `name="Faisal Arkan"`. After that React will render the element into html.

2. **Class Type Components**
```
class Cat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      humor: 'happy'
    }
  }
  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <p>
          {this.props.color}
        </p>
      </div>
    );
  }
}
```

3. **Functional Components**
```
const Cat = props => {
  return (  
    <div>
      <h1>{props.name}</h1>
      <p>{props.color}</p>
    </div>;
  );
};
```
[For more reference](https://www.freecodecamp.org/news/react-examples-reactjs/ )


## Common Mistake and Misconceptions

1.  **Creating memory leaks**
Memory leaks are almost inevitable JavaScript problems if you’re not consciously coding to avoid them. There are numerous ways for them to occur, so we’ll just highlight a couple of their more common occurrences.

#### Example:
```
var theThing = null;
var replaceThing = function () {
  var priorThing = theThing;  // hold on to the prior thing
  var unused = function () {
    // 'unused' is the only place where 'priorThing' is referenced,
    // but 'unused' never gets invoked
    if (priorThing) {
      console.log("hi");
    }
  };
  theThing = {
    longStr: new Array(1000000).join('*'),  // create a 1MB object
    someMethod: function () {
      console.log(someMessage);
    }
  };
};
setInterval(replaceThing, 1000);    // invoke `replaceThing' once every second
```
If you run the above code and monitor memory usage, you’ll find that you’ve got a massive memory leak, leaking a full megabyte per second! And even a manual GC doesn’t help. So it looks like we are leaking `longStr` every time `replaceThing` is called. But why?

Let’s examine things in more detail:

Each `theThing` object contains its own 1MB `longStr` object. Every second, when we call `replaceThing`, it holds on to a reference to the prior `theThing` object in `priorThing`. But we still wouldn’t think this would be a problem, since each time through, the previously referenced `priorThing` would be dereferenced (when `priorThing` is reset via `priorThing` = `theThing`;). And moreover, is only referenced in the main body of `replaceThing` and in the function unused which is, in fact, never used.

So again we’re left wondering why there is a memory leak here!?

To understand what’s going on, we need to better understand how things are working in JavaScript under the hood. The typical way that closures are implemented is that every function object has a link to a dictionary-style object representing its lexical scope. If both functions defined inside `replaceThing` actually used `priorThing`, it would be important that they both get the same object, even if `priorThing` gets assigned to over and over, so both functions share the same lexical environment. But as soon as a variable is used by any closure, it ends up in the lexical environment shared by all closures in that scope. And that little nuance is what leads to this gnarly memory leak.

[For more Reference](https://www.toptal.com/javascript/10-most-common-javascript-mistakes)

### Guided Practice

1. **Reusability is important, so keep creation of new components to the minimum required**

```
class IconButton extends React.Component {
  [...]
  render() {
    return (
      <button onClick={this.props.onClick()}>
        <i class={this.props.iconClass}></i>
      </button>
    );
  }
}

```
2. **Consolidate duplicate code – DRY your code**

```
const buttons = ['facebook', 'twitter', 'youtube'];

return (
  <div>
    {
      buttons.map( (button) => {
        return (
          <IconButton
            onClick={doStuff( button )}
            iconClass={button}
          />
        );
      } )
    }
  </div>
);
```
3. ***Separate stateful aspects from rendering***

```
import RenderTable from './RenderTable';

class Table extends Component {
  state = { loading: true };

  render() {
    const { loading, tableData } = this.state;
    return loading ? <Loading/> : <RenderTable data={tableData}/>;
  }

  componentDidMount() {
    fetchTableData().then( tableData => {
      this.setState( { loading: false, tableData } );
    } );
  }
}
```
[For more reference](https://www.codeinwp.com/blog/react-best-practices/)
### Independent Practice

[Create-react-app](https://medium.com/in-the-weeds/learning-react-with-create-react-app-part-1-a12e1833fdc)

### Challenges
1. [Exercise for JavaScript](https://www.w3resource.com/javascript-exercises/)
2. Develop a weather app using javascript?
3. Make a calculator using javascript?

### Supplementary Materials

1. https://medium.com/leanjs/introduction-to-react-3000e9cbcd26
2. https://www.robinwieruch.de/react-folder-structure
3. https://reactjs.org/community/examples.html
4. https://www.codementor.io/@j2jensen/top-ten-things-beginners-must-know-about-javascript-aaeabailp
