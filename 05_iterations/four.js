const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in myObject) {
//         console.log(key);
// } // with  this we got only keys // we have to get values also
// for (const key in myObject) {
//     console.log(myObject[key]);
// } // with  this we got only values

// for (const key in myObject) {
//     console.log(` ${key} is shortcut for ${ myObject[key]}`)
// } // with this we got both key and value


// ******* can this forin be used for arrays and maps *******

// const programming = ["js", "rb", "py", "java", "cpp"]
// for (const key in programming) {
//     // console.log(key);
//     console.log(programming[key]);
// }

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
} // map cant be iterated using forof
