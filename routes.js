const express = require("express")
const routes = express.Router()
const user = require("./controllers/user")
const recipes = require("./controllers/recipes")


routes.get("/", user.index)
routes.get("/about", user.about)
routes.get("/recipes", user.recipes)
routes.get("/recipes/:index", user.recipe)


routes.get("/admin/recipes", recipes.index)
routes.get("/admin/recipes/create", recipes.create)
routes.get("/admin/recipes/:index", recipes.show)
routes.get("/admin/recipes/:index/edit", recipes.edit)

routes.post("/admin/recipes", recipes.post)
routes.put("/admin/recipes", recipes.put)
routes.delete("/admin/recipes", recipes.delete)

module.exports = routes