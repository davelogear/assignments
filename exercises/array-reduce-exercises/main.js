function total(arr) {
    // your code here
    return arr.reduce(function(total, num){
        return total + num
    },0)
 }
 
 console.log(total([1,2,3])); // 6

 function stringConcat(arr) {
    // your code here 
    return arr.reduce(function(currentIndex){
        currentIndex + currentIndex
    })
 }
 
 console.log(stringConcat([1,2,3])); // "123"