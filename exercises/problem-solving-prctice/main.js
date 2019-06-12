function largest(arr1){
    arr1.sort(function(a,b){return b-a});
    console.log(arr1[0])
}

largest([4, 9, 23, 6, 9 ,13])

let itIs =[]
function isItThere(arr2, char){
    for(let i =0; i < arr2.length; i++){ 
      if(arr2[i].match(char)){
        console.log(arr2[i])  
        itIs.push(arr2[i])
      }
    }
}
console.log(itIs)
isItThere(["dfsvnun", "vkwjbncv", "pojmg", "knjbp"], "p")

function isItdevisable(num1, num2){
    if(num1 % num2 === 0){
        console.log("true")
    }else{
        console.log("false")
    }
}

isItdevisable(15, 4)