TODO: needs formatting fixes

This thing

PREREQUISITE KNOWLEDGE
Intermediate JS
DOM
Classes (in any language)
What a Framework is
Intermediate HTML
Intermediate node.js

Have you ever started a project and felt overwhelmed by the scope of it? A lot of web development can feel like that. React can help! 

If I told you to ‘build a chat room’ — that’s a pretty big piece of architecture to abstractly think about, right? What does a chat room mean to me? Where do you start? 

React helps you break down these larger ideas into smaller components — bite sized chunks that help you imagine your project more effectively, _and_ help you package individual parts of your code that you may see yourself duplicating over the course of your app into easily modular chunks. These are called Components. 

Let’s take a real world, non-techy example to start with. Let’s say I was your English teacher and I told you to write and correctly format an essay. What parts are there in a well formatted essay? 

Well, there is a heading, a title, an introduction, a thesis, body paragraphs, and a conclusion. Of course, in a real essay, there are little nit-picky things like footnotes and a bibliography and page numbers, etc, but let’s call those stretch goals ;). 

In React Land, each of those parts of an essay might be a Component. You might have a Heading component, a Title component, an Introduction component … etc.

React is generally more concerned with the common elements of a Component — in this case, perhaps, the formatting or structure of a part of an essay than the content. You know that your Title component should involve some centered text, for example. That usually stays the same across all Titles. We can do that! Or that the beginning of a Body Paragraph component should have indented text, and that all of the text should be aligned to the left. These two components have different concerns, and this is reflected in their individual components. 

The structure for your essay may look like this:

<Heading />
<Title />
<Introduction />
<Evidentiary Paragraph />
<Evidentiary Paragraph />
<Evidentiary Paragraph />
<Conclusion /> 

Notice that these components look similar to HTML components you may have encountered previously. Just like HTML, you can also put child components in parent components. Let’s get way more granular with our Essay format. 

<Essay>
	<Heading/>
	<Title />
	<Introduction>
		<Thesis />
	</Introduction>
	<Evidentiary Paragraph>
		<Evidence />
		<Analysis />
		<Evidence />
		<Analysis />
	</Evidentiary Paragraph>
	<Evidentiary Paragraph>
		<Evidence />
		<Analysis />
		<Evidence />
		<Analysis />
	</Evidentiary Paragraph>
	<Evidentiary Paragraph>
		<Evidence />
		<Analysis />
		<Evidence />
		<Analysis />
	</Evidentiary Paragraph>
	<Conclusion />
</Essay> 

Where React really shines is when we’re using Components multiple times. Already, we can see some of these components reused. The formatting for your Evidence may always be the same. It’ll probably always be a quote from some leading scholar, followed by a direct to the bibliography. You can use the Evidence component formatting every time and simply fill in the specific text as appropriate. 

Even better (or worse as it may be), let’s say that I, as your sadistic English Instructor, assign you two properly formatted essays at once (oh no!). While it can’t help you with the actual research and analysis that goes into your essays, React has you covered for your formatting. You can reuse those same components that you made for your first essay to format your second essay, because those Components are modular, reusable parts. React _wants_ you to write less code and make your job less painful. 

Let’s dive deeper into what makes a component. 

We scaffold the component with Javascript Class architecture. Maybe you’ve seen a class designation before — something like this? 

class Title {

	<some stuff goes here depending on what you want your class to do>

}

We’re going to build our Component using the React Component class architecture. 

class Title extends Component {

}

Inside a Component class object, there is one method that’s always there: the render() method. The render method tells Javascript what to compile into a visual representation of HTML for the DOM. For our Title component, it may look like this:

class Title extends Component {

	render () {
		return <div>”Here’s my title!”</div>
	}
}

Looks just like a regular ol’ function that returns something, right? Nice and dependable. 

We have to stop here for a second though, because I _must_ clarify something. That syntax up there that looks like HTML? It’s not. We don’t want to render HTML in our Javascript component. That’s gross. Fortunately, React comes with a rendering language that will compile your code to HTML that _looks just like HTML_. Say hello to JSX. It looks like HTML, it talks and walks like HTML, but under the hood, it’s doing so much more. Don’t worry about that for now though. If the very thought is overwhelming, just pretend you’re writing HTML. Again, I must reiterate that you’re not, but we can pretend. ;) 

So once I’ve built my component, I can call it in code just like a HTML (but it’s not HTML ;) tag) just like this:

<Title /> 

For the purposes of Javascript and your UI, that will render to a single div with “Here’s my title!” Written inside. Again, there’s a lot going on under the hood — you can read about it here if you really must:

<link on how react really works> 

You can also declare functions in a Component, just like you can methods in any class. Let’s say that I want to turn my title into a clickable button. One might look like this:

class Title extends Component {
	const clickMe = () => {
		console.log(“I’ve been clicked!”)
	}

	render () {
		return <button onClick={this.clickMe}>”Here’s my title!”</button>
	}
}

So here, if my button-title is clicked, it should log “I’ve been clicked!” to the console. Neat, huh? A couple of things we need to note: 

1.) Any function declarations go within the class but before the render. The render method should be the last thing in your Component. 

2.) You can call your functions, once you’ve established them, in your render method. You can do this by asking for the property that exists on the object ‘this’. ‘this’ is a construct of a Javascript class. Our function exists on this as this.clickMe. You can see that I’ve called it to represent the onClick event on the render. You can use this the same way you might define any javascript function functionality in play with your DOM. 

Now you can build very basic React components. 

Next Time: state and props (i.e. the other great advantage to a react component). 
