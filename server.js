const express = require("express")
const nunjucks = require("nunjucks")

const server =  express()

const recipes = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true

})

server.get("/", function(req, res){

    res.render("index", {cards: recipes})
})

server.get("/about", function(req, res){
    
    res.render("about")
})

server.get("/recipes", function(req, res){

    res.render("recipes", {cards: recipes})
})

server.get("/recipes/:index", function (req, res) {

    const recipeIndex = req.params.index;
  
    res.render("details", { recipe: recipes[recipeIndex]} );
  })

server.listen(5000, function(){
    console.log("server is running")
})