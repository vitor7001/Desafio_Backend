const express = require('express')
const routes = express.Router()

const ContatoController = require('./controllers/ContatoController')

//ROTAS PARA SEREM ACESSADOS OS METODOS DE CONTATOCONTROLLER 
routes.get('/contatos', ContatoController.index)

routes.post('/contatos', ContatoController.create)

routes.put('/contatos/:id', ContatoController.update)

routes.delete('/contatos/:id', ContatoController.delete)


module.exports  = routes
