// const tinderUser = {}  
// console.log(tinderUser);// this will also give an empty object
// this is a way to declare non-singleton object

const tinderUser = new Object()
//console.log(tinderUser); // this will give an empty object
// this is a way to declare singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sneha"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    name : {
        userFullName : {
            firstName: "Sneha",
            lastName : "Reddy"
        }
    }
}
// console.log(regularUser.name); // { userFullName: { firstName: 'Sneha', lastName: 'Reddy' } }
// console.log(regularUser.name.userFullName); // { firstName: 'Sneha', lastName: 'Reddy' }
// console.log(regularUser.name.userFullName.firstName); // Sneha // netsing goes on reducing

// optional chaining, if suppose name doesn't exist only then we have to check that using ?, this will give some protection (this is mostly done when we get response from api) 
// console.log(regularUser?.name.userFullName.firstName);

// combining objects
// const returnedTarget = Object.assign(target, source);
const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}
const obj4 = { 5: "a", 6: "b"}

// const obj3 = { obj1, obj2} // this will create an obj inside obj
// console.log(obj3);

// const obj3 = Object.assign(obj1,obj2, obj4) // here obj1 is target and obj1, obj2 and obj4 are source
// console.log(obj3);

// const obj3= Object.assign({}, obj1,obj2, obj4) // {} this  is an optional parameter but this ensures tht all the values // here {} acts as target and all objs are source
// console.log(obj3);

// spread // popular
// const obj3 = {...obj1,...obj2[3],...obj4} 
// console.log(obj3);

// when we get values from database // we get array of objects
const users = [
    {
        id : "111aaa",
        email: "aaa@google.com"
    },
    {
        id : "222bbb",
        email: "bbb@google.com"
    },
    {
        id : "333ccc",
        email: "ccc@google.com"
    },
    {
        id : "444ddd",
        email: "ddd@google.com"
    }
]
// console.log(users[0].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // array inside array, the first elem will be key and the second elem will be value // [ [ 'id', '123abc' ], [ 'name', 'Sneha' ], [ 'isLoggedIn', false ] ]

// while looping through the objects, the property may or may not exist, we can check this has below
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true
console.log(tinderUser.hasOwnProperty("isLogged")); // false


//  deconstructing of objects // more used in react
// array can also be destructed but it is rare
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // we are extracting the values from course object // we mention our value inside the curly braces

// console.log(courseInstructor); // hitesh
console.log(instructor) // hitesh
 
// api is ntg but when u get values from backend how do we write them // those values mostly come in json
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// not all the time swe get apis in object format but can be in array format // objects inside array
[
    {},
    {},
    {}
]