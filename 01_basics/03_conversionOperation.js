// let score = 33
// console.log(typeof score);
// console.log(typeof (score));

// let score1 = "33"
// console.log(typeof score1);
// let valueInNumber1 = Number(score1)
// console.log(typeof valueInNumber1);
// console.log(valueInNumber1);

// let score2 = "33abcd"
// console.log(typeof score2);
// let valueInNumber2 = Number(score2)
// console.log(typeof valueInNumber2);
// console.log(valueInNumber2);

// let score3 = null
// console.log(typeof score3);
// let valueInNumber3 = Number(score3)
// console.log(typeof valueInNumber3);
// console.log(valueInNumber3);

// let score4 = undefined
// console.log(typeof score4);
// let valueInNumber4 = Number(score4)
// console.log(typeof valueInNumber4);
// console.log(valueInNumber4);

// let score5 = true
// console.log(typeof score5);
// let valueInNumber5 = Number(score5)
// console.log(typeof valueInNumber5);
// console.log(valueInNumber5);
 
// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1 ; false => 0

// let isLoggedIn = 1
// let BooleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(BooleanIsLoggedIn);

// let isLoggedIn = ""
// let BooleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(BooleanIsLoggedIn);

// let isLoggedIn = "abcd"
// let BooleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(BooleanIsLoggedIn);

// 1 => true; 0 =>false
// "" => false
// "abcd" => true

// let someNumber = 33
// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *******************************************OPERATIONS*************************************************

let value = 33
let negValue = -value
console.log(value);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**3);

let str1 ="Hello"
let str2 = " Sneha"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122 
console.log(1 + 2 + "2"); // 32

console.log( (3 +5) * (5 % 10))

console.log(true); // true
console.log(+true); // 1(true value is 1, when incremented still remains 1)
//console.log(true+); // not possible, will throw error
console.log(+""); // 0 ("" in boolean is false ie 0, when incremented still remains 0)


let num1, num2, num3 
num1 = num2 = num3 = 2 + 2 // this will give the output the imp thing while coding is readability

let gameCounter = 100
gameCounter++
console.log(gameCounter);


//prefix and postfix js mdn
let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
