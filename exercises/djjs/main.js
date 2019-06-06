var myBox = document.getElementById("box")
var newStuff = document.getElementById("new")
myBox.style.height = "500px"
myBox.style.width = "500px"
myBox.style.backgroundColor = "purple" 

myBox.addEventListener("mouseover", function(){
    myBox.style.backgroundColor = "blue"
})

myBox.addEventListener("mouseout", function(){
    myBox.style.backgroundColor = "purple"
})

myBox.addEventListener("mousedown", function(){
    myBox.style.backgroundColor = "red"
})

myBox.addEventListener("mouseup", function(){
    myBox.style.backgroundColor = "yellow"
})

myBox.addEventListener("dblclick", function(){
    myBox.style.backgroundColor = "green"
})

document.addEventListener("wheel", function(){
    myBox.style.backgroundColor = "orange"
})

var scrollWords = document.createElement("p")
 scrollWords.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque et est consequatur quaerat numquam eum cumque ut voluptatibus excepturi, modi odit expedita ipsam optio praesentium autem veritatis voluptatem quasi tempora.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque et est consequatur quaerat numquam eum cumque ut voluptatibus excepturi, modi odit expedita ipsam optio praesentium autem veritatis voluptatem quasi tempora.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque et est consequatur quaerat numquam eum cumque ut voluptatibus excepturi, modi odit expedita ipsam optio praesentium autem veritatis voluptatem quasi tempora.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque et est consequatur quaerat numquam eum cumque ut voluptatibus excepturi, modi odit expedita ipsam optio praesentium autem veritatis voluptatem quasi tempora.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque et est consequatur quaerat numquam eum cumque ut voluptatibus excepturi, modi odit expedita ipsam optio praesentium autem veritatis voluptatem quasi tempora.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque et est consequatur quaerat numquam eum cumque ut voluptatibus excepturi, modi odit expedita ipsam optio praesentium autem veritatis voluptatem quasi tempora.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque et est consequatur quaerat numquam eum cumque ut voluptatibus excepturi, modi odit expedita ipsam optio praesentium autem veritatis voluptatem quasi tempora.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque et est consequatur quaerat numquam eum cumque ut voluptatibus excepturi, modi odit expedita ipsam optio praesentium autem veritatis voluptatem quasi tempora.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque et est consequatur quaerat numquam eum cumque ut voluptatibus excepturi, modi odit expedita ipsam optio praesentium autem veritatis voluptatem quasi tempora.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque et est consequatur quaerat numquam eum cumque ut voluptatibus excepturi, modi odit expedita ipsam optio praesentium autem veritatis voluptatem quasi tempora.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque et est consequatur quaerat numquam eum cumque ut voluptatibus excepturi, modi odit expedita ipsam optio praesentium autem veritatis voluptatem quasi tempora.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque et est consequatur quaerat numquam eum cumque ut voluptatibus excepturi, modi odit expedita ipsam optio praesentium autem veritatis voluptatem quasi tempora.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque et est consequatur quaerat numquam eum cumque ut voluptatibus excepturi, modi odit expedita ipsam optio praesentium autem veritatis voluptatem quasi tempora.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque et est consequatur quaerat numquam eum cumque ut voluptatibus excepturi, modi odit expedita ipsam optio praesentium autem veritatis voluptatem quasi tempora.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque et est consequatur quaerat numquam eum cumque ut voluptatibus excepturi, modi odit expedita ipsam optio praesentium autem veritatis voluptatem quasi tempora.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque et est consequatur quaerat numquam eum cumque ut voluptatibus excepturi, modi odit expedita ipsam optio praesentium autem veritatis voluptatem quasi tempora.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque et est consequatur quaerat numquam eum cumque ut voluptatibus excepturi, modi odit expedita ipsam optio praesentium autem veritatis voluptatem quasi tempora.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque et est consequatur quaerat numquam eum cumque ut voluptatibus excepturi, modi odit expedita ipsam optio praesentium autem veritatis voluptatem quasi tempora.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque et est consequatur quaerat numquam eum cumque ut voluptatibus excepturi, modi odit expedita ipsam optio praesentium autem veritatis voluptatem quasi tempora."
  
 scrollWords.style.color = "White"
 
 newStuff.appendChild(scrollWords)

window.addEventListener("keydown", function(event){
    if (event.which === 82){
        myBox.style.backgroundColor = "red"
    } else if (event.which === 66){
        myBox.style.backgroundColor = "blue"     
    } else if (event.which === 89){
        myBox.style.backgroundColor = "yellow"
    } else if (event.which === 71){
        myBox.style.backgroundColor = "green"
    } else if (event.which === 79){
        myBox.style.backgroundColor = "orange"
    } else {
        myBox.style.backgroundColor = "purple"
    }
})