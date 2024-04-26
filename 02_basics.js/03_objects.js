// we can declare objeccts in two ways => one as literal and other as constructor
// when we declare as literal the singleton is not formed, when declared as constructor then singleton is formed'

// object literals

const mySymb = Symbol("key1")
// we have to take a symbol, add it in the object keys and print // to add a symbol we have to first declare it here
const JSuser = {
    name : "Sneha", // the system processes the kay as string by default and the value can be of any datatype
    "full name" : "Sneha R",
    //mySymb : "myKey1" // this will give the value as myKey1 but the datatype of mySymb is not symbol but a string (to use it as a symbol we have to put square brackets around mySymb)
    [mySymb] : "myKey1", // here the datatype is symbol, so always make sure to use square brackets
    age : 20,
    place : "Jaipur",
    email : "snehadrdn@google.com",
    isLoggedIn : false,
    lastLoginDays : [ "Monday", "Tuesday"]
}
// accesing object
// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["full name"]); // full name cannot be accessed using a dot, so in such cases we use this method otherwise we mostly use dot
// console.log(JSuser[mySymb]); // full name cannot be accessed using a dot, so its better to use this method

// changing the values
// JSuser.email = "sneha@chatgpt.com" // so we can change using "=" symbol
// Object.freeze(JSuser) // this will lock the value 
// JSuser.email = "sneha@microsoft.com" // they value wont be propogated as the email is freezed, it wonyt give any error but just doesnt propogate
// console.log(JSuser);

// functions in js can be treated as variables
JSuser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JSuser.greeting); // we get a fun return back, function hasn't been executed we just got its reference
console.log(JSuser.greeting()); // prints hello js user and also shows undefined

JSuser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`); // we use back ticks and string interpolation to reference a particularvalue from the object, here we are referencing name // if we have to reference a value from the same object then we can use "this"
}
console.log(JSuser.greetingTwo());