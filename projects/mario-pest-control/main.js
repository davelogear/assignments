var cost = document.cost

cost.addEventListener("submit", function(event){
    event.preventDefault()
    var goombas = cost.goombas.value
    
    var bobOmb = cost.bobOmb.value
    
    var cheepCheep = cost.cheepCheep.value
    
    var goombasCalculate = Number(goombas) * 5
    
    var bobOmbCalculate = Number(bobOmb) * 7
    
    var cheepCheepCalculate = Number(cheepCheep) * 11

    var totalSum = document.createElement("h3")
    totalSum.textContent = goombasCalculate + bobOmbCalculate + cheepCheepCalculate
    console.log(totalSum)
    document.getElementById("total").appendChild(totalSum)
    cost.goombas.value = ""
    cost.bobOmb.value = ""
    cost.cheepCheep.value = ""
})    