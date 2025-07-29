// Import state from React to control the form component
import "./styles.css";

function RegisterYourCatForm({ COLORS, values, handleSubmit, handleChange }) {
  return (
    <form>
      <h2>Register Your Cat</h2>
      <label>Name*:</label>
      <input name="name" value={values.name} onChange={handleChange} required />
      <label>Color*:</label>
      <select name="color" value={values.color} onChange={handleChange}>
        <option value="">Select color</option>
        {COLORS.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
      <label>Age*:</label>
      <input name="age" value={values.age} onChange={handleChange} required />
      <label>Habits:</label>
      <textarea
        name="habit"
        value={values.habit}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

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
