// Day - 06 in JS
// Strings & Arrays in JS

let name = "Zero"

// templete literals     - you can use symbols like "" in a string 
let a = `hello "zero"`  
// console.log(a)

// we can use variables also inside templete literals
let b = `Hello ${name}`
// console.log(b)

// Escapse sequence characters
// let iname = 'Adam D' Angelo' this is wrong
let iname = 'Adam D\' Angelo'
// console.log(iname)

let z = "Hello zero \n this is hero"         
// console.log(z)

// Methods on strings 
// let name = "Amazon.com"         cannot redeclare name as it is block scoped
name = "Amazon.com"                // but can be redefined
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.replace(".com", ".in"))

// console.log(name)        the above methods doesn't change the string, they just make a new string


// console.log("hisname\;".length)

// Question. Try to change the 4th character of the string
let change = "Yaahoo"
change [4] = "z"
// console.log(change[4])
// console.log(change)

// no not changed

// Arrays              - nothing but a kind of object
const fruits = ["apple","mango","banana","grapes"]
// console.log(typeof(fruits))                  will return object
// console.log(fruits[1])

fruits[1] = "Potato"          // arrays are mutable
console.log(fruits)

// Methods on arrays
let arr = [1,2,3,4,5]
console.log(arr.toString())                    // return CSV values
console.log(arr)                       // methods on array return new array

const dob = [22,12,2004]
console.log(dob.join("-"))                  // 22-12-2004
console.log(dob.join("/"))                  // 22/12/2004


//  below methods actually change the arary 

console.log(dob.pop())                     // removes and return the last element 
console.log(dob.push(234))                 // add and return the length of array
console.log(dob)             

// some more methods on arrays
let a1 = [1,2,3,4,5]
let a2 = [1,2,3]
let a3 = a1.concat(a2)                       // doesn't change the original array
console.log(a3)

let unsorted = [3,9,1,7,4,0,2]
console.log(unsorted.sort())

// Splice method 
const num = [,1,2,3,4,5]            //[ <1 empty item>, 1, 2, 3, 4, 5 ]

const numbers = [1,2,3,4,5]   
numbers.splice(2,1,23,24)
console.log(numbers)                    //[ 1, 2, 23, 24, 4, 5 ]  

console.log(numbers.reverse())

