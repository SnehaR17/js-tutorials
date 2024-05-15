function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername(username) // here the function has not been called technically, js provides few methods through which we can explictly call the function // but actually we can tell that the function has been called and executed but after that it's execution context is removed, but here we wish to hold the reference, for that we are using .call // so here we have to use this keyword for current context
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);