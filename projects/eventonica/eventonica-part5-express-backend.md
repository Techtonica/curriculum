# Eventonica - Part 5 - Express Backend

### Overview
Up until now in your Eventonica project, all the data is deleted every time you refresh the page (unless you've added localStorage) and you can't have multiple users of your app share data. That's because the data you're storing is stored in your web browser. In this part of the Eventonica project, we'll create an Express backend to store the data and serve it to all users of your site.

### Instructions

Note: In real apps, you would use a database instead of just storing the data "in memory" in Express. This lesson is for you to learn about backend development and set you up for future Eventonica improvements, but it's not quite how you would make a production application.

1. In the folder containing your Eventonica code, create a blank `index.js` file.

1. [Install Express](https://expressjs.com/en/starter/installing.html) in your project folder, using `index.js` as the entry point.

1. Add a [hello world](https://expressjs.com/en/starter/hello-world.html) endpoint and test it in Postman.

1. Import your EventRecommender class into `index.js` and create an instance of it.

1. Make CRUD API routes.

1. Update each CRUD API route to do the correct action on the EventRecommender class.

1. Use Postman to test your API routes.

1. Update your jQuery code to remove all references to EventRecommender. Instead make AJAX calls to your Express APIs. Test out all your APIs via your webpage.

1. Try refreshing the page and using it in multiple browser windows. Your data is persisted in memory in Express, and will only be cleared when the app is restarted. When can the data be erased?The solution is to add a database in the next lesson.

### Resources:

* You can use [body-parser middleware](https://expressjs.com/en/5x/api.html#req.body) to parse JSON request body data.

* If you run into a CORS error, you can use [cors middleware](https://expressjs.com/en/resources/middleware/cors.html) to sidestep the error for local development.

* [Express tutorial](../../express-js/express.md)

* [API Practice](../../api/http-request-practice.md)

### Challenge

* Depending on how you wrote your APIs and jQuery code, you may need to refresh the page to see your updated data. Can you show the updates on your page without refreshing?

* Try adding [error handling](https://expressjs.com/en/guide/error-handling.html) to one or more of your Express APIs. These are useful for returning errors when API calls have missing/malformed data.
