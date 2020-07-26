const recipe = require("../models/recipe")

exports.index = function(req, res){

    recipe.all( (recipes) => {
        res.render("user/index", {cards:recipes})
    })  
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

    recipe.find(req.params.index, (recipe)=>{
        if (!recipe) return res.send("instructor não encontrado")

        return res.render("user/details", { recipe })
    });
}

