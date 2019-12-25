const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express:server,
  autoescape: false,
  noCache: true
})

server.get('/', function(req, res) {  
  
  return res.render("index", { items: recipes })

})

server.get('/about', function(req, res) {
  return res.render("about")
})

server.get('/recipes', function(req, res) {
  return res.render("recipes", { items: recipes })

})

server.get('/recipes/:index', function(req, res) {
  
  const { index: recipeIndex } = req.params

  const recipe = recipes[recipeIndex]

  if (!recipe) return res.send('Recipe not found!')

  return res.render('recipe', { item: recipe })
})


server.listen(3000, function(){
  console.log('server is running')
})
