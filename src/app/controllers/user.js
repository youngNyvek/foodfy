const recipe = require("../models/recipe")
const chef = require("../models/chef")

exports.chefs = function (req, res) {

    chef.all( (chefs) => {
        res.render("user/chefs", {cards:chefs})
    })  
},

exports.index = function(req, res){
    const { filter } = req.query

    if (filter){
        recipe.findBy( filter, (recipes) => {

                res.render("user/filtered", {cards:recipes, filter})
        })  

    } else{
        
        recipe.all( (recipes) => {
            res.render("user/index", {cards:recipes})
        })  

    }
    
}
exports.about = function(req, res){
    
    res.render("user/about")
}
exports.recipes = function(req, res){
    recipe.all( (recipes) => {
        res.render("user/recipes", {cards:recipes})
    })  

}
exports.recipe = function (req, res) {


    recipe.find(req.params.index, (recipes)=>{
        if (!recipes) return res.send("instructor não encontrado")

        recipe.nameChef(recipes.chef_id, (chef) => {

            return res.render("user/details", { recipe: recipes, chef })

        })

    })

}

