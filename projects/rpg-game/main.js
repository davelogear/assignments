const readline = require("readline-sync")

///////////////
//global variables

let endGame = false
const player = {
    name: "",
    health: 100,
    attack: 5,
    invitory: [],
}

walkChoice = ["walk", "stats"]

const oldTurnedUndead = {
    name: "Old man/woman turned Zombie",
    health: 10,
    attack: 1,
}

const mediumAgeUndead = {
    name: "Medium age man/woman turned Zombe",
    health: 25,
    attack: 5,
}

const soldierUndead = {
    name: "Undead sildier",
    health: 50, 
    attack: 10,
}

////////////////
//functions
function walk(){
    const option = readline.keyInSelect(walkChoice, "whould you like to walk or cheack your stats? ")
    if(option === 0){
       const randomize = Math.floor(Math.random() * 3) 
       if(randomize === 0){
           enemy()
       }else if(randomize === 1){
            loot()
       }else if(randomize === 2){
            clearPath()
       }
    } else if(option === 1){
        console.log(player)
    } else {
        console.log("please select 1 or 2 to continue with the game.")
    }
} 

function enemy(){
    const randomize = Math.floor(Math.random() * 3)
    if(randomize === 0){
        
    }else if(randomize === 1){
        console.log("say what")
    }else{
        console.log("no")
    }
}

function loot(){
    const randomize = Math.floor(Math.random() * 3)
    if(randomize === 0){
        console.log("yah")
    }else if(randomize === 1){
        console.log("say what")
    }else{
        console.log("no")
    }
}

function clearPath(){
    console.log("The path is clear. so now what?")
}
    


///////////////
//welcome text
player.name = readline.question("Hello! Who do I have the pleaser of playing with today? ")
console.log(`
Welcome ${player.name} to The Servival!

Well ${player.name} it has happend. The Zombie have over riden the world.`)




while(!endGame){
    walk()

}
