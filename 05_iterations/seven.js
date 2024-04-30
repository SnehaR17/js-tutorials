// const myNums = [1, 2, 3,4, 5, 6 ,7 , 8, 9 ,10] 

// const newNums = myNums.map( (num) => num + 10)
// console.log(newNums);
 // [
//  //   11, 12, 13, 14, 15,
// //    16, 17, 18, 19, 20
// // ]

// chaining
// this is using 2 - 3 methods directly

const myNums = [1, 2, 3,4, 5, 6 ,7 , 8, 9 ,10] 

const newNums = myNums
                .map( (num) => num*10)   // returns an array => [10, 20, 30.....100]
                .map( (num) => num + 1 ) // the above array will passed as the values to this map fun so the result will be [11, 21....91, 101
                .filter( (num) => num >=40)
console.log(newNums);

// remember that in map function it returns a value that we mention explicitly but in filter it is a true or false condition 
