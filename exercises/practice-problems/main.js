const reverseStr = function(str){
    console.log(str.split("").reverse().join(""))
}

reverseStr("hello world")

const isItANumber = function(numinput){
    if(typeof numinput === "number"){
        console.log("this is a number!")
    }else{
        console.log("this is not a number. Please input a nmumber in its numarical value.")
    }
}

isItANumber(4)

const isItEven = function(numinput2){
    if(numinput2 % 2 === 0){
        console.log("true")
    }else{
        console.log("false")
    }
}

isItEven(4)
let count = 0
const average = function(arr){
    for(let i = 0; i < arr.length; i++){
        count += arr[i]
    }
    const av = count / arr.length
    console.log(av)
}

average([3, 5 ,7])
let arr =[]
const merg = function(newArr1, newArr2){
    if(newArr1.length >= newArr2.length){
        longer = newArr1.length
    }else{
        longer = newArr2.length
    }
    for(var i = 0; i < longer; i++){
        if(newArr1[i]){
            arr.push(newArr1[i])
        }
        if(newArr2[i]){
            arr.push(newArr2[i])
        }  
    }console.log(arr)
    // for(var j = 0; j< newArr2.length; j++){
    //     arr.push(newArr2[j])
    // }
    // console.log(arr)
}

merg(["a", "b", "c", "d", "e", "f",], [1, 2, 3])