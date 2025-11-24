import "./styles.css";

export default function App() {
  const handleClick = (event) => {
    // 👇️ toggle styles on click

    // 👇️ toggle class on click
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
