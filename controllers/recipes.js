const recipes = require("../data")

exports.index = function (req, res){


    res.render("admin/index", {cards: recipes})

}

exports.show = function (req, res) {

    const recipeIndex = req.params.index;
  
    res.render("admin/show", { recipe: recipes[recipeIndex]} );
}

exports.create = function (req,res) {
    res.render("admin/create")
}

exports.post = function(req,res){

    return res.send(req.body)
}