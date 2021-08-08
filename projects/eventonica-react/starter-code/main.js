/**
 * Add all your DOM event handlers and other UI code in this file.
 */

// This will run each the page loads/refreshes
document.addEventListener("DOMContentLoaded", () => {
  // Use this to call all the logic we already created
  const app = new Eventonica();

  // You can add more test data here so the app isn't empty
  app.addEvent("Ocean Beach Small Dog Parade");

  // Builds HTML list for all event. You must call this function after you
  // change, add, or remove any events.
  const refreshEventsList = () => {
    document.querySelector("#events-list").innerHTML = app
      .getAllEvents()
      .map((event) => `<li>${event.name}</li>`)
      .join("\n");
  };

  const addEventForm = document.querySelector("#add-event");

  // Handle add event form submit by calling our instance of Eventonica, `app`
  addEventForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    const name = document.querySelector("#add-event-name").value;
    const event = app.addEvent(name);
    console.log("Added event", event);
    refreshEventsList();
    addEventForm.reset();
  });

  refreshEventsList();
});
