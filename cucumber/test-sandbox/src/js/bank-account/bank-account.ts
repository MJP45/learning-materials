export default class BankAccount {
    private _balance: number;

    constructor() {
        this._balance = 0;
    }

    public deposit(amount: number) {
        this.balance = Number(this.balance) + Number(amount);
    }

    public withdraw(amount: number) {
        if (Number(amount) > this.balance) return;
        this.balance = Number(this.balance) - Number(amount);
    }

    public set balance(amount: number) {
        this._balance = amount;
    }

    public get balance() {
        return this._balance;
    }
}