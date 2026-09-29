## React Forms Continued

Please note that this code is not working yet! The fields will not accept typing until you complete the `set` function in `src/Components/form.jsx`.

Run it with `npm install` and then `npm run dev`.

### Tasks

1. Complete the `RegisterYourCatForm` component in `src/Components/form.jsx` so it does two things:

- Make the form work - meaning, catching the data from the user;
- Send the info for the cat to the parent component

2. Using state `import {useState} from React` control the form component with the `set` function
3. Make the onSubmit function console.log the cat information (Hint: this is happening in the parent, `src/App.jsx`, which passes its `onSubmit` function down to the form as the `tochild` prop)

### Hint.

`set("name")` runs while the form renders, and whatever it returns becomes the `onChange` handler. So `set` needs to return a function that receives the change event.

If you get stuck, here is a [good resource](https://dmitripavlutin.com/react-forms-tutorial/)
