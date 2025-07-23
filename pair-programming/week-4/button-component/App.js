// filepath: week-4/button-component/App.js
import "./styles.css";
import Button from "./Button";

export default function App() {
  const handleClick = (event) => {
    // Add your logic here to toggle styles on click
  };

  return (
    <div className="App">
      <h1>Hello from Techtonica</h1>
      <Button num={1} handleClick={handleClick} />
      <Button num={2} />
      <Button num={3} />
      <Button num={4} />
    </div>
  );
}