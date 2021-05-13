class BankAccount {

    static availableFunds = 0
    static overDraftFees = 0

    constructor(name, account) {
        this.name = name
        this.account = account
    }

    deposit(num) {
        BankAccount.availableFunds = BankAccount.availableFunds + num
        console.log(`${this.name} has a ${this.account} account with $${BankAccount.availableFunds} in it.`)
    }

    withdraw(num) {
        BankAccount.availableFunds = BankAccount.availableFunds - num
        console.log(`${this.name} has a ${this.account} account with $${BankAccount.availableFunds} in it.`)
        if (BankAccount.availableFunds < 0) {
            BankAccount.overDraftFees = BankAccount.overDraftFees + 20
            console.log(`Uh oh! ${this.name} has an overdraft fee of $${BankAccount.overDraftFees}. What a loser!`)
        }
    }
}

const terry = new BankAccount("Terry", "checkings")
// terry.deposit(50)
// terry.withdraw(25)
// terry.withdraw(40)
// terry.withdraw(5)

class ChildBankAccount extends BankAccount {
    constructor(name, account) {
        super(name, account)
    }

    withdraw(num) {
        BankAccount.availableFunds = BankAccount.availableFunds - num
        
        if (BankAccount.availableFunds >= 0) {
            console.log(`${this.name} has a ${this.account} account with $${BankAccount.availableFunds} in it.`)
        } else if (BankAccount.availableFunds < 0) {
            BankAccount.availableFunds = BankAccount.availableFunds + num
            console.log(`${this.name} doesn't have enough money in their ${this.account} account for that. He's only got $${BankAccount.availableFunds}, not $${num}. Get a job, ${this.name}!`)
        }
    }
}

const perry = new ChildBankAccount("Perry", "savings")
perry.deposit(50)
perry.withdraw(25)
perry.withdraw(25)
perry.withdraw(5)
perry.deposit(10)
perry.withdraw(15)


// class ChildBankAccount extends BankAccount {
//     constructor(name, account) {
//         super(name, account)
//     }

//     withdraw(num) {
//         BankAccount.availableFunds = BankAccount.availableFunds - num
        
//         if (BankAccount.availableFunds > 0) {
//             console.log(`${this.name} has a ${this.account} account with $${BankAccount.availableFunds} in it.`)
//         } else if (BankAccount.availableFunds = 0) {
//             console.log(`${this.name} has a ${this.account} account with $${BankAccount.availableFunds} in it. Better watch out!`)
//         } else if (BankAccount.availableFunds < 0) {
//             BankAccount.availableFunds = 0
//             console.log(`${this.name} doesn't have enough money in their ${this.account} account for that. He's got $${BankAccount.availableFunds}. Get a job, ${this.name}!`)
//         }
//     }
// }
