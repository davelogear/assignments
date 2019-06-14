const doubleIt = [2, 4, 9, 7]

// function double(doubleIt)

function double(arr){
    return arr.map(item => item * 2)
}


console.log(double(doubleIt))

function stringing(arr){
    return arr.map(item => item.toString())
}

console.log(stringing(doubleIt))

const arrNames = ["jess", "jImy", "JilL", "mitch"]

function canpitalize(arr){
    return arr.map(item => item.substr(0,1).toUpperCase() + item.substr(1).toLowerCase())
}

console.log(canpitalize(arrNames))

const namesOnly = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

function names(arr){
    return arr.map(item => item.name)
} 

console.log(names(namesOnly))

function age(arr){
    return arr.map(item => { 
        if(item.age > 18){
            return item.name + " can go to the Matrix"
        }else{
            return item.name + " is under age!"
        }
    }) 
}

console.log(age(namesOnly))

function toHTML(arr){
    return arr.map(item => `<h1>${item.name}</h1><h2>${item.age}</h2>`)
}

console.log(toHTML(namesOnly))