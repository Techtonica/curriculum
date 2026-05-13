import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/items")
      .then((req) => req.json())
      .then((data) => setItems(data));
  }, []);

  function renderItems() {
    return items.map((item, i) => {
      return (
        <div key={i}>
          <h3>{items.name}</h3>
          <p>Price: {items.price}</p>
        </div>
      );
    });
  }

  return (
    <main>
      <h1>Example webshop</h1>
      {renderItems()}
    </main>
  );
}

export default App;