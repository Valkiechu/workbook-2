// disciption this script tests various numeric
//    conversion techiques
// Author Jordan Q. Newprogrammer
var a = " 101.1 ";
var b = " 55 ";
var c = " 402 Stevens ";
var d = " Number 5 ";

var aInt = parseInt(a);
var bInt = parseInt(b);
var cInt = parseInt(c);
var dInt = parseInt(d);

console.log(aInt); // Output: 101
console.log(bInt); // Output: 55
console.log(cInt); // Output: 402
console.log(dInt); // Output: NaN

// Using parseFloat()
var aFloat = parseFloat(a);
var bFloat = parseFloat(b);
var cFloat = parseFloat(c);
var dFloat = parseFloat(d);

console.log("parseFloat():");
console.log(aFloat); // Output: 101.1
console.log(bFloat); // Output: 55
console.log(cFloat); // Output: 402
console.log(dFloat); // Output: NaN

// Using Number()
var aNumber = Number(a);
var bNumber = Number(b);
var cNumber = Number(c);
var dNumber = Number(d);

console.log("Number():");
console.log(aNumber); // Output: 101.1
console.log(bNumber); // Output: 55
console.log(cNumber); // Output: NaN
console.log(dNumber); // Output: NaN


//Using unary()
var aUnary = +a;
var bUnary = +b;
var cUnary = +c;
var dUnary = +d;

console.log(aUnary)
console.log(bUnary)
console.log(cUnary)
console.log(dUnary)

