# Banking System

This project is a simple banking system application designed to help you learn and practice Test Driven Development (TDD) using Node.js and Mocha with Chai for testing.

## Features

- Create accounts
- Deposit funds into accounts
- Withdraw funds from accounts
- Check account balance
- Manage multiple accounts

## Prerequisites

To run this project, you will need to have the following installed on your system:

- Node.js (v18.18.2 or higher)
- npm (Node Package Manager)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Installation

1. **Clone the repository:**

   ```sh
    git clone https://github.com/your-username/banking-system.git
    ```
2. **Navigate to the project directory:**

    ```sh
    cd banking-system
    ```
3. **Install the dependencies:**

    ```sh
    npm install
    ```
## Running the Tests

This project uses Mocha and Chai for testing. To run the tests, use the following command:

    
    npm test
    
You should see output indicating that the tests are running and their results.
Usage

The main class in this project is BankingSystem. You can create an instance of this class and use its methods to interact with the banking system. Below is a brief overview of the methods available:
Methods

    createAccount(accountNumber, pass): Creates a new account with the specified account number and password.
    depositFunds(accountNumber, amount): Deposits the specified amount into the account with the given account number.
    withdrawFunds(accountNumber, amount): Withdraws the specified amount from the account with the given account number.
    checkBalance(accountNumber): Returns the balance of the account with the given account number.
    numberOfAccounts(): Returns the total number of accounts.

### Example

javascript

```sh
import BankingSystem from './service/BankingSystem.js';

const bankingSystem = new BankingSystem();

bankingSystem.createAccount('123456', 'password123');
bankingSystem.depositFunds('123456', 100.00);
bankingSystem.withdrawFunds('123456', 50.00);

console.log(bankingSystem.checkBalance('123456')); // Should print 50.00
```
## License

This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgments

    
This project is intended for educational purposes to demonstrate Test Driven Development (TDD) practices.
Inspired by various TDD tutorials and examples available online.
    