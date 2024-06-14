import { expect } from 'chai';
import BankingSystem from '../../service/BankingSystem.js';

const ACCOUNT_NUMBER_1 = '123456';
const ACCOUNT_NUMBER_2 = '987654';
const ACCOUNT_PASS_1 = 'MojeHaslo123'

describe('BankingSystem', () => {
  let bankingSystem;

  beforeEach(() => {
    bankingSystem = new BankingSystem();
    bankingSystem.createAccount(ACCOUNT_NUMBER_1, ACCOUNT_PASS_1);
  });

  it('should create an account', () => {
    bankingSystem.createAccount(ACCOUNT_NUMBER_2, ACCOUNT_PASS_1);
    expect(bankingSystem.numberOfAccounts()).to.equal(2);
  });

  it('should deposit funds', () => {
    bankingSystem.depositFunds(ACCOUNT_NUMBER_1, 100.03);
    expect(bankingSystem.checkBalance(ACCOUNT_NUMBER_1)).to.equal(100.03);
  });


  it('should withdraw funds', () => {
    bankingSystem.depositFunds(ACCOUNT_NUMBER_1, 100.03); // Deposit funds before withdrawing
    bankingSystem.withdrawFunds(ACCOUNT_NUMBER_1, 50);
    expect(bankingSystem.checkBalance(ACCOUNT_NUMBER_1)).to.equal(50.03);
  });

  it('should check balance', () => {
    bankingSystem.depositFunds(ACCOUNT_NUMBER_1, 435);
    expect(bankingSystem.checkBalance(ACCOUNT_NUMBER_1)).to.equal(435);
  });
});
