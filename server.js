const express = require('express')

const nunjucks = require('nunjucks')

const cards = require('./data.js')

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
  
    return res.render("home", { items: cards})
})


server.listen(3000, function(){
    console.log("Servidor Iniciado!")
})