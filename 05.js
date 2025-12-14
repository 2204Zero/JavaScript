// Day -05 in JavaScript

//  Conditionals in JS
a = 10
console.log(typeof(a))
b = "10"
console.log(typeof(b))
console.log(a == b)
console.log(a === b)

console.log(a != b)
console.log(a !== b)

// Conditional statements
a = 19
if(a>=18){
    console.log("You can vote")
}else{
    console.log("You cannot vote")
}

// Ternary operator 
(a>=18)? console.log("you can vote"): console.log("you cannot vote");

// Switch case

b = 10231203;
switch (b) {
    case 1: console.log("You pressed one")
        
        break;
    case 2: console.log("You pressed two")
        
        break;

    default:  console.log("You pressed nothing")
        break;
}

// Question. WAP in javascript to find whether a number is divisible by either 2 or 3
v = 12343452343;

if(v % 2 == 0 && v % 3 == 0){
    console.log("It is divisible by both 2 & 3")
}else if(v % 2 == 0){
    console.log("It is divisible only by 2")
}else if(v % 3 == 0){
    console.log("It is only divisible by 3")
}else{
    console.log("It is not divisible by both")
}

// Loops in Js

// for (let i = 1; i <10; i++)      this will raise an error, since i am doing i++ to const i.

for (let i = 1; i <10; i++){
    // console.log(i)
}
 
// For in loop                  - mostly used for objects

arr = [1,2,3,4,5,7,3,7,9,3]
count = 0

// here i works as an index
for (i in arr){
    if (arr[i] == 3){
        count ++
    }
}
console.log(count)

// For of loop                  - mostly used for arrays and strings

// here n works as the value at each index, i in for in worked as index itself
for (n of arr){
    console.log(n*n)
}

//  in the above examples i and n might be working as same, but the purpose is different, we use (for in) for looping through the index, and we use (for of) for looping accross the values

// While loops              - entry controlled loop

n = 6
while (n > 1){
    // console.log("we haven't reached one")
    n--
}
// console.log("yayyy!!! we have reached one")

// Do - while loops         - exit controlled loop
g = -100
do {console.log("we haven't reached one")}
while(g>1)


// Functions in Js

function print() 
{
console.log("hello world")
}
print()

// Storing a function into a variable
a = 10
b = 20
const sum = (a,b) => {
    let c = a + b;
    return c;
}
console.log(sum(a,b))


// Question. WAP to print the marks of a student in an object using for loop

obj = {
    "zero" : 10,
    "mbee" : 20,
    "feebi" : 30,
}

for (i in obj){
    console.log(i,obj[i])                   // i -> key,  obj[i] -> values
}


// Question. Write a function to find the mean of 5 numbers
a =10
b = 20
c = 30
d = 40
e = 50
const avg = (a,b,c,d,e) => {
    let i = (a+b+c+d+e)/5
    return i
}
console.log(avg(a,b,c,d,e))