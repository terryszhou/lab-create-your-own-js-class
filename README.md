# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Lab: Create Your Own JavaScript Class

To practice **OOP** in JavaScript, we are going to be making a bank account class!

## Getting started

* fork and clone this repo to your local machine, then cd into the cloned directory
* open `index.html` in your browser and use the browser's console to complete this lab
* `bank-class.js` is already linked up to `index.html` and ready to use

## Bank Account Class

You should use the `class` keyword to create a `BankAccount` class. Here are the implementaion details for your `BankAccount` class:

* Bank accounts should be created with an accountType property (like "savings" or "checking").
* Bank accounts should have a class-level (static) variable tracking the total amount of money in all accounts.
* Each account should keep track of it's current balance.
* Each account should have access to a deposit and a withdraw method.
  * The deposit method should add a specified amount to the account's balance.
  * The withdraw method should subtract a specified amount to the account's balance.
* Each account should start with a balance set to zero.

Use the `new` keyword to create an instance of your bank account class and test it with `console.log()` in your browser as you work.

### Things to think about

* Any starting values for variables should be set in the constructor method
* Static variables are declared using the static keyword inside the class but outside any methods
* Instance variables are declared inside the constructor method
* Does your constructor method need to accept any parameters?

## Stretch Goals

* Start each account with an additional overdraftFees property that starts at zero. If a call to withdraw ends with the balance below zero then overdraftFees should be incremented by twenty.
* Create a ChildBankAccount class that overrides the withdraw method to eliminate the overdraft penalty fee and simply disallow the withdrawal if there aren't enough funds.

