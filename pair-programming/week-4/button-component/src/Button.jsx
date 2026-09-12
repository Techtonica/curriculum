export default function Button({ num, handleClick }) {
  return (
    <div className="App">
      <button onClick={handleClick}>{num} </button>
    </div>
  );
}
