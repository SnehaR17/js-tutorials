const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) // an array inside array will be created
console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros) // Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(allHeros);

// spread
const all_new_heros = [...marvel_heros, ...dc_heros] // the elems have been spread out, there are no more in an array. this is mostly used, here we can add many arrays together unlike in concat where only 2 arrays can be merged
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // checks if it array
console.log(Array.from("Hitesh")) // converts into array 
console.log(Array.from({name: "hitesh"})) // empty array // interesting, here we have to mention where we want an array of keys or values 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Returns a new array from a set of elements.