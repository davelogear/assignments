const readline = require("readline-sync")

///////////////
//global variables

let endGame = false
const player = {
    name: "",
    health: 100,
    attack: function(){
        return Math.floor(Math.random() * 6)
    },
    invitory: [],
}

walkChoice = ["walk", "stats"]

// const oldTurnedUndead = {
//     name: "Old man/woman turned Zombie",
//     health: 10,
//     attack: 1,
// }

// const mediumAgeUndead = {
//     name: "Medium age man/woman turned Zombe",
//     health: 25,
//     attack: 5,
// }

// const soldierUndead = {
//     name: "Undead sildier",
//     health: 50, 
//     attack: 10,
//}

// const zombie = []

////////////////
//functions
function walk(){
    const option = readline.keyInSelect(walkChoice, "whould you like to walk or cheack your stats? ")
//     if(player.health <= 0){
//         console.log(`That attack really hurt! your head starts to spin and you vison narrows.
//  You fall to your knees. the zombie takes this opurtunity to finish you off!`)
//        endGame = true
//    }
     if(option === 0){
       const randomize = Math.floor(Math.random() * 3) 
        if(randomize === 0){
           const currentEnemy = enemyMaker()
           console.log(`While walking you have stumbled into a ${currentEnemy.name}!`)
           battleUp(currentEnemy)
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
function Enemy(name, health, attack){
    this.name = name
    this.health = health
    this.attack = attack
}
function enemyMaker(){
    const randomize = Math.floor(Math.random() * 3)
    if(randomize === 0){
        return new Enemy("Febal zombie", 10, Math.floor(Math.random() * 3))
    }else if(randomize === 1){
        return new Enemy("Zombie", 25, Math.floor(Math.random() * 6))
    }else{
        return new Enemy("Soldier zombie", 50, Math.floor(Math.random() * 11))
    }
}

function battleUp(enemy){
    while(enemy.health > 0){
        if(player.health <= 0){
           console.log(`That attack really hurt! your head starts to spin and you vison narrows.
You fall to your knees. the ${enemy.name} takes this opurtunity to finish you off!`) 
        return endGame = true}   
        console.log(`The ${enemy.name} health is  health: ${enemy.health}`)
        console.log(`your health is health: ${player.health}`)
        const doYouFight = readline.keyInSelect(["fight", "run"], "Do You wish to fight it or run away?")
        
        if(doYouFight === 0){
            const playerAttack = player.attack()
            enemy.health -= playerAttack
            player.health -= enemy.attack
        }else if(doYouFight === 1){
            const runAway = Math.floor(Math.random() * 2)
            if(runAway === 0){
                console.log(`you were able to slip away from the ${enemy.name}`)
                return
            }else{
                player.health -= enemy.attack
                console.log(`You turn to run but the ${enemy.name} atacked and you took ${enemy.attack}`)
            }
        }
    }
}

function loot(){
    const randomize = Math.floor(Math.random() * 3)
    if(randomize === 0){
        console.log(`In the middle of a alley you find dollar... 
You are gready so you pocket it!`)
        player.invitory.push("dollar")
    }else if(randomize === 1){
        console.log(`In the street you find a bandage... 
Who cares if it was in the street it is clean enough for you!`)
        player.invitory.push("bandage")
    }else{
        console.log(`You find a newspaper that says
"THE ZOMBIE APOCOLIPSE HAS HAPPENED!!!"...
Who knew!`)
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



//////////////
// game play
while(!endGame){
    walk()
}
