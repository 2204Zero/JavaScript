// Day 07 - in JS

// Important methods on array
//  *for each* loop    - calls a function, once for each array element
let an = [1,2,3]
an.forEach((e, index, arr)=>{
    // console.log(e*e, index, arr)
})

// console.log(an)

// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;        // has owned properties only 
    
    // const element = object[key];
// }

// MAP method 
let a = [1,2,3,4,5]

let newarr = a.map((e)=>{
    return e*e
})

//  we can do above thing using for - each also, but for each doesn't a new array, so we have to console it inside for each loop

// console.log(newarr)
// console.log(a)

// Filter method
let check = newarr.filter((e)=>{
    if(e>10){
       return e
    }
})
console.log(check)

// Redunce method              - returns a value 
const sum = a.reduce((a,b)=>{
    return a+b
})
console.log(sum)