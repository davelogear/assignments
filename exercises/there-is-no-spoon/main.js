var desk = {
    color: "white", 
    number: 6,
    allInUse: true,
    howMany: function(){
        return this.number
    } 
}


var monitors = {
    color: "black",
    number: 20,
    allInUse: false,
    look: function(){
        return this.color
    }
} 

var laptops = {
    color: "Gray",
    number: 16,
    allInUse: true,
    inUse: function(){
        return this.number
    }
}

var students = {
    allHaveHair: true,
    number: 15,
    numberThatAreFemale: 5,
    doTheyNeedHairProduts: function(){
        return this.number
    }
}

var walls = {
    numberThatAreSheetrocked: 3,
    color:  ["white", "red"],
    hight: "12ft",
    howManyAreNotBrick: function(){
        return this.howManyAreNotBrick
    }
}

var lights = {
    number: 6,
    color: "white",
    length: "6ft",
    width: "4ft",
    howMany: function(){
        return this.number
    }
}

var chairs = {
    color: ["light gray", "black", "dark gray"],
    number: 21,
    numberInUse: 18,
    look: function(){
        return this.color
    }    
}

var projector = {
    color: "white",
    number: 1,
    works: true,
    turnsOn: function(){
        return this.works
    }
}

var teachers = {
    number: 3,
    areMale: false,
    numberWithHair: 2,
    sameGender: function(){
        return this.areMale
    }
} 

var doors = {
    number: 2,
    color: "tan",
    haveGlass: true,
    canSeethough: function(){
        return this.haveGlass
    }
}

