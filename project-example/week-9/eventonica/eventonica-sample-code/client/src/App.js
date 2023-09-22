import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        {/* User-management */}
        <Users />
        {/* Event-management */}
        <section className="event-management">
          <h2>Event Management</h2>
          <div>
            <h3>All Events</h3>
            <ul id="events-list">
              {/* Display all Events here */}
              <li>...</li>
            </ul>

            <h3>Add Event</h3>
            <form id="add-event" action="#">
              <fieldset>
                <label>Name</label>
                <input
                  type="text"
                  id="add-event-name"
                  placeholder="Virtual corgi meetup"
                />
              </fieldset>
              {/* Add more form fields here */}
              <input type="submit" />
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
