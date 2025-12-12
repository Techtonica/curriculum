# React Solo Assignment: Tweeter™

## Requirements

- This is a browser app only.
  - No API. No database.
- You can use [React + Vite](https://github.com/Techtonica/curriculum/blob/main/react-js/react-local-vite.md) or build it from scratch.
- You can style this as much or as little as you wish
- You may use Function or Class component, but Function is preferred

### Text Entry Form

- The entire component should be a form
- Dropdown for username to post as (just a list of 5 test users)
- The second input is a `<textarea>` where a user can type their message.
- Underneath should be a character counter that counts down from 100 and becomes a red color when negative
- Submit button that should add the message to the list and then clear the form

### Post Object

Post object should have

- Message body (String)
- Username (String)
- Created (Date)

### Post List

- A unordered list
- If empty displays "No posts yet"
- Displays posts in descending order, newest on top
- Show the message, username, and date however you want
