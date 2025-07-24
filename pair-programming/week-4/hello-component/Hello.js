export default function Hello({ firstName, lastName }) {
  // TODO: Render a greeting like "Hello, [firstName] [lastName]"
  return (
    <div className="Hello">
      <h1>Hello Component</h1>
      <h2>Hello, {firstName} {lastName}</h2>
    </div>
  );
}
