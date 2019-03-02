# Date Objects| Date Time

### Projected Time
About 2 hours
- 30 minutes for video walkthrough of slides
- 30 minutes for group discussion
- 60 minutes for Independent Practice

### Prerequisites
- JS 1 lesson
- JS 2 lesson

### Motivation
- The Javascript Date object is the standard way to handle dates and times (different formats, conversion, etc). Every company that needs to create or compare dates and times uses this object. It is strongly inadvisable to compare or contrast times and dates with custom classes. An example of an organization that uses this class is www.whattimeisitrightnow.com.

### Objectives
**Participants will be able to:**
- use `Date()` and its methods

### Specific Things To Teach
- `new Date(...arguments)`
- `Date.setTime()`

### Supplemental Materials
- [JavaScript date object(tutorialspoint)](https://www.tutorialspoint.com/javascript/javascript_date_object.htm)
- [Date Objects (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [Definitive Guide to DateTime manipulation (Toptal)](https://www.toptal.com/software/definitive-guide-to-datetime-manipulation)
- [Date and Time (javascript.info)](https://javascript.info/date)
- [Using Bootstrap for date pickers](https://eonasdan.github.io/bootstrap-datetimepicker/)

### Lesson
[Date Objects (Youtube Video)](https://www.youtube.com/watch?v=irrxnH-nkqg)<br/>
[Date Objects (slides)](https://docs.google.com/presentation/d/1Pj-hkQCeVe4kJJ4s8RHcSZrNKx4Mp4kaQ9J0Eyy1gAQ/edit#slide=id.p)

### Things to Remember
- The advantage of working in milliseconds is that you are less likely to get an error from mishandling time zone conversion
- "Month" and "Day" of the week start at 0
	- January is month 0
	- Sunday is day 0
- Although you can work with `Date()` directly, Moment.js is the most popular framework to deal with all the date/time conversions.

### Demonstration
Instructor demonstrates in the video walk through how to work with Date Object in JavaScript.

### Independent Practice
- Create some dates in Javascript.
	- Create your Birthday
	- Can you format/print a date in different formats?
- Explain the "epoch time" to a friend. Why do you think "epoch time is useful?
- Learn about other ways of working with dates
	- Look at Moment.js documentation

### Challenge
- If you add (`date1 + date2`) or subtract (`date1 - date2`) two dates in Javascript, it returns the time difference in milliseconds. Can you write a function to subtract two dates but return the time difference in minutes? What about as a date object?

### Check for Understanding
- What are the advantages of using numerical dates (milliseconds) vs. using object dates (`new Date()`)? Talk with a partner
