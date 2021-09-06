<div className="App">
  <header>
    <img src="./calendar.png" alt="Calendar Star Logo" />
    <h1>Eventonica</h1>
  </header>

  <main>
    <div className="user-and-events">
      <section className="user-management">
        <h2>User Management</h2>

        <ul id="users-list">
          {/* display all existing Users here */}
          <li>...</li>
        </ul>

        <div>
          <h3>Add User</h3>
          <form id="add-user" action="#">
            <fieldset>
              <label>Name</label>
              <input type="text" id="add-user-name" />
            </fieldset>
            {/* Add more form fields here */}
            <input type="submit" value="Add" />
          </form>
        </div>

        <div>
          <h3>Delete User</h3>
          <form id="delete-user" action="#">
            <fieldset>
              <label>User ID</label>
              <input type="text" id="delete-user-id" />
            </fieldset>
            <input type="submit" />
          </form>
        </div>
      </section>

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
    </div>

    <div>
      <h3>Delete Event</h3>
      <form id="delete-event" action="#">
        <fieldset>
          <label>Event ID</label>
          <input type="number" min="1" id="delete-event-id" />
        </fieldset>
        <input type="submit" />
      </form>
    </div>

    <aside className="search-toolbar">
      <div>
        <h3>Find Events</h3>
        <form id="search" action="#">
          <fieldset>
            <label htmlFor="date-search">Date</label>
            <input type="text" id="date-search" placeholder="YYYY-MM-DD" />
          </fieldset>
          <fieldset>
            <label htmlFor="category-search">Category</label>
            <input type="text" id="category-search" />
          </fieldset>

          <input type="submit" value="Search" />
        </form>
      </div>
    </aside>
  </main>

  <footer>
    <div>
      Star Calendar favicon made by
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
        Freepik
      </a>
      Find your own on
      <a href="https://www.flaticon.com/" title="Flaticon">
        FlatIcon.com
      </a>
    </div>
  </footer>
</div>
