import React, { useState } from "react";

const Form = (props) => {
  //create a state for the values that you need in the form (I create an object with those values)
  const [valuesForm, setValuesForm] = useState({
    userName: "",
    userEmail: "",
    userAge: ""
  });

  //create a state for managing the errors form the UI
  const [error, setError] = useState({
    errorUserName: false,
    errorUserEmail: false,
    errorUserAge: false
  });

  //create functions that handle the event of the user typing into the form
  const handleInputEmailChange = (event) => {
    const userEmail = event.target.value;
    setValuesForm((valuesForm) => ({ ...valuesForm, userEmail }));
    if (userEmail === "") {
      setError((error) => ({ ...error, errorUserEmail: true }));
    } else {
      setError((error) => ({ ...error, errorUserEmail: false }));
    }
  };

  const handleInputNameChange = (event) => {
    const userName = event.target.value;
    setValuesForm((valuesForm) => ({ ...valuesForm, userName }));
    if (userName === "") {
      setError((error) => ({ ...error, errorUserName: true }));
    } else {
      setError((error) => ({ ...error, errorUserName: false }));
    }
  };

  const handleInputAgeChange = (event) => {
    const userAge = event.target.value;
    setValuesForm((valuesForm) => ({ ...valuesForm, userAge }));
    let numUserAge = parseInt(event.target.value || 0);
    if (numUserAge < 18 || numUserAge > 99) {
      setError((error) => ({ ...error, errorUserAge: true }));
    } else {
      setError((error) => ({ ...error, errorUserAge: false }));
    }
  };

  //create a function to handle the submit of the form to the parent component
  const onSubmit = (event) => {
    event.preventDefault();
    let errorUserEmail, errorUserName, errorUserAge;

    if (valuesForm.userEmail === "") {
      errorUserEmail = true;
      setError((error) => ({ ...error, errorUserEmail }));
    }

    if (valuesForm.userName === "") {
      errorUserName = true;
      setError((error) => ({ ...error, errorUserName }));
    }

    let numUserAge = parseInt(valuesForm.userAge || 0);
    if (numUserAge < 18 || numUserAge > 99) {
      errorUserAge = true;
      setError((error) => ({ ...error, errorUserAge }));
    }
    if (!errorUserEmail && !errorUserName && !errorUserAge) {
      props.onSubmit(valuesForm);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Email</label>
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        value={valuesForm.userEmail}
        onChange={handleInputEmailChange}
      />
      {error.errorUserEmail ? (
        <p className="error-message">This field is required</p>
      ) : null}

      <label>Name</label>
      <input
        name="name"
        type="text"
        placeholder="Name"
        required
        value={valuesForm.userName}
        onChange={handleInputNameChange}
      />
      {error.errorUserName ? (
        <p className="error-message">This field is required</p>
      ) : null}

      <label>Age</label>
      <input
        name="age"
        type="number"
        required
        placeholder="Age"
        value={valuesForm.userAge}
        onChange={handleInputAgeChange}
      />
      {error.errorUserAge ? (
        <p className="error-message">
          You should be between 18 and 99 years old to register in our form.
        </p>
      ) : null}

      <input type="submit" style={{ marginTop: "40px" }} />
    </form>
  );
};

export default Form;
