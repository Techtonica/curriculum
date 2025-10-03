class TicketType {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }

  addAvailableTickets(name, price) {
    // Add your code here
  }

  allTickets() {
    // Add your code here
  }

  searchTickets(lower, upper) {
    // Add your code here
  }
}
