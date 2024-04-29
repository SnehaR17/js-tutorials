const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach((item) => {
//     console.log(item);
// })

// const values = coding.forEach((item) => {
//     console.log(item); // prints the items as usual
//     return item; // for each function does not return any value
// })
// console.log(values); // undefined // because ntg is returned from the fun

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter(  (num) => num >4 )  // filter returns the value but for each doesnot
// console.log(newNums);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter(  (num) => {  // when we have started a scope  then we have to use return keyword 
//     return num >4 
// })  // filter returns the value but for each doesnot
// console.log(newNums);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = []
// myNums.forEach( (num)  => {
//     if (num > 4) {
//         console.log(num);
//     }
// })


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks = books.filter( (bk) => bk.genre === 'History')
console.log(userBooks);


const userBooks = books.filter( (bk) => {return bk.publish >= 2000})
console.log(userBooks);

const userBooks = books.filter( (bk) => {return bk.publish >= 1995 && bk.genre === 'History'})
console.log(userBooks);