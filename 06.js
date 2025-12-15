// Day - 06 in JS
// Strings & Arrays in JS

let name = "Zero"

// templete literals     - you can use symbols like "" in a string 
let a = `hello "zero"`  
console.log(a)

// we can use variables also inside templete literals
let b = `Hello ${name}`
console.log(b)

// Escapse sequence characters
// let iname = 'Adam D' Angelo' this is wrong
let iname = 'Adam D\' Angelo'
console.log(iname)

let z = "Hello zero \n this is hero"         
console.log(z)

// Methods on strings 
// let name = "Amazon.com"         cannot redeclare name as it is block scoped
name = "Amazon.com"                // but can be redefined
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.replace(".com", ".in"))

// console.log(name)        the above methods doesn't change the string, they just make a new string


// console.log("hisname\;".length)

// Question. Try to change the 4th character of the string
let change = "Yaahoo"
change [4] = "z"
console.log(change[4])
console.log(change)

// no not changed

