import React from "react";

// replace your onClick with your new function name
const ColorButton = ({ children, color, onClick }) => {
  return (
    // replace the onClick value with an arrow function () => that calls your new function with a new message string
    <button style={{ backgroundColor: color }} onClick={onClick}>
      {children}
    </button>
  );
};

export default ColorButton;
