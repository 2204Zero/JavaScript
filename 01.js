// Day - 01 of Js problems 

// Q.1 Write a program to print your name and age using variables.
// let a = "zero"
// let b = 20
// console.log(`My name is ${a}`,`and my age is ${b}`)

// Q.2 Create a variable num and print whether it is even or odd.
// if (b%2==0){
//     console.log("Number is even")
// }else{
//     console.log("Number is odd")
// }

// Q.3 Ask the user for two numbers and print their sum, difference, product, and quotient.
// let b = prompt()      prompt() doesn't run in VS code environment, it is browser only
// let a = Number("Enter a number")
// let b = Number("Enter a number")

// console.log("Sum is :",a+b)
// This is not that easy to be done, require some advance knowledge in JS

// Q.4 Print all numbers from 1 to 10 using a loop.
// for (let index = 1; index <= 10; index++) {
//     console.log(index)
// }

// Q.5 Print all even numbers from 1 to 20.
    // for(let i = 1; i<=20;i++){
    //     if(i%2==0){
    //         console.log(i)
    //     }
    // }

// Q.6 Calculate the sum of first N natural numbers (where N = 10).
// let sum = 0
// for(let i = 1; i<=10; i++){
//     sum +=i;
// }
// console.log(sum)

// Q.7 Write a function greet(name) that prints:
// "Hello <name>, welcome to JavaScript!"
// 
// let iname = "zero"
// function greet(iname){
//     console.log(`Hello ${iname}, welcome to JavaScript!`)
// }
// greet(iname)     we are passing the varible here, not the string literal


// function greet(name){
//     console.log(`Hello ${name}, welcome to JavaScript!`)
// }
// greet("zero")      use "" to provide the string literal if want to pass in function 

// Q.8 Create a function square(num) that returns the square of a number.
// let num = 10
// function sqaure(num){
//     console.log(num**2)
// }
// sqaure(num)

// let num2 = 10
// function sqaure(){           this one will also returns the answer, but this is not the correct way.
//     console.log(num**2)     
// }
// sqaure(num2)

// Q.9 Write a function to find the largest of three numbers.
// let a = 100
// let b = 20
// let c = 10

// if(a>b){
//     if(a>c){
//         console.log(`a is the largest num with the value ${a}`)
//     }else{
//         console.log(`c is the largest num with the value ${c}`)
//     }
// }else{
//     if(b>c){
//         console.log(`b is the largest num with the value ${b}`)
//     }else{
//         console.log(`c is the largest num with the value ${c}`)
//     }
// }

// Q.10 Create a function isPrime(num) that checks whether a number is prime.
// let num = 301
// let count=0
// function isPrime(num){
//     for (let i = 1; i <= num; i++){
//     if(num%i==0){
//         count++
//     }
//     }
//     if(count==2){
//         console.log(`${num} is a prime number`)
//     }else{
//         console.log(`${num} is not a prime number`)
//     }
// }
// isPrime(num)

// Q.11 Write a function that reverses a string (without using built-in reverse methods).
// let iname = "Venu Gopala Iyer"
// let reverse_name = "",j
// for (let i = iname.length-1, j =0 ; i >=0, j<reverse_name.length;i--,j++) {
//     reverse_name[j] = iname[i]
//     console.log(reverse_name)
    
// "WE CAN USE I AND J LIKE THIS, IN THIS ONLY J WILL BE TRACKED, AND ALSO STRINGS ARE IMMUTABLE SO NO MEANING OF reverse_name[j] = iname[i] "
// }
// let iname = "Venu Gopala Iyer"
// let reverse_name = ""
// for (let i = iname.length-1; i >=0;i--) {
//     reverse_name= reverse_name+iname[i]
// }
// console.log(reverse_name)

// Q.12 Print the multiplication table of a given number using loops.
// let num = 10
// for (let i = 1; i <= 10; i++){
//     console.log(`${num}*`+ i +"=" + num*i)
// }

// Q.13 Write a function to count how many vowels are in a given string.
// let count = 0
// function check_vowels(name){
// for (let i = 0; i < name.length-1; i++){
//     if (name[i]=="a"|| name[i]=="e"||name[i]=="i"||name[i]=="o"||name[i]=="u"||name[i]=="A"||name[i]=="E"||name[i]=="I"||name[i]=="O"||name[i]=="U"){
//         count ++
//     }
// } console.log(`Numbers of vowel in the given string is ${count}`)
// }

// check_vowels("My name is zero, and i am keen tO learN JAVASCRIPT")



// ***** End of the Day 01 *****