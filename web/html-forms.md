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

2. Disabled Attribute : In this the input field is disabled and we cannot click on it. 
```
<form>
  <label for="name">Name:</label><br>
  <input type="text" id="name" name="name" value="Shreya" disabled><br>
  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email" value="shreyakapoor98@gmail.com">
</form>
```
<form>
  <label for="name">Name:</label><br>
  <input type="text" id="name" name="name" value="Shreya" disabled><br>
  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email" value="shreyakapoor98@gmail.com">
</form>

3. Size Attribute: This attribute defines the width of the input field.
```
<form>
  <label for="name">Name:</label><br>
  <input type="text" id="name" name="name" size="40"><br>
  <label for="number">Number:</label><br>
  <input type="number" id="number" name="number" size="4">
</form>
```
<form>
  <label for="name">Name:</label><br>
  <input type="text" id="name" name="name" size="40"><br>
  <label for="number">Number:</label><br>
  <input type="number" id="number" name="number" size="4">
</form>

#### Submit and Action for Non AJAX Form
After the user enters the details, the data or the information is passed for further processing. 
Input field of type submit is taken to submit the data and action is specified corresponding to it. In case of non AJAX forms the action is GET.
The get request includes all the data in the URL.
Following code snippet shows the illustration of submission of form.
```
<form action="/submit_action.php" method="get">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <label for="address">Address:</label>
  <input type="text" id="address" name="address">
   <input type="submit" value="Submit">
</form>
```
<form action="/submit_action.php" method="get">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <label for="address">Address:</label>
  <input type="text" id="address" name="address">
   <input type="submit" value="Submit">
</form>

### Common Mistakes / Misconceptions

- **Javascript must be known to make an HTML form**
Only basic knowledge of HTML is required to create a form in HTML.

### Independent Practice
Try making out forms and apply the concepts which you have learnt from this. [Click here to practice](https://codepen.io/lauralikespi/pen/WJaqJe?__cf_chl_captcha_tk__=565fed7dbb91fe1df4f7b05a0e6efaeca1b9b07a-1588353121-0-AYquSEqeB1GnTKu5l61jhXsKUkZ0sDRu4PJ2hHGip4bZPznVb8IVpFILojgqAFk2k_KIx2BpD-e-zxSPk4oS67Kop9XY3sTK6ov27hlbXRJXNgAkt9uDMZ6VOC9OV3gv2ZnLC0sB7Hfy4Fs8wT7ARFSEEah2oW3n-JA6887sRCkVUD5IIIBEMaOiNbnYSrdtPf4ZC22hinKlu2ut7XbcUoViR3xOQ4GvEtmfXbkn1njWHI_LXubhxiVCqDa9i-YMjowZh_sJJl4jiJNTjeNtkOOshJnqLsWJKdvGTnYIVA9T9gkIraPSCAQku0yM_p1khobmyQiZC82iabAf2Otwoxl9ywwXBChCKNISTdg-zRfmjmJ6QyLuMVz34aH7FkWW-4YCFTQEmSxOS50P-UX-pF7eZyRQwyG3JFlAawyHmnuvnz76xzXgSELg65ml28QtvyAvgUFt9m8DfgNA-goa3oD3FBgk9hXat2OyTPjiM34i_SS3slycCLSRWTr4LylS1jbmYs8TzC7jpxJZ9jGpUhvB2gqT9SyTjtFOsticWbwDg-N1mvkSyi6JUXIbG9lU9oD2aSncJVh_pY_u7ej9Wq4) .

### Supplemental Materials

- [Exercise for practice](https://www.ankitweblogic.com/html/formexercise.php)

- [Practice problems](https://www.delidded.com/html-css-practice-test/html-form-practice-problems/)



