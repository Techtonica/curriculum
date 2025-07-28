import EventfulSearch from "./components/EventfulSearch"

function App() {
  return (
    <div className="App">
      <header style={{ padding: "20px", textAlign: "center", backgroundColor: "#f5f5f5" }}>
        <h1>React Optimization Lesson</h1>
        <p>Learn about caching strategies and React performance optimization</p>
      </header>
      <main>
        <EventfulSearch />
      </main>
    </div>
  )
}

export default App
