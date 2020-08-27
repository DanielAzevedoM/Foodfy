const express = require('express')

const nunjucks = require('nunjucks')

const data = require('./data.js')

const server = express();

server.use(express(express.json()))
server.use(express.static('public'))
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true,
})


server.get('/', (req, res) =>{
    return res.render("home", { items: data})
})

server.get('/about', (req, res) =>{
    return res.render("about")
})

server.get('/recipes', (req, res) =>{
    return res.render("recipes", {items: data})
})

server.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index;
    const recipes = data[recipeIndex]; // Array de receitas carregadas do data.js
   
    if(!recipes){
        return res.status(404).render("not-found")
    }

    return res.render("ingredients", { item: recipes})
  })

server.use(function(req, res) {
    res.status(404).render("not-found");
});


server.listen(3000, function(){
    console.log("Servidor Iniciado!")
})