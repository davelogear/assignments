var arr = []

function inPutString(str){
    for(var i = 0; i < str.length; i++){
        arr.push(str[i])
       
    }
}

 inPutString("wdnsda")
 console.log(arr)

 function checkIt(str, letter){
     if(str.indexOf(letter) !== -1){
     return letter
    } else { return "sorry the letter " + letter + " dose not exsist in " + str}
 }

console.log(checkIt("dnfjfidnj", "z"))
 

function fortytwo(num){
    for(var i = 0; i < num.length; i++){
        if(parseInt(num[i]) === 42){
             return console.log ("found 42!")
        }    
    } console.log("42 was not found.")
}

fortytwo([3, 42, 72, 43, 94])

function minamal(num){
    let minamal = num.sort(function(a, b){return a-b})
    console.log(minamal[0])
}

minamal([5, 9 , 20, 16 , 3, 87, 2])