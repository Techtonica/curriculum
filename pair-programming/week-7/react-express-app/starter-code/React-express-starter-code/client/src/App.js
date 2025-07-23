// filepath: week-7/react-express-app/starter-code/React-express-starter-code/client/src/App.js
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Add your fetch logic here to connect to the /api endpoint
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;