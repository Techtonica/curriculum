import { useState, useEffect } from "react";
function UserForm({ handleSubmit, values, buttonText }) {
  const [inputValues, setInputValues] = useState(values);

  useEffect(() => {
    setInputValues(values);
  }, [values]);

  function handleChange(e) {
    console.log("new value", e.target.value);
    const value = e.target.value;
    setInputValues({
      ...inputValues,
      [e.target.name]: value,
    });
  }
  return (
    <div>
      <form
        id="add-user"
        action="#"
        onSubmit={(e) => {
          // updated code
          e.preventDefault();
          handleSubmit(inputValues);
        }}
      >
        <fieldset>
          <label htmlFor="add-user-name">Name</label>
          <input
            type="text"
            name="name"
            id="add-user-name"
            value={inputValues.name}
            onChange={handleChange}
            required
          />{" "}
          <br />
          <br />
          <label htmlFor="add-user-email">Email</label>
          <input
            type="email"
            name="email"
            id="add-user-email"
            value={inputValues.email}
            onChange={handleChange}
            required
          />{" "}
          {/* Since id is comming from postgres am not using id field */}
          {/* <br /> <br />
          <label htmlFor="add-user-id">Id</label>
          <input
            type="number"
            name="id"
            id="add-user-id"
            value={inputValues.id}
            onChange={handleChange}
          /> */}
        </fieldset>

        <input type="submit" value={buttonText} />
      </form>
    </div>
  );
}

export default UserForm;
