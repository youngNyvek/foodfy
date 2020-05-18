const data = require("../data.json")
const recipes = data.recipes


exports.index = function(req, res){

    res.render("user/index", {cards: recipes})
}
exports.about = function(req, res){
    
    res.render("user/about")
}
exports.recipes = function(req, res){

    res.render("user/recipes", {cards: recipes})
}
exports.recipe = function (req, res) {

    const recipeIndex = req.params.index;
  
    res.render("user/details", { recipe: recipes[recipeIndex]} );
}

