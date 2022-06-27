import * as React from "react";

// Techtonica state form starter code with reducer
const initialState = {
  name: "",
  date: null,
  description: "",
  category: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "editName":
      return { ...state, name: action.payload };

    default:
      return state;
  }
};

const EventForm = () => {
  const [events, setEvents] = React.useState([]);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <>
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
                value={state.name}
                onChange={(e) =>
                  dispatch({
                    type: "editName",
                    payload: e.target.value
                  })
                }
                placeholder=""
              />
            </fieldset>
            {/* Add more form fields here */}
            <input type="submit" />
          </form>
        </div>

        <div>
          <h4> The state looks like this: </h4>
          {/* This can be helpful to see for debugging */}
          {JSON.stringify(state, null, 2)}
        </div>
      </section>
    </>
  );
};

export default EventForm;
