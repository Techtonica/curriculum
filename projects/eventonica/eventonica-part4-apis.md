# Eventonica - Part 4 - API calls

### Overview
Now that you've learned about APIs, AJAX, and JSON, you'll extend your Eventonica project to make API calls to the Ticketmaster API and display the results in the UI.

In this part of the project, you'll add the ability to import events from Ticketmaster. A user of your site will be able to search for events by keyword, then choose an event and add it to the array of Events.

### Instructions

#### Start a new folder

Before doing anything else, create a new folder called Eventonica-Part-4 and copy the contents of your existing Eventonica project into this folder.

#### Details

1. Read the [Ticketmaster API docs](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) to learn about their APIs overall and the Event Search API specifically. You don't need to read the docs for the other APIs offered.

2. Try out the [Ticketmaster API Explorer](https://developer.ticketmaster.com/api-explorer/v2/) to practice using the Event Search API. Try searching for events by keyword. 

2. Decide where in your HTML you want to incorporate the Ticketmaster API. Add the following to your HTML:
 - The header "Import Events from Ticketmaster". 
 - A search box for event keyword
 - Somewhere to display the results
 - A button that says "Import first event from Ticketmaster"

3. In your jQuery code, add code so that when a user submits a keyword in the new form, you call the Ticketmaster API and search for events with that keyword, and use jQuery to display the results on the page.

4. Add jQuery code so that when the user clicks the "Import first event from Ticketmaster" button, a new Event is created (and added to the array of Events) using the data from the first item in the array of events queried from Ticketmaster. Note: Ticketmaster will not return exactly the same fields as your Event class has. Explore the Ticketmaster API docs and responses to find the most appropriate data from the API response to use to create the new Event instance. 

### Challenges
Try doing at least one of the extensions below:
- Update your UI so the user can import any of the results from Ticketmaster, not just the first one
- Add more search boxes for other Ticketmaster search parameters (e.g. location, date)
