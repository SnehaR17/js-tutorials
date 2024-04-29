// for

// for (let index = 0; index < array.length; index++) { // index < array.length => this is index check
//     const element = array[index];  
// } // throws error saying "array is not defined"


// for (let i = 0; i <= 10 ; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best"); 
//     }
//     console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value  ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`inner loop value ${j} and ${i}`);
//         console.log(i + '*' + j + '=' + i*j) ;
//     }
// }



// let myarr = ["flash", "batman", "superman" ]
// for (let index = 0; index < myarr .length; index++) {
//     const element = myarr [index];
//     console.log(element);
// }

// break and continue
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("detected 5");
        break;
    }
    console.log(`value of i is ${i}`);
}

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("detected 5");
        continue;
    }
    console.log(`value of i is ${i}`);
}