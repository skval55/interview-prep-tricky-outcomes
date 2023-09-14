function createAccount(pin, amount = 0) {
  //   let pin = pin;
  //   let amount = amount;
  function checkBalance(pinAttempt) {
    if (pinAttempt === pin) return `$${amount}`;
    else return "Invalid PIN.";
  }
  function deposit(pinAttempt, amountToAdd) {
    if (pinAttempt === pin) {
      amount = amount + amountToAdd;
      return `Succesfully deposited $${amountToAdd}. Current balance: $${amount}.`;
    } else return "Invalid PIN.";
  }
  function withdraw(pinAttempt, amountToSub) {
    if (pinAttempt === pin && amountToSub > amount) {
      return "Withdrawal amount exceeds account balance. Transaction cancelled.";
    }
    if (pinAttempt === pin) {
      amount = amount - amountToSub;
      return `Succesfully withdrew $${amountToSub}. Current balance: $${amount}.`;
    } else return "Invalid PIN.";
  }
  function changePin(pinAttempt, newPin) {
    if (pinAttempt === pin) {
      pin = newPin;
      return "PIN successfully changed!";
    } else return "Invalid PIN.";
  }
  return {
    checkBalance,
    deposit,
    withdraw,
    changePin,
  };
}

module.exports = { createAccount };
