// filepath: week-5/react-couter-app/App.js
import { useState } from "react";

export default function App() {
  let [count, setCount] = useState(0);

  function handleIncrement() {
    // Add logic to increment the count
  }

  function handleDecrement() {
    // Add logic to decrement the count
  }

  function handleReset() {
    // Add logic to reset the count
  }

  return (
    <div className="App">
      <h1>Hello Techtonica</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>+ </button>

      <button onClick={handleDecrement}>- </button>

      <button onClick={handleReset}>reset </button>
    </div>
  );
}