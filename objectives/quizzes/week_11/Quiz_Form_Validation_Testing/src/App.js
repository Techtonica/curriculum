import "./styles.css";
import { useState } from "react";
import Form from "./components/form";

export default function App() {
  // // a state to control if the user is register or not. This allows the parent to control the flow of the application
  const [isSubmited, setIsSubmited] = useState(false);

  //sending this function as a prop to the child
  const handleOnSubmit = (data) => {
    setIsSubmited(true);
    console.log(data);
  };

  return (
    <div className="App">
      <h1> Hello Techtonica </h1>
      {isSubmited ? (
        <h1 className="sucess-message">
          {" "}
          Sucess! Thank you for registering in our Form{" "}
        </h1>
      ) : (
        <Form isSubmited={isSubmited} onSubmit={handleOnSubmit} />
      )}
    </div>
  );
}

