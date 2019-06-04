// prliniarrier #1

// for(var i = 0; i < 10; i++){
//     console.log(i)
// }

//prliniarries #2

// for(var i = 9; i > -1; i--){
//     console.log(i)
// }

// prliniarries #3

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for(var i = 0; i < fruit.length; i++){
//     console.log(fruit[i])
// }

//sliver

// var counter = []
// for(var i = 0; i < 10; i++){
//     counter[i]=i
//    //or
//    // counter.push(i)
// }
// console.log(counter)

// for(var i = 0; i < 101; i+=2){
//     console.log(i)
// }

// for(var i = 0; i < fruit.length; i+=2){
//     console.log(fruit[i])
// }

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
var names = []
for(var i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name)
    names[i] = peopleArray[i].name
}
console.log(names)

var list1 = []
for(var i = 0; i < peopleArray.length; i+=2){

    // list1[i] = peopleArray[i].name
    list1.push(peopleArray[i].name)
}

var list2 =[]
for (var i = 1; i < peopleArray.length; i +=2){
    // list2[i] = peopleArray[i].occupation
    list2.push(peopleArray[i].occupation)

}
console.log(list1)
console.log(list2)

// // gold

var minic = []

for(var i = 0;i < 3; i++){
    var minMinic = []
    for(var a = 0;a < 3; a++){
        //minMinic[a] = 0
        minMinic.push(0)
    }
    minic[i] = minMinic
}
console.log(minic)

var another = []

for(var i = 0; i < 3; i++){
    minAnother = []
    for(var a = 0; a < 3; a++){
        minAnother.push(i)
    }
    another[i] =minAnother 
}
console.log(another)

var mimic = []

for(i = 0; i < 3; i++){
    var minMimic = []
    for(var a = 0; a < 3; a++){
        minMimic.push(a)
    }
    mimic[i] = minMimic
}
console.log(mimic)

var loopy = []

for(var i = 0; i < 3; i++){
    var loopyLoop = []
    for(var a = 0; a < 3; a++){
        loopyLoop.push("x")
    }
    loopy[i] = loopyLoop
}
console.log(loopy)