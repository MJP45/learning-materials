import { binding, given, then, when } from 'cucumber-tsflow';
import {assert} from 'chai';
import BankAccount from '../../src/js/bank-account/bank-account';

@binding()
export class BankAccountSteps {
private account: BankAccount = new BankAccount();

  @given(/A bank account with starting balance of \$(.*)/)
  public givenStartingBalance(amount: number){
    this.account.balance = amount;
  }

  @when(/\$(.*) is deposited/)
  public onDepsoit(amount: number){
    this.account.deposit(amount);
  }

  @then(/The bank account balance should be \$(.*)/)
  public balanceShouldEqual(expectedAmount: number) {
    assert.equal(this.account.balance,expectedAmount);
      
  }
}