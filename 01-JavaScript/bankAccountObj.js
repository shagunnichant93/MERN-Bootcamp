let bank ={
accountHolder: "Amit",
balance: 50000,
deposit(amount) {
    this.balance += amount;
    console.log (`Balance after deposit: ${this.balance}`);
},
withdraw(amount) {
   this.balance -= amount;
    console.log (`Balance after withdraw: ${this.balance}`);
},
checkBalance() {
     
     console.log (`Final Balance: ${this.balance}`);
     return this.balance
}

};

bank.deposit(1000);

bank.withdraw(500);

bank.checkBalance();

