const modalOverlay = document.querySelector(".modal-overlay")

const recipes = document.querySelectorAll(".card")
const buttonShow = document.querySelectorAll(".details-title a")

for ( let recipe of recipes){
    
    recipe.addEventListener("click", function(){
         
        const id = recipe.getAttribute("id")

        window.location.href = `/recipes/${id}`

    })
}

buttonShow[0].addEventListener("click", function(){

    const show = document.querySelectorAll(".recipe-list")[0]

    show.classList.toggle("hide")

    if (show.classList.contains("hide")){

        buttonShow[0].innerHTML = "Mostrar"
    } else{
    buttonShow[0].innerHTML = "Esconder"
    }

})
buttonShow[1].addEventListener("click", function(){

    const show = document.querySelectorAll(".recipe-list")[1]

    show.classList.toggle("hide")

    if (show.classList.contains("hide")){

        buttonShow[1].innerHTML = "Mostrar"
    } else{
    buttonShow[1].innerHTML = "Esconder"
    }

})

buttonShow[2].addEventListener("click", function(){

    const show = document.querySelector(".recipe-info")

    show.classList.toggle("hide")

    if (show.classList.contains("hide")){

        buttonShow[2].innerHTML = "Mostrar"
    } else{
    buttonShow[2].innerHTML = "Esconder"
    }

})