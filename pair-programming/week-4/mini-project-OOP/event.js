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
    this.availableTickets.push(new TicketType(name, price));
  }

  allTickets() {
    console.log(this.availableTickets);
    let str = "All Tickets: ";

    for (let i = 0; i < this.availableTickets.length; i++) {
      let num = i + 1;
      str +=
        num +
        " " +
        this.availableTickets[i].name +
        "($" +
        this.availableTickets[i].price +
        ")";
    }

    return str;
  }

  searchTickets(lower, upper) {
    let str = `Eligible tickets: `;
    let count = 0;
    for (let i = 0; i < this.availableTickets.length; i++)
      if (
        this.availableTickets[i].price >= lower &&
        this.availableTickets[i].price <= upper
      ) {
        count++;
        str += `${count}. ${this.availableTickets[i].name} ($${this.availableTickets[i].price}) `;
      }
    return count > 0 ? str : "No tickets available.";
  }
}

// The below statement creates an object.
const eventObj1 = new Event(
  "KLOS Golden Gala",
  "An evening with hollywood vampires"
);

const eventObj2 = new Event("Skillet & Sevendust", "Victorious war tour");
const eventObj3 = new Event("Jenny Lewis", "On the line tour 2019");

const eventArray = new Array();

// pushing single object to an array
eventArray.push(eventObj1);
// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);

eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);

eventObj2.addAvailableTickets("General Admission", 25);
eventObj2.addAvailableTickets("Floor Seating", 80);

eventObj3.addAvailableTickets("Orchestra", 300);
eventObj3.addAvailableTickets("Mezzanine", 200);
eventObj3.addAvailableTickets("Balcony", 100);

// console.log(eventObj3.allTickets());

eventObj3.searchTickets(0, 250);

document.addEventListener("DOMContentLoaded", () => {
  // Handler when the DOM is fully loaded
  let html = "";
  eventArray.forEach((item) => {
    html += `<li>${item.name} - ${item.description} - ${item.searchTickets(
      0,
      100
    )}`;
  });
  document.querySelector("#event").innerHTML = html;
});
