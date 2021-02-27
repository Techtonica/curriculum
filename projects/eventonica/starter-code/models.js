let _nextId = 100;
function generateId() {
  return _nextId++;
}

/**
 * Paste your code from Part 1 into this file but keep the module check at the very end.
 * (The following is a just a small subset for the Add Event form on the example page to work)
 */
class Event {
  constructor(name) {
    this.name = name;
    this.id = generateId();
    // attributes you choose will go here
  }
}

class User {}

class Eventonica {
  constructor() {
    this.allUsers = [];
    this.allEvents = [];
  }

  addEvent(name) {
    const event = new Event(name);
    this.allEvents.push(event);
    return event;
  }

  getAllEvents() {
    return this.allEvents;
  }
}

if (typeof module !== "undefined") {
  module.exports = { Eventonica, User, Event };
}
