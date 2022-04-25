// creating a class Account
class Account {
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }

  // adding method deposit
  deposit(amount) {
    if (typeof amount !== "number") {
      throw new Error("amount should be number");
    }
    this.balance += amount;
  }
  // adding method deposit
  describe() {
    return `${this.name}'s current balance is  $${this.balance}.`;
  }
  // adding method transfer
  transfer(receiverName, amount) {
    if (!(receiverName instanceof Account)) {
      throw new Error(
        `The bank account to which you are trying to transfer does not exist'`
      );
    }

    receiverName.balance += amount;
    this.balance -= amount;
  }
}

// creating  an account for Billy, Rosie, Jack and Jill
const billy = new Account("Billy");
const rosie = new Account("Rosie");
const jack = new Account("Jack");
const jill = new Account("Jill");

//  depositing  money
billy.deposit(600);
rosie.deposit(100);
jack.deposit(70);
jill.deposit(80);

// TEST

// describing the current amount of money on each account
console.log(billy); // Account { name: 'Billy', balance: 600 }
console.log(rosie); // Account { name: 'Rosie', balance: 100 }
console.log(jack); // Account { name: 'Jack', balance: 70 }
console.log(jill); // Account { name: 'Jill', balance: 80 }

// accessing method
console.log(billy.describe()); // Billy's current balance is  $600.

// Transferring money
jack.transfer(billy, 80);
rosie.transfer(jill, 130);

console.log(rosie.balance); // -30
console.log(billy.balance); // 680
console.log(jack.balance); // -10
console.log(jill.balance); // 210

console.log(billy.describe()); // Billy's current balance is  $680.
console.log(rosie.describe()); // Rosie's current balance is  $-30.
console.log(jack.describe()); // Jack's current balance is  $-10.
console.log(jill.describe()); // Jill's current balance is  $210.
