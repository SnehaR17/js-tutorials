const name ="Sneha"
const repoCount= 50

console.log(name + repoCount + " value"); // Sneha50 value
// bad syntax

// now we use back ticks, here we do string interpolation
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`); // modern syntax

// one more way to declare string
const gameName = new String('Sneha') // here we use a "new" keyword which allows to use objects in js
// only the syntax is different, in the first declaration also the string is working as an object


// this happensw when "const gameName = new String('Sneha')" this is run on console
// String {'Sneha'}
// 0: "S"
// 1: "n"
// 2: "e"
// 3: "h" // this is key value pairs
// 4: "a" // dont mistake this as array instead it is a string
// length: 5
// [[Prototype]]: // we have various methods inside prototype
// Stringanchor: ƒ anchor() // f here means functions
// at: ƒ at()
// big: ƒ big()
// blink: ƒ blink()
// bold: ƒ bold()
// charAt: ƒ charAt()
// charCodeAt: ƒ charCodeAt()
// codePointAt: ƒ codePointAt()
// concat: ƒ concat()
// constructor: ƒ String()
// endsWith: ƒ endsWith()
// fixed: ƒ fixed()
// fontcolor: ƒ fontcolor()
// fontsize: ƒ fontsize()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// isWellFormed: ƒ isWellFormed()
// italics: ƒ italics()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// link: ƒ link()
// localeCompare: ƒ localeCompare()
// match: ƒ match()
// matchAll: ƒ matchAll()
// normalize: ƒ normalize()
// padEnd: ƒ padEnd()
// padStart: ƒ padStart()
// repeat: ƒ repeat()
// replace: ƒ replace()
// replaceAll: ƒ replaceAll()
// search: ƒ search()
// slice: ƒ slice()
// small: ƒ small()
// split: ƒ split()
// startsWith: ƒ startsWith()
// strike: ƒ strike()
// sub: ƒ sub()
// substr: ƒ substr()
// substring: ƒ substring()
// sup: ƒ sup()
// toLocaleLowerCase: ƒ toLocaleLowerCase()
// toLocaleUpperCase: ƒ toLocaleUpperCase()
// toLowerCase: ƒ toLowerCase()
// toString: ƒ toString()
// toUpperCase: ƒ toUpperCase()
// toWellFormed: ƒ toWellFormed()
// trim: ƒ trim()
// trimEnd: ƒ trimEnd()
// trimLeft: ƒ trimStart()
// trimRight: ƒ trimEnd()
// trimStart: ƒ trimStart()
// valueOf: ƒ valueOf()
// Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
// [[Prototype]]: Object
// [[PrimitiveValue]]: ""
// [[PrimitiveValue]]: "Sneha"

console.log(gameName[0]); // S   //to access any value we have mention its key
console.log(gameName.__proto__); // {} // this means it is a string but in actual the strinsg is not empty

console.log(gameName.length); // 5
console.log(gameName.toUpperCase()); // SNEHA
console.log(gameName.charAt(3)); // h 
console.log(gameName.indexOf('h')); // 3

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(1, 3)
console.log(anotherString);

const newStringOne = "     sneha    "
console.log(newStringOne);
console.log(newStringOne.trim()); 

const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20', '-'));
console.log(url.includes('hitesh'));
console.log(url.includes('sneha'));

const gameName1 = new String('Sneha-Raj-Reddy')
console.log(gameName1.split('-'));