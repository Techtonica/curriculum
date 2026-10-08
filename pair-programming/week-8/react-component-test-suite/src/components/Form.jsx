import { useState } from "react";

const Form = (props) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    props.addItem(value);
    console.log(value);
    setValue("");
  };

  return (
    <div className="ListMain">
      <div className="header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter an item"
            className="input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Click Me</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
