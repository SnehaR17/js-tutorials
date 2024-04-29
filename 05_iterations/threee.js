// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
// //     console.log(`Each char is ${greet}`)
//     console.log(greet)        
// }

// // Maps // map is an object
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India") // printed only once
// console.log(map);

// for (const key of map) {
//     console.log(key);
// } // we get in array format, to avoid that we can follow the syntax below where we have to put [] around the iterator position

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// } // tells myOject is not iteratable // for of doesn't work for object // theres another way
// for of was working for maps but not objects
