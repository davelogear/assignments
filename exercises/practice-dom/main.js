// how to add elements in js.

// The two objects provided when we link an HTML page to a JS page
    // console.dir(document)
    // console.dir(window)

// Selecting HTML elements in JS
var divArr = document.getElementsByTagName("div")

// var firstDiv = document.getElementById("my-div")

var classDivs = document.getElementsByClassName("my-other-div")

// Query Selectors
var divsArr = document.querySelectorAll(".my-other-div")
// var div = document.querySelector("#my-div")

//1st step-creating a h2 element and nameing it var h2
var h2 = document.createElement("h2")

//2nd step-editing the element 
h2.testcontent = "A whole new line"
h2.style.color = "blue"
h2.style.backgroundColor = "red"
h2.style.fontFamily ="sans serif"

//3rd step-displaying the new element in html

 // 1: Create the element
 var myImg = document.createElement("img")
    
 // 2: Edit the element
 myImg.src = "https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
 myImg.style.width = "400px"

 // 3: Put it on the DOM
 firstDiv.appendChild(myImg)




 // 1: 
     var pTag = document.createElement("p")

 // 2:
     pTag.textContent = "Harry Potter"
     pTag.classList.add("ptag-class")
     pTag.classList.remove("ptag-class")
     pTag.classList.toggle("ptag-class")

 // 3:
     firstDiv.insertBefore(pTag, h1)