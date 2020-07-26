const modalOverlay = document.querySelector(".modal-overlay")

const recipes = document.querySelectorAll(".card")
const recipesAdm = document.querySelectorAll(".card-adm")
const buttonShow = document.querySelectorAll(".details-title a")




for ( let recipe of recipes){
    
    recipe.addEventListener("click", function(){
         
        const id = recipe.getAttribute("id")

        window.location.href = `/recipes/${id}`

    })
}
for ( let recipes of recipesAdm){
    
    recipes.addEventListener("click", function(){
         
        const id = recipes.getAttribute("id")

        window.location.href = `recipes/${id}`

    })
}

function addIngredient(){
    const ingredients = document.querySelector(".recipe-ingredients")
    const fieldContainer = document.querySelectorAll(".ingredient")
    const index = fieldContainer.length -1
    const newField = fieldContainer[index].cloneNode(true)

    if (newField.children[0].value == "") return false

    newField.children[0].value = ""
    ingredients.appendChild(newField)
  
}

function addStep(){
    const steps = document.querySelector(".recipe-preparation")
    const fieldContainer = document.querySelectorAll(".preparation")
    const index = fieldContainer.length -1
    const newField = fieldContainer[index].cloneNode(true)

    if (newField.children[0].value == "") return false

    newField.children[0].value = ""
    steps.appendChild(newField)
  
}

function del(){
    const edit = document.querySelector("#edit")

    edit.querySelector("form").action = "/admin/recipes?_method=DELETE"
}

function del2(){
    const edit = document.querySelector("#edit")

    edit.querySelector("form").action = "/admin/chefs?_method=DELETE"
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