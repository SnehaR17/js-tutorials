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

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);


myArr.unshift(9) // unshift adds the num mentioned at the beginnning of the array // optimation is reduced when there are more num of elements as we need to shift all the values
myArr.shift() // shfit removes the num at the beginning of the array
console.log(myArr);

console.log(myArr.includes(9)); // is the num inside the bracket present in the array, if yes returns true else false
console.log(myArr.indexOf(9)); // -1   this is becoz that elem is not present in the array
console.log(myArr.indexOf(3)); // 3 

const newArr = myArr.join() // Adds all the elements of an array into a string, separated by the specified separator string. // join changes array into string

console.log(myArr);
console.log( newArr);
console.log(typeof newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // includes 1st and 2nd elems
console.log(myn1);
console.log("B ", myArr); // original array remains the same


const myn2 = myArr.splice(1, 3) // includes 1st, 2nd and 3rd elem
console.log(myn2);
console.log("C ", myArr); // original array is manipulated ( the elems that have been spliced out of the array have not been included in the original array)