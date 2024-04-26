// function sayMyName() {
//     console.log("S");
//     console.log("N");
//     console.log("E");
//     console.log("H");
//     console.log("A");
// }

// sayMyName() // sayMyName alone is function reference but tht along with parenthesis is exection 

// function addTwoNums(number1, number2){  // number1, number2 these are called parameters // input inside the function definition are parameters
//     console.log(number1+number2);
// }
// addTwoNums(3,4) // inputs given durimg fuction call are arguments
// addTwoNums(3,"4") // since 4 is a string, function thought 3 is also a string, so result is 34
// addTwoNums(3,"A") // similarly here the result is 3A
// addTwoNums(3,null) // similarly here the result is 3 // here we are not checking any conditions

// const result = addTwoNums(3,5) // 8
// console.log("Result:", result); // Result: undefined // we think that the function is returning a value

// function addTwoNums(number1, number2){  // number1, number2 these are called parameters // input inside the function definition are parameters
//     let result = number1+number2
//     return result
//     console.log("sneha"); // this will never be executed, after returning we cant execute other thing
//     return number1+number2 // we can return the sum without creating a separate variable also 
// }
// const result = addTwoNums(3,7) 
// console.log("Result:", result); // Result : 10 // here we are returning a value through result

function loginUserMessage(userName){ // username = sam can be passed to ensure tht the if block is never executed
    if(userName === undefined){ // condition can also be !username (undefined, empty string etc.. are assumed as false value and condition shld be true for the execution of if block so we have put ! symb)
        console.log("Please enter a username");
        return // if we dont put return here then it prints above line n comes out of if condition n still will print undefined just logged in
    }
    return ` ${userName} just logged in`
}
// console.log(loginUserMessage("Sneha")); // Sneha just logged in
// console.log(loginUserMessage("")); // just logged in
// console.log(loginUserMessage()); //  undefined just logged in // after putting if condition it will only print undefined

// in an e-commerce website u hv to keep adding the items coming into the cart so u dont know the num of arguments
// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(1)); // 1
// console.log(calculateCartPrice(200, 300, 400)); // 200 // we'll get only first item // to solve this problem we have rest operator (rest op n spread op are same but the name changes on functionality)

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 300, 400, 700)); // with this we can hv an array of all the parameters

// function calculateCartPrice(val1, val2,...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 300, 400, 700)); // 200 will be val1, 300 will be val2, 400 n 700 will be in an array

// how to pass an object inside a function
// const user = {
//     name: "hitesh",
//     price: 2000
// }
// function handleObject(anyObject){
//     console.log(`User name is ${anyObject.name} and price is ${anyObject.price}`);
// }
// handleObject(user)
// handleObject({
//     name: "hitesh",
//     price: 200
// }) // we can directly pass the object here also

// how to pass an array inside a function
const myNewArray = [ 100, 200, 400, 800]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue( [ 100, 200, 400, 800]));