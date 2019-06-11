const readline = require("readline-sync")

const name = readline.question("What is your name?")
console.log("Welcome " + name + "!")
console.log("So " + name + " ypu find yourself in a locked room.")

let gameOver = false
let options = ["put hand in hole", "shearch for a key", "open the door", "give up"]
let found = false
let open = false
while(!gameOver){
    const choices = readline.keyInSelect(options, "what do you want to do?")

    if(choices === 0){
        console.log("There was a poisonous snake in the hole that bites you!")
        console.log("Rithing in pain, you slip from this world.")
        gameOver = true
    }else if(choices === 1){
        console.log("You found a key!")
        found = true
    }else if(choices === 2){
        if(found === true){
            console.log("The key works to unlock the door and you are able to leave the room.")
            open = true
            gameOver = true
        }else{
            console.log("The door is locked!")
        }
    }else if(choices === 3){
        console.log("You know when you are defeted and you settle back and exept death.")
        gameOver = true
    }
}