// let a = 10
// const b = 20
// var c = 30
// console.log(a);
// console.log(b);
// console.log(c);

// when we had var y let????

// {} is scope,don't mistaken this as object but this curly braces are taken as scope when they come along with function, if-else etc.

// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
//     console.log("inner:", a);
// } // all these values are restricted within this scope // everthing inside if block is block scope and everthing outside it is global scope
// console.log(a); // tells a is not defined becoz its scope ends within the if block
// console.log(b); // same
// console.log(c); // prints 30, which is not right

// let a = 100
// console.log(a); // prints 100 

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // its scope is over so throws an error, due to line by line execution, after this the next line wont be executed so we hv to comment this out

     two() //  as function two is executed, it prints hitesh // two can be executed only when fun one is called because username is defined in fun one
} // keep in  mind that, child fun csn access parent variable but  vice versa is not possible 
one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website); 
    }
    // console.log(website); // throws error
}

// console.log(username); // throws error


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))
function addone(num){ // this is a basic function
    return num + 1
}
// addone(5) // (this line is typed first) here wkt the value is returned but it is not printed


addTwo(5) // throws error saying that "Cannot access 'addTwo' before initialization"
const addTwo = function(num){ // this is also a function where along with declaring we have held it in a variable // this is called a hoisting
    return num + 2
}
// addTwo(5) // (this line is typed first) here wkt the value is returned but it is not printed