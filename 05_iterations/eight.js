// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function(acc, curval) {
//     console.log(`acc:${acc} and curval:${curval}`); // this we are doingg to check how the values of the accumulator and current value are changing
//     return acc + curval // this will return the sum of acc and curval // during the first iteration the acc will take the given initial value mentioned by default and later will store the sum of the previous acc and curval
// },0 ) // this 0 is the initial value

// console.log(myTotal);
// // result is
// // acc:0 and curval:1
// // acc:1 and curval:2
// // acc:3 and curval:3
// // 6

// const myTotal = myNums.reduce( (acc, curval) => acc + curval, 0)

// console.log(myTotal);

const shoppingCart = [
    
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 1999
    },
    {
        itemName : "c++ course",
        price : 2499
    },
    {
        itemName : "data science course",
        price : 4999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);