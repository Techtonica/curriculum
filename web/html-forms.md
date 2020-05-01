# HTML Forms

### Projected Time

1.5 hours

- Lesson: 30min
- Guided Practice: 1hour
- Independent Practice: 2hour

### Prerequisites

- [HTML lesson](./html.md)

### Motivation

- Forms are one of the essential topics in HTML.
- They are widely used in almost all websites in order to gather the required information of user.

### Objectives

- How to create HTML forms.
- How to add validation in the attributes.
- How to submit the form.

### Lesson

HTML Form is one of the very useful aspect which has vaste usage when some information about the user has to be stored. It can be said as a document where different kind of information such as name, email, blood group, contact number and other such information can be stored.
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
<form>
    <label for="name">Name:</label>
    <input type="text" name="name" id="name">
</form>

Label is an element which is used to provide the context of the input field. Like in the above example the input field is provided to enter the Name.
Type is used to define the type of the input box. 
Checkbox is a type of input field which allows the user to select options from the given choices. 
Following is an example which shows the code snippet when the input type is checkbox.

```
<form>
  <input type="checkbox" id="apple" name="apple" value="Apple">
  <label for="apple">Apple</label><br>
  <input type="checkbox" id="mango" name="mango" value="Mango">
  <label for="mango">Mango</label><br>
  <input type="checkbox" id="banana" name="banana" value="Banana">
  <label for="vehicle3">Banana</label>
</form>
```
<form>
  <input type="checkbox" id="apple" name="apple" value="Apple">
  <label for="apple">Apple</label><br>
  <input type="checkbox" id="mango" name="mango" value="Mango">
  <label for="mango">Mango</label><br>
  <input type="checkbox" id="banana" name="banana" value="Banana">
  <label for="vehicle3">Banana</label>
</form>

Another important type of input field is date. This field allows user to enter only date
Following is an example which shows the code snippet when the input type is date.
```
<form>
  <label for="dob">DOB:</label>
  <input type="date" id="dob" name="dob">
</form>
```
<form>
  <label for="dob">DOB:</label>
  <input type="date" id="dob" name="dob">
</form>

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
<form>
    <select id="fruits" name="fruits">
    <option value="apple">Apple</option>
    <option value="mango">Mango</option>
    <option value="banana">Banana</option>
    </select>
</form>

3. Textarea Element : It can be seen as an input field only which allows text in multiple lines.

Following is an example which shows the code snippet to declare the Textarea Element.

```
<form>
    <label for="message">Message:</label>
    <textarea rows="2" cols="30" name="message"  id="message"></textarea>
</form>
```
<form>
    <label for="message">Message:</label>
    <textarea rows="2" cols="30" name="message"  id="message"></textarea>
</form>

4. Button Element : It is a clickable element which is usually used to submit the data.

Following is an example which shows the code snippet to declare the Button Element.

```
<form>
    <button type="button">Click Me!</button>
</form>
```
<form>
    <button type="button">Click Me!</button>
</form>

#### Validation Attribute
HTML elements which allows restriction in the form elements are the validation attribute.
1. Readonly Attribute : This attribute do not allow any text to be entered in the input field.
```
<form>
  <label for="name">Name:</label><br>
  <input type="text" id="name" name="name" value="Shreya" readonly><br>
  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email" value="shreyakapoor98@gmail.com">
</form>
```
<form>
  <label for="name">Name:</label><br>
  <input type="text" id="name" name="name" value="Shreya" readonly><br>
  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email" value="shreyakapoor98@gmail.com">
</form>

2. Disabled Attribute



