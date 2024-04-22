console.log(2 > 1);
console.log(3 >= 3);
console.log(7 < 9);
console.log(6 == 5);
console.log(9 != 1);

console.log("2" > 1);
console.log("02" > 1); // typescrit won"t allow you to compare 2 diff datatypes becoz of which we wont get predictable results
// so it is better if we restrict ourselves to compare only similar datatypes

console.log(null > 0); // f
console.log(null == 0); // f
console.log(null >= 0); // t

console.log(undefined == 0);
console.log(undefined < 0); 
console.log(undefined > 0); // gives false in all three cases

// strict check ===
 console.log("2" === 2); // here conversion doesnt occur, will check the datatype if diff then they are not same