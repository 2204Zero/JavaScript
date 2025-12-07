// Day - 03 of JS problems 

//     this is related to the createElement() in react library command, but it will give error in the browser


// Selecting
const heading = document.getElementById("title");
const para = document.querySelector(".para");
const fruits = document.querySelectorAll("#fruits li");

console.log(heading.textContent);
console.log(para.textContent);
console.log(fruits[1].textContent); // Mango
 
// const input = document.getElementById("inputBox")
// console.log(input)

// const newFruit = document.createElement("li");
// newFruit.textContent = "Pineapple";
// document.getElementById("fruits").appendChild(newFruit); // add

// const button = document.getElementById("btn")


// Adding interactivity on the page using events 

button.addEventListener("click",(event)=>{
    heading.textContent = "You clicked on the button"
    heading.style.color = "Crimson"
    console.log(event.type);
    console.log(event.target); 
})


const input = document.getElementById("inputBox");
const output = document.getElementById("output");

input.addEventListener("input", () => {
  output.textContent = input.value;
});

const text = document.getElementById("text");
text.addEventListener("click", () => {
  text.classList.toggle("highlight");
});



const newFruit = document.createElement("li");
newFruit.textContent = "Pineapple";
document.getElementById("fruits").appendChild(newFruit); // add

const button = document.getElementById("btn")
// ***** End of the Day 03 *****