export default function Hi({ firstName, lastName }) {
  return (
    <div className="Hi">
      <h1>Hello Component</h1>
      <h2>
        Hello {firstName} {lastName}
      </h2>
    </div>
  );
}
