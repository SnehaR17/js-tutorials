// let a = 10
// const b = 20
// var c = 30
// console.log(a);
// console.log(b);
// console.log(c);

// when we had var y let????

// {} is scope,don't mistaken this as object but this curly braces are taken as scope when they come along with function, if-else etc.

if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("inner:", a);
} // all these values are restricted within this scope // everthing inside if block is block scope and everthing outside it is global scope
// console.log(a); // tells a is not defined becoz its scope ends within the if block
// console.log(b); // same
// console.log(c); // prints 30, which is not right

let a = 100
console.log(a); // prints 100 
