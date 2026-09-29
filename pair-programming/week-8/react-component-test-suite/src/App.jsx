import "./styles.css";
import { useState } from "react";
import Form from "./components/Form";
import Item from "./components/item";
import HeaderComponent from "./components/header";

export default function App() {
  const [items, setItems] = useState([{ text: "Having a dog" }]);

  const addItem = (text) => {
    const newItems = [...items, { text }];
    setItems(newItems);
  };

  return (
    <div className="App">
      <HeaderComponent />
      {items.map((item, index) => (
        <Item key={index} index={index} item={item} />
      ))}
      <Form addItem={addItem} />
    </div>
  );
}
