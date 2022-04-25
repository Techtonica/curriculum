class Account {
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }
  deposit(amount) {
    if (typeof amount !== "number") {
      throw new Error("amount should be number");
    }
    this.balance += amount;
  }
  describe() {
    return `${this.name}'s current balance is  $${this.balance}.`;
  }
  transfer(receiverName, amount) {
    if (!(receiverName instanceof Account)) {
      throw new Error(
        `The bank account to which you are trying to transfer does not exist'`
      );
    }

    receiverName.balance += amount;
    this.balance -= amount;
  }
  credit(value) {
    this.balance += value;
    return this.balance;
  }
}

const billy = new Account("Billy");
const rosie = new Account("Rosie");
const jack = new Account("Jack");
const jill = new Account("Jill");

billy.deposit(600);
rosie.deposit(100);
jack.deposit(70);
jill.deposit(80);

console.log(billy);
console.log(rosie);
console.log(jack);
console.log(jill);

console.log(billy.describe());
// Transfering money
jack.transfer(billy, 80);
rosie.transfer(jill, 130);
//rosie.transfer("jake", 130)

console.log(rosie.balance);
console.log(billy.balance);
console.log(jack.balance);
console.log(jill.balance);

console.log(billy.describe());
console.log(rosie.describe());
console.log(jack.describe());
console.log(jill.describe());
