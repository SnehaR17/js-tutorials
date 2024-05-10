// object literal
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }

}

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);
// this refers to current context, here outside the scope 'this' is empty, indicating that there is ntg in global context but we check for console.log(this) in web browser's console then it shows window object hvng various methods in it, but this isn't the same for node environment

// Constructor 

// const promiseOne = new Promise()
// const date = new Date()
// here the 'new' keyword is the constructor function, which allows you to create multiple instances from the same object

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this // even if we dont return this then it is implicitly returned
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne); // if we only do this then the userTwo values will overwrite the values of userOne though we haven't said to print userTwo // so we use constructor which gives a new instance // for this use 'new' keyword
console.log(userOne.constructor);
//console.log(userTwo);

// Firstly whenever we use 'new' keyword then an empty object will be created which is an instance
// Secondly a constructor function is called due to new keyword, it packs all the arguments
// Thirdly all the arguments will be added into 'this'

// bfdht
grhfh