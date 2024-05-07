// promises are mostly consumed but we must learn to create them before consuming them
const promiseOne = new Promise( function(resolve, reject){ 
    // Do Async task
    // DB calls, cryptography, Network calls
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    }, 1000) 
});

// .then() has direct connection with resolve
promiseOne.then(function(){
    console.log('Promise consumed');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async 2 resolved');
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'Chai', email:'chai@gmail.com'})
    },1000)
})
// data can be passed inside resolve which can be an object, an array etc...
// how will the data be sent to then()
// we can expect then() to recieve some data by default and here we are expecting the data in the form of 'user' 
promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: 'Sneha', password: '123'})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
// chaining => value returned from the upper then() will be sent to the present then()
promiseFour.then((user) => {
    console.log(user);
    // return user.username => we cant extract username like this, we hv to make use of chaining
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log('Promise is either resolved or rejected'))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: 'JavaScrpit', password: '123'})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})
// another way to handle promises is using async await => here it waits until the job is done otherwise gives error right there ( suppose for eg. when database connection is not done then we dont want to go further ) // this cant handle errors directly
async function consumePromiseFive(){
   try {
    const response = await promiseFive 
    console.log(response);
    }catch (error) {
    console.log(error);
    }
}
consumePromiseFive()
// async await wont throw error as the previous method, this wont gracefully handle errors so if 'reject' can cause som error then we have to use try catch block

// fetch()
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() // the data we are getting is in the form of string so we want to convert // we have to add await here because this proccess will be taking some time
//         console.log(data);
//     } catch (error) {
//         console.log('E:', error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error => console.log(error)))

// browser fetch API was dependent on browser based web streams APIs and abort controller interface // node js had no browser so fetch was not integrated but later node js wrote their own browser apis and integrated fetch()
//The Fetch API provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for XMLHttpRequest.
// A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.