import { useState } from "react";
import Form from "./components/form.jsx";
import Message from "./components/message.jsx";
import "./App.css";

function App() {
  const [userEmail, setUserEmail] = useState("");

  const handleReceiveData = (data) => {
    setUserEmail(data);
  };

  return (
    <>
      <div>
        <h1>Hello Techtonica</h1>
        <Form onSendData={handleReceiveData} />
        {!userEmail ? null : <Message email={userEmail} />}
      </div>
    </>
  );
}

export default App;
