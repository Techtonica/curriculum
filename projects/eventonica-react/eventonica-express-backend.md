# Eventonica - Part 5 - Express API

### Overview

Up until now in your Eventonica project, all the data is deleted every time you refresh the page (unless you've added localStorage) and you can't have multiple users of your app share data. That's because the data you're storing is stored in your web browser. In this part of the Eventonica project, we'll create an Express API to store the data and serve it to all users of your site.

### Wait, what is an API?

There is an [Intro to API / Backend](/electives/1_intro_to_backend.md) lesson but it's a little theoretical so let's try and be succinct here. For our purposes, API and backend are synonymous terms but you'll probably find different meanings later in your career.

In your earlier iterations of the project, all your JavaScript ran in the browser. Now we are going to still run _some_ code in the browser, such as to display data as HTML. But now we're going to also run Node that will run a entirely separate copy of your JavaScript. In Unix terms, these are different processes (see [operating systems](../../dev-tools/operating-systems.md) for a refresher on processes). In this case, it will also be running on your laptop, but you could run the server on another laptop or really anywhere in the world connected to the Internet.

### Remotely Executing a Function

How do you call a function in a separate instance of JavaScript? You can't just say `server.function()`. There is no `server` variable (or any way to create one) that would be able to access the other instance. Instead you will create a REST API that will turn the logic you want to run into HTTP routes.

#### Example API Endpoint

For example, in your code before, to get all the events, you might've had a function like `app.getAllEvents()`. Instead, we will create an API endpoint like `http://127.0.0.1:3000/events` that returns all the current events as a JSON response.

#### Why is this better?

After following this project, you will likely move the portions of your JS that dealt with data onto the server and the server code will still actually end up just calling `app.getAllEvents()` anyway, so why are we adding all these things in the middle to complicate everything? Why is this worth it?

- Before, each tab had it's own copy of events. Now they can be stored in one location so all users can see the same data and interact with it
- Centralizing the logic allows us to add a database so the data will live on even if the server is restarted or crashes
- Turning the logic of our system into a REST API makes it way more flexible

  - you could call it using a non-JavaScript client such as Postman or an app written in a different language (like an Android app in Java). All modern languages speak HTTP.

So let's get to it!

### Instructions

_Pro Tip_ - the [morgan middleware](https://www.npmjs.com/package/morgan) is nice to log all requests to your server

#### Step 0

Before doing anything else, make a new folder, `Eventonica-Part-5` and seed it with a copy of your Part 4. This will be very helpful to have a reference point as you transform your app. It will get messier before it gets cleaner.

Note: In real apps, you would use a database instead of just storing the data "in memory" in Express. This lesson is for you to learn about backend development and set you up for future Eventonica improvements, but it's not quite how you would make a production application.

1. In the folder containing your Eventonica code, create a blank `index.js` file.

1. [Install Express](https://expressjs.com/en/starter/installing.html) in your project folder, using `index.js` as the entry point.

1. Add a [hello world](https://expressjs.com/en/starter/hello-world.html) endpoint and test it in Postman.

1. Import your main Eventonica class into `index.js` and create an instance of it.

1. Make REST API routes -
1. if you need more practice, try out the [Mailing List API activity](/projects/mailing-list-rest-api.md) again
1. In that example, the input was a JSON body but now you'll probably be using forms. Inspect the request being sent by your browser and see what it looks like, then look into [Handling Form Data in Express](https://www.hacksparrow.com/webdev/express/handling-processing-forms.html).

1. Update each REST API route to do the correct action on your main Eventonica class.

1. Use Postman to test your API routes.

1. Update your browser JavaScript to remove all references to your main Eventonica class. Instead make `fetch` calls to your Express API's. Test out all your API's via your webpage.

1. Try refreshing the page and using it in multiple browser windows. Your data is persisted in memory in Express, and will only be cleared when the app is restarted. When can the data be erased? The solution is to add a database in the next lesson.

### Express Tips & Resources

- You can use [body-parser middleware](https://expressjs.com/en/5x/api.html#req.body) to parse JSON request body data.

- If you run into a CORS error, you can use [cors middleware](https://expressjs.com/en/resources/middleware/cors.html) to sidestep the error for local development.

- [Express tutorial](../../express-js/express.md)

- [API Practice](../../api/http-request-practice.md)

### Challenge

- Depending on how you wrote your API's and browser JavaScript, you may need to refresh the page to see your updated data. Can you show the updates on your page _without_ refreshing?

- Try adding [error handling](https://expressjs.com/en/guide/error-handling.html) to one or more of your Express API's. These are useful for returning errors when API calls have missing/malformed data.

### Troubleshooting

#### When trying to make an API request, I get a CORS error

You are making a request to your Express server directly. Because it's on a different port, browsers block this for security reasons. If you set up the proxy as above you should just make fetch requests to `/path` (no server/port listed) and it will proxy it correctly so you won't have issues.

#### My API request gets a 404

- Check the log of your Express API server - you enabled [morgan](https://www.npmjs.com/package/morgan) logging, right? 😇
- If the request is making it there, maybe the path is wrong
- If the request is not making it there, make sure you're calling fetch with an Accept header. If you don't, it will be handled by your React app server, which does not know about your Express routes
- Your fetch calls should look something like: `fetch('/data', { headers: { "Accept": "application/json" } })` will make be sent to the configured proxy, e.g. `http://localhost:3000/data`

#### Supplemental Materials

- Example of [calling API from React component using fetch](https://reactjs.org/docs/faq-ajax.html)

#### Challenges

- Once you have your app working, it might be helpful to put all the `fetch` code for calling your API in a dedicated module, perhaps called `eventonica-api.js` and then calling it from your component
