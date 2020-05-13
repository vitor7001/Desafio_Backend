const express = require('express')
const routes = express.Router()

//trazendo o objeto que contem os métodos do CRUD
const ContatoController = require('./controllers/ContatoController')

//ROTAS PARA SEREM ACESSADOS OS METODOS DE CONTATO CONTROLLER 
routes.get('/contatos', ContatoController.index)

routes.post('/contatos', ContatoController.create)

routes.put('/contatos/:id', ContatoController.update)

routes.delete('/contatos/:id', ContatoController.delete)

//exportando as rotas para serem utilizadas no projeto
module.exports  = routes
