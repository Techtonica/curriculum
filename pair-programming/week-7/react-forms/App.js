// filepath: week-7/react-forms/App.js
import { useState } from "react";
import "./styles.css";
import RegisterYourCatForm from "./RegisterYourCatForm";

const COLORS = ["white", "red", "blue", "black", "cream"];

export default function App() {
  let initialValue = { name: "", age: "", habit: "", color: "" };
  const [values, setValues] = useState(initialValue);

  function handleChange(e) {
    // Add your logic to handle input changes
  }

  function handleSubmit(ev) {
    // Add your logic to handle form submission
  }

  return (
    <div className="App">
      <RegisterYourCatForm
        COLORS={COLORS}
        values={values}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
}
