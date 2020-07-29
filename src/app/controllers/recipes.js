const recipe = require("../models/recipe")

exports.index = function (req, res){
    
    recipe.all( (recipes) => {
        res.render("admin/index", {cards:recipes})
    })  

}

exports.show = function (req, res) {

    recipe.find(req.params.index, (recipes)=>{
        if (!recipes) return res.send("instructor não encontrado")

        recipe.nameChef(recipes.chef_id, (chef) => {

            return res.render("admin/show", { recipe: recipes, chef })

        })

    })
}

exports.create = function (req,res) {

    recipe.chefOption( (options) => {
        res.render("admin/create", { options})

    })

}

exports.edit = function(req, res){
    recipe.find(req.params.index, (recipes)=>{
        if (!recipes) return res.send("instructor não encontrado")

        recipe.chefOption( (options) => {
            return res.render("admin/edit", { options, recipe: recipes })
    
        })

    })


}

exports.post = function(req,res){

    const keys = Object.keys(req.body)


    for (let i = 0; i < 5; i++ ){
        if (req.body[keys[i]] == "") return res.send("[ERRO] Preencha todos os campos")
    }


    recipe.create(req.body, (recipe) => {
        return res.redirect(`/recipes/${recipe.id}`)
    })
    
}

exports.put = function(req,res){
    const keys = Object.keys(req.body)

    for (let i = 0; i < 5; i++ ){
        if (req.body[keys[i]] == "") return res.send("[ERRO] Preencha todos os campos")
    }

    recipe.update(req.body, () => {
        return res.redirect(`/admin/recipes`)
    })

}

exports.delete = function(req,res){

    recipe.delete(req.body.id, () => {
        return res.redirect(`/admin/recipes`)
    })

}


