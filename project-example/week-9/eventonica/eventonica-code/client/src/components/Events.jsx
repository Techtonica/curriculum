import { useState } from "react";
import AddNewEvent from "./AddEvent";

function Events() {
  const event1 = {
    id: "1",
    name: "Birthday",
    date: "2021-09-01",
    description: "A birthday party for my best friend",
    category: "Celebration",
  };

  const event2 = {
    id: "2",
    name: "Graduation",
    date: "2021-08-01",
    description: "The class of 2021 graduates from East High",
    category: "Education",
  };

  const event3 = {
    id: "3",
    name: "JS Study Session",
    date: "2021-10-01",
    description: "A chance to practice Javascript interview questions",
    category: "Education",
  };

  function handleAddEvent(newEvent) {
    // const newEvent = {id, name, date, description, category}
    setEvents([...events, newEvent]);
  }

  const [events, setEvents] = useState([event1, event2, event3]);

  function handleDeleteEvent(deletedId) {
    const filteredEvent = events.filter((eve) => eve.id !== deletedId);
    setEvents(filteredEvent);
  }

  //////////////// Event Lists
  const renderHeader = () => {
    let headerElement = [
      "Id",
      "Name",
      "Date",
      "Category",
      "Description",
      "Edit",
      "Delete",
    ];

    return headerElement.map((ele, index) => {
      return <th key={index}>{ele}</th>;
    });
  };

  const renderBody = () => {
    console.log(events)
    // debugger;
    return events.map((event) => {
      return (
        <tr key={event.id}>
          <td>{event.id}</td>
          <td>{event.name}</td>
          <td>{event.date}</td>
          <td>{event.category}</td>
          <td>{event.description}</td>

          <td className="editEventButton">
            <button>Edit</button>
          </td>

          <td className="deleteEventButton">
            <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
          </td>
        </tr>
      );
    });
  };
  ////////////////////////////////////////////////////////////

  return (
    <section className="event-management">
      <h2>Event Management</h2>
      <div>
        <h3>All Events</h3>
        <table className="listEvent">
          <thead>
            <tr>{renderHeader()}</tr>
          </thead>
          <tbody>{renderBody()}</tbody>
        </table>

        <AddNewEvent handleAddEvent={handleAddEvent} />

    
        <aside className="search-toolbar">
          <div>
            <h3>Find Events</h3>
            <form id="search" action="#">
              <fieldset>
                <label htmlFor="date-search">Date</label>
                <input type="date" id="date-search" placeholder="YYYY-MM-DD" />
              </fieldset>
              <fieldset>
                <label htmlFor="category-search">Category</label>
                <input type="text" id="category-search" />
              </fieldset>

              <input type="submit" value="Search" />
            </form>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Events;
