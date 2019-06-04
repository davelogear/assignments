let shopper = {
    name : "Janet",
    age : 45,
    female : true,
    phrase : function(){
        return (this.name + " is a " + this.age + "yr old femail. Shopping at Walmart.")
    },
    shoppingCart: ["bananas", "watermelons", "ceral"]
}
console.log(shopper.phrase())