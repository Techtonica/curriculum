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
  // adding method describe
  describe() {
    return `${this.name}'s current balance is  $${this.balance}.`;
  }

  // adding method transfer
  transfer(amount) {
    this.balance -= amount;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let account = new Account();
  const depositBtn = document.getElementById("submit-deposit");
  const withdrawBtn = document.getElementById("submit-transfer");
  const totalAmtDisplay = document.getElementById("amount");
  const displayAmount = document.getElementById("display-balance");
  displayAmount.style.visibility = "hidden";
  const transferForm = document.getElementById("transfer-form");
  transferForm.style.visibility = "hidden";

  depositBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const depositAmt = Number(document.getElementById("input-deposit").value);

    account.deposit(depositAmt);

    totalAmtDisplay.innerText = account.balance;
    displayAmount.style.visibility = "visible";
    transferForm.style.visibility = "visible";
    document.querySelector("form").reset();
  });

  withdrawBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const transferAmt = Number(document.getElementById("input-transfer").value);
    account.transfer(transferAmt);
    if (account.balance < 1) {
      const errorDiv = document.getElementById("error-message");
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "You have insufficient Balance";
      errorMessage.style.color = "red";
      errorDiv.appendChild(errorMessage);
    } else totalAmtDisplay.innerText = account.balance;
    document.querySelector("form").reset();
  });
});
