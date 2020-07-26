const express = require("express")
const routes = express.Router()
const user = require("./app/controllers/user")
const recipes = require("./app/controllers/recipes")
const chefs = require("./app/controllers/chefs")



routes.get("/", user.index)
routes.get("/about", user.about)
routes.get("/recipes", user.recipes)
routes.get("/recipes/:index", user.recipe)


routes.get("/admin/recipes", recipes.index)
routes.get("/admin/recipes/create", recipes.create)
routes.get("/admin/recipes/:index", recipes.show)
routes.get("/admin/recipes/:index/edit", recipes.edit)


routes.get("/admin/chefs", chefs.index)
routes.get("/admin/chefs/create", chefs.create)
routes.get("/admin/chefs/:index", chefs.show)
routes.get("/admin/chefs/:index/edit", chefs.edit)



routes.post("/admin/chefs", chefs.post)
routes.put("/admin/chefs", chefs.put)
routes.delete("/admin/chefs", chefs.delete)


routes.post("/admin/recipes", recipes.post)
routes.put("/admin/recipes", recipes.put)
routes.delete("/admin/recipes", recipes.delete)


module.exports = routes