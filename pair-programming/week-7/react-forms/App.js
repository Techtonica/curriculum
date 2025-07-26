// Import state from React to control the form component
import "./styles.css";
import RegisterYourCatForm from "./RegisterYourCatForm";

const COLORS = ["white", "red", "blue", "black", "cream"];

export default function App() {
  let initialValue = { name: "", age: "", habit: "", color: "" };
  const [values, setValues] = useState(initialValue);

  function handleChange(e) {
    // Add your logic to handle input changes using your state and the event object
  }

  function handleSubmit(ev) {
    // Add your logic to handle form submission using the event object and preventDefault
  }

  return (
    <div className="App">
      <RegisterYourCatForm
        COLORS={COLORS}
        values={values}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
}
