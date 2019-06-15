const xhr = new XMLHttpRequest()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr. status === 200){
        const pokArr = JSON.parse(xhr.responseText)
        

        desplayInfo(pokArr)
    }
}

xhr.open("Get", "https://api.vschool.io/pokemon")

xhr.send()



function desplayInfo(arr){
    for(let i = 0; i < arr.objects[0].pokemon.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = arr.objects[0].pokemon[i].name
        document.body.appendChild(h1)
    }
}