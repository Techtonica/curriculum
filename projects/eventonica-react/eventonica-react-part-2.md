## WIP Overview
- introduce useReducer for the Events form. Show how this can be cleaner than having `useState` for every field form. Also use this as a way to show different object notations and mutations. 

-  Create event form --> notice how it can be tedious to have to make a state for every field

- For the event's date field, introduce date-fns as a date library - libraries focusing on dates can save us time manually doing a lot of date calculations, ie getting days of week, formatting, and adding/subtracting days

- For the event form, ask them to provide some validation - ie event dates cannot be in the past

- Maybe: installing a library (lodash) and using a function, ie lodash/get
    - teaches how to read documentation, let them play around since there's a bunch of helpful functions
    
- Maybe: intro to react router, to create /users and /events pages

- Further learnings: Form management has a lot of parts that can get complex, ie validation, isDirty, when fields depend on another -> form libraries specialize in this, ie formik




### Add Remaining Functions

For all the features listed in the main [Eventonica README](./README.md), add code to setup event handlers so the actions change data and refresh the HTML for clear user feedback.

## Next Steps

Once all the behavior is fully working, move on to these enhancements.

1. Customize the CSS to style your page. [Google Fonts](https://fonts.google.com/) are a great place to find free fonts.

1. Add a README.md with screenshots of your project in your GitHub project repo. This [README Template](https://github.com/othneildrew/Best-README-Template) includes most key sections for an open-source app.

#### Challenges

Try to do at least one of these challenges to improve your site:

- Look up all available HTML attributes for `input` and see if you can customize the forms, make some fields required, turn the date search field into a date picker using `input type="date"`, etc
- Add a variable to save which user is currently "logged in", so saving an event for a user doesn't require typing in the user's ID every time.
- Use localStorage to store your data so it doesn't get deleted every time the page is refreshed. Learn about localStorage from the [MDN localStorage docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- Change the UI. Draw up a design for how you'd like your app to look and then code your site to match. The changes could involve breaking the UI into multiple pages, adding more CSS, using a styling library such as Bootstrap, and/or adding more JS. Look at websites that have successful UIs for creating, retrieving, updating, deleting, and filtering data for inspiration. Consider designing a desktop and a mobile version and create a responsive UI.
- Deploy your site so you can share it with others. Deploying means putting your site on the internet where other people can access it. One easy way to deploy this site is to use GitHub pages. Follow this tutorial to deploy your site: https://www.codecademy.com/articles/f1-u3-github-pages.

### Good luck!

