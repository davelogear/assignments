function numSum(myNum1, myNum2){
    return myNum1 + myNum2
}
numSum(8 ,9)

function greatNum(myNum1, myNum2, myNum3){
    if (myNum1 > myNum2 && myNum1 > myNum3){
        return myNum1
    } else if(myNum2 > myNum3 && myNum2 > myNum1){
        return myNum2
    } else {
        return myNum3
    }
}

greatNum(13, 8 ,29)

function isItEven(myNum1){
    if(myNum1 % 2 === 0){
        return "it is even"
    } else {
        return "it is odd"
    }
}

isItEven(7)

function makeItLonger(myString){
    if(myString.length < 20){
        return myString + myString
         } else { 
        return myString.substring(0, (Math.floor(myString.length / 2)))
    }
}
console.log(makeItLonger("abcdefghijklmnopqrstuvwxyz"))

