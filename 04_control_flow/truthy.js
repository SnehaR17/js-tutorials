const userEmail = "sneha@google.com"
if (userEmail) { // here we haven't  checked any condition is true or false, here we have assumed that if the string is present with userEmail then string has true value
     // this is only truthy values 
     // if there was empty string then it would be considered as false and elsde block would be executed
     // if there was an array [], then if block is executed
    console.log("Got user email"); // this will be printed
} else {
    console.log("Don't have user email");
}


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}(empty fun)

// how to check if the array is empty
if (userEmail.length === 0) {
    console.log("Array");
}

// how to check if the object is empty
const emptyobj = {}
if (Object.keys(emptyobj).length === 0) { // Object.keys(emptyobj) this will return an array so we are doing the same thing as above after getting an array
    console.log("Object is Empty");  
}

// in console
false == 0 // true
false == '' // true 
0 == '' // true

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")