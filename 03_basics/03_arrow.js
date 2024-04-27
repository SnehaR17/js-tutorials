// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`); // "this" allows us to refer the current context
//         console.log(this); // prints all the current context
//     }

// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // here we get empty object {} because there is no context inside global

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // "this" is working only inside objects but not inside functions
// }
// chai()

// how to declare functions through arraw function

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // undefined
// }
// chai()

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this.username); // undefined
//     console.log(this); // {}
// }
// chai()

// this is explicit keyword where we are explicitly writing the return keyword
// const addTwo = (num1, num2) => { 
//     return num1 + num2
// }
// console.log(addTwo(3, 4))

// implicit return, in this theres no need to use the curly braces and avoid the return as it is understood
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )
// console.log(addTwo(3, 4))
// if curly braces is used as in the first one, then we have to use the return keyword but if we write parenthesis then no need to write return keyword

// while returning an object
const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()