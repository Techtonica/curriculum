/**
 * Paste your code from Part 1 into this file but keep the module check at the very end.
 * (The following is a just a small subset for the Add Event form on the example page to work)
 */
class Event {
  static all = [];
  static _nextId = 100;

  constructor(name) {
    this.name = name;
    this.id = Event._nextId++;
    Event.all.push(this); // keep track of all created instances
  }
}

class User {}

class Eventonica {
  addEvent(name) {
    return new Event(name);
  }
}

if (typeof module !== "undefined") {
  module.exports = { Eventonica, User, Event };
}
