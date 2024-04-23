const score = 400 //js understands and treats it as number 
console.log(score); // 400  

const balance = new Number(100) // here we are explicitly mentioning that the value is a number 
console.log(balance); // [Number :100]
// [[Prototype]]: Number
// constructor: ƒ Number()
// toExponential: ƒ toExponential()
// toFixed: ƒ toFixed()
// toLocaleString: ƒ toLocaleString()
// toPrecision: ƒ toPrecision()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// [[Prototype]]: Object
// [[PrimitiveValue]]: 0
// [[PrimitiveValue]]: 100

console.log(balance.toString());
console.log(typeof 'balance');
// as it has now converted to string we can use additional properties ie of string
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // 100.00  // this decides the precision value 

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); // 124
console.log(otherNumber.toPrecision(4)); // 123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

// ***************************************** MATHS *****************************************************

// maths library comes by default in js
console.log(Math);
console.log(Math.abs(-4));  // converts negative values to positive 
console.log(Math.round(4.6));  
console.log(Math.floor(4.6));  
console.log(Math.ceil(4.6));
console.log(Math.min(4, 3 , 2, 5));
console.log(Math.max(4, 6, 7, 2));

console.log(Math.random()); // will always lie between 0 and 1
console.log((Math.random()*10) + 1)

const min = 10
constmax = 20
