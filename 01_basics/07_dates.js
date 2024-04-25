// dates 

const myDate = new Date() // here we just made an instance of date object
console.log(typeof myDate);
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023, 1, 12) // year month date
console.log(myCreatedDate.toDateString());
let myCreatedDate1 = new Date(2023, 1, 12, 5, 3, 56) // year month date hour min secs
console.log(myCreatedDate1.toString());
let myCreatedDate2 = new Date("01-23-2024") // MM-DD-YYYY
console.log(myCreatedDate2.toLocaleString());

//timeStamps => useful when u need the exact timestamps for eg. while conducting quizes or polls
let myTimeStamp = Date.now()
console.log(myTimeStamp); // gives long digits which is ntg but milliseconds from 01st jan 1970
console.log(myCreatedDate.getTime()); // get time gives long digits as abpove from 1st jan 1970 till the myCreatedDate
console.log(Math.floor(Date.now()/1000)); // converts into seconds, but we'll have decimal values so to avoid tht we can use math.flooer

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // jan is assigned with 0 so to to make it convinient to end users to understand we add 1 
console.log(newDate.getDay()); // starts from monday i.e, 0

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
}) // this gives a similar result as noramal toLocaleString but this will help with more customization