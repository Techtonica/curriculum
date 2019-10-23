# Eventonica - Part 5 - Express Backend

### Overview
Up until now in your Eventonica project, all the data is deleted every time you refresh the page (unless you've added localStorage) and you can't have multiple users of your app share data. That's because the data you're storing is stored in your web browser. In this part of the Eventonica project, we'll create an Express backend to store the data and serve it to all users of your site. 

### Instructions
(TODO: add more instructions and try it out!)

Note: In real apps, you would use a database instead of just storing the data "in memory" in Express. This lesson is for you to learn about backend development and set you up for future Eventonica improvements, but it's not quite how you would make a production application.

1. (Possibly) Create a new repo or folder for this project

1. Create an Express app

1. Make a health check/ hello world endpoint and get it running.

1. Copy your file with the EventRecommender class into Express. Create an instance of it.

1. Make CRUD API routes

1. Update each CRUD API route to do the correct action on the EventRecommender class.

1. Use Postman to test your API routes

1. Update your jQuery code to remove all references to EventRecommender. Instead make AJAX calls to your Express API.

1. Test it out by: refreshing page, opening multiple browser windows and seeing it work.

1. When can the data still be erased? The solution to this will be to add a database.

### Challenge
