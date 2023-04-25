// sample inputs

var foodCost = 79.25;
var tax = 6.54;
var tip = 12.00;

// calculation

var totalDue = foodCost + tax + tip;

// output

console.log("The total due is " + totalDue);
console.log("food cost is " + foodCost +" and tax is " + tax);
console.log("Tip is " + tip);
console.log(" Total Due is " + totalDue);
console.log("Tip is " + tip.toFixed(2));


// var obj = new Object();
// obj.assets = 100000;
// obj.debts = 20000;

var obj = {assets: 100000, debts: 20000 }
var netWorth = obj.assets - obj.debts;
console.log("Your net worth is " + netWorth);
console.log(Math.PI)
console.log()