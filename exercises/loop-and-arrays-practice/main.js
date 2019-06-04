var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var computerCount = 0

for(var i = 0;  i < officeItems.length; i++){
    if(officeItems[i] === "computer"){
        computerCount ++
    }    
}

console.log(computerCount)

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
  var gen;
  for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
      if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
          gen = "she"
        } else {
          gen = "he"
      }
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age > 17){
          console.log("old enough")
        } else {
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is not old enough to see Mad Max" + " " + gen + " " + "won't be able to see the movie.")
      }     
  }

  var isLightOn = [
    [7, 4, 293, 6, 77],
    [1, 2, 2, 3, 7],
    [8, 3, 6, 1],
  ]
  for(var i = 0;i < isLightOn.length; i++){
    var adder = 0
    for(var a = 0; a < isLightOn[i].length; a++){
      adder +=isLightOn[i][a]
    }
    if(adder % 2 === 0){
      console.log("light is off")
    } else {
      console.log("light in on")
    }
  }





