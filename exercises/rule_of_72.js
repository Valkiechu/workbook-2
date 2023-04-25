var rule = 72
var interestRate = 3;
var savingsAccount = 10000;

var year = rule / interestRate
var ammountinSavings = (savingsAccount * interestRate) * year + savingsAccount
console.log("at a rate of " + interestRate + " your savings account will be worth " + ammountinSavings + " after" + year + "year")    