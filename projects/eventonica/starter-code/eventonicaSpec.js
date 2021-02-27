// You may need to modify this if your filename or main class name is different
const { Eventonica } = require("./models.js");

describe("Eventonica", () => {
  let app;

  beforeEach(() => {
    // It's good practice in testing to create a brand new object each time
    app = new Eventonica();
  });

  describe("addEvent", () => {
    it("adds a new Event to the system", () => {
      app.addEvent("Change Me");
      const events = app.getAllEvents();
      expect(events.length).toEqual(1);
      const [event] = events;
      expect(event.name).toEqual("Change Me");
      // TODO what are some other things you can test?
    });
  });

  describe("addUser", () => {
    it("adds a new User to the system", () => {
      //app.addUser("Change Me");
      //expect(app.user.length).toEqual(1);
    });
  });
});
