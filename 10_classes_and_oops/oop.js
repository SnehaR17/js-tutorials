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