import "./styles.css";
import Button from "./Button";

export default function App() {
  const handleClick = (event) => {
    // 👇️ toggle styles on click
    if (event.currentTarget.style.backgroundColor) {
      event.currentTarget.style.backgroundColor = null;
      event.currentTarget.style.color = null;
    } else {
      event.currentTarget.style.backgroundColor = "salmon";
      event.currentTarget.style.color = "white";
    }
    // 👇️ toggle class on click
    
    event.currentTarget.classList.add("my-class-1", "my-class-2");
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