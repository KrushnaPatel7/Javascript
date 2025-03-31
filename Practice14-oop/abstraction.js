class BankAccount {
  
    constructor(owner, balance = 0) {
      this.owner = owner;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount <= 0) {
        console.log('Deposit amount must be positive.');
        return;
      }
      this.balance += amount;
      console.log(`Deposited ${amount}. Current balance: ${this.balance}`);
    }
  
    withdraw(amount) {
      if (amount <= 0 || amount > this.balance) {
        console.log('Invalid withdrawal amount.');
        return;
      }
      this.balance -= amount;
      console.log(`Withdrew ${amount}. Current balance: ${this.balance}`);
    }
  
    getBalance() {
      return this.balance;
    }
  }
  
  const myAccount = new BankAccount("Krushna", 10000);
  myAccount.deposit(5000);
  myAccount.withdraw(2000);
  console.log(`Final balance: ${myAccount.getBalance()}`);
  