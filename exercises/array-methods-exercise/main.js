var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
console.log(fruit)
console.log(vegetables)

var removeLast = vegetables.pop()
console.log(vegetables)

var removeFirst = fruit.shift()
console.log(fruit)

var makeTheNumber = fruit.indexOf("orange")
console.log(makeTheNumber)

var putInTheNumber = fruit.push(makeTheNumber)
console.log(fruit)

var findThatLength = vegetables.length
console.log(findThatLength)

var putVeggyNumberIn = vegetables.unshift(findThatLength)
console.log(vegetables)

var food = fruit.concat(vegetables)
console.log(food)

var theyGetCut = food.splice(3, 2)
console.log(theyGetCut)

var reversed = food.reverse()
console.log(reversed)

var strung = reversed.join()
console.log(strung)