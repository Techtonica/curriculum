import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    // Add your fetch logic here to connect to the /api endpoint
  }, []);

  const connectToBackend = () => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  };

  return (
    <div className="App">
      <h1>React Website with an Express backend</h1>

      <button onClick={connectToBackend}>
        Send Request to Backend
      </button>
      
      <p>{data}</p>
    </div>
  );
}

export default App;