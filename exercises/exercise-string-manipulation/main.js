const readline = require("readline-sync")

const input1 = readline.question("Input your word here:")
console.log(input1.toUpperCase())

const input2 = readline.question("If by any chance you want to know how many letters there are in you input put it here:")
console.log(input2.length)

const input3 = readline.question("Try inputing somthing in here that has more then twenty letters:")
if(input3.lenght > 20){
console.log(input3.slice(Math.floor(input3.length / 2)))
}

const input4 = readline.question("here you can coose were the pevious input will split by inputting a number were it will start the split acording to the length:")
console.log(input3.slice(input4))