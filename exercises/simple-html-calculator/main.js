var addition = document.addition

addition.addEventListener("submit", function(event){
    event.preventDefault()
    var addAnswer = document.createElement("h3")
    addAnswer.textContent = Number(addition.input1.value) + Number(addition.input2.value)
    document.getElementById("adder").appendChild(addAnswer)
    addition.input1.value = ""
    addition.input2.value = ""
})

var sutraction = document.subtraction

sutraction.addEventListener("submit", function(event){
    event.preventDefault()
    var subtractedAnswer = document.createElement("h3")
    // console.log(subtractedAnswer)
    subtractedAnswer.textContent = Number(subtraction.input1.value) - Number(subtraction.input2.value)
    document.getElementById("subtractor").appendChild(subtractedAnswer)
    subtraction.input1.value = ""
    subtraction.input2.value = ""
})

var devision = document.devision

devision.addEventListener("submit", function(event){
    event.preventDefault()
    var devideAnswer = document.createElement("h3")
    devideAnswer.textContent = Number(devision.input1.value) / Number(devision.input2.value)
    document.getElementById("devider").appendChild(devideAnswer)
    devision.input1.value = ""
    devision.input2.value =""
})