//if

// const isUserLoggeddIn = true
// if (isUserLoggeddIn) {
//     // the code inside if block will be executed only if the condition is true
// }

// if (false) {
//     // the code inside if block will not be executed if the condition is false
// }

// // comparision operators
// // <, >, <=, >=, ==(checks if the values are equal), !=, ===( checks for the datatype also), !==
// if (2 == "2") {
//     console.log("executed"); // though 2 and "2" are not equal the code inside if block is executed as this == operators checks the values alone but not the datatype
// }

// const temp = 41
// if (temp > 50) {
//     console.log("Temperature is less than 50");
// } else {
//     console.log("Temperature is greater than 50");
// }

// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`); // User power: fly
// }
// console.log(`User power: ${power}`); // throws error saying "power is not defined" because its scope is over inside the curly braces only

// const balance = 1000
// if (balance > 500) console.log("test"), console.log("test2");  // implicit scope // we can remove the curly braces and write the short hand notation like  this... but this is ok with only on eline of cod ebut with multiple lines the readability decreases so we shld avoid this

// const balance = 1000
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");  
// } else if (balance < 900) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
if (userLoggedIn && debitCard && 2==3 ) { // all conditions must be true
    console.log("Allow to buy course");
}

const loggedInFromGoogle = false
const loggedInFromEmail = true
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}