const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.set("view engine", "html")

nunjucks.configure("views", {
  express:server
})

server.use(express.static('public'))

server.get('/', function(req, res) {
  return res.render("index")
})

server.get('/about', function(req, res) {
  return res.render("index")
})


server.listen(3000, function(){
  console.log('server is running')
})
