const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function lang(){}) // this is how we declare a function but in case of "for each", it asks for a callback function, callback function is the function that doesnot have a name, so we remove the name "lang" in this case, later in the parenthesis we have to mention the variable given to access the values in the array, then in the curly braces we can put the code to be executed each time the fun is executed


// coding.forEach( function (val){
//     console.log(val);
// } )


// using arrow function
// coding.forEach(greet=() => {}) // remove name
 

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item){ // printMe function prints whatever value u give
//     console.log(item);
// }

// coding.forEach(printMe) // he we have to the reference only, we shld not call ie, printMe()

