var phrase = "This is a STRING"
var toLower = console.log(phrase.toLocaleLowerCase())

var toupper = console.log(phrase.toLocaleUpperCase())

var cut = console.log(Math.floor(phrase.length / 2))

var pastCut = console.log(phrase.slice(0,(Math.floor(phrase.length / 2))))

var fPast = phrase.slice(0,(Math.floor(phrase.length / 2))).toLocaleUpperCase()


var lPast = phrase.substr(Math.floor(phrase.length / 2)).toLocaleLowerCase()

var theWholeThing = fPast + lPast

console.log(theWholeThing)