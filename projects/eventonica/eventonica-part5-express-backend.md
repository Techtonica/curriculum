# Eventonica - Part 5 - Express Backend

### Overview

Up until now in your Eventonica project, all the data is deleted every time you refresh the page (unless you've added localStorage) and you can't have multiple users of your app share data. That's because the data you're storing is stored in your web browser. In this part of the Eventonica project, we'll create an Express backend to store the data and serve it to all users of your site.

### Wait, what is a backend?

There is an [Intro to Backend](/electives/1_intro_to_backend.md) lesson but it's a little theoretical so let's try and be succinct here.

In your earlier iterations of the project, all your JavaScript ran in the browser. Now we are going to still run _some_ code in and the browser, such as to display data as HTML. But now we're going to also run another totally separate set of JavaScript somewhere else. In Unix terms, these are different processes. In this case, it will also be running on your laptop, but you could run the server on another laptop or really anywhere in the world connected to the Internet.

### Remotely Executing a Function

How do you call a function in a separate instance of JavaScript? You can't just say `OtherInstance.function()`. There is no variable that corresponds to the other instance. Instead you will create a REST API that will turn the logic you want to run into HTTP routes.

#### Example API Endpoint

For example, in your code before, to get all the events, you might've had a function like `eventRecommender.getAllEvents()`. Instead, we will create an API endpoint like `http://127.0.0.1:3000/events` that returns all the current events as a JSON response.

#### Why is this better?

After following this project, you will likely move the portions of your JS that dealt with data onto the server and the server code will still actually end up just calling `eventRecommender.getAllEvents()` anyway, so why are we adding all these things in the middle to complicate everything? Why is this worth it?

- Before, each tab had it's own copy of events. Now they can be stored in one location so all users can see the same data and interact with it
- Centralizing the logic allows us to add a database so the data will live on even if the server is restarter or crashes
- Turning the logic of our system into a REST API makes it way more flexible

  - you could call it using a non-JavaScript client such as Postman or an app written in a different language (like an Android app in Java). All modern languages can speak HTTP

So let's get to it!

### Instructions

_Pro Tip_ - the [morgan middleware](https://www.npmjs.com/package/morgan) is nice to log all requests to your server

#### Step 0

Before doing anything else, make a new folder, `Eventonica-Part-5` and seed it with a copy of your Part 4. This will be very helpful to have a reference point as you transform your app. It will get messier before it gets cleaner.

Note: In real apps, you would use a database instead of just storing the data "in memory" in Express. This lesson is for you to learn about backend development and set you up for future Eventonica improvements, but it's not quite how you would make a production application.

1. In the folder containing your Eventonica code, create a blank `index.js` file.

1. [Install Express](https://expressjs.com/en/starter/installing.html) in your project folder, using `index.js` as the entry point.

1. Add a [hello world](https://expressjs.com/en/starter/hello-world.html) endpoint and test it in Postman.

1. Import your EventRecommender class into `index.js` and create an instance of it.

1. Make REST API routes -
1. if you need more practice, try out the [Mailing List API activity](/projects/mailing-list-rest-api.md) again
1. In that example, it was all JSON but now you'll probably be using forms. Inspect the request being sent by your browser and see what it looks like, then look into [Handling Form Data in Express](https://www.hacksparrow.com/webdev/express/handling-processing-forms.html).

1. Update each REST API route to do the correct action on the EventRecommender class.

1. Use Postman to test your API routes.

1. Update your jQuery code to remove all references to EventRecommender. Instead make AJAX calls to your Express APIs. Test out all your APIs via your webpage.

1. Try refreshing the page and using it in multiple browser windows. Your data is persisted in memory in Express, and will only be cleared when the app is restarted. When can the data be erased?The solution is to add a database in the next lesson.

### Resources:

- You can use [body-parser middleware](https://expressjs.com/en/5x/api.html#req.body) to parse JSON request body data.

- If you run into a CORS error, you can use [cors middleware](https://expressjs.com/en/resources/middleware/cors.html) to sidestep the error for local development.

- [Express tutorial](../../express-js/express.md)

- [API Practice](../../api/http-request-practice.md)

### Challenge

- Depending on how you wrote your APIs and jQuery code, you may need to refresh the page to see your updated data. Can you show the updates on your page without refreshing?

- Try adding [error handling](https://expressjs.com/en/guide/error-handling.html) to one or more of your Express APIs. These are useful for returning errors when API calls have missing/malformed data.
