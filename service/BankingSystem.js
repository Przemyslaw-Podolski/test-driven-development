class BankingSystem {

  constructor() {
    this.accounts = new Map();
  }

  createAccount(accountNumber, pass) {
    if (!this.accounts.has(accountNumber)) {
      console.log("Add account: %s", accountNumber);
      this.accounts.set(accountNumber, {balance: 0, pass: pass});
      console.log("Account.balance: %s, ", this.accounts.get(accountNumber).balance);
    }
  }

  depositFunds(accountNumber, amount) {
    if (this.accounts.has(accountNumber)) {
        let account = this.accounts.get(accountNumber);
        account.balance += amount;
      console.log("Deposit founds: %d", amount)
      this.accounts.set(accountNumber, account);
    }
  }

  withdrawFunds(accountNumber, amount) {
    if (this.accounts.has(accountNumber) && this.accounts.get(accountNumber).balance >= amount) {
      console.log("Withdraw funds: %d, account number: %d", amount, accountNumber);
      let account = this.accounts.get(accountNumber);
      account.balance -= amount;
      this.accounts.set(accountNumber, account);
    }
  }

  checkBalance(accountNumber) {
    if (this.accounts.has(accountNumber)) {
        console.log("Checked balance: %s", this.accounts.get(accountNumber).balance);
      return this.accounts.get(accountNumber).balance;
    }
    return null;  // Or throw an error if the account does not exist
  }

  numberOfAccounts() {
    return this.accounts.size;
  }
}

export default BankingSystem;
