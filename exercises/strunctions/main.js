// var phrase = "What ever you want"

// var phrase2 = "it to be."

// var fullP = phrase.concat(phrase2)

// function halfUp(str){
//     var lastHalf = str.splice(0, (Math.floor(str.length / 2))).toLocaleUpperCase()
//     return lastHalf
// }

// halfUp("what ever you want it to be")

// console.log(halfUp)

// var meh = fullP.slice(fullP.lastIndexOf("u")).toLowerCase()
// console.log(meh)
// var eh = fullP.split("")
// console.log(eh)

function letsDoThis(str, str2){
   if(str.length < 15){
        var together = str.concat(str2).toUpperCase()
        console.log(together)
        return together
   } else {
       var backwards = str.split("").reverse().join().slice(4, 15)
       console.log(backwards)
       return backwards
   }
}
letsDoThis("waht! ", "it was not long enough")

