// Day - 04, Revision in JavaScript

// Basics of JS
// What are variables and how declare them in Js?

// # 3 different types to declare a variable
var name = 20;
let hello = "world"
const b = 5;

// let b = 10     // can't do this (redclaraction of const)
 

// We'll mostly use let because it is block scoped.
// Primitive data types in JS

a = null;
console.log(typeof(a))                  // this will return object for NULL
a = 1;                                  // return number, not integer
console.log(typeof(a))
a = "ZERO"
console.log(typeof(a))
a = 3.14                                // return number, not floating value
console.log(typeof(a))
a = true 
console.log(typeof(a))
a = undefined
console.log(typeof(a))
a = {
    name : "zero",
    game : "COD"
}
console.log(typeof(a))


// we didn't used let, var or const above, because js will automatically take them as "let"

// Practise set 
// Question 1. Create a variable of type string and try to add a number to it.
let iname = "ZERO";
console.log(iname+1)       // string concatinated with number

// Question 2. Create a const object in javascript. Can you change it to hold a number later?

const obj = {
    a : 1,
    b : 2,
    c : 3
}

// obj = 4
console.log(obj)           // will raise error as we are assigning to a constant variable 

// Question 3. Try to add a new key to the constant object in last problem 


obj.d = 1
console.log(obj)                    // completely doable.


// Question 4. Write a Js program to create a word meaning dictionary of 5 words
// objects are actually similar to dict. in python
let dictionary = {
    hello : "Nameste",
    king : "Raja",
    queen : "Rani",
    Stupid : "Bevakoof",
    Thinking : "Soch"
}

//  we can't take input in the console here, prompt () works in the browser only.