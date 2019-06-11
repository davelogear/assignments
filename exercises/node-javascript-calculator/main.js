const readline = require("readline-sync")

const num1 = readline.question("Input your fist number:")
const num2 = readline.question("Input your second number:")
const director = readline.question("Would you like to add, subtract, multiply, or devide?")
if(director === "add"){
    console.log(`The sum of ${num1} and ${num2} is ${Number(num1) + Number(num2)}`)
}else if(director === "subtract"){
    console.log(`The sum of ${num1} and ${num2} is ${Number(num1) - Number(num2)}`)
}else if(director === "multiply"){
    console.log(`The sum of ${num1} and ${num2} is ${Number(num1) * Number(num2)}`)
}else if(director === "devide"){
    console.log(`The dividend of ${num1} and ${num2} is ${Number(num1) / Number(num2)}`)
}
