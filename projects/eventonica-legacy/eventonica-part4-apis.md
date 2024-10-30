> Note: This part of the project is no longer required in the curriculum. Eventonica is under construction. 👷‍♀️

See [Eventonica Epic](https://github.com/Techtonica/curriculum/issues/1296) for status and details.

# [LEGACY] (Optional Lesson) - Eventonica - Ticketmaster API

### Overview

Now that you've learned about APIs, AJAX, and JSON, you'll extend your Eventonica project to make API calls to the Ticketmaster API and display the results in the UI.

In this part of the project, you'll add the ability to import events from Ticketmaster. A user of your site will be able to search for events by keyword, then choose an event and add it to their list of events.

### Instructions

#### Start a new folder

Before doing anything else, create a new folder called Eventonica-Ticketmaster and copy the contents of your existing Eventonica project into this folder.

#### Details

1. Read the [Ticketmaster API docs](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) to learn about their APIs overall and the Event Search API specifically. You don't need to read the docs for the other APIs offered.

2. Try out the [Ticketmaster API Explorer](https://developer.ticketmaster.com/api-explorer/v2/) to practice using the Event Search API. Try searching for events by keyword.

3. Decide where in your HTML you want to incorporate the Ticketmaster API, and add the following to your HTML file:

- The header "Import Events from Ticketmaster"
- A search box for an event keyword and a submit button
- An area to display the results

4. In your JavaScript, add code so that when a user submits a keyword in your new HTML form:

- You call the Ticketmaster API and search for events using that keyword as a query
- You use JavaScript to display the results on the page in the area you designated in step 3

5. Now you will allow the user to import the first returned event:

- Add a button in your HTML file that is labeled "Import first event from Ticketmaster"
- Add event handler code so that when the user clicks the "Import first event from Ticketmaster" button, a new Event is created and added to the array of Events you generated using your main Eventonica class
- To do this, use the data in the first item from the array of events returned from the Ticketmaster API in the previous step. Note: Ticketmaster will not return exactly the same fields as your Event class has. Explore the Ticketmaster API docs and responses to find the most appropriate data from the API response to use to create the new Event instance.
- Display that first returned event in the User's saved events section you coded in the previous exercises

### Challenges

Try doing at least one of the extensions below:

- Update your UI so the user can import any of the results from Ticketmaster, not just the first one
- Add more search boxes for other Ticketmaster search parameters (e.g. location, date)
