package io.nology;

public class Main {

    public static void main(String[] args) {
	// write your code here
        BankAccount account = new BankAccount(0);
        System.out.println(account.getBalance());
        int balance = account.getBalance();
        account.deposit(200);
        System.out.println(account.getBalance());
        account.withdraw(200);
        System.out.println(account.getBalance());
    }
}
