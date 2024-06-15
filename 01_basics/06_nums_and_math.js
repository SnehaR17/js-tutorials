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
console.log(Math.round(4.6)); // normal // 5
console.log(Math.floor(4.6));  // rounds off to lower value // 4 
console.log(Math.ceil(4.6)); // rounds off to higher value // 5
console.log(Math.min(4, 3 , 2, 5));
console.log(Math.max(4, 6, 7, 2));

console.log(Math.random()); // will always lie between 0 and 1
console.log((Math.random()*10) + 1) // multiplying will shift the decimal point by one point and  we're adding 1 to ensure that we dont get any value in 0 (like if the number is 0.0231 then even if we multiply by 10  we'll get 0.231 so we add 1 to avoid this)
console.log(Math.floor(Math.random()*10) + 1) 

const min = 10
const max = 20
console.log(Math.floor(Math.random()* (max-min + 1)) + min);
