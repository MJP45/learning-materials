Feature: Bank Acccount - Deposit

    As a user, 
    I want to deposit money in my bank account,
    So that I can store my savings securely somewhere other than under my bed.

    Scenario: User can deposit money on top of an existing balance
        Given A bank account with starting balance of $100
        When $100 is deposited.
        Then The bank account balance should be $200.

    Scenario: User can deposit money with a starting balance of zero
        Given A bank account with starting balance of $0.
        When $1100 is deposited.
        Then The bank account balance should be $1100
      