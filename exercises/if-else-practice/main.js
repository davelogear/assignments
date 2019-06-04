// if (5>3){

// }
//var pet = "cat"
// if (pet.length === 3){

// }
var isACat="dog"
if( isACat=== "cat") {
    console.log("is the same")
} else {
    console.log("not the same")
}

var person = {
    name: "Bobby",
    age: 12
}

if(person.age > 17) {
    console.log("Come on in")
} else {
    console.log("Just leave")
}

if(person.name.length[0] = "B") {
    console.log("Come on in")
} else {
    console.log("Just leave")
}

if(person.name.length[0] = "B" && person.age > 17){
    console.log("Come on in")
} else {
    console.log("Just leave")
}

var number = "1"

if(number === 1){
    console.log("strict")
} else if(number === "1") {
    console.log("loose")
} else {
    console.log("Not equal at all")
}

if(1 <= 2 && 2 == 4){
    console.log("Yes")
} else {
    console.log("No")
}

var ifString = "somthing"

if(typeof ifString === "string"){
    console.log("Is a String")
} else {
    console.log("Somthing other then a string")
}

var ifNum = false

if(typeof ifNum === "boolean"){
    console.log("is Boolean")
} else {
    console.log("not a Boolean")
}

var myVar;

if(typeof myVar === "undefined"){
    console.log("Undefined")
} else {
    console.log("Is defined")
}

if("s" > 12){
    console.log("this isn't meant to work")
} else {
    console.log("it came though false")
}

var myNum = 20

if(myNum % 2 === 0){
    console.log("is even")
} else {
    console.log("is odd")
}