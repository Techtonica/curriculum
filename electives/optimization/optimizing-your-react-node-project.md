# Optimizing your React/NodeJS Project

### Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Intro to Optimization](/electives/optimization/optimization.md)
- [React Lessons](/react-js)
- [NodeJS](/node-js/node-js.md)
- [ExpressJS](/express-js/express.md)

### Motivation

We learned about **minification** in our previous lesson. Turns out the **React + Vite** tooling is able to do this for us via it's `build` process and we'll take a brief look at that.

As you may have seen already with [the Eventonica app](/projects/eventonica-updated), remote API requests can be slow! We're going to apply the caching optimization technique we learned in the previous lesson to help speed things up. We will do this in a couple of different ways based depending on specific use cases and constraints.

While React is pretty fast even if we use it naively, it's important to be aware of some of the details of how React works in order for your UI to stay snappy and responsive even when it becomes deeply nested and complex. We will learn a few techniques to optimize our components and measure the difference using react specific dev tools.

### Objectives

**Participants will be able to:**

- Have a useful understanding of what **React + Vite** provides in terms of minification.
- Measure application latency and using browser dev tools.
- Select appropriate caching strategies based on different user workflows and infrastructure constraints.
- Use react dev tools to inspect react component state and performance.
- Optimize how often React components are rendered.

### Specific Things to Learn

- What happens when you run `npm build` in a **React + Vite** project.
- How to measure AJAX request latencies with browser dev tools.
- Caching can happen in different layers (e.g. on the browser or on the backend)
- How to install and use React dev tools.
- The `shouldComponentUpdate` lifecycle method and `PureComponent` class (and their modern equivalent, `React.memo` for functional components).
- The React rendering reconciliation process.

### Materials

Review these materials:

- [Building with React + Vite](https://vite.dev/guide/) (8 min read)
- [Using the react dev tools profiler](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html) (10 min read)
- [Avoiding unnecessary re-renders in React](https://reactjs.org/docs/optimizing-performance.html#avoid-reconciliation) (just the 'Avoid Reconciliation' section - 5 min read)
- [React Reconciliation](https://reactjs.org/docs/reconciliation.html) (15 min read)

### Lesson

_Building (includes minification)_

You've already configured building for heroku deployment. Let's run a build on our local machine, check out what gets generated, and then use our Node.js backend to serve up a "production" build locally.

1. Run the `npm run build` command from somewhere in your repository.
2. Take a look at the contents of the newly created `dist` directory in the repository root directory, specifically what's inside the `assets` directory. You can read more about these files in the linked page in the [Materials](#materials) section.
3. You can modify your backend to serve up these built assets by adding these two lines:

```javascript
  // Serve any static files
  app.use(express.static(path.join(__dirname, "rel/path/to/dist-dir")));
  // Handle React routing, return all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "rel/path/to/dist-dir", "index.html"));
  });
}
```

Keep in mind that you need to modify the `rel/path/to/dist-dir` to the actual relative path to your build directory--something like: `../dist` (if your server is in a `server` folder and `dist` is in the project root).

4. Once you've configured your express server to serve up your built assets, go ahead and open up your browser to `http://localhost:5000` (or whatever port your express app is using), and make sure that it works just like you expect.

_Adding Eventful Search Caching to Your App_

We're going to be adding a component to your app, along with a separate server-side search API app that allows us to search for events. The code for both has been provided: `EventfulSearch.tsx` (located in `src/components/`) and `eventful-api-server.js` (located in `server/`). The code can be found in this [folder](/electives/optimization/optimizing-your-react-node-project/).

You should be able to run the API server with the following command:

```plaintext
$ npm run server
```

(For development with auto-reloading, use `npm run server:dev`).

The `EventfulSearch` component is already integrated into `src/App.tsx`. You can import and place the `<EventfulSearch />` somewhere else in your app components if it makes more sense for your project structure. You should now be able to see that component in your app. Don't worry about styling for now. You can add that later :)

Reload your app with the browser dev tools open. Notice the delay when searching for events, and use the network tab to see how long the AJAX requests are actually taking. Would be nice if we could cache results so that repeat searches are fast...

Let's optimize this for two different use cases:

1. We have very limited server-side resources, and so we don't want to cache the search results there. Could we cache the results on the browser? If so, how could we make sure that this doesn't consume too much of the browser user's memory? In what ways is this better than caching on the backend server? In what ways is this worse?

2. We have plenty of server-side resources, and we can cache results there. Let's use a server-side cache implementation that looks very similar to part 1 and just store our cache in the node application's memory. In the real world with an app that's serving millions of users, this wouldn't be a good strategy since we'll probably have multiple node processes ("web dynos" in Heroku) serving our app, and it would be wasteful for each process to have a separate copy of the cache. Instead, we would use a separate memory store service (like [memcached](https://www.memcached.org/) or [redis](https://redis.io/)) that each of the processes would have access to.

_Optimizing React_

By default a React component will re-render whenever it receives new **props** or if **setState** method is called with any argument. This is usually what you want, but if your component always renders the same thing with the same **props** and **state** (and it probably should) then that means that whenever its parent component re-renders, then the child will re-render too, even if its **props** and **state** are the same.

There's a component lifecyle method called `shouldComponentUpdate(nextProps, nextState)` that decides if a component will re-render. Its default implementation always returns `true`. We could implement this method ourselves, and make it so that it checks whether the `nextProps` and `nextState` are the same as the originals, and returns `false` if that's the case; however, for class components, React provides a component class `PureComponent` that does this automatically for us. For functional components, the equivalent and recommended approach is to wrap your component with `React.memo`. This means that we can just replace the `Component` part of our component class definitions with `PureComponent`, or use `React.memo` for functional components, and we get all the benefits of **props** and **state** checking!

However, we must take into account that the `shouldComponent` update method of `PureComponent` does only _shallow_ object comparison. This means that we need to be sure that we never mutate objects that we're using in our **state** or **props** because otherwise the changed objects will be considered to be the same, and our component won't re-render when it's supposed to. Instead, we need to create new objects whenever we call **setState** or pass new **props**. The React documentation has a great explanation of this [here](https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data).

The other technique you may have already used when optimizing React rendering performance is the use of the `key` attribute when generating a collection of sibling elements based on an array of data:

```javascript
<ul>
  {widgets.map((w) => (
    <li key={w.id}>{w.name}</li>
  ))}
</ul>
```

React uses the `key` attribute to keep track of which sibling elements stay the same, so that it doesn't have to destroy and re-insert all the DOM nodes that haven't changed. When creating a series of React elements, be sure to use a `key` that stays stable between re-orders, insertions, or deletions from the list. A good candidate for this is a unique ID that is associated with each of objects that are being used to generate the elements. A thorough discussion of this subject can be found in the React documentation link referenced in the [Materials](#materials) section.

Now let's put these React optimization techniques into practice!

1. Install [React Dev Tools](https://github.com/facebook/react-devtools) in your browser.
2. Reload your app with the tools installed, open the normal dev tools, and go to the "React" tab (all the way to the right).
3. Once the "React" tab is open, select the a "Profiler" tab within that.
4. Click the gray circular record button on the left, and this will begin profiling the render actions in your app.
5. Perform a single action like creating, editing or deleting one of your events, and then click the orange "stop" button in the dev tools. A flamegraph will appear with all the component renders and their associated time cost.
6. With a delete, create, or update of an event, only one `<Event />` element is really getting changed, the rest should stay the same. Compare that to how many (re-)renders are you seeing in your flame graph. Use the techniques we learned above (e.g., `React.memo` for functional components or `PureComponent` for class components) to try and make it so that your app only renders the modified/deleted/created element.
