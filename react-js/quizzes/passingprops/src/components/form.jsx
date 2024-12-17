import { useState } from "react";

function Form({ onSendData }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendData = () => {
    onSendData(inputValue);
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Please enter your email"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSendData}>Send</button>
    </div>
  );
}

export default Form;
