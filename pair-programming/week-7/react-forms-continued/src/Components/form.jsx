import React, { useState } from "react";

const COLORS = ["white", "red", "blue", "black", "cream"];

function RegisterYourCatForm(props) {
  const [values, setValues] = useState({
    name: "",
    color: "",
    age: "",
    habits: ""
  });

  const set = (input) => {
    //In this function you will control the changes in the component
  };

  // BONUS
  const handleSubmit = (event) => {
    //Here you need to pass props.yourfunctionfortheparent that will pass values to the parent
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register Your Cat</h2>
      <label htmlFor="name">Name*:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="The name of your cat"
        required
        value={values.name}
        onChange={set("name")}
      />
      <label htmlFor="color">Color*:</label>
      <select
        name="color"
        id="color"
        required
        onChange={set("color")}
        value={values.color}
      >
        <option>Select color</option>
        {COLORS.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <label htmlFor="age">Age*:</label>
      <input
        type="number"
        id="age"
        name="age"
        required
        placeholder="How old is your cat?"
        value={values.age}
        onChange={set("age")}
      />
      <label htmlFor="habit">Habits:</label>
      <textarea
        id="habit"
        name="habit"
        value={values.habits}
        onChange={set("habits")}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegisterYourCatForm;
