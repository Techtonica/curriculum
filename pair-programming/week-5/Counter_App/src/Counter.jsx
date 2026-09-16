import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    // Add logic to increment the count
  }

  function handleDecrement() {
    // Add logic to decrement the count
  }

  function handleReset() {
    // Add logic to reset the count back to 0
  }

  return (
    <div className="Counter">
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
