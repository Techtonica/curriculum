# HTML Forms

### Week 3 Keywords and Questions

- How to create HTML forms
- How to add validation in the attributes
- How to submit the form
- Form fields: Text, Radio, Checkbox, Select (dropdown)
- Understand how the <label> relates to the form element
  - (Note there are 2 ways of adding a label to a form field, what are they?)
- What is in the form “event” on submit

### Prerequisites

- [HTML lesson](./html.md)

### Motivation

- Forms are one of the essential topics in HTML.
- They are widely used in almost all websites in order to gather the required information from users.

### Objectives

- How to create HTML forms.
- How to add validation in the attributes.
- How to submit the form.

### Lesson

HTML Form is one of the most popular ways to gather user information and send it to an application. It is the most efficient way to let the user enter the data. For example, it can be used to collect things like a name and email in a sign-up form.

**Start with some interactive practice**
Helpful Codecademy lessons:

- [HTML Forms](https://www.codecademy.com/courses/learn-html/lessons/html-forms)
- [Form Validation](https://www.codecademy.com/courses/learn-html/lessons/html-form-validation)

#### Common HTML Examples

When the user/visitor enters the details in the form, it is posted to the backend server where the processing is done and then the necessary data is stored in the database.

There are various elements which can be used in the form which are as follows:

1. Input element : It is the most commonly used field in the form which allows the user to specify different types of values. It can be text field, number field, password field, checkbox etc.

Following is an example which shows the code snippet to declare the input element.

```
<form>
    <label for="name">Name:</label>
    <input type="text" name="name" id="name">
</form>
```

- Label is an element which is used to provide the context of the input field. Like in the above example the input field is provided to enter the Name.
- Type is used to define the type of the input box.
  Checkbox is a type of input field which allows the user to select options from the given choices.
- The for attribute of the `<label>` tag should be equal to the id attribute of the `<input>` element to bind them together.
- The name attribute specifies the name of an `<input>` element.

Following is an example which shows the code snippet when the input type is checkbox.

```
<form>
  <input type="checkbox" id="apple" name="apple" value="Apple">
  <label for="apple">Apple</label>
  <input type="checkbox" id="mango" name="mango" value="Mango">
  <label for="mango">Mango</label>
  <input type="checkbox" id="banana" name="banana" value="Banana">
  <label for="banana">Banana</label>
</form>
```

Another important type of input field is date. This field allows user to enter only date
Following is an example which shows the code snippet when the input type is date.

```
<form>
  <label for="dob">DOB:</label>
  <input type="date" id="dob" name="dob">
</form>
```

2. Select Element : It is used when we have to provide options to the user in the dropdown.

Following is an example which shows the code snippet to declare the Select element.

```
<form>
    <select id="fruits" name="fruits">
      <option value="apple">Apple</option>
      <option value="mango">Mango</option>
      <option value="banana">Banana</option>
    </select>
</form>
```

3. Textarea Element : An input field that accepts multiple lines of text.

Following is an example which shows the code snippet to declare the Textarea Element.

```
<form>
    <label for="message">Message:</label>
    <textarea rows="2" cols="30" name="message"  id="message"></textarea>
</form>
```

4. Button Element : It is a clickable element which is usually used to submit the data.

Following is an example which shows the code snippet to declare the Button Element.

```
<form>
    <button type="button">Click Me!</button>
</form>
```

There can be different types of buttons which are as follows:

1. submit: This type of button sends the data entered by the user to the server.

2. reset: The button resets all the controls to their initial values.

3. button: The button has no default behavior, and does nothing when pressed by default.

#### Validation Attributes

HTML elements which allows restriction in the form elements are the validation attribute.

1. Readonly Attribute : This attribute do not allow any text to be entered in the input field.

```
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" value="Shreya" readonly>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" value="shreyakapoor98@gmail.com">
</form>
```

2. Disabled Attribute : In this the input field is disabled and we cannot click on it.

```
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" value="Shreya" disabled>
</form>
```

3. Size Attribute: This attribute defines the width of the input field.

```
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" size="40">
</form>
```

4. Required Attribute: This attribute tells that the specific input must be filled before submitting the form.

```
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
</form>
```

5. Maxlength Attribute: It specifies the maximum number of characters allowed in an input field.

```
<form>
  <label for="contact">Contact:</label>
  <input type="number" id="contact" name="contact" maxlength="10">
</form>
```

6. Minlength Attribute: It specifies the minimum number of characters allowed in an input field.

```
<form>
  <label for="contact">Contact:</label>
  <input type="number" id="contact" name="contact" minlength="8">
</form>
```

7. Multiple Attribute: It specifies that the user is allowed to enter more than one value in an input field.

```
<form>
  <label for="docs">Select Document:</label>
  <input type="file" id="docs" name="docs" multiple>
</form>
```

8. Step Attribute: specifies the legal number intervals for an input field.

```
<form>
  <label for="marks">Marks:</label>
  <input type="number" id="marks" name="marks" step="3">
</form>
```

#### Submit and Action for Non-AJAX Form

- _Submit_ : When the user enters the details which are asked, the data or the information is passed for further processing. Input field of type submit is taken to submit the data.

- _Action_ : The action attribute defines the action to be performed when the form is submitted.
  The method attribute specifies the HTTP method to be used when submitting the form data.
  It can be of the following types:

1. Get : In this the form is sent as a URL variable. This is the default method while submitting the data.
2. Post : In this the form is sent as HTTP post transaction. It is preferred to use when the form contains personal details.

Following code, the snippet shows the illustration of the submission of the form.

```
<form action="/submit_action.php" method="get">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <label for="address">Address:</label>
  <input type="text" id="address" name="address">
   <input type="submit" value="Submit">
</form>
```

In the above example the form data is sent to a page on the server called "/submit_action.php". This page contains a server-side script that handles the form data and the method is GET which will send the data as a URL parameter.

### Common Mistakes / Misconceptions

- **Javascript must be known to make an HTML form**
  Only basic knowledge of HTML is required to create a form in HTML. You would need JavaScript if you want to do something more complicated than sending the form data as-is to a URL endpoint.

### Independent Practice if time permits

- Learn about what happens when an HTML form is submitted.
  - [Sending Form Data By Mozilla](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data)
  - [HTML Forms By w3schools](https://www.w3schools.com/html/html_forms.asp)
- Spend 15 minutes to get as far as you can on [this quiz](https://www.w3schools.com/html/exercise.asp?filename=exercise_html_forms2) to check your understanding of forms.

### Supplemental Materials

- [Exercise for practice](https://www.ankitweblogic.com/html/formexercise.php)

- [Tutorial Republic - HTML Forms](https://www.tutorialrepublic.com/html-tutorial/html-forms.php)

- [MDN - How to structure a web form](https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form)
