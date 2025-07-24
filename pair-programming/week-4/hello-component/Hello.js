export default function Hello({ firstName, lastName }) {
  // TODO: Render a greeting like "Hello, [firstName] [lastName]"
  return (
    <div className="Hello">
      <h2>Hello, {firstName} {lastName}</h2>
    </div>
  );
}
