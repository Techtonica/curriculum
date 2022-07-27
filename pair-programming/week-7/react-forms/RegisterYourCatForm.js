function RegisterYourCatForm({ COLORS, values, handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
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

export default RegisterYourCatForm;
