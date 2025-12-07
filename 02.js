// Day - 02 of JS problems 

// Q1 — Double Each Number
// Given an array [2, 4, 6, 8], use map() to create a new array where each number is doubled.

// arr = [2,4,6,8]

// using for each loop
// const c = arr.forEach(element => {
//     return element*2;
    
// }); 
// console.log(c)           not working 

// using map method()
// const b = arr.map(e=>{
//     return e*2;
// })
// console.log(b)            working


// Q2 — Convert to Uppercase
// Given ["apple", "banana", "mango"], use map() to make all items uppercase.
// arr = ["apple","banana","mango"]

// const b = arr.map(e=>{
//     return e.toUpperCase()
// })
// console.log(b)

// Q3 — Filter Even Numbers
// Given [1, 2, 3, 4, 5, 6], use filter() to extract even numbers only.
// arr = [1,2,3,4,5,6]
// const c = arr.filter(e=>{
//     if(e%2==0){
//         return e }  })

// or 
// const d = arr.filter(e=> e%2==0)

// console.log(c)

// Q4 — Filter by Length
// Given an array of words ["hi", "hello", "sun", "world", "a"], use filter() to get all words longer than 2 letters.
// arr = ["hi", "hello", "sun", "world", "a"]

// const x = arr.filter(e=> e.length>2)
// console.log(x)

// Q5 — Total Using Reduce
// Given [10, 20, 30, 40], use reduce() to find the total sum.
// arr = [10, 20, 30, 40]
// const c = arr.reduce(e=> {
//     sum = 0;
//     for (let i = 0; i <arr.length; i++){
//         return sum+=arr[i]
//     }
// })
// console.log(c)                 doesn't work, this is not how reduce works

// arr = [10, 20, 30, 40]
// const c = arr.reduce((one,two)=>one+two,0)   // here one is initial with value 0
// console.log(c)

// Q6 — Average Marks
// Given student marks [70, 85, 90, 75, 60], use reduce() to calculate the average mark.
// arr = [70, 85, 90, 75, 60]
// const c = arr.reduce((one,two)=> (one+two),0)/arr.length
// console.log(c)

// Q7 - Find Maximum Using Reduce
// Given [10, 45, 67, 23, 89, 12], find the maximum number using reduce().
// arr = [10, 45, 67, 23, 89, 12]
// const c = arr.reduce((one,two)=> one>two?one:two)
// console.log(c)

// Q8 — Chain Methods
// Given [2, 5, 8, 10, 3]
// Use method chaining to double each number using map(),
// then filter out numbers greater than 10.
// arr = [2, 5, 8, 10, 3]
// const c = arr.map(e => e*2).filter(e => e>10)
// console.log(c)

// Q9 — Using forEach
// Given [‘apple’, ‘banana’, ‘cherry’], use forEach() to print:
// Fruit: apple
// Fruit: banana
// Fruit: cherry

// arr = ["apple", "banana", "cherry"]
// const c = arr.forEach(e => {
//     console.log("Fruit : ", e)
// });

// Q10 — Real-life Example (Objects + reduce)
// Given this data:
// const cart = [
//   { item: "Laptop", price: 50000 },
//   { item: "Mouse", price: 700 },
//   { item: "Keyboard", price: 1200 }
// ];
// Use reduce() to calculate the total price of all items in the cart.

// const cart = [
//   { item: "Laptop", price: 50000 },
//   { item: "Mouse", price: 700 },
//   { item: "Keyboard", price: 1200 }
// ];
// const total = cart.reduce((acc, curr) => acc + curr.price, 0);
// console.log(total)



// ***** End of the Day 02 *****