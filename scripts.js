const modalOverlay = document.querySelector(".modal-overlay")

const recipes = document.querySelectorAll(".card")


const closeModal = document.querySelector(".close-modal a")
for ( let recipe of recipes){
    
    recipe.addEventListener("click", function(){

        const recipeImage = recipe.getElementsByTagName("img")[0].src
        const recipeName = recipe.getElementsByTagName("H3")[0].innerHTML
        const recipeAutor = recipe.getElementsByTagName("p")[0].innerHTML


        modalOverlay.getElementsByTagName("img")[0].src = `${recipeImage}`
        modalOverlay.getElementsByTagName("H3")[0].innerHTML = `${recipeName}`
        modalOverlay.getElementsByTagName("p")[0].innerHTML = `${recipeAutor}`
        

        modalOverlay.classList.add("active")

    })

}

closeModal.addEventListener("click", function(){
    modalOverlay.classList.remove("active")

})
modalOverlay.addEventListener("click", function(){
    modalOverlay.classList.remove("active")

})