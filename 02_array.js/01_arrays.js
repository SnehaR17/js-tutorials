 // array
 // array is an object with the below characteristics
 // 1. JavaScript arrays are resizable and can contain a mix of different data types.
 // 2. JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers
 // 3. JavaScript arrays are zero-indexed
 // 4. JavaScript array-copy operations create shallow copies. ( SHALLOW COPIES => A shallow copy of an object is a copy whose properties share the same references ...... DEEP COPIES => A deep copy of an object is a copy whose properties do not share the same references)
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);