// dates 

const myDate = new Date()
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
