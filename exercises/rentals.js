var van = 15;
var vanCost = 250;
var going = 38;

var vanTotal = (Math.ceil(going / van)) * 250;
var vanPerson = vanTotal / going;

console.log(
  "the total for the rental is " +
    vanTotal +
    " payment per person is " +
    vanPerson.toFixed(2)
);
