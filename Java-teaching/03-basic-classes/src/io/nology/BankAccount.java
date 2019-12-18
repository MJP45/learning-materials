package io.nology;

public class BankAccount {
    private int balance;
    private boolean isOpen;
    // final - immutable, unchangeable
    // static - stored on the class not the instance!!!
    public final static String description = "THE FINAL DESCRIPTION";
    public static double interestRate;

    public BankAccount(int balance) {
        this.balance = balance;
        this.isOpen = true;
    }

    public void deposit(int amount){
        balance += amount;
    }

    // Write a method that withdraws money only if there is enough money in the account. Otherwise, print a message saying NO.
    // Extension: Throw an exception if there is no money
    // Extension++: Throw a custom BankAccountActionInvalidException

    public void withdraw(int amount) {

        if (balance > amount) {
            balance -= amount;
        } else {
            System.out.println("NO");
        }
    }

    public int getBalance() {
        return balance;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }
}
