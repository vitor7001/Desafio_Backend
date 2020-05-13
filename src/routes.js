const express = require('express')
const routes = express.Router()

const ContatoController = require('./controllers/ContatoController')

routes.get('/contatos', ContatoController.index)

module.exports  = routes
