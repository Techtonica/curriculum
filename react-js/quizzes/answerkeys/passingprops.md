#### Answer Key for Quiz about Passing Props.

The code is working correctly, so you don't need to fix anything - all the solutions should be only comments in the code.

Please remember that a comment start with `//`

1. Write a comment in the code sending props from the form component to its parent component. Your comment should explain why the process is important, and please add a "Don't delete" note.

**Answer:** The function `onSendData` is being passed to the Form component as props. Inside the component Form (`form.jsx`), we can find the function in two different moments:
Line 3, being deconstructed inside the object props
Line 11, being called inside the function `handleSendData`

The process is important because the parent component (`app.jsx`) is the one that sends the function as props to the Form. That guarantees that the parent component maintains control of the data.

For rating purposes, the participant should have at least a comment on the function `handleSendData` inside the Form Component that specifies that the function `onSendData` is being passed as props.

2. Write a comment in the code sending props from the parent component to the child component called message.jsx. You should explain in your comment why the process is important, and please add a note for not deleting it.

**Answer:** The Message component (`message.jsx file`) receives the email propos. You can find it on line 1 as an object deconstructed and used in line 5 of the component, asking the variable to check if something is not null to be shown to the user.

3. Inside the app.jsx component, include a comment that documents how the app works and how the data moves from one component to another.

**Explanation**

- Form Component (form.jsx): It has an input field and a button. When the button is clicked, it calls the handleSendData function, which then calls the onSendData prop (a function passed from the parent) with the current input value.
- App Component (App.jsx): It renders the child component and provides it with the onSendData prop. This prop is a function (handleReceiveData) that updates the parent's state with the data received from the child.
- Message Component (message.jsx): It renders a child component and provides a simple p tag with the success message for the user if an email has been received.

This setup allows the child component to send data back to the parent component. The parent component can then use or display this data as needed in the message component.
