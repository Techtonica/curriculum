import { useState } from "react";
import "./styles.css";
import RegisterYourCatForm from "./RegisterYourCatForm";

const COLORS = ["white", "red", "blue", "black", "cream"];

export default function App() {
  let initialValue = { name: "", age: "", habit: "", color: "" };
  const [values, setValues] = useState(initialValue);

  function handleChange(e) {
    setValues((preValues) => ({
      ...preValues,
      [e.target.name]: e.target.value
    }));
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    console.log(values);
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
