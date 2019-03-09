# Optimizing your React/NodeJS Project

### Projected Time

TODO: Give time estimates
Example: 30-45 minutes
- Lesson: ? min
- Guided Practice: ?-? min
- Independent Practice: ? min
- Check for Understanding: ?-? min

### Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Intro to Optimization](/optimization/optimization.md)
- [React](/react-js/react.md)
- [NodeJS](/node-js/node-js.md)
- [ExpressJS](/express-js/express.md)

### Motivation

We learned about **minification** in our previous lesson.  Turns out the **create-react-app** tooling is able to do this for us via it's `build` process and we'll take a brief look at that.

While React is pretty fast even if we use it naively, it's important to be aware of some of the details of how React works in order for your UI to stay snappy and responsive even when it becomes deeply nested and complex.  We will learn a few techniques to optimize our components and measure the difference using react specific dev tools.

As you may have seen already with your Eventonica app, remote API requests can be slow!  We're going to apply the caching optimization technique we learned in the previous lesson to help speed things up.  We will do this in a couple of different ways based depending on specific use cases and constraints.

### Objectives

**Participants will be able to:**

- Have a useful understanding of what **create-react-app** provides in terms of minification.
- Use react dev tools to inspect react component state and performance.
- Optimize how often React components are rendered.
- Measure application latency and using browser dev tools.
- Select appropriate caching strategies based on different user workflows and infrastructure constraints.

### Specific Things To Teach

- What happens when you run `npm build` in a **create-react-app** project.
- How to install and use React dev tools.
- The React rendering reconciliation process and `shouldComponentUpdate`/`PureComponent`
- How to measure AJAX request latencies with browser dev tools.
- Caching can happen in different layers (e.g. on the browser or on the backend)

### Materials

- [Building with create-react-app](https://facebook.github.io/create-react-app/docs/production-build)
- [Using the react dev tools profiler](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)
- [Avoiding unnecessary re-renders in React](https://reactjs.org/docs/optimizing-performance.html#avoid-reconciliation)

### Lesson

_Building (includes minification)_

You've already configured building for heroku deployment.  Let's run a build on our local machine, check out what gets generated, and then use our Node.js backend to serve up a "production" build locally.

1. Run the `npm run build` command from somewhere in your repository.
2. Take a look at the contents of the newly created `build` directory in the repository root directory, specifically what's inside the `static` and `static/js` directories.  You can read more about these files in the linked page in the [Materials](#materials) section.
3. You can modify your backend to serve up these built assets by adding these two lines:
```javascript
  // Serve any static files
  app.use(express.static(path.join(__dirname, "rel/path/to/build-dir")));
  // Handle React routing, return all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "rel/path/to/build-dir", "index.html"));
  });
}
```
Keep in mind that you need to modify the `rel/path/to/build-dir` to the actual relative path to your build directory--something like: `../client/build`.

4. Once you've configured your express server to serve up your built assets, go ahead and open up your browser to `http://localhost:5000` (or whatever port your express app is using), and make sure that it works just like you expect.

_Optimizing React_

Will fill this out later.

_Adding Caching to Your App_

Reload your Eventonica React app with the browser dev tools open.  Notice the delay when searching for events, and use the network tab to see how long the AJAX requests are actually taking.  Would be nice if we could cache results so that repeat searches are fast...

Let's optimize this for two different use cases:

1. We have very limited server-side resources, and so we don't want to cache the search results there.  Could we cache the results on the browser?  If so, how could we make sure that this doesn't consume too much of the browser user's memory?  In what ways is this better than caching on the backend server?  In what ways is this worse?

2. We have plenty of server-side resources, and we can cache results there.  Let's use a server-side cache implementation that looks very similar to part 1 and just store our cache in the node application's memory.  In the real world with an app that's serving millions of users, this wouldn't be a good strategy since we'll probably have multiple node processes ("web dynos" in Heroku) serving our app, and it would be wasteful for each process to have a separate copy of the cache.  Instead, we would use a separate memory store service (like [memcached](https://www.memcached.org/) or [redis](https://redis.io/)) that each of the processes would have access to.