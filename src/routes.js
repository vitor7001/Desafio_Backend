const express = require('express')
const routes = express.Router()

//trazendo o objeto que contem os métodos do CRUD
const ContatoController = require('./controllers/ContatoController')

//ROTAS PARA SEREM ACESSADOS OS METODOS DE CONTATO CONTROLLER 
routes.get('/contatos', ContatoController.index)

routes.get('/contatos/:id', ContatoController.getById)

routes.post('/contatos', (req,res,next) =>{

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        console.log('Erro no nome')
        const error = new Error('Propriedade Nome inválido e/ou não preenchido')
        error.status = 400
        next(error)
    }else{
        ContatoController.create(req,res,next)
    }
})

routes.put('/contatos/:id', ContatoController.update)

routes.delete('/contatos/:id', ContatoController.delete)

//exportando as rotas para serem utilizadas no projeto
module.exports  = routes
