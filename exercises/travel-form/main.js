var flightForm = document.flightForm

flightForm.addEventListener("submit", function(event){
    event.preventDefault()
    var firstName = flightForm.firstName.value
    // console.log(firstName)
    var lastName = flightForm.lastName.value
    var age = flightForm.age.value
    var gender = flightForm.age.value
    var destination = flightForm.destination.value
    var checkArr = flightForm.diet
    var checkedRestrictions = []
    for(var i = 0; i < checkArr.length; i++){
        if(checkArr[i].checked){
            checkedRestrictions.push(checkArr[i].value)
        }
    }
    alert( 
    `"Fist Name:" ${firstName} 
     "Last Name:" ${lastName} 
     "Age:" ${age}
     "Gender:" ${gender}
     "Destination:" ${destination}
     "diet:" ${checkedRestrictions}`)
    // var vegan = flightFrom.veganInput.checked
    // var lactose = flightFrom.lactoseInput.checked
    // var gluten = flightFrom.glutenInput.checked
    

  
    // alert(gender)
    // alert(destination)
    // alert(vegan)
    // alert(lactose)
    // alert(gluten)
})