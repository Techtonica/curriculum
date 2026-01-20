import "./styles.css";
import RegisterYourCatForm from "./Components/form";
import Message from "./Components/message";
import { useState } from "react";

export default function App() {
  // Creating a  flag
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [values, setValues] = useState({});

  const onSubmit = (newValues) => {
    //console.log(newValues);
    setIsSubmitted(true);
    setValues(newValues);
  };

  return (
    <div className="App">
      {!isSubmitted ? (
        <RegisterYourCatForm tochild={onSubmit} />
      ) : (
        <Message data={values.name} />
      )}
    </div>
  );
}
