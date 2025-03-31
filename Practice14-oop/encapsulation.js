class BankAccount {
    #balance;
  
    constructor(owner, balance = 0) {
      this.owner = owner;
      this.#balance = balance;
    }
  
    get getbalance() {
      return this.#balance;
    }
  
    set setbalance(amount) {
      if (amount < 0) {
        console.log('Balance cannot be negative.');
        return ;
      }
      this.#balance = amount;
    }
  
    deposit(amount) {
      if (amount <= 0) {
        console.log('Deposit amount must be positive.');
        return;
      }
      this.#balance += amount;
    }
  
    withdraw(amount) {
      if (amount <= 0 || amount > this.#balance) {
        console.log('Invalid withdrawal amount.');
        return;
      }
      this.#balance -= amount;
    }
  }
  
  const account = new BankAccount('Krushna', 10000);
  console.log(account.getbalance);
  account.deposit(5000);
  account.withdraw(1000);
  console.log(account.getbalance);
  account.setbalance = 2000;
  console.log(account.getbalance);
  