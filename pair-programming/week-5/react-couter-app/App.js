import { useState } from "react";

export default function App() {
  let [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count++);
  }

  function handleDecrement() {
    setCount(count--);
  }

  function handleReset() {
    setCount(0);
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
