import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  const connectToBackend = () => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  };

  return (
    <div className="App">
      <h1>React Website with an Express backend</h1>

      <button onClick={connectToBackend}>Send Request to Backend</button>

      <p>{data}</p>
    </div>
  );
}

export default App;
