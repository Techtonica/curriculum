import "./styles.css";
import { useState } from "react";

export default function App() {
  const [bookName, setBookName] = useState("");

  async function fetchLordOfTheRingsBookTitle() {
    try {
      const response = await fetch("https://the-one-api.dev/v2/book");
      const lordOfTheRings = await response.json();
      // setBookName(lordOfTheRings.docs[0].name); // hard coding the first book name
      // let randomIndex = Math.floor(Math.random() * lordOfTheRings.docs.length); // get a random book name index
      // setBookName(lordOfTheRings.docs[randomIndex].name);
    } catch (error) {
      console.error("Oh no, I didn't get a response - error, ERROR!", error);
    }
  }
  return (
    <div className="App">
      <h2>Click the button to see a Lord of the Rings Book Title appear!</h2>
      <div>
        <button onClick={fetchLordOfTheRingsBookTitle} type="submit">
          Click Me
        </button>
        <h1>{bookName}</h1>
      </div>
    </div>
  );
}
