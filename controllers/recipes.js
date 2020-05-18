const data = require("../data.json")
const recipes = require("../data")
const fs = require("fs")

exports.index = function (req, res){


    res.render("admin/index", {cards: data.recipes})

}

exports.show = function (req, res) {

    const recipeIndex = req.params.index;
  
    res.render("admin/show", { recipe: data.recipes[recipeIndex]} );
}

exports.create = function (req,res) {
    res.render("admin/create")
}

exports.edit = function(req, res){
    const id = req.params.index

    const foundRecipe = data.recipes.find(function(recipe){
        if (recipe.id == id) return true
    })

    return res.render("admin/edit", {recipe: foundRecipe})


}

exports.post = function(req,res){

    const keys = Object.keys(req.body)

    for(let key of keys ){
        if (req.body[key] == "") return res.send("[ERRO] Preencha todos os campos")
    }

    const id = data.recipes.length 

    data.recipes.push({
        id: id,
        ...req.body
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Erro na escrita do arquivo")

        return res.redirect("/admin/recipes")
    })
    
}

exports.put = function(req,res){
    const id = req.body.id
    const index = 0

    const foundRecipe = data.recipes.find(function(recipe, foundIndex){
        if (recipe.id == id) {
            index = foundIndex
            return true
        }
    })

    data.recipes[index] = req.body

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Erro na escrita do arquivo")

        return res.redirect(`/admin/recipes/${id}`)
    })
}

exports.delete = function(req,res){
    const id = req.body.id

    const filteredRecipes = data.recipes.filter(function(recipe){
        return recipe.id != id
    })

    data.recipes = filteredRecipes

    fs.writeFile("data.json", JSON.stringify(data, null,2), function(err){
        if (err) return res.send("erro na escrita do arquivo")
        return res.redirect("/admin/recipes")
    })
}