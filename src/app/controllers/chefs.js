const chef = require("../models/chef")

exports.index = function (req, res){

    chef.all( (chefs) => {
        res.render("admin/chefs-index", {cards:chefs})
    })  

}

exports.show = function (req, res) {

    
    chef.find(req.params.index, (chefs)=>{
        if(!chefs) res.send `não encontrado`
        
        chef.countRecipe(req.params.index, (count) => {
            
            chef.findRecipe(req.params.index, (recipes) => {

                if(!chefs) res.send `não encontrado`
                if(!recipes) res.send `não encontrado`

                return res.render("admin/chef-show", { chef: chefs, recipe: count,  recipes })
            })
        })
        

    })

}

exports.create = function (req,res) {
    res.render("admin/chef-create")
}

exports.edit = function(req, res){
    chef.find(req.params.index, (chef)=>{
        if (!chef) return res.send("chefe não encontrado")

        return res.render("admin/chef-edit", { chef })
    })


}

exports.post = function(req,res){

    const keys = Object.keys(req.body)

    for(let key of keys ){
        if (req.body[key] == "") return res.send("[ERRO] Preencha todos os campos")
    }

    chef.create(req.body, (chef) => {
        return res.redirect(`/admin/chefs`)
    })
    
}

exports.put = function(req,res){
    const keys = Object.keys(req.body)

    for(let key of keys ){
        if (req.body[key] == "") return res.send(req.body)
    }

    chef.update(req.body, () => {
        return res.redirect(`/admin/chefs`)
    })

}

exports.delete = function(req,res){

    chef.delete(req.body.id, () => {
        return res.redirect(`/admin/chefs`)
    })

}


