# Date Objects | Date Time

### Projected Time

About 1 hour

- 30 minutes for Lesson
- 30 minutes for Independent Practice

### Prerequisites

- [JavaScript 1 - Variables, Strings, Numbers](/javascript/javascript-1-variables.md)
- [JavaScript 2 - Arrays, Functions](/javascript/javascript-2-arrays-functions.md)

### Motivation

- The JavaScript Date object is the standard way to handle dates and times (different formats, conversion, etc)
- An example of an organization that uses this class is www.whattimeisitrightnow.com

### Objectives

**Participants will be able to:**

- use `Date()` and its methods

### Specific Things to Learn

- `new Date(...arguments)`

### Lesson

- Video walkthrough of lesson slides [Date Objects](https://www.youtube.com/watch?v=irrxnH-nkqg)
- Read through lesson slides [Date Objects](https://docs.google.com/presentation/d/1Pj-hkQCeVe4kJJ4s8RHcSZrNKx4Mp4kaQ9J0Eyy1gAQ/edit#slide=id.p)

### Things to Remember

- The advantage of working in milliseconds is that you are less likely to get an error from mishandling time zone conversion
- "Month" and "Day" of the week start at 0 - January is month 0 - Sunday is day 0
- Although you can work with `Date` directly, [Moment.js](https://momentjs.com/) is the most popular (but outdated) framework to deal with all the date/time conversions.
  - [Recommended alternatives](https://momentjs.com/docs/#/-project-status/recommendations/)
  - [Luxon](https://moment.github.io/luxon/#/) current recommended alternative to Moment.js
  - [Temporal](https://tc39.es/proposal-temporal/docs/) is a _very_ new API to deal with Dates in JavaScript.

### Demonstration

Instructor demonstrates in the video walk through how to work with Date Object in JavaScript.

### Independent Practice

- Create some dates in JavaScript. - Create your Birthday - Can you format/print a date in different formats?
- Explain the "epoch time" to a friend. Why do you think "epoch time is useful?
- Learn about other ways of working with dates - Look at [Luxon](https://moment.github.io/luxon/#/?id=luxon) documentation

### Challenge

- If you add (`date1 + date2`) or subtract (`date1 - date2`) two dates in JavaScript, it returns the time difference in milliseconds. Can you write a function to subtract two dates but return the time difference in minutes? What about as a date object?

### Supplemental Materials

- [Date Objects in JavaScript (tutorialspoint)](https://www.tutorialspoint.com/javascript/javascript_date_object.htm)
- [Date Objects (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [Definitive Guide to DateTime manipulation (Toptal)](https://www.toptal.com/software/definitive-guide-to-datetime-manipulation)
- [Date and Time (javascript.info)](https://javascript.info/date)
- [Using Bootstrap for date pickers](https://eonasdan.github.io/bootstrap-datetimepicker/)

### Check for Understanding

- What is the Date Object?
- What day corresponds to 0 in Date()?
- What month corresponds to 0 in Date()?
- What are the advantages of using numerical dates (milliseconds) vs. using object dates (`new Date()`) ? Talk with a partner
- How do you add and subtract dates?
