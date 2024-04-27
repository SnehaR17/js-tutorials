// Immediately Invoked Function Expressions (IIFE)
// as soon as the function is written we have  to execute it
// some variables in global scope can cause problem inside the function as wkt the child can access the variables from parent 
// so to avoid pollution from global variable we use this iife


// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai() // this is how we write a noramal function but if we wish to avoid pollution in presence of global variables and execute  it immediately then we go for iife


// in iife we put parenthesis around the entire fun def and then put a parenthesis adjacent to it // so the first parenthis is fun definition and the second parenthesis is the fun execution call as in chai()
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // after fun is invoked the system doesn't know where to stop so we have to end this using a semi colon // this is compulsory


//we can write this fun through arrow function // ( () => {} )
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') // understand this as chai('hitesh')

// named iife is a simple function 
// un-named iife is a arrow function